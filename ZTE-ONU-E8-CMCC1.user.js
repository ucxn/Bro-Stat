// ==UserScript==
// @name            中兴光猫增强 ZTE-ONT_Stat
// @name:en         ZTE-ONT_Stat
// @namespace       ucxn
// @version         5.9.E
// @description     适用于中兴光猫（E8 / gch 老式界面）的网速与流量增强：外网速率由 PON 口累计字节求导，无线终端逐设备实时速率与积分，LAN口 / Wi-Fi 口流量对比。不知道是否支持电信光猫。
// @description:en  Speed and traffic enhancement for ZTE ONU/ONT gateways (legacy E8/gch UI): WAN speed differentiated from PON byte counters, per-terminal Wi-Fi rate integration, LAN / Wi-Fi port traffic comparison.
// @copyright       哥哥科技. All Rights Reserved. 使用必要条件之一：不得删除源码、用户界面、文本中的任何“哥哥”；传播官方链接不限；除安装自用外任何使用传输均需查看许可证。
// @author          哥哥科技 space.bilibili.com/501430041
// @noframes
// @tag             中兴 光猫 电信 联通 ONU ONT E8 PON 移动 CMCC CU ChinaNet 宽带 网络 监控 统计 数据 可视化 极客 增强 UI 流量 网速 WAN 微积分 导数 测控 算法 Measurement M&C Bro Brotech Bro-Tech Bro-Stat 哥哥科技 ISP 运营商 Carrier
// @icon            https://scriptcat.org/api/v2/resource/image/PD6xhxddlUESIwAV
// @include         /^https?:\/\/10(\.[0-9]{1,3}){3}(:\d+)?\/.*$/
// @include         http://192.168.*.*
// @match           *://zte.home/*
// @include         http://172.16.*
// @include         https://192.168.*.*
// @include         https://172.16.*
// @match           *://*/start.ghtml*
// @exclude         *://*/cgi-bin/luci*
// @grant           GM_setValue
// @grant           GM_getValue
// @grant           unsafeWindow
// @storageName     GBNPA_Storage
// @source          https://github.com/ucxn/Bro-Stat
// @website         https://www.bilibili.com/video/BV19ZpB64E6D
// @supportURL      https://www.bilibili.com/video/BV1LZ6yBXESq
// @copying         哥哥软件-显著署名-哥哥科技-严格 + （完整使用-署名保留-完全 OR (部分摘录-禁止演绎-署名保护-显著-哥哥科技 OR 二次开发-署名保留/保护-显著署名-署名哥哥-署名追加) AND 相同方式共享） 
// @license         LicenseRef-BR-BY-NC-1.0+ OR (SUL-1.0 AND BroTech-Prominent-Attribution-Terms+) OR Adaptive Public License - Bro 0.1（详情参阅 GitHub）
// @run-at          document-end
// @updateURL       https://github.com/ucxn/Bro-Stat/raw/refs/heads/main/ZTE-ONU-E8-CMCC1.user.js
// @downloadURL     https://raw.githubusercontent.com/ucxn/Bro-Stat/refs/heads/main/ZTE-ONU-E8-CMCC1.user.js
// ==/UserScript==

(function () {
  'use strict';
  const _w = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
  if (window.top !== window.self || _w.__BRO_ONT__) return;
  // 光猫的报错页（400 Bad Request / 403 Forbidden）是一次带着过期令牌的表单提交的回应：F5 只会原样重放那次提交，
  // 地址栏回车（GET 重新进入）才能恢复。这里替用户按一次“回车”；15 秒内只做一次，避免真被拒时来回跳
  if (/^(400 Bad Request|403 Forbidden)$/.test(document.title.trim()) && document.body && document.body.innerText.length < 400) {
    let last = 0; try { last = +sessionStorage.getItem('bro-ont-heal') || 0; } catch {}
    if (Date.now() - last > 15000) { try { sessionStorage.setItem('bro-ont-heal', Date.now()); } catch {} location.replace(location.href); return; }
  }
  const isMain = /\/start\.ghtml/i.test(location.pathname); // 全量匹配会进到登录页等其它页面；只有登录后的外壳页才采样

  const VER = (typeof GM_info !== 'undefined' && GM_info.script?.version) || '5.9.9.E';
  console.log(`🚀 哥哥科技 光猫版 V${VER} 已装载...`);

  // ======== [0] 用户极客环境变量配置区 ========
  const CONFIG = {
    refreshInterval: 5,   // 【快组】无线终端速率（拓扑页）的轮询间隔（秒）。终端流量靠速率积分，周期越短越准；光猫性能不比路由器，不建议低于 3
    ponEvery: 3,          // 【外网】PON 计数器每 N 个快周期读一次（默认 3×5s=15s）。外网总量由累计字节求差，周期长短不影响总量，只让速率曲线变粗
    slowEvery: 6,         // 【慢组】LAN口 / Wi-Fi口 / 设备清单每 N 个快周期读一次（默认 6×5s=30s）
    zeroGrace: 3,         // 计数器连续 N 次轮询无增长，才判定速率为 0
    wanMinBytes: 1e8,     // 外网口选择：GEMPORT 累计收发总量达到 100MB 即锁定为外网口，之后不再切换
    ratioExtremeUp: 10,   // 极端上传判定阈值（上行/下行 > 1000%）
    ratioWarnUp: 0.12,    // 重度上传警告阈值（> 12%）
    ratioExtremeDown: 0.01, // 极端下载判定阈值（< 1%）
    calcMode: 1,          // 终端比值条文案：1 上行/下行倍数模式，0 上行占总和比例模式
    ratioThreshold: 7,    // （仅 calcMode=0 时有效）上传占比报警阈值（%）
    errorCooldown: 60,    // 任何一页读取失败（被拒、登录过期、页面不对），本轮立即收手，静候 N 秒后自动重试，不用手动刷新
    autoStart: false      // true：页面加载后自动开始采样；false：首次点开悬浮球才开始
  };

  // ======== [1] 工具 ========
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const gbk = new TextDecoder('gb18030'), u8 = new TextDecoder('utf-8');
  // Transfer_meaning 的值是 \xNN 转义（可能是 UTF-8 多字节），按字节还原
  const unesc = s => s.replace(/(?:\\x[0-9a-fA-F]{2})+/g, m => {
    const b = new Uint8Array(m.length / 4);
    for (let i = 0; i < b.length; i++) b[i] = parseInt(m.substr(i * 4 + 2, 2), 16);
    return u8.decode(b);
  });
  const htmlNum = s => s.indexOf('&#') < 0 ? s : s.replace(/&#(\d+);/g, (_, d) => String.fromCharCode(+d));
  const nM = m => m ? String(m).toLowerCase() : '';
  const fBps = v => v >= 1e6 && v < 1e9 ? (v / 1e6).toFixed(2) + ' Mbps' : v >= 1e3 && v < 1e6 ? (v / 1e3).toFixed(1) + ' Kbps' : !(v >= 1e3) ? Math.round(v) + ' bps' : (v / 1e9).toFixed(2) + ' Gbps';
  const fBy = bytes => {
  const u = ['B', 'KiB', 'MiB', 'GiB', 'TiB']; let i = 0;
    if (bytes >= 1073741824 && bytes < 1099511627776) { bytes /= 1073741824; i = 3; }
    else if (bytes >= 1048576 && bytes < 1073741824) { bytes /= 1048576; i = 2; }
    else while (bytes >= 1024 && i < 4) { bytes /= 1024; i++; }
    return (i ? bytes.toFixed(bytes >= 100 ? 1 : 2) : Math.round(bytes)) + ' ' + u[i];
  };
  const fRate = bits => fBy(bits / 8) + '/s';
  const fVol = bits => fBy(bits / 8); // 内部统一用比特，展示成字节
  function fSV(bits) { //要偷懒或者简洁易读，就完整一点，不要弄个挂MB实则1024又不正确、又高不成低不就的偷一半懒.
    if (bits >= 84607500288) return `${(bits / 8589934592).toPrecision(4)}G`;
    if (bits > 8388608000) return `${Math.round(bits / 8388608)}M`;
    if (bits > 8388608) return `${(bits / 8388608).toPrecision(4)}M`;
    if (bits >= 8192) return `${(bits / 8192).toFixed(1)}K`;
    return `${Math.round(bits / 8)}B`;}
  const fDur = s => { s = +s; if (!isFinite(s) || s < 0) return '--'; const d = s / 86400 | 0, h = s % 86400 / 3600 | 0, m = s % 3600 / 60 | 0; return d ? `${d}天${h}时` : h ? `${h}时${m}分` : `${m}分`; };

  // ======== [2] 取数与解析（光猫页面是 gb2312 的老式表格页） ========
  async function getPage(name) {
    const r = await fetch(`/getpage.gch?pid=1002&nextpage=${name}.gch`, { credentials: 'same-origin', cache: 'no-store' });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const buf = await r.arrayBuffer(), n = performance.now(); // 以响应到达时刻为本页数据的时间
    return { t: gbk.decode(buf), n };
  }
  function meaning(t) {
    const d = {}, re = /Transfer_meaning\('([^']*)','((?:[^'\\]|\\.)*)'\)/g; let m;
    while ((m = re.exec(t))) d[m[1]] = unesc(m[2]);
    return d;
  }
  function kvRows(t) {
    const out = [], re = /<td[^>]*class="tdleft"[^>]*>([\s\S]*?)<\/td>\s*<td[^>]*class="tdright"[^>]*>([\s\S]*?)<\/td>/g; let m;
    while ((m = re.exec(t))) out.push([m[1].replace(/<[^>]*>/g, '').trim(), m[2].replace(/<[^>]*>/g, '').trim()]);
    return out;
  }
  const slashBytes = v => +String(v).split('/')[1];

  function parsePon(t) {
    const ports = []; let cur = null;
    for (const [k, v] of kvRows(t)) {
      if (k === '端口名称') ports.push(cur = { name: v });
      else if (cur) {
        if (k === '接收字节数') cur.rxB = +v; else if (k === '发送字节数') cur.txB = +v;
      }
    }
    const r = ports.filter(p => isFinite(p.rxB) && isFinite(p.txB));
    if (!r.length) throw new Error('PON 页无有效数据（会话过期或固件不同）');
    return r;
  }
  function parseLan(t) {
    const ports = []; let cur = null;
    for (const [k, v] of kvRows(t)) {
      if (k === '端口名称') ports.push(cur = { name: v });
      else if (cur) {
        if (k === '状态') cur.state = v; else if (k === '速率') cur.speed = v;
        else if (k === '收包数/字节数') cur.rxB = slashBytes(v); else if (k === '发包数/字节数') cur.txB = slashBytes(v);
      }
    }
    const d = meaning(t), cnt = +d.IF_INSTNUM || 0, list = [];
    for (let i = 0; i < cnt; i++) {
      if (!d['IPAddr' + i]) continue;
      list.push({ mac: nM(d['MACAddr' + i]), ip: d['IPAddr' + i], name: d['HostName' + i], lease: +d['ExpiredTime' + i], port: d['PhyPortName' + i], type: d['PhyType' + i], rssi: d['Rssi' + i], speed: d['Speed' + i] });
    }
    const lp = ports.filter(p => isFinite(p.rxB) && isFinite(p.txB));
    if (!lp.length && !list.length) throw new Error('LAN 页无有效数据');
    return { ports: lp, list };
  }
  function parseWlan(t) {
    const d = meaning(t), ks = Object.keys(d).map(k => /^WLAN_SSID(\d+)$/.exec(k)).filter(Boolean).map(m => +m[1]).sort((a, b) => a - b);
    const blocks = []; let cur = null;
    for (const [k, v] of kvRows(t)) {
      if (k === '无线网络连接状态') blocks.push(cur = {});
      else if (cur) {
        if (k === '信道') cur.ch = +v; else if (k === '收包数/字节数') cur.rxB = slashBytes(v); else if (k === '发包数/字节数') cur.txB = slashBytes(v);
      }
    }
    const out = blocks.map((b, i) => {
      const k = ks[i] ?? i, ssid = htmlNum(d['ESSID' + k] || '');
      return { ...b, name: `SSID${k + 1}`, ssid, band: (b.ch > 14 || (!b.ch && k >= 4)) ? '5G' : '2.4G' };
    }).filter(b => isFinite(b.rxB) && isFinite(b.txB));
    if (!out.length) throw new Error('Wi-Fi 页无有效数据');
    return out;
  }
  function parseTopo(t) {
    const d = meaning(t), nodes = [], devs = [];
    for (const k in d) {
      let m = /^DeviceName(\w+)$/.exec(k);
      if (m) nodes.push({ sfx: m[1], name: d[k], ip: d['IPAddr' + m[1]], mac: nM(d['MACAddr' + m[1]]), link: d['LinkSpeed' + m[1]], ver: d['SoftwareVer' + m[1]], role: d['INST_' + m[1]] });
      m = /^HostName(.+AD)$/.exec(k);
      if (m) {
        const s = m[1];
        devs.push({
          mac: nM(d['MACAddr' + s]), name: d[k], ip: d['IPAddr' + s], owner: s.replace(/\d+AD$/, ''),
          access: d['AccessType' + s], assoc: +d['AssocTime' + s], rssi: d['Rssi' + s], mode: d['WirelessMode' + s],
          // 页面源码：“上行速率”列取 RxRateBps（AP 接收＝终端上传），“下行速率”列取 TxRateBps，单位按页面口径（÷1e6=Mbps）即比特/秒
          up: +d['RxRateBps' + s] || 0, dn: +d['TxRateBps' + s] || 0, phyTx: d['TxPhyRate' + s], phyRx: d['RxPhyRate' + s]
        });
      }
    }
    if (!nodes.length) throw new Error('拓扑页无有效数据');
    return { nodes, devs: devs.filter(x => x.mac) };
  }

  // ======== [3] 微积分引擎========
  // 计数器求导：时间戳只在“计数器真的变化”时更新，速率＝增量／距上次变化的时间；
  // 连续 zeroGrace 次无增长才判零，判零后每次轮询都重置时间戳；回退按清零处理并重置基准。
  class Diff {
    constructor() { this.b = null; this.l = 0; this.lt = 0; this.z = 0; this.rate = 0; this.acc = 0; this.o = 0; }
    feed(bits, n) {
      this.o = bits;
      if (this.b === null) { this.b = this.l = bits; this.lt = n; }
      if (bits < this.l) { this.acc += this.l - this.b; this.b = this.l = bits; this.lt = n; this.rate = this.z = 0; } // 与小米不同：清零前的累计并入 acc，不丢
      if (bits > this.l) { this.rate = (bits - this.l) / ((n - this.lt) * .001); this.l = bits; this.lt = n; this.z = 0; }
      else if (++this.z > CONFIG.zeroGrace) { this.rate = 0; this.lt = n; }
      return this.rate;
    }
    get total() { return this.acc + Math.max(0, this.o - this.b); } // 打开页面以来的累计（比特）
  }
  // 速率积分：事件驱动，速率变化时才结算；从 0 起步按“流量发生在区间中点”估一半
  class Integ {
    constructor(p = CONFIG.refreshInterval) { this.p = p; this.tot = 0; this.inst = 0; this.t = undefined; } // p：采样周期（秒）
    feed(rate, n) {
      if (this.t === undefined) this.t = n;
      else if (rate !== this.inst) {
        const dt = n - this.t;
        if (this.inst > 0) this.tot += (this.inst + rate) * dt * 0.0005;
        else if (rate > 0) this.tot += rate * 0.5 * this.p;
        this.t = n;
      }
      this.inst = rate;
    }
    close(n) { // 设备消失：按半个区间结算最后一段，速率归零
      if (this.inst > 0) this.tot += this.inst * Math.min(n - (this.t ?? n), this.p * 1000) * 0.0005;
      this.inst = 0; this.t = n;
    }
  }

  // ======== [4] 状态与入库 ========
  const S = {
    run: false, busy: false, tick: 0, ok: {}, err: {}, fail: {},
    gem: {}, lock: null, wanName: '', wanUp: 0, wanDn: 0, wanIntU: new Integ(CONFIG.refreshInterval * CONFIG.ponEvery), wanIntD: new Integ(CONFIG.refreshInterval * CONFIG.ponEvery), wanRawU: 0, wanRawD: 0,
    devs: new Map(), nodes: [], list: [], lanP: {}, wlanP: {}, lanInfo: [], wlanInfo: [],
    topoN: 0, ch24: 6, ch5: 60, 衰减: 0, isPinned: false,
    总上行图: new Float64Array(8192), 总下行图: new Float64Array(8192), 总图点数: 0, wMaxU: 0, wMaxD: 0, wMinU: Infinity, wMinD: Infinity
  };
  const diffOf = (store, key) => store[key] ??= new Diff();

  function ingestPon(ports, n) {
    for (const p of ports) {
      const g = S.gem[p.name] ??= { dn: new Diff(), up: new Diff(), rxB: 0, txB: 0 };
      g.rxB = p.rxB; g.txB = p.txB;
      g.dn.feed(p.rxB * 8, n); g.up.feed(p.txB * 8, n); // PON 接收＝来自 OLT＝下行
    }
    if (!S.lock) {
      let best = null;
      for (const p of ports) if (!best || p.rxB + p.txB > best.rxB + best.txB) best = p;
      S.wanName = best.name;
      if (best.rxB + best.txB >= CONFIG.wanMinBytes) S.lock = best.name;
    } else S.wanName = S.lock;
    const g = S.gem[S.wanName];
    S.wanUp = g.up.rate; S.wanDn = g.dn.rate; S.wanRawU = g.txB; S.wanRawD = g.rxB;
    S.wanIntU.feed(S.wanUp, n); S.wanIntD.feed(S.wanDn, n);
    const u = S.wanUp, d = S.wanDn, i = S.总图点数 & 8191; // 总速率图：8192 点环形缓冲（原生同款）
    S.总上行图[i] = u; S.总下行图[i] = d; S.总图点数++;
    if (u > S.wMaxU) S.wMaxU = u; if (d > S.wMaxD) S.wMaxD = d;
    if (u > 0 && u < S.wMinU) S.wMinU = u; if (d > 0 && d < S.wMinD) S.wMinD = d;
  }
  function ingestTopo(r, n) {
    S.nodes = r.nodes; S.topoN = n;
    const seen = new Set();
    for (const x of r.devs) {
      seen.add(x.mac);
      const d = S.devs.get(x.mac) ?? { mac: x.mac, iu: new Integ(), id: new Integ(), hU: new Float64Array(32), hD: new Float64Array(32), hIdx: 0 };
      Object.assign(d, { name: x.name, ip: x.ip, owner: x.owner, access: x.access, assoc: x.assoc, rssi: x.rssi, mode: x.mode, phyTx: x.phyTx, phyRx: x.phyRx, up: x.up, dn: x.dn, online: true });
      d.iu.feed(x.up, n); d.id.feed(x.dn, n);
      S.devs.set(x.mac, d);
    }
    for (const [m, d] of S.devs) {
      if (!seen.has(m) && d.online) { d.iu.close(n); d.id.close(n); d.up = d.dn = 0; d.online = false; }
      d.hIdx = (d.hIdx + 1) & 31; d.hU[d.hIdx] = d.up; d.hD[d.hIdx] = d.dn; // 火花线环形缓冲，每个快周期一格
    }
  }
  function ingestLan(r, n) {
    S.list = r.list; S.lanInfo = r.ports;
    for (const p of r.ports) { diffOf(S.lanP, p.name + ':up').feed(p.rxB * 8, n); diffOf(S.lanP, p.name + ':dn').feed(p.txB * 8, n); } // 从 LAN 口看：收＝终端上传
  }
  function ingestWlan(r, n) {
    S.wlanInfo = r;
    const c24 = r.find(p => p.band === '2.4G')?.ch || S.ch24, c5 = r.find(p => p.band === '5G')?.ch || S.ch5;
    if (c24 !== S.ch24 || c5 !== S.ch5 || !S.衰减) { S.ch24 = c24; S.ch5 = c5; S.衰减 = 20 * Math.log10((5000 + 5 * c5) / (2407 + 5 * c24)); } // 2.4G 的 RSSI 频率修正（dB），与锐捷版同式
    for (const p of r) { diffOf(S.wlanP, p.name + ':up').feed(p.rxB * 8, n); diffOf(S.wlanP, p.name + ':dn').feed(p.txB * 8, n); }
  }

  // ======== [5] 调度 ========
  async function run(key, fn) {
    try { await fn(); S.ok[key] = Date.now(); S.err[key] = null; }
    catch (e) { S.err[key] = e.message; S.cool = true; console.warn(`[哥哥科技 光猫版] ${key} 失败，${CONFIG.errorCooldown}s 后重试:`, e.message); }
  }
  // 积分结清：停采样、进入冷却时调用，下次从零速率起步，不把空档期当成匀速积进去
  function settle() {
    const n = performance.now();
    S.wanIntU.close(n); S.wanIntD.close(n);
    for (const d of S.devs.values()) { d.iu.close(n); d.id.close(n); }
  }
  async function cycle() {
    if (!S.run || S.busy) return;
    S.busy = true; S.cool = false; S.coolUntil = 0; const t0 = performance.now();
    // 官方每张页面都自带 305 秒的“页面超时”定时器（只在页面加载时启动，用户操作不会续期），到点就用表单 POST 注销到 /。
    // 面板全屏盖住官方页，用户不会去点它，5 分钟一到就会弹“页面超时”并带着早已作废的令牌提交，光猫回 400。
    // 采样期间每 200 秒替官方页调用一次它自己的续期函数 callbackfuncReset，让这个定时器永远走不到头
    // （后台标签页定时器被降频到每分钟一次时，最长间隔约 260 秒，仍在 300 秒以内）
    if (Date.now() - (S.keepAt || 0) >= 200000) { document.getElementById('mainFrame')?.contentWindow?.callbackfuncReset?.(); S.keepAt = Date.now(); }
    try {
      const go = () => S.run && !S.cool; // 关面板或本轮已出错：剩下的页面一个都不再拉（每拉一页光猫都会换发令牌）
      await run('topo', async () => { const { t, n } = await getPage('topo_t'); ingestTopo(parseTopo(t), n); });
      if (go() && S.tick % CONFIG.ponEvery === 0) await run('pon', async () => { const { t, n } = await getPage('pon_status_stat_info_t'); ingestPon(parsePon(t), n); });
      if (go() && S.tick % CONFIG.slowEvery === 0) {
        await run('lan', async () => { const { t, n } = await getPage('status_lan_info_t'); ingestLan(parseLan(t), n); });
        if (go()) await run('wlan', async () => { const { t, n } = await getPage('e8_status_wlan_info_t'); ingestWlan(parseWlan(t), n); });
      }
    } finally {
      S.tick++; S.busy = false;
      if (S.reloadOfficial) reloadOfficial(); // 关面板时这一轮还在路上：等最后一页拉完再重载官方页，否则它刚拿到的令牌又会被这一页作废
      if (S.cool) { settle(); S.coolUntil = Date.now() + CONFIG.errorCooldown * 1000; }
      render();
      // 正常：按周期起点对齐，且两轮之间至少留出半个周期的空闲；出错：静候 errorCooldown 秒
      if (S.run) S.timer = setTimeout(cycle, S.cool ? CONFIG.errorCooldown * 1000 : Math.max(CONFIG.refreshInterval * 500, CONFIG.refreshInterval * 1000 - (performance.now() - t0)));
    }
  }
  function start() { if (S.run) return; S.run = true; clearTimeout(S.timer); S.cool = false; cycle(); } // 重新打开面板＝立即重试，不必等冷却结束
  // 只在面板打开时采样。关面板即停：光猫每渲染一页就换发一次 _SESSION_TOKEN，后台持续轮询会让用户正在看的官方页面手里的令牌过期，
  // 官方页面的提交（IF_ENCODE 也以该令牌为密钥）就会被拒。停采样时把积分结清，下次打开从零速率起步，不把关闭期间当成匀速积进去
  function stop() {
    if (!S.run) return;
    S.run = false; clearTimeout(S.timer); settle();
    if (S.busy) S.reloadOfficial = true; else reloadOfficial();
  }
  function reloadOfficial() { // 官方内容页重新加载一次，拿到当前有效的令牌（顶栏 top.gch 不带令牌，不用管）
    S.reloadOfficial = false; S.keepAt = 0; // 重载后是新页面、新定时器，下次打开面板第一轮就续期
    const f = document.getElementById('mainFrame');
    if (f?.contentWindow) f.contentWindow.location.href = f.contentWindow.location.href;
  }

  // ======== [6] 界面 ========
  // 看板、总速率图、终端卡片沿用 Bro-Stat 原生组件（华为 / 锐捷同款），其余为光猫版自有的表格模块
  const CSS = `
#bro-ont-ball{position:fixed;right:22px;top:16px;width:48px;height:48px;border-radius:50%;border:0;background:#0059fa;color:#fff;font-size:26px;line-height:48px;text-align:center;cursor:pointer;box-shadow:0 4px 14px rgba(0,89,250,.45);z-index:2147483000;padding:0}
#bro-ont-ball:hover{transform:scale(1.08)}
#bro-ont-ball[data-s=off]{background:#868e96;box-shadow:none}#bro-ont-ball[data-s=bad]{background:#d6001c;box-shadow:0 4px 14px rgba(214,0,28,.45)}
#bro-ont-ov{position:fixed;inset:0;background:#f3f4f5;z-index:2147483001;display:none;flex-direction:column;font:13px/1.5 "Microsoft YaHei",system-ui,sans-serif;color:#222;text-align:left}
#bro-ont-ov *{box-sizing:border-box}
#bro-ont-ov .hd{display:flex;align-items:center;gap:12px;padding:10px 16px;background:#0059fa;color:#fff}
#bro-ont-ov .hd b{font-size:15px}#bro-ont-ov .hd .st{flex:1;font-size:12px;opacity:.9}
#bro-ont-ov .hd button{background:rgba(255,255,255,.2);border:0;color:#fff;border-radius:4px;padding:2px 10px;cursor:pointer;font-size:14px}
#bro-ont-ov .bd{flex:1;overflow:auto;padding:14px 16px}
#bro-ont-ov .bd>div.pg{max-width:1580px;margin:0 auto}
#bro-ont-ov section{background:#fff;border-radius:8px;padding:12px 14px;margin-bottom:12px;box-shadow:0 1px 4px rgba(0,0,0,.06)}
#bro-ont-ov h3{margin:0 0 8px;font-size:13px;color:#0059fa}
#bro-ont-ov .mu{color:#777;font-size:12px}
#bro-ont-ov table{border-collapse:collapse;width:100%}#bro-ont-ov th,#bro-ont-ov td{padding:5px 8px;text-align:right;border-bottom:1px solid #eee;white-space:nowrap}
#bro-ont-ov th{color:#666;font-weight:600;background:#fafafa}#bro-ont-ov td:first-child,#bro-ont-ov th:first-child{text-align:left}
#bro-ont-ov td.up{color:#ff4c00}#bro-ont-ov td.dn{color:#0059fa}
#bro-ont-ov .off{opacity:.45}
#bro-ont-ov .chip{display:inline-block;margin:0 8px 4px 0;padding:2px 8px;background:#eef3ff;border-radius:10px;font-size:12px}
#bro-ont-ov .help{background:#fff;color:#333;padding:14px 18px;margin-bottom:12px;border-radius:6px;border:1px solid #e5e5e5;border-left:5px solid #0059fa;font-size:13px;line-height:1.85;box-shadow:0 2px 8px rgba(0,0,0,.05)}#bro-ont-ov .help-t{font-weight:bold;font-size:14px;margin-bottom:6px}#bro-ont-ov .help a,#bro-ont-ov .alert a{color:#0059fa;font-weight:bold;text-decoration:none}
#bro-ont-ov .alert{background:#fff3cd;color:#856404;border-left:5px solid #ffc107;border-radius:6px;padding:10px 14px;margin-bottom:12px;font-weight:600}
#bro-ont-ov .stale section,#bro-ont-ov .stale .gege-list-container,#bro-ont-ov .stale #zte-geek-board{opacity:.45}
#bro-ont-ov .offpage section,#bro-ont-ov .offpage #zte-geek-board,#bro-ont-ov .offpage .gege-list-container{display:none}
#bro-ont-ov .strip{display:flex;flex-wrap:wrap;gap:6px 16px;font-size:12px;color:#555;margin-bottom:12px;padding:6px 10px;background:#fff;border-radius:6px}#bro-ont-ov .strip .ok{color:#2b8a3e}#bro-ont-ov .strip .no{color:#d6001c}
#bro-ont-ov #zte-geek-board{position:relative;overflow:visible;border-left:4px solid #0059fa;padding:5px 0 15px 15px;margin:4px 0 15px;border-bottom:1px solid #e6e8eb;font-size:14px;display:flex;flex-direction:column;gap:6px}
#bro-ont-ov #zte-geek-board.geek-frozen-pane{position:sticky;top:-14px;z-index:100;background:#f3f4f5;padding-top:15px;box-shadow:0 10px 15px -3px rgba(0,0,0,.05);border-radius:0 0 8px 8px}
#bro-ont-ov .geek-row{display:flex;justify-content:space-between;align-items:center;white-space:nowrap;height:20px}
#bro-ont-ov .geek-label{width:110px;color:#333;font-weight:bold}#bro-ont-ov .geek-val-box{flex:1;display:flex;gap:15px;margin-left:10px}#bro-ont-ov .geek-fixed-width{display:inline-block;width:120px}#bro-ont-ov .geek-right-box{text-align:right;min-width:220px;font-weight:bold}
#bro-ont-ov .c-up{color:#ff4c00}#bro-ont-ov .c-down{color:#0059fa}
#bro-ont-ov .gege-pin{cursor:pointer;font-size:11px;filter:grayscale(100%);opacity:.5;transition:transform .2s;margin-left:2px}#bro-ont-ov .gege-pin.active{filter:none;opacity:1;transform:scale(1.1)}
#gege-speed-chart{position:absolute;z-index:25;box-sizing:border-box;cursor:move;user-select:none;touch-action:none;container-type:inline-size}
#gege-speed-chart canvas{display:block;width:100%;height:100%}
#gege-speed-chart .gege-chart-head,#gege-speed-chart .gege-chart-foot{position:absolute;left:clamp(28px,8%,36px);right:8px;display:flex;align-items:center;pointer-events:none;font:bold clamp(9px,2.1cqw,11px) system-ui,sans-serif;white-space:nowrap;overflow:hidden}
#gege-speed-chart .gege-chart-head{top:2px;color:#111;gap:8px}
#gege-speed-chart .gege-chart-head [data-gc="range"]{color:#666;font-weight:normal;overflow:hidden;text-overflow:ellipsis;margin-left:auto}
#gege-speed-chart .gege-chart-foot{bottom:4px;justify-content:flex-start;gap:clamp(3px,1.1cqw,12px)}
#gege-speed-chart .gege-chart-foot span{min-width:0;overflow:hidden;text-overflow:ellipsis}
#gege-speed-chart .gc-up{color:#ff4c00;flex:0 1 auto}#gege-speed-chart .gc-down{color:#0b5;flex:0 1 auto}#gege-speed-chart .gc-extra{color:#666;text-align:right;margin-left:auto;flex:1 1 0;min-width:0}
#gege-speed-chart .gege-chart-resize{position:absolute;right:-4px;bottom:-4px;width:13px;height:13px;border-right:3px solid #0059fa;border-bottom:3px solid #0059fa;cursor:nwse-resize;border-radius:2px}
#bro-ont-ov .gege-list-container{background:#fff;border-radius:8px;border:1px solid #e0e0e0;padding:16px 30px;box-shadow:0 2px 10px rgba(0,0,0,.02);margin-bottom:12px}
#bro-ont-ov .gege-section{margin-bottom:6px}#bro-ont-ov .gege-section:last-child{margin-bottom:0}
#bro-ont-ov .config-title{font-size:16px;font-weight:bold;color:#333;margin:12px 0 4px;padding-bottom:4px}#bro-ont-ov .gege-section:first-child .config-title{margin-top:0}
#bro-ont-ov .gege-empty-state{color:#999;font-size:14px;padding:0 0 12px 5px;border-bottom:1px solid #f0f0f0;margin-bottom:5px}
#bro-ont-ov .gege-list-item{border-bottom:1px solid #f0f0f0;padding:7px 10px}#bro-ont-ov .gege-list-item:last-child{border-bottom:none}
#bro-ont-ov .config-item-box{display:flex;align-items:stretch;line-height:1.3}
#bro-ont-ov .logo{width:33%;display:flex;flex-direction:row;align-items:center}
#bro-ont-ov .dev-logo{width:44px;min-width:44px;margin-right:12px;display:flex;flex-direction:column;align-items:center;justify-content:center}
#bro-ont-ov .dev-rate{font-size:10.5px;color:#999;font-family:Consolas,monospace;margin-top:1px;white-space:nowrap}
#bro-ont-ov .dev-intro{flex:1;min-width:0;display:flex;flex-direction:column;justify-content:flex-start;min-height:56px}
#bro-ont-ov .dev-name-row{display:flex;justify-content:space-between;align-items:baseline;width:95%}
#bro-ont-ov .dev-name{font-weight:bold;color:#333;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0;margin-right:8px}
#bro-ont-ov .gege-rssi{font-size:12px;font-weight:bold;color:#666;font-family:Consolas,monospace;white-space:nowrap;flex-shrink:0}
#bro-ont-ov .gege-online-time{color:#999;font-size:12px;font-family:Consolas,monospace;margin-top:2px}
#bro-ont-ov .info{width:27%;display:flex;flex-direction:column;padding:0 10px;border-right:1px solid #eee}
#bro-ont-ov .dev-ip{color:#666;font-family:Consolas,monospace;display:flex;justify-content:space-between}#bro-ont-ov .dev-ip i{font-style:normal;color:#999;font-size:11.5px}
#bro-ont-ov .speed{width:40%;display:flex;flex-direction:column;justify-content:center;padding:0 10px}
#bro-ont-ov .gege-up-box,#bro-ont-ov .gege-down-box{margin-top:auto;width:95%}
#bro-ont-ov .gege-ratio-box{margin-top:2px;width:95%;margin-bottom:3px}
#bro-ont-ov .t-row{font-size:12px;font-weight:bold;margin-bottom:2px;display:flex;justify-content:space-between;font-family:Consolas,monospace}
#bro-ont-ov .zte-thin-bar{width:100%;height:3px;background:rgba(0,0,0,.05);border-radius:1.5px;overflow:hidden}
#bro-ont-ov .zte-thin-bar-inner{height:100%;transition:width .5s ease-out}#bro-ont-ov .zte-thin-bar-inner.up{background:#ff4c00}#bro-ont-ov .zte-thin-bar-inner.down{background:#0059fa}
#bro-ont-ov .gege-ratio-top{display:flex;justify-content:space-between;font-size:12px;font-weight:bold;margin-bottom:2px}
#bro-ont-ov .gege-ratio-bar{width:100%;height:4px;background:#0059fa;border-radius:2px;overflow:hidden}#bro-ont-ov .gege-ratio-bar-inner{height:100%;background:#ff4c00;transition:width .5s ease-out}
#bro-ont-ov .zte-enhance-speed{display:flex;flex-direction:column;gap:5px;width:100%;font-family:Consolas,monospace}
#bro-ont-ov .zte-bar-wrap{position:relative;width:100%;border-radius:4px;border:1px solid;font-size:13px;font-weight:bold;overflow:hidden;padding:1px 8px;display:flex;justify-content:space-between;align-items:center;z-index:1}
#bro-ont-ov .zte-bar-wrap span{font-size:inherit;font-weight:inherit}
#bro-ont-ov .zte-bar-wrap .v-spark{font-family:monospace;letter-spacing:-2px;font-size:10px;margin:0 6px;opacity:.65;white-space:pre;flex:1;overflow:hidden;text-align:right}
#bro-ont-ov .zte-bar-up{color:#ff4c00;border-color:rgba(255,76,0,.3)}#bro-ont-ov .zte-bar-down{color:#0059fa;border-color:rgba(0,89,250,.3)}
#bro-ont-ov .zte-bar-up::before{content:'';position:absolute;left:0;top:0;bottom:0;z-index:-1;background:rgba(255,76,0,.12);width:var(--p-up,0%);transition:width .5s}
#bro-ont-ov .zte-bar-down::before{content:'';position:absolute;left:0;top:0;bottom:0;z-index:-1;background:rgba(0,89,250,.12);width:var(--p-down,0%);transition:width .5s}`;

  // —— 原生 Wi-Fi 信号图标 光猫版缩到 34px ——
  const 图标 = (inner) => `<svg viewBox="0 0 100 100" width="34" height="34">${inner}</svg>`;
  const 弧 = (c1, c2) => `<path d="M 30,58 A 28,28 0 0,1 70,58" fill="none" stroke="${c1}" stroke-width="7" stroke-linecap="round"/><path d="M 12,38 A 54,54 0 0,1 88,38" fill="none" stroke="${c2}" stroke-width="7" stroke-linecap="round"/>`;
  const getIconSvg = r => {
    const c = r > -24 ? '#4caf50' : r > -35 ? '#9c27b0' : '#0059fa';
    if (r > -40) return 图标(`<path d="M 50,85 L 10,35 A 65,65 0 0,1 90,35 Z" fill="${c}"/>`);
    if (r > -46) return 图标(`<path d="M 50,85 L 10,35 A 65,65 0 0,1 90,35 Z" fill="#e0e0e0"/><path d="M 50,85 L 18,45 A 50,50 0 0,1 82,45 Z" fill="${c}"/>`);
    if (r > -50) return 图标(`<path d="M 50,85 L 10,35 A 65,65 0 0,1 90,35 Z" fill="#e0e0e0"/><path d="M 50,85 L 23,51 A 43,43 0 0,1 77,51 Z" fill="${c}"/>`);
    if (r > -56) return 图标(`<circle cx="50" cy="80" r="9" fill="${c}"/>${弧(c, c)}`);
    if (r > -61) return 图标(`<circle cx="50" cy="80" r="9" fill="${c}"/>${弧(c, '#e0e0e0')}`);
    if (r > -67) return 图标(`<circle cx="50" cy="80" r="9" fill="${c}"/>${弧('#e0e0e0', '#e0e0e0')}`);
    if (r > -72) return 图标(`<circle cx="50" cy="80" r="7" fill="none" stroke="#ff9800" stroke-width="5"/>${弧('#e0e0e0', '#e0e0e0')}`);
    if (r > -76) return 图标(`<g transform="translate(-15, 0)"><circle cx="50" cy="80" r="7" fill="none" stroke="#ffb300" stroke-width="5"/>${弧('#e0e0e0', '#e0e0e0')}</g><text x="70" y="86" fill="#ffb300" font-weight="900" font-size="48" font-family="sans-serif">!</text>`);
    if (r > -80) return 图标(`<g transform="translate(-15, 0)"><circle cx="50" cy="80" r="7" fill="none" stroke="#ff4c00" stroke-width="5"/>${弧('#e0e0e0', '#e0e0e0')}</g><text x="70" y="86" fill="#ff4c00" font-weight="900" font-size="48" font-family="sans-serif">!</text>`);
    if (r > -85) return 图标(`<g transform="translate(-15, 0)"><circle cx="50" cy="80" r="7" fill="none" stroke="#ff4c00" stroke-width="5"/>${弧('#e0e0e0', '#e0e0e0')}</g><text x="65" y="86" fill="#ff4c00" font-weight="900" font-size="44" font-family="sans-serif">?</text>`);
    return 图标(`<g transform="translate(-15, 0)"><circle cx="50" cy="80" r="7" fill="none" stroke="#ff4c00" stroke-width="5"/><path d="M 30,58 A 28,28 0 0,1 70,58" fill="none" stroke="#ff4c00" stroke-width="7" stroke-linecap="round" opacity="0.3"/><path d="M 12,38 A 54,54 0 0,1 88,38" fill="none" stroke="#ff4c00" stroke-width="7" stroke-linecap="round" opacity="0.3"/></g><text x="65" y="80" fill="#ff4c00" font-weight="900" font-size="35" font-family="sans-serif">✖</text>`);
  };

  // —— 原生字符火花线：16 格，每格一次拓扑采样（默认 5s，整条 80 秒） ——
  const SPRK = [' ', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
  function getSpark(ringArr, headIdx, maxVal) {
    let s = '';
    for (let i = 16; i--;) { const v = ringArr[(headIdx - i) & 31]; s += SPRK[v > 0 ? Math.min(7, Math.max(1, ((v / maxVal) * 7) | 0)) : 0]; }
    return s;
  }

  // —— 原生 WAN 总速率图（speed-chart-core）：看板内绝对定位，可在面板任意处拖动，右下角缩放 ——
  function 初始化总速率图(bd) {
    let box = bd.querySelector('#gege-speed-chart');
    if (box) return box;
    box = document.createElement('div'); box.id = 'gege-speed-chart';
    box.innerHTML = '<canvas></canvas><div class="gege-chart-head"><b data-gc="meta"></b><span data-gc="range"></span></div><div class="gege-chart-foot"><span class="gc-up" data-gc="up"></span><span class="gc-down" data-gc="down"></span><span class="gc-extra" data-gc="extra"></span></div><div class="gege-chart-resize" title="缩放"></div>';
    bd.appendChild(box);
    const bw = bd.clientWidth || 1500, w = Math.max(320, Math.min(650, bw * .30));
    box.style.left = Math.max(520, bw * .52) + 'px'; box.style.top = '2px'; box.style.width = w + 'px'; box.style.height = '112px';
    const 起手 = (e, 模式) => { e.preventDefault(); S.图表拖 = { 模式, x: e.clientX, y: e.clientY, l: box.offsetLeft, t: box.offsetTop, w: box.offsetWidth, h: box.offsetHeight }; box.setPointerCapture?.(e.pointerId); };
    box.addEventListener('pointerdown', e => { if (!e.target.classList.contains('gege-chart-resize')) 起手(e, '拖'); });
    box.querySelector('.gege-chart-resize').addEventListener('pointerdown', e => 起手(e, '缩'));
    box.addEventListener('pointermove', e => {
      const g = S.图表拖; if (!g) return;
      if (g.模式 === '拖') { box.style.left = (g.l + e.clientX - g.x) + 'px'; box.style.top = (g.t + e.clientY - g.y) + 'px'; }
      else { box.style.width = Math.max(260, g.w + e.clientX - g.x) + 'px'; box.style.height = Math.max(88, g.h + e.clientY - g.y) + 'px'; }
      if (!S.图表待画) { S.图表待画 = 1; requestAnimationFrame(() => { S.图表待画 = 0; 画总速率图(bd); }); }
    });
    box.addEventListener('pointerup', () => S.图表拖 = null); box.addEventListener('pointercancel', () => S.图表拖 = null); box.addEventListener('lostpointercapture', () => S.图表拖 = null);
    return box;
  }
  function 画总速率图(bd) {
    const box = 初始化总速率图(bd), cv = box.querySelector('canvas'), W = box.clientWidth | 0, H = box.clientHeight | 0, R = window.devicePixelRatio || 1;
    if (W < 40 || H < 40) return;
    if (cv.width !== (W * R | 0) || cv.height !== (H * R | 0)) { cv.width = W * R | 0; cv.height = H * R | 0; }
    const x = cv.getContext('2d'); x.setTransform(R, 0, 0, R, 0, 0); x.clearRect(0, 0, W, H);
    const l = 34, r = 8, t = 20, b = 25, gw = W - l - r, gh = H - t - b, n = Math.min(S.总图点数, 8000), st = S.总图点数 - n;
    let ym = 1, su = 0, sd = 0;
    for (let k = 0; k < n; k++) { const j = (st + k) & 8191, u = S.总上行图[j], d = S.总下行图[j]; if (u > ym) ym = u; if (d > ym) ym = d; su += u; sd += d; }
    x.fillStyle = 'rgba(255,255,255,.58)'; x.strokeStyle = 'rgba(0,89,250,.88)'; x.lineWidth = 1.5; x.beginPath(); x.roundRect ? x.roundRect(.5, .5, W - 1, H - 1, 8) : x.rect(.5, .5, W - 1, H - 1); x.fill(); x.stroke();
    x.setLineDash([4, 4]); x.strokeStyle = 'rgba(0,89,250,.45)'; x.lineWidth = 1;
    for (let i = 5; i--;) { const y = t + gh * i / 4; x.beginPath(); x.moveTo(l, y); x.lineTo(W - r, y); x.stroke(); }
    for (let i = 7; i--;) { const xx = l + gw * i / 6; x.beginPath(); x.moveTo(xx, t); x.lineTo(xx, H - b); x.stroke(); }
    x.setLineDash([]);
    const li = (S.总图点数 - 1) & 8191, au = n ? su / n : 0, ad = n ? sd / n : 0;
    (box._gcMeta ??= box.querySelector('[data-gc="meta"]')).textContent = `采样:${CONFIG.refreshInterval * CONFIG.ponEvery}s  点:${S.总图点数}`;
    const rg = box._gcRange ??= box.querySelector('[data-gc="range"]'), rs = `峰↑${fRate(S.wMaxU)} ↓${fRate(S.wMaxD)}  谷↑${S.wMinU < Infinity ? fRate(S.wMinU) : '--'} ↓${S.wMinD < Infinity ? fRate(S.wMinD) : '--'}`; rg.textContent = rs; rg.title = rs;
    (box._gcUp ??= box.querySelector('[data-gc="up"]')).textContent = `发 ${fRate(n ? S.总上行图[li] : 0)}`;
    (box._gcDown ??= box.querySelector('[data-gc="down"]')).textContent = `收 ${fRate(n ? S.总下行图[li] : 0)}`;
    (box._gcExtra ??= box.querySelector('[data-gc="extra"]')).textContent = `均↑${fRate(au)} ↓${fRate(ad)}`;
    const 画线 = (arr, col) => {
      if (!n) return;
      x.strokeStyle = col; x.lineWidth = 2.4; x.beginPath();
      const bins = Math.max(1, Math.min(n, gw | 0));
      let first = !0;
      if (bins === n) {
        for (let k = 0; k < n; k++) { const xx = l + (n > 1 ? gw * k / (n - 1) : gw), yy = H - b - (arr[(st + k) & 8191] / ym) * gh; first ? (x.moveTo(xx, yy), first = !1) : x.lineTo(xx, yy); }
      } else {
        for (let q = 0; q < bins; q++) {
          let a = q * n / bins | 0, z = (q + 1) * n / bins | 0, mn = Infinity, mx = -Infinity, mi = a, ma = a; if (z <= a) z = a + 1;
          for (let k = a; k < z; k++) { const v = arr[(st + k) & 8191]; if (v < mn) { mn = v; mi = k; } if (v > mx) { mx = v; ma = k; } }
          if (mi <= ma) { let xx = l + gw * mi / (n - 1), yy = H - b - (mn / ym) * gh; first ? (x.moveTo(xx, yy), first = !1) : x.lineTo(xx, yy); if (ma !== mi) { xx = l + gw * ma / (n - 1); yy = H - b - (mx / ym) * gh; x.lineTo(xx, yy); } }
          else { let xx = l + gw * ma / (n - 1), yy = H - b - (mx / ym) * gh; first ? (x.moveTo(xx, yy), first = !1) : x.lineTo(xx, yy); xx = l + gw * mi / (n - 1); yy = H - b - (mn / ym) * gh; x.lineTo(xx, yy); }
        }
      }
      x.stroke();
    };
    画线(S.总上行图, '#ff1b00'); 画线(S.总下行图, '#006400');
  }

  // —— 原生驾驶舱看板（uiLayout 1），按光猫能拿到的数据换了行内口径 ——
  const BOARD = `<div class="geek-row"><span class="geek-label">WAN口速率</span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-wan-up-bytes"></span><span class="c-down geek-fixed-width" id="gb-wan-down-bytes"></span><span style="margin-left:5px"><span class="c-up" id="gb-wan-up-bps"></span> | <span class="c-down" id="gb-wan-down-bps"></span></span></div><div class="geek-right-box" style="font-weight:normal;color:#666"><span style="color:#333">PON口：</span><span id="gb-wan-port"></span></div></div>
<div class="geek-row"><span class="geek-label">终端代数和</span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-lan-up-bytes"></span><span class="c-down geek-fixed-width" id="gb-lan-down-bytes"></span></div><div class="geek-right-box">实时占比：<span class="c-up" id="gb-perc-up"></span> | <span class="c-down" id="gb-perc-down"></span></div></div>
<div class="geek-row"><span class="geek-label">终端：<span id="gege-pin-btn" class="gege-pin" title="冻结窗格">📌</span></span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-lan-up-vol"></span><span class="c-down geek-fixed-width" id="gb-lan-down-vol"></span><span style="font-weight:bold;margin-left:5px">WAN总计：<span class="c-up" id="gb-wan-up-vol"></span> | <span class="c-down" id="gb-wan-down-vol"></span></span></div><div class="geek-right-box">在线高精：<span style="color:#FF6700" id="gb-cur-up-vol"></span> | <span style="color:#18A058" id="gb-cur-down-vol"></span></div></div>
<div class="geek-row"><span class="geek-label">高精流量统计 -></span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-int-up-vol"></span><span class="c-down geek-fixed-width" id="gb-int-down-vol"></span><span style="font-weight:normal;margin-left:5px;color:#666">终端/WAN：<span id="gb-ratio-display"></span></span></div><div class="geek-right-box" style="color:#666">当前总计：<span style="color:#FF6700" id="gb-abs-up-vol"></span> | <span style="color:#18A058" id="gb-abs-down-vol"></span></div></div>`;

  // —— 频段命名：没有“5GHz”这个词。分组标题按主信道二分（≥149 为 5.8G），端口行按信道查表 ——
  const 锐频段 = { 32: '5.1G', 36: '5.2G', 40: '5.2G', 44: '5.2G', 48: '5.2G', 52: '5.2G', 56: '5.3G', 60: '5.3G', 64: '5.3G', 100: '5.5G', 104: '5.5G', 108: '5.5G', 112: '5.5G', 116: '5.5G', 120: '5.6G', 124: '5.6G', 128: '5.6G', 132: '5.6G', 136: '5.6G', 140: '5.7G', 144: '5.7G', 149: '5.8G', 153: '5.8G', 157: '5.8G', 161: '5.8G', 165: '5.8G', 184: '4.9G', 188: '4.9G', 192: '4.9G', 196: '4.9G' };
  const 频段名 = k => k === '5G' ? (S.ch5 > 148 ? '5.8G' : '5.2G') : '2.4G';
  const 端口频段 = p => p.band === '5G' ? (锐频段[p.ch] || 频段名('5G')) : '2.4G';
  const fOT = s => { s = +s | 0; const d = s / 86400 | 0, h = s % 86400 / 3600 | 0, m = s % 3600 / 60 | 0, c = s % 60; return d ? `${d}天${h}时${m}分${c}秒` : `${h}小时${m}分${c}秒`; };

  function build() {
    if ($('#bro-ont-ball')) return;
    const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    const ball = document.createElement('button'); ball.id = 'bro-ont-ball'; ball.type = 'button'; ball.title = '哥哥科技 光猫监控'; ball.textContent = '🛸';
    const ov = document.createElement('div'); ov.id = 'bro-ont-ov';
    ov.innerHTML = `<div class="hd"><b>🛸 哥哥科技 · 光猫监控</b><span class="st" id="zo-st"></span><button type="button" id="zo-x">✕</button></div>
<div class="bd"><div class="pg"><div id="zo-alert"></div>
<div id="zte-geek-board">${BOARD}</div>
<section><h3>网关节点</h3><div id="zo-nodes"></div></section>
<div class="gege-list-container" id="zo-devs"><div class="gege-section" data-b="5G"><div class="config-title"></div><div class="gege-empty-state">没有连接设备</div><div class="gl"></div></div><div class="gege-section" data-b="2.4G"><div class="config-title"></div><div class="gege-empty-state">没有连接设备</div><div class="gl"></div></div></div>
<section><h3>端口与 Wi-Fi（累计字节求导，慢组采样）</h3><div id="zo-ports"></div></section>
<section><h3>其它在线设备（光猫侧不提供逐设备速率）</h3><div id="zo-other"></div></section>
<div style="margin-top: 25px; padding-top: 15px; border-top: 1px dashed #eee; text-align: center; font-family: Consolas, 'Microsoft YaHei', sans-serif;"><div style="font-size: 11.5px; color: #777; font-style: italic; margin-bottom: 8px;">“在一个文明社会，干净的、不被监视与吸血的网络，是我们每个人的基本权利。”</div><div style="font-size: 10.5px; color: #999; line-height: 1.3; margin-bottom: 8px;">本交互式程序为“哥哥软件”范本；分享请使用官方链接，仅对尊重署名且持续保留者开放源代码，按“原样”免费提供，不对其适用性、稳定性、精密度或任何商业场景的合规性作任何担保。<a href="https://github.com/ucxn/ZTE-Stat_Max/blob/main/LICENSE.markdown" target="_blank" style="color: #777; text-decoration: underline;">分享/查看许可证</a><br>协议规定：基于本程序的任何修改均不得移除本界面的署名，也不得弱化“显示的程度”。保持显著GUI署名、原样保留程序中所有“哥哥科技”样式完全不变且轻松可见，是使用本软件代码的合法性的前置条件。
        </div><div style="font-size:12px;color:#555;"><svg xmlns="http://www.w3.org/2000/svg" width="110" height="18" viewBox="0 0 122 20" role="img" aria-label="Broware BY NC" style="vertical-align:middle;margin-right:6px"><defs><linearGradient id="bg1" x2="0" y2="1"><stop stop-color="#4b4b4b"/><stop offset=".5" stop-color="#333"/><stop offset="1" stop-color="#1f1f1f"/></linearGradient><linearGradient id="bg2" x2="0" y2="1"><stop stop-color="#52d58c"/><stop offset=".52" stop-color="#31bc71"/><stop offset="1" stop-color="#218b50"/></linearGradient><linearGradient id="sh" x2="0" y2="1"><stop stop-color="#fff" stop-opacity=".32"/><stop offset=".45" stop-color="#fff" stop-opacity=".08"/><stop offset=".46" stop-opacity="0"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="c"><rect width="122" height="20" rx="4"/></clipPath></defs><g clip-path="url(#c)"><path fill="url(#bg1)" d="M0 0h24v20H0z"/><path fill="url(#bg2)" d="M24 0h98v20H24z"/><path fill="url(#sh)" d="M0 0h122v20H0z"/></g><g transform="translate(4 2)"><rect width="15" height="15" rx=".6" fill="#fff"/><rect x="1" y="1" width="13" height="13" fill="#58d18d"/><path fill="#fff" d="M1 1h7v7z"/><path fill="#32bf70" d="M8 1h6v13H8z"/><path fill="#1ba856" d="M1 14h7V8l6 6z"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="11"><text x="73" y="15" fill="#000" fill-opacity=".28">Broware BY NC</text><text x="73" y="14">Broware BY NC</text></g></svg><a href="https://github.com/ucxn/Bro-Stat" target="_blank" style="color:#0059fa;text-decoration:none;font-weight:bold;">Bro-Stat 中兴光猫版1</a> <span title="构建时间：2026-10.14 21:17&#10;架构设计：哥哥科技 BroTech&#10;Bilibili UID：501430041&#10;QQ群：680464365" style="cursor:help; border-bottom:1px dotted #ccc; font-family:Consolas;">${esc(VER)}</span> | Copyright &copy; 2026 <a href="https://www.bilibili.com/video/BV19ZpB64E6D" target="_blank" style="color: #0059fa; text-decoration: none; font-weight: bold;">哥哥科技</a> (BroTech)<span style="color: #888; font-weight: normal;"> | 协助者： <a href="https://github.com/Anoritm" target="_blank" style="color: #0059fa; text-decoration: none; font-weight: bold;">山中一夜雨</a><span style="color: #888; font-weight: normal;"> |  All Rights Reserved</span>&emsp;&nbsp;<a href="https://github.com/ucxn/Bro-Stat" target="_blank" style="color: #666; text-decoration: none;">点此分享</a></div></div></div></div>`;
    document.body.append(ball, ov);
    const pin = $('#gege-pin-btn', ov), board = $('#zte-geek-board', ov);
    pin.onclick = () => { S.isPinned = !S.isPinned; board.classList.toggle('geek-frozen-pane', S.isPinned); pin.classList.toggle('active', S.isPinned); };
    const root = document.documentElement, keep = root.style.overflow;
    const toggle = show => { ov.style.display = show ? 'flex' : 'none'; ball.style.display = show ? 'none' : ''; root.style.overflow = show ? 'hidden' : keep; if (show) { if (isMain) start(); render(); } else stop(); };
    ball.onclick = () => toggle(true);
    $('#zo-x', ov).onclick = () => toggle(false);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && ov.style.display === 'flex') toggle(false); });
    if (CONFIG.autoStart && isMain) start();
    updateBall();
  }

  function updateBall() {
    const b = $('#bro-ont-ball'); if (!b) return;
    b.dataset.s = !isMain ? 'off' : S.cool ? 'bad' : 'ok';
    b.title = '哥哥科技 光猫监控' + (!isMain ? '（当前页面不是光猫主界面）' : S.cool ? '（上次读取失败，冷却后自动重试）' : '');
  }

  function renderBoard(bd, dv) {
    const g = S.gem[S.wanName], q = id => bd._q[id] ??= bd.querySelector('#' + id);
    bd._q ??= {};
    let tU = 0, tD = 0, iU = 0, iD = 0, oU = 0, oD = 0;
    for (const d of dv) { tU += d.up; tD += d.dn; iU += d.iu.tot; iD += d.id.tot; if (d.online) { oU += d.iu.tot; oD += d.id.tot; } }
    const pc = (a, b) => ((a * 100) / (b || Infinity) || 0).toFixed(1) + '%';
    q('gb-wan-up-bytes').textContent = `🔼 ${fRate(S.wanUp)}`; q('gb-wan-down-bytes').textContent = `🔽 ${fRate(S.wanDn)}`;
    q('gb-wan-up-bps').textContent = `🔼 ${fBps(S.wanUp)}`; q('gb-wan-down-bps').textContent = `🔽 ${fBps(S.wanDn)}`;
    q('gb-wan-port').textContent = S.wanName ? S.wanName + (S.lock ? '' : '（暂定）') : '--';
    q('gb-lan-up-bytes').textContent = `🔼 ${fBps(tU)}`; q('gb-lan-down-bytes').textContent = `🔽 ${fBps(tD)}`;
    q('gb-perc-up').textContent = `🔼 ${pc(tU, S.wanUp)}`; q('gb-perc-down').textContent = `🔽 ${pc(tD, S.wanDn)}`;
    q('gb-lan-up-vol').textContent = `🔼 ${fVol(iU)}`; q('gb-lan-down-vol').textContent = `🔽 ${fVol(iD)}`;
    q('gb-wan-up-vol').textContent = `🔼 ${fVol(g ? g.up.total : 0)}`; q('gb-wan-down-vol').textContent = `🔽 ${fVol(g ? g.dn.total : 0)}`;
    q('gb-cur-up-vol').textContent = `🔼 ${fVol(oU)}`; q('gb-cur-down-vol').textContent = `🔽 ${fVol(oD)}`;
    q('gb-int-up-vol').textContent = `🔼 ${fVol(S.wanIntU.tot)}`; q('gb-int-down-vol').textContent = `🔽 ${fVol(S.wanIntD.tot)}`;
    q('gb-ratio-display').innerHTML = `<b><span class="c-up">${pc(iU, S.wanIntU.tot)}</span>，<span class="c-down">${pc(iD, S.wanIntD.tot)}</span></b>`;
    q('gb-abs-up-vol').textContent = `🔼 ${fBy(S.wanRawU)}`; q('gb-abs-down-vol').textContent = `🔽 ${fBy(S.wanRawD)}`;
    画总速率图(bd);
  }

  // —— 原生终端卡片（华为版结构：图标与协商速率在左，上行细条在简介下，比值条与下行细条在信息栏，速率条带火花线在右） ——
  const CARD = `<div class="config-item-box"><div class="logo"><div class="dev-logo"></div><div class="dev-intro"><div class="dev-name-row"><div class="dev-name"></div><div class="gege-rssi"></div></div><div class="gege-online-time"></div><div class="gege-up-box"><div class="t-row c-up"><span>↑ <span class="v-vol"></span></span><span class="v-pct"></span></div><div class="zte-thin-bar"><div class="zte-thin-bar-inner up"></div></div></div></div></div>
<div class="info"><div class="dev-ip"><span></span><i></i></div><div class="gege-ratio-box"><div class="gege-ratio-top"><span class="v-port"></span><span class="v-interval" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:normal;font-size:12.5px;opacity:.75;letter-spacing:.5px"><span class="c-up"></span><span style="color:#666;margin:0 3px">，</span><span class="c-down"></span></span><span class="v-rt-pct"></span></div><div class="gege-ratio-bar"><div class="gege-ratio-bar-inner"></div></div></div><div class="gege-down-box"><div class="t-row c-down"><span>↓ <span class="v-vol"></span></span><span class="v-pct"></span></div><div class="zte-thin-bar"><div class="zte-thin-bar-inner down"></div></div></div></div>
<div class="speed"><div class="zte-enhance-speed"><div class="zte-bar-wrap zte-bar-up"><span class="v-val"></span><span class="v-spark"></span><span class="v-pct"></span></div><div class="zte-bar-wrap zte-bar-down"><span class="v-val"></span><span class="v-spark"></span><span class="v-pct"></span></div></div></div></div>`;

  function 比值(hqU, hqD) {
    if (CONFIG.calcMode === 1) {
      const rt = hqD > 0 ? hqU / hqD : (hqU > 0 ? Infinity : 0);
      if (rt > CONFIG.ratioExtremeUp) return ['#ff4c00', (rt === Infinity ? '∞' : rt.toFixed(2)) + '⚠️'];
      if (rt > CONFIG.ratioWarnUp) return ['#ff4c00', (rt * 100).toFixed(1) + '%'];
      if (rt > CONFIG.ratioExtremeDown) return ['#0059fa', (rt * 100).toFixed(1) + '%'];
      const rRt = hqU > 0 ? hqD / hqU : (hqD > 0 ? Infinity : 0);
      return ['#0059fa', (rRt === Infinity ? '∞' : rRt.toFixed(1)) + 'x'];
    }
    const bR = (hqU + hqD) > 0 ? hqU * 100 / (hqU + hqD) : 0;
    return [bR > CONFIG.ratioThreshold ? '#ff4c00' : '#0059fa', bR.toFixed(1) + '%'];
  }

  function renderDevs(host, dv) {
    const grp = host._g ??= Object.fromEntries([...host.querySelectorAll('.gege-section')].map(s => [s.dataset.b, { t: s.querySelector('.config-title'), e: s.querySelector('.gege-empty-state'), l: s.querySelector('.gl'), n: 0 }]));
    grp['5G'].t.textContent = `无线设备（${频段名('5G')}Hz）`; grp['2.4G'].t.textContent = '无线设备（2.4GHz）';
    for (const k in grp) grp[k].n = 0;
    let sU = 0, sD = 0, iU = 0, iD = 0;
    for (const d of dv) { sU += d.up; sD += d.dn; iU += d.iu.tot; iD += d.id.tot; }
    const inv_sU = sU > 0 ? 100 / sU : 0, inv_sD = sD > 0 ? 100 / sD : 0, inv_iU = iU > 0 ? 100 / iU : 0, inv_iD = iD > 0 ? 100 / iD : 0;
    const 节点 = Object.fromEntries(S.nodes.map(n => [n.sfx, n]));
    const clU = Math.max(4e6, S.wanUp * .1), clD = Math.max(4e6, S.wanDn * .125);
    for (const d of [...dv.filter(d => d.online), ...dv.filter(d => !d.online)]) { // 在线在前，组内保持首次出现的顺序
      const k = d.access === '2' ? '5G' : '2.4G', G = grp[k]; G.n++;
      let it = d.el;
      if (!it) { it = d.el = document.createElement('div'); it.className = 'gege-list-item'; it.innerHTML = CARD; it._c = {}; }
      it.parentNode === G.l && it === G.l.children[G.n - 1] || G.l.insertBefore(it, G.l.children[G.n - 1] || null);
      it.classList.toggle('off', !d.online);
      const c = it._c, q = s => c[s] ??= it.querySelector(s);
      // 信号：漏桶防抖（仅 −23 / −34 / −40 / −55 敏感边界）
      let rRs = +d.rssi || 0; const lRs = d.lRs ?? rRs;
      if (rRs) {
        if (((rRs > -23) !== (lRs > -23) || (rRs > -34) !== (lRs > -34) || (rRs > -40) !== (lRs > -40) || (rRs > -55) !== (lRs > -55)) && Math.abs(rRs - lRs) + (d.dbC || 0) < 5) { rRs = lRs; d.dbC = ((d.dbC || 0) + 1) & 7; }
        else { d.dbC = 0; d.lRs = rRs; }
      }
      const 协商 = `${d.mode ? esc(d.mode.replace('802.11', '')) + ' ' : ''}${esc(d.phyTx)}M`;
      if (c.icon !== rRs + 协商) { c.icon = rRs + 协商; q('.dev-logo').innerHTML = getIconSvg(rRs || -99) + `<div class="dev-rate" title="协商 Tx/Rx：${esc(d.phyTx)}/${esc(d.phyRx)} Mbps">${协商}</div>`; }
      q('.dev-name').textContent = d.name || '未知'; q('.dev-name').title = d.name || '';
      const p = d.rssi ? Math.round((+d.rssi + 93 - (k === '2.4G' ? S.衰减 : 0)) * 2 - 37) : 0;
      q('.gege-rssi').innerHTML = d.rssi ? `<span style="color:${p < 0 ? '#ff4c00' : 'inherit'}">${p}%</span>, ${esc(d.rssi)}` : '';
      q('.gege-online-time').textContent = d.online ? '在线：' + fOT(d.assoc) : '离线';
      const hqU = d.iu.tot, hqD = d.id.tot, up = hqU * inv_iU, dp = hqD * inv_iD;
      q('.gege-up-box .v-vol').textContent = fVol(hqU); q('.gege-up-box .v-pct').textContent = up.toFixed(1) + '%'; q('.gege-up-box .zte-thin-bar-inner').style.width = Math.min(up, 100) + '%';
      q('.dev-ip span').textContent = d.ip || ''; q('.dev-ip i').textContent = d.mac;
      const nd = 节点[d.owner];
      q('.v-port').textContent = 频段名(k) + (nd && /AGENT/i.test(nd.role || '') ? ' · ' + nd.name.replace(/^ZTE:/, '') : '');
      q('.v-interval .c-up').textContent = fSV(hqU); q('.v-interval .c-down').textContent = fSV(hqD);
      const [col, txt] = 比值(hqU, hqD), rt = q('.v-rt-pct'); rt.textContent = txt; rt.style.color = col;
      q('.gege-ratio-bar-inner').style.width = Math.min((hqU + hqD) > 0 ? hqU * 100 / (hqU + hqD) : 0, 100) + '%';
      q('.gege-down-box .v-vol').textContent = fVol(hqD); q('.gege-down-box .v-pct').textContent = dp.toFixed(1) + '%'; q('.gege-down-box .zte-thin-bar-inner').style.width = Math.min(dp, 100) + '%';
      const pu = d.up * inv_sU, pd = d.dn * inv_sD, bU = q('.zte-bar-up'), bD = q('.zte-bar-down');
      let mU = clU, mD = clD; for (let i = 32; i--;) { if (d.hU[i] > mU) mU = d.hU[i]; if (d.hD[i] > mD) mD = d.hD[i]; }
      bU.style.setProperty('--p-up', Math.min(pu, 100) + '%'); bD.style.setProperty('--p-down', Math.min(pd, 100) + '%');
      q('.zte-bar-up .v-val').textContent = `🔼 ${fRate(d.up)}`; q('.zte-bar-up .v-spark').textContent = getSpark(d.hU, d.hIdx, mU); q('.zte-bar-up .v-pct').textContent = pu.toFixed(1) + '%';
      q('.zte-bar-down .v-val').textContent = `🔽 ${fRate(d.dn)}`; q('.zte-bar-down .v-spark').textContent = getSpark(d.hD, d.hIdx, mD); q('.zte-bar-down .v-pct').textContent = pd.toFixed(1) + '%';
    }
    for (const k in grp) grp[k].e.style.display = grp[k].n ? 'none' : '';
  }

  function render() {
    updateBall();
    const ov = $('#bro-ont-ov'); if (!ov || ov.style.display !== 'flex') return;
    const bd = $('.bd', ov);
    bd.classList.toggle('offpage', !isMain);
    if (!isMain) { // 广泛匹配也会进到登录页等页面：明确告诉用户脚本已运行，只是页面不对
      $('#zo-st').textContent = '未采样';
      $('#zo-alert').innerHTML = `<div class="help"><div class="help-t">🧭 脚本已正常运行（V${esc(VER)}），但当前页面（${esc(location.pathname)}）没有可采样的数据，请按你的设备类型选择：</div>`
        + '<div>• 如果你使用的是<b>中兴光猫</b>（E8 / gch 老式界面）：请先登录光猫后台，脚本只在登录后的主界面开始采样；若已登录仍看到这条提示，说明你的固件外壳页地址不同，请联系开发者，使用 Chrome 浏览器的 <b>F12 → 网络（Network）</b> 抓包发给我适配。</div>'
        + '<div>• 如果你使用的是<b>中兴家用消费级路由器</b>，例如常见的问天、巡天、晴天、星云、小方糖等系列：请进入主项目 <a href="https://github.com/ucxn/ZTE-Stat_Max" target="_blank" rel="noopener">ZTE-Stat_Max</a> 下载，那边才是为你的设备做的完整版。</div>'
        + '<div>• 如果你使用的是<b>其它品牌的路由器</b>：请打开 <a href="https://github.com/ucxn/Bro-Stat" target="_blank" rel="noopener">Bro-Stat 项目</a>，安装对应品牌的版本。</div>'
        + '<div>• 若以上都对不上号，请联系开发者，并使用<b>视频</b>的方式进行协助。</div></div>';
      return;
    }
    $('#zo-st').textContent = S.cool ? `冷却中 · 轮次 ${S.tick}` : `终端 ${CONFIG.refreshInterval}s · 外网 ${CONFIG.refreshInterval * CONFIG.ponEvery}s · 轮次 ${S.tick}`;
    const ago = k => { const a = (Date.now() - S.ok[k]) / 1000; return a < 90 ? Math.round(a) + 's前' : Math.round(a / 60) + 'min前'; };
    const strip = [['pon', '外网'], ['topo', '终端'], ['lan', 'LAN口'], ['wlan', 'Wi-Fi口']].map(([k, n]) =>
      S.err[k] ? `<span class="no" title="${esc(S.err[k])}">✗ ${n}：${esc(S.err[k])}</span>` : S.ok[k] ? `<span class="ok">✓ ${n} ${ago(k)}</span>` : `<span>… ${n}</span>`).join('');
    $('#zo-alert').innerHTML = (S.cool ? `<div class="alert">⏸ 光猫这一轮没有正常返回数据（见下方 ✗ 项），已立即收手，<span id="zo-cd"></span>秒后自动重试，期间不会再发任何请求。偶发一次不用管；如果每次都失败，通常是登录已过期，刷新页面重新登录即可。</div>` : '')
      + `<div class="strip">${strip}</div>`;
    bd.classList.toggle('stale', !!S.cool); // 冷却期间数据停留在最后一次成功采样，变灰提示
    clearTimeout(S.cdT); if (S.cool) { const cd = () => { const e = $('#zo-cd'); if (!e) return; e.textContent = Math.max(0, Math.ceil((S.coolUntil - Date.now()) / 1000)); S.cdT = setTimeout(cd, 1000); }; cd(); }
    const dv = [...S.devs.values()];
    renderBoard($('#zte-geek-board'), dv);
    // 节点
    $('#zo-nodes').innerHTML = S.nodes.length ? S.nodes.map(n => `<span class="chip">${esc(n.name)} · ${esc(n.ip)} · ${esc(n.mac)} · ${esc(n.role || '')}${n.link && n.link !== '0' ? ' · ' + esc(n.link) + 'M' : ''} · ${esc(n.ver || '')}</span>`).join('') : '<span class="mu">--</span>';
    renderDevs($('#zo-devs'), dv);
    // 端口
    const prow = (label, key, info, store, extra) => {
      const u = store[key + ':up'], d = store[key + ':dn']; if (!u || !d) return '';
      return `<tr><td>${label}</td><td>${extra}</td><td class="up">${fBps(u.rate)}</td><td class="dn">${fBps(d.rate)}</td><td>${fVol(u.total)}</td><td>${fVol(d.total)}</td><td>${fBy(info.rxB)} / ${fBy(info.txB)}</td></tr>`;
    };
    const rows = S.lanInfo.map(p => prow(esc(p.name), p.name, p, S.lanP, `${esc(p.state)} ${esc(p.speed)}`)).join('') + S.wlanInfo.map(p => prow(`Wi-Fi ${端口频段(p)} (${esc(p.ssid)})`, p.name, p, S.wlanP, `信道 ${p.ch}`)).join('');
    $('#zo-ports').innerHTML = rows ? `<table><tr><th>端口</th><th>状态</th><th>🔼 速率(30s)</th><th>🔽 速率(30s)</th><th>🔼 本次</th><th>🔽 本次</th><th>官方累计 收/发</th></tr>${rows}</table>` : '<span class="mu">采样中…（慢组首次约需数秒）</span>';
    // 其它设备
    const wl = new Set(dv.filter(d => d.online).map(d => d.mac));
    const oth = S.list.filter(x => !wl.has(x.mac));
    $('#zo-other').innerHTML = oth.length ? `<table><tr><th>设备</th><th>IP</th><th>MAC</th><th>端口</th><th>类型</th><th>RSSI</th><th>协商</th><th>剩余租期</th></tr>`
      + oth.map(x => `<tr class="${/^SSID/.test(x.port) && !x.rssi ? 'off' : ''}"><td>${esc(x.name)}</td><td>${esc(x.ip)}</td><td>${esc(x.mac)}</td><td>${esc(x.port)}</td><td>${esc(x.type)}</td><td>${esc(x.rssi || '--')}</td><td>${esc(x.speed || '--')}</td><td>${fDur(x.lease)}</td></tr>`).join('') + '</table>' : '<span class="mu">--</span>';
  }

  _w.__BRO_ONT__ = { S, CONFIG, start, render, Diff, Integ }; // 供控制台调试
  if (document.body) build(); else document.addEventListener('DOMContentLoaded', build);
})();
