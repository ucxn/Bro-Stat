// ==UserScript==
// @name            锐捷睿易路由器增强 Reyee 网页 增强 脚本 插件 网速 流量 连接数 延迟 数学统计 分析
// @name:en         Bro-Stat_Ruijie-Reyee-Stat_Max
// @namespace       ucxn
// @version         5.9.9.Re
// @description     适用于锐捷（睿易 Reyee）路由器的逐设备网速流量统计、连接数、外网延迟曲线、流量一键导出的路由器Web网页后台增强利器
// @copyright       哥哥科技. All Rights Reserved. 使用必要条件之一：不得删除源码、用户界面、文本中的任何“哥哥”；传播官方链接不限；除安装自用外任何使用传输均需查看许可证。
// @description:en  A web admin enhancement for Ruijie / Reyee routers: per-device speed and traffic statistics, connection counts, WAN latency charting and one-click traffic export.
// @author          哥哥科技 space.bilibili.com/501430041
// @noframes
// @tag             路由器 锐捷 睿易 Reyee 网络 监控 统计 数据 可视化 极客 增强 UI HA 智能 定时 后台 消费级 硬路由 家用 流量 RSSI WiFi 测控 算法
// @icon            https://scriptcat.org/api/v2/resource/image/duygQktL5QjWtkLc
// @match           *://*/cgi-bin/luci*
// @grant           GM_setValue
// @grant           GM_getValue
// @grant           unsafeWindow
// @storageName     GBNPA_Storage
// @source          https://github.com/ucxn/Bro-Stat
// @supportURL      https://www.bilibili.com/video/BV19ZpB64E6D
// @license         哥哥软件-显著署名-哥哥科技-严格 + （完整使用-署名保留-完全 OR (部分摘录-禁止演绎-署名保护-显著-哥哥科技 OR 二次开发-署名保留/保护-显著署名-署名哥哥-署名追加) AND 相同方式共享） 
// @note            发行版作者哥哥科技保留所有权利，源码本身公开，请前往 GitHub Source 区域获得授权部分
// @run-at          document-start
// @downloadURL     https://raw.githubusercontent.com/ucxn/Bro-Stat/refs/heads/main/Ruijie-1.user.js
// @updateURL       https://github.com/ucxn/Bro-Stat/raw/refs/heads/main/Ruijie-1.user.js
// ==/UserScript==

(function () {
  'use strict';

  const _w = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;

  console.log("🚀 哥哥科技 V5.9.9 引擎已装载...");

  // ======== [0] 用户极客环境变量配置区 ========
  const CONFIG = {
    readSaveData: 3, // 【历史记录】 1: 从路由器后台读档 | 0: 新局模式 | 2: 从本地长期历史读档 | 3: 启动时用后台临时值充当积分
    uiLayout: 1, // 【面板拓扑结构】 0: 经典版 | 1: 详细紧凑版(驾驶舱美学) | 2: 详细平铺版(报表流美学)
    calcMode: 1, // 1: 上行/下行倍数模式, 0: 上行占总和比例模式
    ratioExtremeUp: 10, // 极端上传判定阈值 (> 1000%)
    ratioWarnUp: 0.07, // 重度上传警告阈值 (> 7%)
    ratioExtremeDown: 0.01, // 极端下载判定阈值 (< 1%)
    ratioThreshold: 7, // (仅calcMode=0时有效) 上传占比报警阈值(%)
    lanRefreshInterval: 1, // LAN口刷新时间(秒)。锐捷后台每 1 秒刷新一次，更快只会拿到重复值
    wanRefreshInterval: 1, // WAN口刷新时间(秒)，同上
    宽带最大外网上行速率: 3e8,
    宽带最大外网下行速率: 24e8, // 配置外网最大上传|下载比特(bit/bps)速率，请略微大于真实值；500兆为5e8，一千兆1e9
    盲漫游: undefined, //也就是无线交换机（AP/有线桥接）模式，无线设备被主路由识别为有线设备则设置1
    周期类型: 'M', // 'M'(每月), 'W'(每周), 'D'(固定天数), 其它任意字符：不开启周期重置+自动导出功能
    周_天设置: 1, // M: 1~31号; W: 0~6(周日~周六); D: 间隔天数(如 7)
    基准日期: '2026-11-16', // 原点时间(仅 D 模式有效) 任意一个历史周期的零点
    报告时间: -540, // 提示时间：相对周期0点的偏移分钟数。(如 -4320 代表提前 3 天) 设置相对指定日期的下个周期起点的时间偏移量
    自动导出: 0, // 强制导出：相对周期0点的偏移分钟数。(如 W模式+锚点6(周六)+偏移-180 = 周五 21:00 强制导出清零)
    时区补偿: 28800000, // 默认 UTC+8 时区补偿量。
    portMap: {
      "有线": "有线",
      "2.4G": "2.4G",
      "5G": "5.2G", 
      "6G": "极速",
      "MLO": "MLO"
    }
  };
  const S = {
    wInstUp: 0,
    wInstDn: 0,
    wTotUp: 0,
    wTotDn: 0,
    cls: {}, isPinned: !0,
    w2U: 0, w2D: 0, w2TotUp: 0, w2TotDn: 0, w2LT: undefined,
    hasW2: !1, fI: 0,
    _domRebuilt: !1, _lastPanelState: null, oDC: null, Warn_MS: 0, Force_MS: 0, _RST: !1,
    aWu: 0, aWd: 0, lwTU: 0, lwTD: 0, cSnap: null,
    lTotUp: 0, lTotDn: 0, lInstU: 0, lInstD: 0, lLT: undefined,
    总上行图: new Float64Array(8192), 总下行图: new Float64Array(8192), 总图点数: 0,
    wMaxU: 0, wMaxD: 0, wMinU: Infinity, wMinD: Infinity, 图表拖: null, 图表待画: 0
  };
  // 锐捷专属状态：auth 与 ping 均由页面自身请求被动截获；计数器按字节自行累计
  const 锐 = {
    auth: null, ov: null, 错误: '', 计数: Object.create(null), 连接比: 0, 射频: null, 射频取中: !1, 信道文: '', 信道24: 0, 信道5: 0, 衰减: 0,
    延迟: null, 丢包: 0, 延迟时刻: 0, 延迟图: new Float64Array(1024), 延迟点数: 0
  };

  // 信道变化时一次性算好：5G 面板文案（≥149 为 5.8G，否则 5.2G）与 2.4G 的 RSSI 频率修正（dB）
  function 锐应用信道(c24, c5) {
    if (c24 === 锐.信道24 && c5 === 锐.信道5) return;
    锐.信道24 = c24; 锐.信道5 = c5;
    锐.衰减 = 20 * Math.log10((5000 + 5 * c5) / (2407 + 5 * c24));
    CONFIG.portMap['5G'] = c5 > 148 ? '5.8G' : '5.2G';
    window.gegeForceUIRedraw = !0;
  }
  锐应用信道(6, 60); // 读到真实信道之前的占位
  // 状态行「射频」里 高速 频段的显示文案：按信道查表（仅此处使用；面板分组标题仍走 portMap 的 5.2G/5.8G 二分）
  const 锐频段 = {32:'5.1G',36:'5.2G',40:'5.2G',44:'5.2G',48:'5.2G',52:'5.2G',56:'5.3G',60:'5.3G',64:'5.3G',100:'5.5G',104:'5.5G',108:'5.5G',112:'5.5G',116:'5.5G',120:'5.6G',124:'5.6G',128:'5.6G',132:'5.6G',136:'5.6G',140:'5.7G',144:'5.7G',149:'5.8G',153:'5.8G',157:'5.8G',161:'5.8G',165:'5.8G',184:'4.9G',188:'4.9G',192:'4.9G',196:'4.9G'};

  // ======== [1] 被动截获：auth（任意 /api/ 请求）与外网延迟（概览页每秒一次的 ping） ========
  function 收延迟(txt) {
    const j = JSON.parse(txt), d = typeof j.data === 'string' ? JSON.parse(j.data) : j.data, p = d && d.ping;
    if (!p || !isFinite(+p.avg)) return;
    const v = +p.avg;
    if (p.time && p.time === 锐.延迟时刻 && 锐.延迟点数 > 0) 锐.延迟图[(锐.延迟点数 - 1) & 1023] = v; // 同一秒重复上报：覆盖不追加
    else { 锐.延迟图[锐.延迟点数 & 1023] = v; 锐.延迟点数++; }
    锐.延迟 = v; 锐.丢包 = +p.loss || 0; 锐.延迟时刻 = p.time || 0;
    const ol = document.getElementById('gege-global-overlay');
    if (ol && ol.style.display === 'block') 画锐行();
  }
  (() => {
    const XP = _w.XMLHttpRequest && _w.XMLHttpRequest.prototype;
    if (!XP) return;
    const oOpen = XP.open, oSend = XP.send, oSet = XP.setRequestHeader;
    XP.open = function (m, u) {
      const s = String(u), k = /[?&]auth=([0-9a-f]+)/.exec(s);
      if (k) { const 首次 = !锐.auth; 锐.auth = k[1]; if (首次) setTimeout(锐取射频); } // 网页打开后读取一次射频信道
      this.__gegeU = s;
      return oOpen.apply(this, arguments);
    };
    // 官方页面发请求时签名就明文挂在请求头上：记下来，send 时交给 锐学 按模块名整条照抄
    XP.setRequestHeader = function (n, v) {
      if (n === 'Content-Accept') this.__gegeCa = v; else if (n === 'Contents-Accept') this.__gegeCsa = v;
      return oSet.apply(this, arguments);
    };
    XP.send = function (b) {
      if (typeof b === 'string' && b.indexOf('"method":"ping"') !== -1 && (this.__gegeU || '').indexOf('/api/system') !== -1) {
        this.addEventListener('load', function () { 收延迟(this.responseText); });
      }
      if (this.__gegeCsa && (this.__gegeU || '').indexOf('/api/cmd') !== -1) try { 锐学(b, this.__gegeCa, this.__gegeCsa); } catch (e) { console.warn('[Ruijie] 官方请求解析失败', e); } // 这里抛错会连累官方请求本身，必须兜住
      return oSend.apply(this, arguments);
    };
  })();

  // ======== [2] 主动取数：签名绑定请求体的每一个字节（Content-Accept 随长度、Contents-Accept 随内容），与会话无关 ========
  // 请求体就是一句 JSON 指令：method 动作 + module 模块；cmdArr 是把几条指令打包，返回数组，一条一格。
  // 下面三条及其签名抄自 EW5100BE-PRO 官方页面，作初始值；m 是要的模块，i 是它在返回数组里的位置（-1 表示单条请求，返回本身就是结果）
  const 锐请求 = {
    ov: { m: 'overview', i: -1, body: '{"method":"devSta.get","params":{"module":"overview","noParse":false,"async":null,"remoteIp":false,"device":"pc"}}',
      ca: '0a02ec86281388dc9c23987f67609885', csa: 'e29be7fc26168f4c0addfa6146da910d' },
    ul: { m: 'user_list', i: 0, body: '{"method":"cmdArr","params":{"device":"pc","params":[{"method":"devSta.get","params":{"module":"user_list","noParse":true,"async":null,"remoteIp":false,"data":{"devType":"all","dataType":"timely"}}},{"method":"acConfig.get","params":{"module":"wirelessMacFilter","noParse":false,"async":null,"remoteIp":false}}]}}',
      ca: 'b3011dc5550b351d6ef7935602aa6b40', csa: '23241979c5f2f63c22b3d59ec531e44e' },
    // 官方页面「设备列表」同款请求：user_list+flow+port_status+ap_list，只取 ap_list（射频信道/占用）
    ap: { m: 'ap_list', i: 3, body: '{"method":"cmdArr","params":{"device":"pc","params":[{"method":"devSta.get","params":{"module":"user_list","noParse":true,"async":null,"remoteIp":false,"data":{"devType":"all","dataType":"timely"}}},{"method":"devSta.get","params":{"module":"flow","noParse":true,"async":null,"remoteIp":false,"data":{"func":"interface_info"}}},{"method":"devSta.get","params":{"module":"port_status","noParse":true,"async":null,"remoteIp":false}},{"method":"devSta.get","params":{"module":"ap_list","noParse":true,"async":null,"remoteIp":false}}]}}',
      ca: '0cfc3dc6fb02046b214b396eb0b20b71', csa: 'a6daf4986b6f0869804ee5587d7e6d2b' }
  };
  // 学官方请求：同一条请求体只刷新签名；含同一模块的其它官方请求整条记作候选（只留最短的，免得每秒轮询大请求），
  // 当前这条失败了才换上候选。同一机型上硬编码那条一直成功，就永远不会被换掉
  function 锐学(b, ca, csa) {
    const j = JSON.parse(b), 子 = j.method === 'cmdArr' ? j.params.params : [j];
    for (const q of Object.values(锐请求)) {
      if (q.body === b) { q.ca = ca; q.csa = csa; }
      else {
        const i = 子.findIndex(s => s.method === 'devSta.get' && s.params?.module === q.m);
        if (i < 0 || (q.备 && b.length > q.备.body.length)) continue;
        q.备 = { body: b, ca, csa, i: j.method === 'cmdArr' ? i : -1 };
        if (q.坏) Object.assign(q, q.备);
      }
      if (q.坏 && q.m === 'ap_list') setTimeout(锐取射频); // 射频不在每秒循环里：上次失败、这次拿到可用的签名或候选，就补读一次
    }
  }
  const 锐飞行 = Object.create(null); // 几条需求抄到同一条请求时，同一时刻只发一次
  async function 锐取(k) {
    const q = 锐请求[k], { body, i } = q; // 发出时就固定位置：等待期间学到新候选、q 被换掉，也不会取错格
    try {
      const j = await (锐飞行[body] ??= fetch(`/cgi-bin/luci/api/cmd?auth=${锐.auth}`, {
        method: 'POST', credentials: 'same-origin', body,
        headers: { 'Content-Type': 'application/json;charset=UTF-8', 'Content-Accept': q.ca, 'Contents-Accept': q.csa }
      }).then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); }).finally(() => delete 锐飞行[body]));
      if (j.code !== 0) throw new Error('code ' + j.code);
      q.坏 = !1;
      return i < 0 ? j.data : j.data[i];
    } catch (e) { q.坏 = !0; if (q.备) Object.assign(q, q.备); throw e; }
  }
  // 射频信道：只在「网页打开后」与「每次点开面板」各读一次，不进 1 秒循环。channel 形如 "auto-6,auto-60"，与 band/chutil/channf 按逗号逐项对应
  async function 锐取射频() {
    if (!锐.auth || 锐.射频取中) return;
    锐.射频取中 = !0;
    try {
      const a = (await 锐取('ap'))?.list?.[0];
      if (!a) return;
      const 拆 = s => String(s || '').split(','), 取信道 = s => +s.slice(s.lastIndexOf('-') + 1), // "auto-60"→60；"36"→36
        ch = 拆(a.channel), u = 拆(a.chutil), r = {};
      拆(a.band).forEach((k, i) => { r[k] = { ch: 取信道(ch[i]), util: +u[i] }; });
      锐应用信道(r['2.4G']?.ch || 锐.信道24, r['5G']?.ch || 锐.信道5);
      锐.射频 = r;
      锐.信道文 = Object.entries(r).map(([k, v]) => `${(k === '5G' && 锐频段[v.ch]) || CONFIG.portMap[k] || k} 信道${v.ch} 占用${v.util}%`).join('｜');
    } catch (e) { console.warn('[Ruijie] 读取射频信道失败，沿用客户端信道', e); }
    finally { 锐.射频取中 = !1; }
  }
  // 锐捷设备计数器（字节，字符串）：绝对值偶发整 ±2^32 跳变（低 32 位被当作有符号数扩展），只信相邻差值。
  // 差值先模 2^32 再折算到 ±2^31；负值或超出物理上限视为掉线重连/归零，交给计数回退逻辑处理。
  function 锐计数(key, s, now) {
    let v;
    try { v = BigInt(s || 0); } catch (e) { return 锐.计数[key]?.acc ?? 0; }
    const 绝对 = () => { let x = v >= 9223372036854775808n ? v - 18446744073709551616n : v; if (x < 0n) x += 4294967296n; return Number(x) * 8; };
    const c = 锐.计数[key];
    if (!c) return (锐.计数[key] = { v, acc: 绝对(), t: now }).acc;
    if (v === c.v) return c.acc;
    let d = Number((v - c.v) & 0xFFFFFFFFn);
    if (d >= 2147483648) d -= 4294967296;
    if (d < 0 || d > 3.125e8 * Math.max(1, (now - c.t) * 0.001) + 67108864) c.acc = 绝对(); // 上限：2.5Gbps × 间隔 + 64MiB
    else c.acc += d * 8;
    c.v = v; c.t = now;
    return c.acc;
  }
  function 锐在线秒(t) {
    if (!t) return 0;
    const ms = new Date(String(t).replace(' ', 'T')).getTime();
    return isFinite(ms) ? Math.max(0, (Date.now() - ms) / 1000) : 0;
  }

  S.calcTime = (L) => {
    S.Force_MS = (CONFIG.周期类型 === 'M' ? Date.UTC(new Date(L).getUTCFullYear(), new Date(L).getUTCMonth() + (L >= Date.UTC(new Date(L).getUTCFullYear(), new Date(L).getUTCMonth(), CONFIG.周_天设置) ? 1 : 0), CONFIG.周_天设置) : (CONFIG.周期类型 === 'W' ? Date.UTC(new Date(L).getUTCFullYear(), new Date(L).getUTCMonth(), new Date(L).getUTCDate()) + ((CONFIG.周_天设置 - new Date(L).getUTCDay() > 0 ? CONFIG.周_天设置 - new Date(L).getUTCDay() : CONFIG.周_天设置 - new Date(L).getUTCDay() + 7) * 86400000) : (CONFIG.周期类型 === 'D' ? Date.parse(CONFIG.基准日期 + 'T00:00:00Z') + (Math.floor((L - Date.parse(CONFIG.基准日期 + 'T00:00:00Z')) / (CONFIG.周_天设置 * 86400000)) + 1) * CONFIG.周_天设置 * 86400000 : Infinity))) - CONFIG.时区补偿;
    S.Warn_MS = S.Force_MS + CONFIG.报告时间 * 60000;
    S.Force_MS += CONFIG.自动导出 * 60000;
  };S.calcTime((typeof GM_getValue !== 'undefined' && GM_getValue('gege_reset_ms')) ? (GM_getValue('gege_reset_ms') + CONFIG.时区补偿) : Date.now() + CONFIG.时区补偿);
  if (typeof GM_getValue !== 'undefined' && GM_getValue('gege_reset_ms') >= Math.min(S.Warn_MS, S.Force_MS)) S.calcTime(S.Force_MS - CONFIG.自动导出 * 60000 + 1000 + CONFIG.时区补偿);
  const ESC_MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' };
  function escapeHTML(str) {
    return str ? String(str).replace(/[&<>'"]/g, m => ESC_MAP[m]) : '';
  }
  let isF = !1;
  const 版本号 = (typeof GM_info !== 'undefined' && GM_info.script?.version) || '环境不支持获取版本号';
  // 锐捷版：最小单位固定为 kbps / kB/s（不降到 bps），小数位数不设上限、取到除尽为止。
  // 整数 bit/s 除以 1000 或 8000 必是有限小数（≤3 / ≤6 位）：单次除法是 IEEE 正确舍入，Number 转字符串又是“最短往返表示”，有限小数会原样打印、尾零自然消失。
  // 注意必须用除法：0.000125 在二进制里存不准，乘出来差 1ulp，会打印成 0.0011250000000000001（穷举 0~8388607 有 14% 中招）。
  function fB(bps) {
    if (bps > 1e9) return `${(bps * 1e-6).toFixed(1)} Mbit/s`;
    if (bps > 1e6) return `${(bps * 1e-6).toFixed(2)} Mbps`;
    return `${Math.round(bps) / 1000} kbps`; // 先取整：均值等非整数 bit/s 否则会打印出一长串
  }
  function fBy(bps) {
    if (bps === 0.1) return '智能拦截中...'; if (bps === 0.2) return '漫游中...'; if (bps === 0.3) return '异常网速！'; // 必须大于0的数字，否则数据异常会影响积分计算和数值类型
    return bps > 8388607 ? `${(bps * 1.1920928955078125e-7).toFixed(2)} MiB/s` : `${Math.round(bps) / 8000} kB/s`;
  }

  function fV(bits) {
        if (bits > 8589934592) return `${(bits / 8589934592).toFixed(4)} GiB`;
        if (bits > 8388608) return `${(bits / 8388608).toFixed(4)} MiB`;
        if (bits > 8192) return `${(bits / 8192).toFixed(2)} KiB`;
        return `${Math.round(bits / 8)} B`;
    }

  function fVD(bitsIntegral, bitsOfficial) {
        if (bitsIntegral > 8796093022208) return `${(bitsOfficial / 8796093022208).toFixed(4)} | ${(bitsIntegral / 8796093022208).toFixed(4)} TiB`;
        if (bitsIntegral >= 83886080000) return `${(bitsOfficial / 8589934592).toPrecision(5)} | ${(bitsIntegral / 8589934592).toPrecision(5)} GiB`;
        if (bitsIntegral > 8388608000) return `${(bitsOfficial / 8388608).toFixed(3)} | ${(bitsIntegral / 8388608).toFixed(3)} MiB`;
        if (bitsIntegral > 8388608) return `${(bitsOfficial / 8388608).toFixed(3)} | ${(bitsIntegral / 8388608).toFixed(3)} MiB`;
        if (bitsIntegral > 8192) return `${(bitsOfficial / 8192).toFixed(2)} | ${(bitsIntegral / 8192).toFixed(2)} KiB`;
        return `${Math.round(bitsOfficial / 8)} | ${Math.round(bitsIntegral / 8)} B`;}

  function fSV(bits) {
    if (bits >= 84607500288) return `${(bits / 8589934592).toPrecision(4)}G`;
	  if (bits > 8388608000) return `${Math.round(bits / 8388608)}M`;
    if (bits > 8388608) return `${(bits / 8388608).toPrecision(4)}M`;
    if (bits >= 8192) return `${(bits / 8192).toFixed(1)}K`;
    return `${Math.round(bits / 8)}B`;}

  function fOT(totalSec) {
		totalSec = totalSec | 0;
        if (totalSec < 0) return "";
		const d = (totalSec / 86400) | 0;
		let r = totalSec - d * 86400;
		const h = (r / 3600) | 0;
		r = r - h * 3600;
		const m = (r / 60) | 0;
		const s = r - m * 60;
        return d > 0
        ? `${d}天${h}时${m}分${s}秒`
        : `${h}小时${m}分${s}秒`;}

  function nM(m) {
    return m ? m.toLowerCase().replace(/-/g, ':').replace(/\s/g, '') : '';
  }

  function 挂样式() {
  const st = document.createElement('style');
  st.innerHTML = `.config-item{
        clear:both;}.config-item-box{display:flex!important;
        align-items:stretch!important;padding-bottom:
        12px!important;}.config-item .logo{width:33%!important;
        float:none!important;display:flex!important;flex-direction:row;}.config-item .dev-intro{flex:1;display:flex!important;flex-direction:column;justify-content:flex-start;min-height:20px;padding-bottom:0!important;margin-bottom:0!important;}.config-item .info{width:27%!important;float:none!important;display:flex!important;flex-direction:column;justify-content:flex-start;padding:0 10px!important;border-right:1px solid #eee;}.config-item .speed{width:40%!important;float:none!important;display:flex!important;flex-direction:column;justify-content:center;padding:0 10px!important;}.geek-row{display:flex;justify-content:space-between;align-items:center;white-space:nowrap;height:20px;}
    .geek-label{width:110px;color:#333;font-weight:bold;}.geek-val-box{flex:1;display:flex;gap:15px;margin-left:10px;}.geek-fixed-width{display:inline-block;width:120px;}.geek-right-box{text-align:right;min-width:220px;font-weight:bold;}.c-up{color:#ff4c00;}.c-down{color:#0059fa;}.gege-up-box,.gege-down-box{margin-top:auto!important;margin-bottom:0!important;width:95%;}.gege-ratio-box{margin-top:10px;width:95%;margin-bottom:5px;}.t-row{font-size:12px;font-weight:bold;margin-bottom:2px;display:flex;justify-content:space-between;font-family:system-ui, sans-serif;}.zte-thin-bar{width:100%;height:3px;background:rgba(0,0,0,0.05);border-radius:1.5px;overflow:hidden;}.zte-thin-bar-inner{height:100%;transition:width 0.5s ease-out;}.zte-thin-bar-inner.up{background:#ff4c00;}.zte-thin-bar-inner.down{background:#0059fa;}.gege-ratio-top{display:flex;justify-content:space-between;font-size:12px;font-weight:bold;margin-bottom:2px;}.gege-ratio-bar{width:100%;height:4px;background:#0059fa;border-radius:2px;overflow:hidden;}.gege-ratio-bar-inner{height:100%;background:#ff4c00;transition:width 0.5s ease-out;}.zte-enhance-speed{display:flex;flex-direction:column;gap:6px;width:100%;font-family:system-ui, sans-serif;}
    .zte-bar-wrap{position:relative;width:100%;border-radius:4px;border:1px solid;font-size:13px;font-weight:bold;overflow:hidden;padding:3px 8px;display:flex;justify-content:space-between;align-items:center;z-index:1;box-sizing:border-box;}.zte-bar-wrap span{font-size:inherit;font-weight:inherit;}.zte-bar-up{color:#ff4c00;border-color:rgba(255,76,0,0.3);}.zte-bar-down{color:#0059fa;border-color:rgba(0,89,250,0.3);}.zte-bar-up::before{content:'';position:absolute;left:0;top:0;bottom:0;z-index:-1;background:rgba(255,76,0,0.12);width:var(--p-up,0%);transition:width 0.5s;}.zte-bar-down::before{content:'';position:absolute;left:0;top:0;bottom:0;z-index:-1;background:rgba(0,89,250,0.12);width:var(--p-down,0%);transition:width 0.5s;}#config-list.gege-list-container{contain:content!important;background-color:#ffffff!important;border-radius:8px!important;border:1px solid #e0e0e0!important;padding:20px 30px!important;box-shadow:0 2px 10px rgba(0,0,0,0.02)!important;margin-top:10px!important;}.gege-section{margin-bottom:10px;}
    .gege-section:last-child{margin-bottom:0;}.gege-list-container .config-title{font-size:16px!important;font-weight:bold!important;color:#333!important;margin:15px 0 10px 0!important;padding-bottom:5px!important;}.gege-list-container .gege-section:first-child .config-title{margin-top:0!important;}.gege-empty-state{color:#999!important;font-size:14px!important;padding:0 0 15px 5px!important;border-bottom:1px solid #f0f0f0!important;margin-bottom:5px!important;}.gege-list-item{background-color:transparent!important;border-bottom:1px solid #f0f0f0!important;padding:15px 10px!important;margin-bottom:0!important;border-radius:0!important;}
    .gege-list-item:last-child{border-bottom:none!important;}#zte-geek-board{contain:layout style;background-color:transparent!important;border-left:4px solid #0059fa!important;border-radius:0!important;padding:5px 0 5px 15px!important;margin:10px 0 15px 0!important;box-shadow:none!important;border-bottom:1px solid #f0f0f0!important;font-size:14px;display:flex;flex-direction:column;gap:6px;padding-bottom:15px!important;}#gege-global-overlay #zte-geek-board.geek-frozen-pane{position:sticky!important;top:0px!important;z-index:100!important;background-color:#f3f4f5!important;margin-top:0!important;padding-top:15px!important;box-shadow:0 10px 15px -3px rgba(0,0,0,0.05)!important;border-radius:0 0 8px 8px!important;}.gege-pin{cursor:pointer;font-size:11px;filter:grayscale(100%);opacity:0.5;transition:transform 0.2s;margin-left:2px;}
    .gege-pin.active{filter:none;opacity:1;transform:scale(1.1);}#gege-global-overlay{position:fixed;top:7.5%;right:0;bottom:0;background:#f3f4f5;z-index:9999;overflow-y:auto;padding-bottom:50px;left:0!important;border-radius:16px 16px 0 0;box-shadow:0 -5px 25px rgba(0,0,0,0.15);transition:top 0.3s ease;}@media (max-width: 768px){.geek-right-box:has(#gb-wan-zero-up),.geek-right-box:has(#gb-cur-up-vol){display:none!important}.gege-list-item{padding:12px 10px!important;position:relative!important}.config-item-box{flex-direction:column!important;padding-bottom:0!important}.config-item .info,.config-item .logo,.config-item .speed{width:100%!important;border:none!important;padding:0!important;position:static!important}.config-item .dev-intro{min-height:auto!important;justify-content:center!important;padding-right:90px!important}.config-item .logo{padding-bottom:4px!important}.config-item .info{flex-direction:column!important;margin:0 0 6px 0!important;gap:2px!important}.dev-ip{position:absolute!important;top:12px!important;right:10px!important;font-size:11px!important;background:rgba(0,89,250,0.08);color:#0059fa!important;padding:2px 6px!important;border-radius:4px;font-weight:bold;line-height:1.2;z-index:10;width:auto!important}.dev-number{width:auto!important;margin:0!important;font-size:11px!important}.gege-ratio-box{width:100%!important;margin-top:2px!important;margin-bottom:0!important}.gege-down-box{width:100%!important;margin-top:2px!important}#zte-geek-board{padding:8px!important;gap:0!important;font-size:11.5px!important}.geek-row{height:auto!important;flex-wrap:wrap!important;margin-bottom:4px!important;justify-content:flex-start!important;gap:2px 6px!important;line-height:1.3!important}.geek-label{width:auto!important;min-width:60px!important;font-size:11.5px!important;flex:0 0 auto!important}.geek-val-box{width:auto!important;flex:1 1 0%!important;display:flex!important;flex-wrap:wrap!important;margin-left:0!important;gap:2px 6px!important}.geek-fixed-width{width:auto!important}.geek-right-box{width:100%!important;flex:0 0 100%!important;text-align:left!important;font-size:11.5px!important;margin-top:2px!important;margin-left:0!important}.gege-list-container{padding:8px!important}.zte-enhance-speed{gap:4px!important}}#zte-geek-board{position:relative!important;overflow:visible!important;}#gege-speed-chart{position:absolute;z-index:25;box-sizing:border-box;cursor:move;user-select:none;touch-action:none;container-type:inline-size;}#gege-speed-chart canvas{display:block;width:100%;height:100%;}.gege-chart-head,.gege-chart-foot{position:absolute;left:clamp(28px,8%,36px);right:8px;display:flex;align-items:center;pointer-events:none;font:bold clamp(9px,2.1cqw,11px) system-ui,sans-serif;white-space:nowrap;overflow:hidden;}.gege-chart-head{top:2px;color:#111;gap:8px;}.gege-chart-head [data-gc="range"]{color:#666;font-weight:normal;overflow:hidden;text-overflow:ellipsis;margin-left:auto;}.gege-chart-foot{bottom:4px;justify-content:flex-start;gap:clamp(3px,1.1cqw,12px);}.gege-chart-foot span{min-width:0;overflow:hidden;text-overflow:ellipsis;}.gc-up{color:#ff4c00;flex:0 1 auto;}.gc-down{color:#0b5;flex:0 1 auto;}.gc-extra{color:#666;text-align:right;margin-left:auto;flex:1 1 0;min-width:0;}#gege-speed-chart .gege-chart-resize{position:absolute;right:-4px;bottom:-4px;width:13px;height:13px;border-right:3px solid #0059fa;border-bottom:3px solid #0059fa;cursor:nwse-resize;border-radius:2px;}
    .t-row,.zte-enhance-speed{font-family:Consolas;}
    @media (max-width:768px){.config-item-box{position:relative!important}.dev-ip{top:0!important;right:0!important}}
    #gege-global-overlay{color:#333;}
    .gege-conn-box{width:95%;margin-top:6px;}.gege-conn-box .gege-ratio-top{color:#7c3aed;}.gege-conn-bar{width:100%;height:4px;background:rgba(124,58,237,.14);border-radius:2px;overflow:hidden;}.gege-conn-bar-inner{height:100%;background:#7c3aed;transition:width 0.5s ease-out;}
    #gb-rj-row .geek-val-box{gap:14px;align-items:center;flex-wrap:wrap;font-weight:normal;}
    `;(document.head || document.documentElement).appendChild(st);
  }
  window.gegeRenderedMacs = new Set();
  async function rSD(ovD, ulD, now) {
    if (isF) return;
    isF = !0;
    try {
      const wanNow = now, lanNow = now;
      const wanValid = !!ovD; // 只区分“这一轮请求成功没有”：失败沿用上一轮；成功但缺字段按 0 显示
      let cWU = S.wInstUp, cWD = S.wInstDn, cI = Object.create(null);
      if (wanValid) {
        锐.ov = ovD;
        S.hasW2 = !1;
        cWU = +ovD.up_rate || 0; // 锐捷 overview 速率单位即 bit/s
        cWD = +ovD.down_rate || 0;
        记总速率图(cWU, cWD);
      }
      let cSU = 0, cSD = 0, cTot = 0;
      const hostList = ulD?.list, lanValid = Array.isArray(hostList);
      if (lanValid) {
        if (!锐.射频) { // ap_list 尚未读到时，用客户端自带的信道顶替
          let c24 = 锐.信道24, c5 = 锐.信道5;
          for (const d of hostList) if (+d.channel) { if (d.band === '5G') c5 = +d.channel; else if (d.band === '2.4G') c24 = +d.channel; }
          锐应用信道(c24, c5);
        }
        hostList.forEach(d => {
          let m = nM(d.mac);
          if (!m) return;
          const 有线 = d.connectType !== 'wireless',
            u = +d.flowUp || 0, // flowUp/flowDown 单位 bit/s，逐秒等于计数器增量 ×8
            dn = +d.flowDown || 0;
          let hn = d.hostName && d.hostName !== '*' ? d.hostName : '';
          cI[m] = {
            upRate: u, dnRate: dn, iface: 有线 ? '有线' : (d.mlo ? 'MLO' : (d.band || '无线')),
            offUp: 锐计数(m + 'u', d.up, lanNow), offDn: 锐计数(m + 'd', d.down, lanNow),
            onSec: 锐在线秒(d.onlinetime), name: d.name || hn || ("未知设备·" + m.slice(-5)), ip: d.userIp || "",
            rssi: 有线 ? 0 : (+d.rssi || 0), rate: parseInt(d.rxrate) || 0,
            conn: +d.flow_cnt || 0, ssid: d.ssid || ""
          };
          cSU += u; cSD += dn; cTot += cI[m].conn;
        });
        锐.连接比 = cTot > 0 ? 100 / cTot : 0; // 每台设备连接数占全部设备连接数之和的百分比系数
      }
      if (lanValid) S.lastCI = cI;
      else {
        cI = S.lastCI || Object.create(null);
        for (const d of Object.values(cI)) { cSU += d.upRate || 0; cSD += d.dnRate || 0; }
      }
      let ol = document.getElementById('gege-global-overlay'),
        cM = Object.keys(
          cI),
        iD = lanValid && (window.gegeForceUIRedraw || (cM.length !== window.gegeRenderedMacs.size));
      if (!iD && cM.length > 0) {
        for (let i = 0; i <
          cM.length; i++) {
          if (!window.gegeRenderedMacs.has(cM[i])) {
            iD = !0;
            break;
          }
        }
      }
      if (iD) {
        for (let m in S.cls) if (!cI[m]) {
          let ms = lanNow - S.cls[m].lUT;
          if (ms > CONFIG.lanRefreshInterval * 1000) ms = CONFIG.lanRefreshInterval * 1000;
          S.cls[m].intUp += S.cls[m].upR * ms * 0.0005;
          S.cls[m].intDn += S.cls[m].dnR * ms * 0.0005;
          S.cls[m].upR = S.cls[m].dnR = 0;
        }
      }
      if (ol && ol.style.display === 'block' && (iD || !ol.querySelector('.gege-list-item'))) {
        bVD(ol, cI); // [解耦] 将洗净去重后的 cI 字典传给画板
        window.gegeRenderedMacs = new Set(
          cM);
        window.gegeForceUIRedraw = !1;
      }
            if (wanValid && S.wLT === undefined) {
        S.wLT = wanNow;
      }
      else if (wanValid && (cWU !== S.wInstUp || cWD !== S.wInstDn)) {
        const wDt = wanNow - S.wLT;
        if (S.wInstUp > 0) { S.wTotUp += (S.wInstUp + cWU) * wDt * 0.0005; }
        else if (cWU > 0) { const wEU = cWU * 0.5 * CONFIG.wanRefreshInterval; S.wTotUp += wEU; S.wZEU = (S.wZEU || 0) + wEU; S.wZEUC = (S.wZEUC || 0) + 1; }
        if (S.wInstDn > 0) { S.wTotDn += (S.wInstDn + cWD) * wDt * 0.0005; }
        else if (cWD > 0) { const wED = cWD * 0.5 * CONFIG.wanRefreshInterval; S.wTotDn += wED; S.wZED = (S.wZED || 0) + wED; S.wZEDC = (S.wZEDC || 0) + 1; }
        S.wLT = wanNow;
      }
      if (CONFIG.readSaveData === 2 && !S.snapLoaded) { try { let sp = typeof GM_getValue !== 'undefined' ? GM_getValue('ha_snapshot') : null; S.snap = sp && sp.timestamp > (typeof GM_getValue !== 'undefined' ? (GM_getValue('gege_reset_ms', 0) || 0) : 0) ? sp : {}; if(S.snap.global) { S.wTotUp = S.wTotUp === 0 ? S.snap.global.wan_up || 0 : S.wTotUp; S.wTotDn = S.wTotDn === 0 ? S.snap.global.wan_down || 0 : S.wTotDn; S.lTotUp = S.lTotUp === 0 ? S.snap.global.lan_integral_up || 0 : S.lTotUp; S.lTotDn = S.lTotDn === 0 ? S.snap.global.lan_integral_down || 0 : S.lTotDn; } } catch(e){console.warn(e);} S.snapLoaded = !0; }
      for (const m in cI) {
        const cC = cI[m];
        const spD = (CONFIG.readSaveData === 2 && S.snap && S.snap.devices && S.snap.devices[m]) || null;
        S.cls[m] ??= {
          upR: cC.upRate, dnR: cC.dnRate, lUT: lanNow,
          intUp: CONFIG.readSaveData === 3 ? cC.offUp : (spD ? (spD.integral_up || 0) : 0), intDn: CONFIG.readSaveData === 3 ? cC.offDn : (spD ? (spD.integral_down || 0) : 0),
          uB: CONFIG.readSaveData & 1 ? 0 : (spD ? cC.offUp - (spD.up || 0) : cC.offUp),
          dB: CONFIG.readSaveData & 1 ? 0 : (spD ? cC.offDn - (spD.down || 0) : cC.offDn),
          oU: cC.offUp, oD: cC.offDn, name: spD?.name || cC.name || m, hU: new Float64Array(64), hD: new Float64Array(64), hIdx: 0, ifc: cC.iface
        };
        let cS = S.cls[m],
          dU = cC.offUp - cS.lU,
          dD = cC.offDn - cS.lD;
        if (dU < 0 || dD < 0) {
          if (dU < 0) { cS.uB += dU; cS.oU += dU; cS.dpU = cS.lU; }
          if (dD < 0) { cS.dB += dD; cS.oD += dD; cS.dpD = cS.lD; }
          cS.aR = 3;
        } else if (cS.aR === 3) {
          if (dU > 0 || dD > 0) {
            if (
            cS.dpU && dU > cS.dpU * 0.975 && cS.dpD && dD > cS.dpD * 0.975
        ) {
              if (dU < cS.dpU * 1.1 || dU < cS.dpU + CONFIG.宽带最大外网上行速率 * CONFIG.lanRefreshInterval) {
                cS.uB += cS.dpU; cS.oU += cS.dpU;
              } else { cS.uB += dU; cS.oU += dU; }
              if (dD < cS.dpD * 1.1 || dD < cS.dpD + CONFIG.宽带最大外网下行速率 * CONFIG.lanRefreshInterval) {
                cS.dB += cS.dpD; cS.oD += cS.dpD;
              } else { cS.dB += dD; cS.oD += dD; }
              cS.aR = 2;
              if (CONFIG.盲漫游 === undefined) CONFIG.盲漫游 = 1;
            } else {
              cS.aR = 0;
            }
            cS.dpU = 0; cS.dpD = 0;
          }
        }
       else if (cS.ifc !== cC.iface) { if (CONFIG.盲漫游 !== 0) cS.aR = 1; if (CONFIG.盲漫游 === 1) cS.aR = 2;}
       else if (cS.aR > 0) { cS.aR--; }
       cS.ifc = cC.iface;

      if (cC.upRate > 6e8) { cSU -= cC.upRate; cC.upRate = 0.3; }
        else if (cS.aR === 2) { cSU -= cC.upRate; cC.upRate = 0.2; }
        else if (cS.aR === 1 && cC.upRate > CONFIG.宽带最大外网上行速率 * 1.2 && cC.upRate > 32e7) { cSU -= cC.upRate; cC.upRate = 0.1; }
        if (cC.dnRate > 24e8) { cSD -= cC.dnRate; cC.dnRate = 0.3; }
        else if (cS.aR === 2) { cSD -= cC.dnRate; cC.dnRate = 0.2; }
        else if (cS.aR === 1 && (cC.dnRate > CONFIG.宽带最大外网下行速率 || cC.dnRate > 36e7)) { cSD -= cC.dnRate; cC.dnRate = 0.1; }

        if (cC.upRate !== cS.upR || cC.dnRate !== cS.dnR || cC.offUp !== cS.lU || cC.offDn !== cS.lD) {
          cS.onS = cC.onSec;

          if (cC.upRate !== cS.upR || cC.dnRate !== cS.dnR) {
            const ms = lanNow - cS.lUT;
          if (cS.upR > 0) {
          cS.intUp += (cS.upR + cC.upRate) * ms * 0.0005; }
          else if (cC.upRate > 0) {
            const eU = cC.upRate * CONFIG.lanRefreshInterval * 0.5; cS.intUp += eU; cS.zEU = (cS.zEU || 0) + eU; cS.zUC = (cS.zUC || 0) + 1; }
          if (cS.dnR > 0) { cS.intDn += (cS.dnR + cC.dnRate) * ms * 0.0005; }
          else if (cC.dnRate > 0) { const eD = cC.dnRate * CONFIG.lanRefreshInterval * 0.5; cS.intDn += eD; cS.zED = (cS.zED || 0) + eD; cS.zDC = (cS.zDC || 0) + 1; }
            cS.upR = cC.upRate;
            cS.dnR = cC.dnRate;
            cS.lUT = lanNow;
          }
        }
        if (cC.name && !cC.name.startsWith('未知设备')) cS.name = cC.name;
        cS.lU = cC.offUp;
        cS.lD = cC.offDn;
      }
      if (wanValid) { S.wInstUp = cWU; S.wInstDn = cWD; }
      if (lanValid) {
        if (S.lLT === undefined) S.lLT = lanNow;
        else if (cSU !== S.lInstU || cSD !== S.lInstD) {
          const lDt = lanNow - S.lLT;
          if (S.lInstU > 0) S.lTotUp += (S.lInstU + cSU) * lDt * 0.0005; else if (cSU > 0) S.lTotUp += cSU * 0.5 * CONFIG.lanRefreshInterval;
          if (S.lInstD > 0) S.lTotDn += (S.lInstD + cSD) * lDt * 0.0005; else if (cSD > 0) S.lTotDn += cSD * 0.5 * CONFIG.lanRefreshInterval;
          S.lLT = lanNow;
        }
        S.lInstU = cSU; S.lInstD = cSD;
      }
      rUI(cWU, cWD, cSU, cSD, cI);
    }
    catch (e) {
      console.error("[哥哥科技] 周期采样中断:", e);
    }
    finally {
      isF = !1;
    }
  }

  function buildCSV() {
    const csvQ = s => `"${s.replaceAll('"', '""')}"`; // RFC 4180：字段整体加引号，内部双引号翻倍
    const csvE = v => {
      let s = String(v ?? '');
      if (typeof v === 'string' && /^(?:\s*[=+\-@＝＋－＠]|[\t\r\n])/.test(s)) s = "'" + s; // 防表格公式注入
      return csvQ(s);
    };
    const csvRow = a => a.map(csvE).join(',');
    const csvRowT = a => a.map(v => csvQ(String(v ?? ''))).join(','); // 仅限脚本自带可信常量
    return ((sp, now, start) => '\uFEFF' + [
      csvRow([`哥哥科技 硬路由 NPU 增强系列：专用组件 ${版本号} 生成`]),
      csvRow([`统计周期：${new Date(start + CONFIG.时区补偿).toISOString().replace('T', ' ').slice(0, 19)} 至 ${new Date(now + CONFIG.时区补偿).toISOString().replace('T', ' ').slice(0, 19)} (UTC${CONFIG.时区补偿 > 0 ? '+' : ''}${CONFIG.时区补偿 / 3600000})${CONFIG.readSaveData === 1 ? ' （含路由器后台读档）' : CONFIG.readSaveData === 3 ? ' （积分以路由器后台计数为起点）' : ''}`]),
      csvRowT(['--- [全局统计] ---']),
      csvRow(['WAN总上传(bit)','WAN总下载(b)','高精全局上行(b)','高精全局下行(b)','LAN积分总上行(b)','LAN积分总下行(b)','本次在线总上行(b)','本次在线总下行(b)']),
      csvRow([Math.round(sp.global?.wan_up||0),Math.round(sp.global?.wan_down||0),Math.round(sp.global?.lan_high_up||0),Math.round(sp.global?.lan_high_down||0),Math.round(sp.global?.lan_integral_up||0),Math.round(sp.global?.lan_integral_down||0),Math.round(sp.global?.lan_off_up||0),Math.round(sp.global?.lan_off_down||0)]),
      '',
      csvRowT(['--- [设备明细] ---']),
      csvRow(['设备名称','MAC地址','IP地址','状态/接口','高精上行','高精下行','积分上行','积分下行','官方上行','官方下行']),
      ...Object.entries(sp.devices || {}).map(d => csvRow([d[1].name,d[0],d[1].ip,d[1].status,Math.round(d[1].up||0),Math.round(d[1].down||0),Math.round(d[1].integral_up||0),Math.round(d[1].integral_down||0),Math.round(d[1].raw_up||0),Math.round(d[1].raw_down||0)])),
            '',
      csvRow(['Bro-Stat@哥哥科技 https://space.bilibili.com/501430041']),
      csvRow(['项目主页: https://github.com/ucxn/Bro-Stat']),
      csvRow(['脚本下载: https://scriptcat.org/users/203510'])
    ].join('\r\n'))(
      S.cSnap || {},
      S.cSnap?.timestamp || Date.now(),
      (typeof GM_getValue !== 'undefined' ? GM_getValue('gege_reset_ms', null) : null) || performance.timeOrigin || Date.now()
    );
  }
function doSettle(nowMs) {
    S._RST = !0; // 防重入锁
    const csv = buildCSV(), a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], {type: 'text/csv;charset=utf-8;'})); a.download = `哥哥科技_路由器统计数据导出_${new Date(nowMs + CONFIG.时区补偿).toISOString().slice(2, 19).replace(/[-:]/g, '').replace('T', '_')}_${nowMs}.csv`; a.click(); // 文件
    const w = window.open('about:blank', '_blank');
    if (w) { w.document.write(`<!DOCTYPE html><html><head><title>流量结算备份</title></head><body style="background:#f3f4f5;font-family:system-ui,sans-serif;padding:40px 20px;color:#333;"><div style="background:#fff;padding:30px;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.05);max-width:850px;margin:0 auto;"><h2 style="color:#0059fa;margin-top:0;border-bottom:2px solid #f0f0f0;padding-bottom:15px;">本次数据结算周期已结束</h2><p style="font-size:14px;line-height:1.7;color:#555;"><b>哥哥科技提示您：</b>请点击下方下载按钮将 CSV 报表保存到本地。<br>若下载失败，请点击复制按钮，新建文本文档粘贴后将拓展名改为 .csv 即可。</p><button id="dl-btn" style="background:#0059fa;color:#fff;border:none;padding:12px 24px;border-radius:6px;font-weight:bold;cursor:pointer;margin-right:10px;">📥 再次下载 CSV</button><button id="cp-btn" style="background:#4caf50;color:#fff;border:none;padding:12px 24px;border-radius:6px;font-weight:bold;cursor:pointer;">📋 一键复制内容</button><div style="background:#282c34;color:#abb2bf;padding:15px;border-radius:8px;overflow-x:auto;margin-top:20px;"><pre id="csv-data" style="margin:0;font-size:13px;line-height:1.5;"></pre></div></div><script>document.getElementById('dl-btn').onclick=function(){let a=document.createElement('a');a.href=URL.createObjectURL(new Blob([document.getElementById('csv-data').textContent],{type:'text/csv;charset=utf-8;'}));a.download='哥哥科技_路由器统计数据补下_${nowMs}.csv';a.click();};document.getElementById('cp-btn').onclick=function(){let t=document.createElement('textarea');t.value=document.getElementById('csv-data').textContent;document.body.appendChild(t);t.select();try{document.execCommand('copy');alert('复制成功！');}catch(e){alert('复制失败，请手动全选复制');}document.body.removeChild(t);};</script></body></html>`); w.document.getElementById('csv-data').textContent = csv; }
    GM_setValue('gege_reset_ms', nowMs);
    document.getElementById('gb-w-bnr')?.remove(); // 预警横幅
    S.calcTime(Math.max(nowMs, S.Force_MS - CONFIG.自动导出 * 60000 + 1000) + CONFIG.时区补偿); // 瞬间算出下月/下周新线
    window.gegeForceUIRedraw = !0; // 重绘 UI
    setTimeout(() => { S._RST = !1; }, 2000); // 解开安全锁
    GM_setValue('ha_snapshot', { timestamp: nowMs, global: {}, devices: {} }); S.snap = {}; S.cSnap = null;
        S.wTotUp = S.wTotDn = S.w2TotUp = S.w2TotDn = S.lTotUp = S.lTotDn = 0; S.lLT = performance.now(); // 内存原地清零
    for (let k in S.cls) { let s = S.cls[k]; s.intUp = s.intDn = 0; s.uB = s.oU = s.lU; s.dB = s.oD = s.lD; s.hU.fill(0); s.hD.fill(0); } // 内存原地清零底表
  }

  const calcStageRatio = (W, L_int, L_hp) => {
    if (W === 0) return 1.0;
    const L_max = Math.max(L_int, L_hp);
    const L_min = Math.min(L_int, L_hp);
    const Gap = Math.abs(L_int - L_hp);
    if (L_int > 0.84 * W && L_hp > 0.75 * W && (L_max < 1.5 * W || Gap < 0.6 * W)) {
        return ((L_int + L_hp) / (2 * W));
    } else if (L_min < W && W < L_max && L_max < 1.5 * W) {
        return L_max / W;
    } else {
        return (Math.abs(L_int - W) < Math.abs(L_hp - W) ? L_int : L_hp) / W;
    }
  };
      const SPRK = [' ', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
      function getSpark(ringArr, headIdx, maxVal) {
        let s = "";
        for (let i = 16; i--; ) {
          let v = ringArr[(headIdx - i) & 63];
          s += SPRK[v > 0 ? Math.min(7, Math.max(1, ((v / maxVal) * 7) | 0)) : 0];
        }
        return s;
      }
      function 记总速率图(u, d) {
        u = u || 0; d = d || 0;
        const i = S.总图点数 & 8191;
        S.总上行图[i] = u; S.总下行图[i] = d; S.总图点数++;
        if (u > S.wMaxU) S.wMaxU = u; if (d > S.wMaxD) S.wMaxD = d;
        if (u > 0 && u < S.wMinU) S.wMinU = u; if (d > 0 && d < S.wMinD) S.wMinD = d;
      }
      function 初始化总速率图(bd) {
        let box = bd.querySelector('#gege-speed-chart');
        if (box) return box;
        box = document.createElement('div'); box.id = 'gege-speed-chart';
        box.innerHTML = '<canvas></canvas><div class="gege-chart-head"><b data-gc="meta"></b><span data-gc="range"></span></div><div class="gege-chart-foot"><span class="gc-up" data-gc="up"></span><span class="gc-down" data-gc="down"></span><span class="gc-extra" data-gc="extra"></span></div><div class="gege-chart-resize" title="缩放"></div>';
        bd.appendChild(box);
        const bw = bd.clientWidth || 1800, isMobileChart = window.matchMedia?.('(max-width:768px)').matches, w = isMobileChart ? Math.max(1, bw - 220) : Math.max(320, Math.min(650, bw * .30));
        box.style.left = (isMobileChart ? 210 : Math.max(520, bw * .52)) + 'px'; box.style.top = '2px'; box.style.width = w + 'px'; box.style.height = (isMobileChart ? 96 : 112) + 'px';
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
        if (cv.width !== (W * R | 0) || cv.height !== (H * R | 0)) { cv.width = W * R | 0; cv.height = H * R | 0; cv.style.width = '100%'; cv.style.height = '100%'; }
        const x = cv.getContext('2d'); x.setTransform(R,0,0,R,0,0); x.clearRect(0,0,W,H);
        let l = 34, r = 8, t = 20, b = 25, gw = W - l - r, gh = H - t - b, n = Math.min(S.总图点数, 8000), st = S.总图点数 - n, ym = 1, su = 0, sd = 0;
        for (let k = 0; k < n; k++) { const j = (st + k) & 8191, u = S.总上行图[j], d = S.总下行图[j]; if (u > ym) ym = u; if (d > ym) ym = d; su += u; sd += d; }
        x.fillStyle = 'rgba(255,255,255,.58)'; x.strokeStyle = 'rgba(0,89,250,.88)'; x.lineWidth = 1.5; x.beginPath(); x.roundRect ? x.roundRect(.5,.5,W-1,H-1,8) : x.rect(.5,.5,W-1,H-1); x.fill(); x.stroke();
        x.setLineDash([4,4]); x.strokeStyle = 'rgba(0,89,250,.45)'; x.lineWidth = 1;
        for (let i = 5; i--; ) { const y = t + gh * i / 4; x.beginPath(); x.moveTo(l,y); x.lineTo(W-r,y); x.stroke(); }
        for (let i = 7; i--; ) { const xx = l + gw * i / 6; x.beginPath(); x.moveTo(xx,t); x.lineTo(xx,H-b); x.stroke(); }
        x.setLineDash([]);
        const li = (S.总图点数 - 1) & 8191, au = n ? (n === 8000 ? su * .000125 : su / n) : 0, ad = n ? (n === 8000 ? sd * .000125 : sd / n) : 0;
        (box._gcMeta ??= box.querySelector('[data-gc="meta"]')).textContent = `采样:${window.gegeBActivated ? CONFIG.wanRefreshInterval : 3}s  点:${S.总图点数}`;
        const rg = box._gcRange ??= box.querySelector('[data-gc="range"]'), rs = `峰↑${fBy(S.wMaxU)} ↓${fBy(S.wMaxD)}  谷↑${S.wMinU < Infinity ? fBy(S.wMinU) : '--'} ↓${S.wMinD < Infinity ? fBy(S.wMinD) : '--'}`; rg.textContent = rs; rg.title = rs;
        (box._gcUp ??= box.querySelector('[data-gc="up"]')).textContent = `发 ${n ? fBy(S.总上行图[li]) : fBy(0)}`;
        (box._gcDown ??= box.querySelector('[data-gc="down"]')).textContent = `收 ${n ? fBy(S.总下行图[li]) : fBy(0)}`;
        (box._gcExtra ??= box.querySelector('[data-gc="extra"]')).textContent = `均↑${fBy(au)} ↓${fBy(ad)}`;
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
              if (mi <= ma) { let xx = l + (n > 1 ? gw * mi / (n - 1) : gw), yy = H - b - (mn / ym) * gh; first ? (x.moveTo(xx, yy), first = !1) : x.lineTo(xx, yy); if (ma !== mi) { xx = l + gw * ma / (n - 1); yy = H - b - (mx / ym) * gh; x.lineTo(xx, yy); } }
              else { let xx = l + gw * ma / (n - 1), yy = H - b - (mx / ym) * gh; first ? (x.moveTo(xx, yy), first = !1) : x.lineTo(xx, yy); xx = l + gw * mi / (n - 1); yy = H - b - (mn / ym) * gh; x.lineTo(xx, yy); }
            }
          }
          x.stroke();
        };
        画线(S.总上行图, '#ff1b00'); 画线(S.总下行图, '#006400');
      }
      function 画延迟图(cv) {
        const n = Math.min(锐.延迟点数, 1024);
        if (!cv) return;
        cv.style.display = n ? 'inline-block' : 'none';
        if (!n) return;
        const W = cv.clientWidth | 0, H = cv.clientHeight | 0, R = window.devicePixelRatio || 1;
        if (W < 20 || H < 10) return;
        if (cv.width !== (W * R | 0) || cv.height !== (H * R | 0)) { cv.width = W * R | 0; cv.height = H * R | 0; }
        const x = cv.getContext('2d'), k = Math.min(n, W), st = 锐.延迟点数 - k;
        let ym = 10, sum = 0;
        for (let i = 0; i < k; i++) { const v = 锐.延迟图[(st + i) & 1023]; if (v > ym) ym = v; sum += v; }
        ym *= 1.15;
        x.setTransform(R, 0, 0, R, 0, 0); x.clearRect(0, 0, W, H);
        const px = i => W - k + i, py = v => H - 1 - (v / ym) * (H - 2);
        x.beginPath(); x.moveTo(px(0), H);
        for (let i = 0; i < k; i++) x.lineTo(px(i), py(锐.延迟图[(st + i) & 1023]));
        x.lineTo(px(k - 1), H); x.closePath(); x.fillStyle = 'rgba(43,179,138,.18)'; x.fill();
        x.beginPath();
        for (let i = 0; i < k; i++) { const yy = py(锐.延迟图[(st + i) & 1023]); i ? x.lineTo(px(i), yy) : x.moveTo(px(i), yy); }
        x.strokeStyle = '#2bb38a'; x.lineWidth = 1.5; x.stroke();
        x.setLineDash([3, 3]); x.strokeStyle = 'rgba(0,0,0,.35)'; x.lineWidth = 1;
        const ay = py(sum / k); x.beginPath(); x.moveTo(px(0), ay); x.lineTo(W, ay); x.stroke(); x.setLineDash([]);
      }
      function 画锐行(bd = document.getElementById('zte-geek-board')) {
        const row = bd && bd.querySelector('#gb-rj-row');
        if (!row) return;
        const ov = 锐.ov, q = s => row.querySelector(s);
        const stE = q('#gb-rj-st');
        stE.textContent = 锐.错误 || (ov ? (ov.status === 'connected' ? '正常上网' : '外网未连接') : '等待数据…');
        stE.style.color = 锐.错误 || (ov && ov.status !== 'connected') ? '#ff4c00' : '#18A058';
        q('#gb-rj-ping').textContent = 锐.延迟 === null ? '--（停留在官方概览页时自动获取）' : `${锐.延迟.toFixed(1)} ms`;
        q('#gb-rj-loss').textContent = 锐.延迟 === null ? '' : `丢包 ${锐.丢包}%`;
        q('#gb-rj-conn').textContent = ov ? `${ov.conntrack_count} / ${ov.conntrack_max}` : '--';
        q('#gb-rj-on').textContent = ov ? ov.online_users : '--';
        q('#gb-rj-ch').textContent = 锐.信道文 || '--';
        q('#gb-rj-cpu').textContent = ov ? ov.cpuutil : '--';
        q('#gb-rj-run').textContent = ov ? fOT(+ov.runtime || 0) : '--';
        画延迟图(q('#gb-rj-pcv'));
      }
      const getPortSvg = () => `<svg viewBox="0 0 100 100" width="45" height="45"><rect x="15" y="15" width="70" height="65" rx="5" fill="#cfd8dc" stroke="#90a4ae" stroke-width="4"/><path d="M 25,25 L 75,25 L 75,60 L 60,60 L 60,75 L 40,75 L 40,60 L 25,60 Z" fill="#263238"/><g fill="#ffca28"><rect x="30" y="25" width="2.5" height="18"/><rect x="35" y="25" width="2.5" height="18"/><rect x="40" y="25" width="2.5" height="18"/><rect x="45" y="25" width="2.5" height="18"/><rect x="52.5" y="25" width="2.5" height="18"/><rect x="57.5" y="25" width="2.5" height="18"/><rect x="62.5" y="25" width="2.5" height="18"/><rect x="67.5" y="25" width="2.5" height="18"/></g><circle cx="21" cy="73" r="3.5" fill="#4caf50"/><circle cx="79" cy="73" r="3.5" fill="#ffb300"/></svg>`;
      const getIconSvg = (r, isW) => {
        if (isW) return getPortSvg();
        let c = r > -24 ? '#4caf50' : r > -35 ? '#9c27b0' : '#0059fa';
    if (r > -40) return `<svg viewBox="0 0 100 100" width="45" height="45"><path d="M 50,85 L 10,35 A 65,65 0 0,1 90,35 Z" fill="${c}"/></svg>`;
    if (r > -46) return `<svg viewBox="0 0 100 100" width="45" height="45"><path d="M 50,85 L 10,35 A 65,65 0 0,1 90,35 Z" fill="#e0e0e0"/><path d="M 50,85 L 18,45 A 50,50 0 0,1 82,45 Z" fill="${c}"/></svg>`;
    if (r > -50) return `<svg viewBox="0 0 100 100" width="45" height="45"><path d="M 50,85 L 10,35 A 65,65 0 0,1 90,35 Z" fill="#e0e0e0"/><path d="M 50,85 L 23,51 A 43,43 0 0,1 77,51 Z" fill="${c}"/></svg>`;
    if (r > -56) return `<svg viewBox="0 0 100 100" width="45" height="45"><circle cx="50" cy="80" r="9" fill="${c}"/><path d="M 30,58 A 28,28 0 0,1 70,58" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/><path d="M 12,38 A 54,54 0 0,1 88,38" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/></svg>`;
    if (r > -61) return `<svg viewBox="0 0 100 100" width="45" height="45"><circle cx="50" cy="80" r="9" fill="${c}"/><path d="M 30,58 A 28,28 0 0,1 70,58" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/><path d="M 12,38 A 54,54 0 0,1 88,38" fill="none" stroke="#e0e0e0" stroke-width="7" stroke-linecap="round"/></svg>`;
    if (r > -67) return `<svg viewBox="0 0 100 100" width="45" height="45"><circle cx="50" cy="80" r="9" fill="${c}"/><path d="M 30,58 A 28,28 0 0,1 70,58" fill="none" stroke="#e0e0e0" stroke-width="7" stroke-linecap="round"/><path d="M 12,38 A 54,54 0 0,1 88,38" fill="none" stroke="#e0e0e0" stroke-width="7" stroke-linecap="round"/></svg>`;
    if (r > -72) return `<svg viewBox="0 0 100 100" width="45" height="45"><circle cx="50" cy="80" r="7" fill="none" stroke="#ff9800" stroke-width="5"/><path d="M 30,58 A 28,28 0 0,1 70,58" fill="none" stroke="#e0e0e0" stroke-width="7" stroke-linecap="round"/><path d="M 12,38 A 54,54 0 0,1 88,38" fill="none" stroke="#e0e0e0" stroke-width="7" stroke-linecap="round"/></svg>`;
    if (r > -76) return `<svg viewBox="0 0 100 100" width="45" height="45"><g transform="translate(-15, 0)"><circle cx="50" cy="80" r="7" fill="none" stroke="#ffb300" stroke-width="5"/><path d="M 30,58 A 28,28 0 0,1 70,58" fill="none" stroke="#e0e0e0" stroke-width="7" stroke-linecap="round"/><path d="M 12,38 A 54,54 0 0,1 88,38" fill="none" stroke="#e0e0e0" stroke-width="7" stroke-linecap="round"/></g><text x="70" y="86" fill="#ffb300" font-weight="900" font-size="48" font-family="sans-serif">!</text></svg>`;
    if (r > -80) return `<svg viewBox="0 0 100 100" width="45" height="45"><g transform="translate(-15, 0)"><circle cx="50" cy="80" r="7" fill="none" stroke="#ff4c00" stroke-width="5"/><path d="M 30,58 A 28,28 0 0,1 70,58" fill="none" stroke="#e0e0e0" stroke-width="7" stroke-linecap="round"/><path d="M 12,38 A 54,54 0 0,1 88,38" fill="none" stroke="#e0e0e0" stroke-width="7" stroke-linecap="round"/></g><text x="70" y="86" fill="#ff4c00" font-weight="900" font-size="48" font-family="sans-serif">!</text></svg>`;
    if (r > -85) return `<svg viewBox="0 0 100 100" width="45" height="45"><g transform="translate(-15, 0)"><circle cx="50" cy="80" r="7" fill="none" stroke="#ff4c00" stroke-width="5"/><path d="M 30,58 A 28,28 0 0,1 70,58" fill="none" stroke="#e0e0e0" stroke-width="7" stroke-linecap="round"/><path d="M 12,38 A 54,54 0 0,1 88,38" fill="none" stroke="#e0e0e0" stroke-width="7" stroke-linecap="round"/></g><text x="65" y="86" fill="#ff4c00" font-weight="900" font-size="44" font-family="sans-serif">?</text></svg>`;
    return `<svg viewBox="0 0 100 100" width="45" height="45"><g transform="translate(-15, 0)"><circle cx="50" cy="80" r="7" fill="none" stroke="#ff4c00" stroke-width="5"/><path d="M 30,58 A 28,28 0 0,1 70,58" fill="none" stroke="#ff4c00" stroke-width="7" stroke-linecap="round" opacity="0.3"/><path d="M 12,38 A 54,54 0 0,1 88,38" fill="none" stroke="#ff4c00" stroke-width="7" stroke-linecap="round" opacity="0.3"/></g><text x="65" y="80" fill="#ff4c00" font-weight="900" font-size="35" font-family="sans-serif">✖</text></svg>`;
      };
      function rUI(wU, wD, sU, sD, cI) {
    let tOD = 0,
      LUp = S.lTotUp,
      LDn = S.lTotDn,
      hpU = 0,
      hpD = 0,
      abU = 0,
      abD = 0,
      curHpU = 0,
      curHpD = 0,
      tot_cU = 0;
    for (let k in S.cls) {
      let s = S.cls[k], cC = cI[k];
                  let cU = Math.max(0, (s.lU || 0) - (s.uB || 0));
      let cD = Math.max(0, (s.lD || 0) - (s.dB || 0));
      let sessU = Math.max(0, (s.lU || 0) - (s.oU || 0));
      let sessD = Math.max(0, (s.lD || 0) - (s.oD || 0));
      tot_cU += cU;
      hpU += (CONFIG.readSaveData === 2 ? cU : sessU);
      hpD += (CONFIG.readSaveData === 2 ? cD : sessD);
      if (cC) {
        curHpU += (CONFIG.readSaveData === 2 ? cU : sessU);
        curHpD += (CONFIG.readSaveData === 2 ? cD : sessD);
        tOD += cC.offDn || 0;
      }
            abU += CONFIG.readSaveData === 2 ? sessU : (cC ? (cC.offUp || 0) : (s.lU || 0));
      abD += CONFIG.readSaveData === 2 ? sessD : (cC ? (cC.offDn || 0) : (s.lD || 0));
      s.hIdx = (s.hIdx + 1) & 63;
      s.hU[s.hIdx] = cC ? cC.upRate : 0;
      s.hD[s.hIdx] = cC ? cC.dnRate : 0;
      /* ⚠️ 需要使用 HA 快速上线下线报告的用户，请删除该注释以启用该功能。
      try {
        if (S.cSnap) {
          if (CONFIG.盲漫游 === 1) {
            if (cC) {
              if (s.haOff === 0 || (s.haOff === undefined && !S.cSnap.devices?.[k])) {
                GM_setValue('ha_presence', { timestamp: Date.now(), devices: { [k]: { name: cC.name || s.name || k, status: "上线" } } });
                s.haOff = undefined;
              } else if (s.haOff > 0) s.haOff = undefined;
            } else if (s.haOff > 0) {
              if (Date.now() >= s.haOff) {
                GM_setValue('ha_presence', { timestamp: Date.now(), devices: { [k]: { name: s.name || k, status: "下线" } } });
                s.haOff = 0;
              }
            } else if (s.haOff === undefined) {
              GM_setValue('ha_presence', { timestamp: Date.now(), devices: { [k]: { name: s.name || k, status: "下线" } } });
              s.haOff = 0;
            }
          } else {
            if (cC) {
              if (s.haOff === 0 || (s.haOff === undefined && !S.cSnap.devices?.[k])) {
                GM_setValue('ha_presence', { timestamp: Date.now(), devices: { [k]: { name: cC.name || s.name || k, status: "上线" } } });
                s.haOff = undefined;
              } else if (s.haOff > 0) s.haOff = undefined;
            } else if (s.haOff === undefined) {
              s.haOff = Date.now() + 300000;
            } else if (s.haOff > 0 && Date.now() >= s.haOff) {
              GM_setValue('ha_presence', { timestamp: Date.now(), devices: { [k]: { name: s.name || k, status: "下线" } } });
              s.haOff = 0;
            }
          }
        }
      } catch(e) { console.warn("[哥哥科技] HA上下线事件写入失败:", e); }
      ⚠️ 需要使用 HA 快速上线下线报告的用户，请删除该注释以启用该功能。*/
    }
    S.cSnap = {
      timestamp: Date.now(),
      global: {
        wan_up: S.wTotUp, wan_down: S.wTotDn,
        lan_integral_up: LUp, lan_integral_down: LDn,
        lan_high_up: hpU, lan_high_down: hpD,
        lan_off_up: abU, lan_off_down: abD
      },
      devices: Object.keys(S.cls).reduce((acc, k) => {
        let s = S.cls[k], cC = cI[k];
        acc[k] = {
          up: Math.max(0, (s.lU || 0) - (s.uB || 0)),
          down: Math.max(0, (s.lD || 0) - (s.dB || 0)),
          integral_up: s.intUp || 0, integral_down: s.intDn || 0,
          status: cC ? (CONFIG.portMap[cC.iface] || cC.iface || "未知接口") : "off",
          name: cC?.name || s.name || k, ip: cC?.ip || "",
          raw_up: cC?.offUp || 0, raw_down: cC?.offDn || 0
        };
        return acc;
      }, {})
    };
    if (typeof GM_setValue !== 'undefined' && S.rTick === 1) {
      S.haTick = ((S.haTick || 0) + 1) & 31;
      if (S.haTick === 1) {
        try { GM_setValue('ha_snapshot', S.cSnap); } catch(e) {console.warn(e);}}
     let nowMs = Date.now();
          if (nowMs >= S.Force_MS && !S._RST) {
            doSettle(nowMs);
          } else if (nowMs >= S.Warn_MS && !document.getElementById('gb-w-bnr')) {
            const bd = document.getElementById('zte-geek-board');
            if (bd) {
              const bn = document.createElement('div'); bn.id = 'gb-w-bnr';
              bn.style.cssText = 'background:#fff3cd;color:#856404;padding:10px 15px;margin-bottom:10px;border-radius:6px;border-left:5px solid #ffc107;font-weight:bold;font-size:13px;display:flex;justify-content:space-between;align-items:center;width:100%;box-sizing:border-box;';
              bn.innerHTML = `<span> 统计周期即将结束，流量将在跨越边界时自动清零备份。</span><button id="gb-f-btn" style="background:#ffc107;border:none;padding:4px 10px;border-radius:4px;cursor:pointer;font-weight:bold;color:#333;">立即导出并清零</button>`;
              bd.insertBefore(bn, bd.firstChild);
              document.getElementById('gb-f-btn').onclick = () => doSettle(Date.now());}
          }
    }
    S.rTick = ((S.rTick || 0) + 1) & 7;
    if (S.rTick === 1 || !S.cRT) {
        S.aWu = (S.wTotUp - (S.lwTU || S.wTotUp)) / (CONFIG.wanRefreshInterval << 3); S.lwTU = S.wTotUp;
        S.aWd = (S.wTotDn - (S.lwTD || S.wTotDn)) / (CONFIG.wanRefreshInterval << 3); S.lwTD = S.wTotDn;
        let rUp = calcStageRatio(S.wTotUp, LUp, hpU), rDn = calcStageRatio(S.wTotDn, LDn, hpD);
        S.cRT = `<span style="font-weight: bold;"><span style="color: ${rUp > 1.5 ? '#ff4c00' : (rUp > 1.15 ? '#FF9800' : '#4CAF50')};">${(rUp * 100).toFixed(2)}%</span>，<span style="color: ${rDn > 1.5 ? '#ff4c00' : (rDn > 1.15 ? '#FF9800' : '#4CAF50')};">${(rDn * 100).toFixed(2)}%</span></span>`;
        if (document.getElementById('gb-ratio-display')) document.getElementById('gb-ratio-display').innerHTML = S.cRT;
    }
    if (document.getElementById('gege-global-overlay')?.style.display !== 'block') return; // 锐捷版仅悬浮舱：面板收起时只记账、不碰官方页面 DOM
        let bd = document.getElementById('zte-geek-board');
    if (!bd) {
      bd = document.createElement('div');
      bd.id = 'zte-geek-board';
 let layoutHtml = '';
        if (CONFIG.uiLayout === 1) { // 紧凑版 (驾驶舱)
            layoutHtml = `
                <div class="geek-row"><span class="geek-label">WAN口速率</span><div class="geek-val-box" style="position:relative;"><span class="c-up geek-fixed-width" id="gb-wan-up-bytes"></span><span class="c-down geek-fixed-width" id="gb-wan-down-bytes"></span><span style="margin-left: 5px;"><span class="c-up" id="gb-wan-up-bps"></span> | <span class="c-down" id="gb-wan-down-bps"></span></span></div><div class="geek-right-box" style="font-weight: normal; color: #666;"><span style="color: #333;">0估算：</span><span id="gb-wan-zero-up"></span>，<span id="gb-wan-zero-down"></span>｜<span id="gb-wan-zero-up-cnt"></span>，<span id="gb-wan-zero-down-cnt"></span></div></div>
                <div class="geek-row"><span class="geek-label">局域网代数和</span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-lan-up-bytes"></span><span class="c-down geek-fixed-width" id="gb-lan-down-bytes"></span></div><div class="geek-right-box">实时占比：<span class="c-up" id="gb-perc-up"></span> | <span class="c-down" id="gb-perc-down"></span></div></div>
                                <div class="geek-row"><span class="geek-label">LAN：<span id="gege-pin-btn" class="gege-pin" title="冻结窗格">📌</span></span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-lan-up-vol"></span><span class="c-down geek-fixed-width" id="gb-lan-down-vol"></span><span style="font-weight: bold; margin-left: 5px;">WAN总计：<span class="c-up" id="gb-wan-up-vol"></span> | <span class="c-down" id="gb-wan-down-vol"></span></span></div><div class="geek-right-box">在线高精：<span style="color:#FF6700;" id="gb-cur-up-vol"></span> | <span style="color:#18A058;" id="gb-cur-down-vol"></span></div></div>
                <div class="geek-row"><span class="geek-label">高精流量统计 -></span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-int-up-vol"></span><span class="c-down geek-fixed-width" id="gb-int-down-vol"></span><span style="font-weight: normal; margin-left: 5px; color:#666;">内外网比：<span id="gb-ratio-display"></span></span></div><div class="geek-right-box" style="color: #666;">当前总计：<span style="color:#FF6700;" id="gb-abs-up-vol"></span> | <span style="color:#18A058;" id="gb-abs-down-vol"></span></div></div>`;
        } else if (CONFIG.uiLayout === 2) { // 平铺版 (报表流)
            layoutHtml = `
                <div class="geek-row"><span class="geek-label">WAN口速率</span><div class="geek-val-box" style="position:relative;"><span class="c-up geek-fixed-width" id="gb-wan-up-bytes"></span><span class="c-down geek-fixed-width" id="gb-wan-down-bytes"></span></div><div class="geek-right-box"><span class="c-up" id="gb-wan-up-bps"></span> | <span class="c-down" id="gb-wan-down-bps"></span></div></div>
                <div class="geek-row"><span class="geek-label">局域网代数和</span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-lan-up-bytes"></span><span class="c-down geek-fixed-width" id="gb-lan-down-bytes"></span></div><div class="geek-right-box">实时占比：<span class="c-up" id="gb-perc-up"></span> | <span class="c-down" id="gb-perc-down"></span></div></div>
                                <div class="geek-row"><span class="geek-label">LAN：<span id="gege-pin-btn" class="gege-pin" title="冻结窗格">📌</span></span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-lan-up-vol"></span><span class="c-down geek-fixed-width" id="gb-lan-down-vol"></span></div><div class="geek-right-box">在线高精：<span style="color:#FF6700;" id="gb-cur-up-vol"></span> | <span style="color:#18A058;" id="gb-cur-down-vol"></span></div></div>
                <div class="geek-row"><span class="geek-label">高精流量统计 -></span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-int-up-vol"></span><span class="c-down geek-fixed-width" id="gb-int-down-vol"></span></div><div class="geek-right-box" style="color: #666;">当前总计：<span style="color:#FF6700;" id="gb-abs-up-vol"></span> | <span style="color:#18A058;" id="gb-abs-down-vol"></span></div></div>
                <div class="geek-row"><span class="geek-label">WAN总计：</span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-wan-up-vol"></span><span class="c-down geek-fixed-width" id="gb-wan-down-vol"></span></div><div class="geek-right-box"><span style="font-weight: normal;">内外网比：</span><span id="gb-ratio-display"></span></div></div>`;
        } else { // 经典版 (0)
            layoutHtml = `
                <div class="geek-row"><span class="geek-label">WAN口速率</span><div class="geek-val-box" style="position:relative;"><span class="c-up geek-fixed-width" id="gb-wan-up-bytes"></span><span class="c-down geek-fixed-width" id="gb-wan-down-bytes"></span></div><div class="geek-right-box"><span class="c-up" id="gb-wan-up-bps"></span> | <span class="c-down" id="gb-wan-down-bps"></span></div></div>
                <div class="geek-row"><span class="geek-label">局域网代数和</span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-lan-up-bytes"></span><span class="c-down geek-fixed-width" id="gb-lan-down-bytes"></span></div><div class="geek-right-box">实时占比：<span class="c-up" id="gb-perc-up"></span> | <span class="c-down" id="gb-perc-down"></span></div></div>
                                <div class="geek-row"><span class="geek-label">LAN：<span id="gege-pin-btn" class="gege-pin" title="冻结窗格">📌</span></span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-lan-up-vol"></span><span class="c-down geek-fixed-width" id="gb-lan-down-vol"></span></div><div class="geek-right-box">WAN：<span class="c-up" id="gb-wan-up-vol"></span> | <span class="c-down" id="gb-wan-down-vol"></span></div></div>
                <div class="geek-row"><span class="geek-label">高精流量统计 -></span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-int-up-vol"></span><span class="c-down geek-fixed-width" id="gb-int-down-vol"></span></div><div class="geek-right-box" style="color: #666;">当前总计：<span style="color:#FF6700;" id="gb-abs-up-vol"></span> | <span style="color:#18A058;" id="gb-abs-down-vol"></span></div></div>`;
        }layoutHtml += `<div class="geek-row" id="gb-rj-row" style="height:auto!important;"><span class="geek-label">路由器状态</span><div class="geek-val-box"><span id="gb-rj-st" style="font-weight:bold;"></span><span>外网延迟：<b id="gb-rj-ping"></b> <span id="gb-rj-loss" style="color:#666;"></span></span><canvas id="gb-rj-pcv" style="width:180px;height:28px;display:none;"></canvas><span>连接数：<b id="gb-rj-conn"></b></span><span>在线设备：<b id="gb-rj-on"></b></span><span>射频：<b id="gb-rj-ch" style="font-weight:normal;"></b></span></div><div class="geek-right-box" style="font-weight:normal;color:#666;">CPU <span id="gb-rj-cpu"></span>｜运行 <span id="gb-rj-run"></span></div></div>`;
                bd.innerHTML = layoutHtml;
        const pinBtn = bd.querySelector('#gege-pin-btn');
        if (pinBtn) {
            if (S.isPinned) {
                bd.classList.add('geek-frozen-pane');
                pinBtn.classList.add('active');
            }
            pinBtn.onclick = () => {
                S.isPinned = !S.isPinned;
                bd.classList.toggle('geek-frozen-pane', S.isPinned);
                pinBtn.classList.toggle('active', S.isPinned);
            };
        }
    }
    const ol = document.getElementById('gege-global-overlay'),
      iPO = ol && ol.style.display === 'block',
      aC = iPO ? ol : document;
    requestAnimationFrame(() => {
    if (iPO) {
      const ac = document.getElementById('gege-board-anchor');
      if (ac && bd.nextSibling !== ac) ac.parentNode.insertBefore(bd, ac);
    }
    else {
      const mn = document.querySelector('.el-table') || document.querySelector('.config-item')?.closest('div') || document.querySelector('.main-content');
      if (mn && bd.parentNode !== mn.parentNode) mn.parentNode.insertBefore(bd, mn);
    }
      if (!S.oDC || S._domRebuilt || S._lastPanelState !== iPO) {
        S.oDC = Object.create(null);
        let gI = aC.getElementsByClassName('gege-list-item');
        for (let n of gI) {
          let m = n.getAttribute('data-gege-mac');
          if (m) S.oDC[m] = n;
        }
        S._domRebuilt = false;
        S._lastPanelState = iPO;
      }
      let oDC = S.oDC;
      if (bd.parentNode) {
                bd.querySelector('#gb-wan-up-bytes').textContent = `🔼 ${fBy(wU)}`;
        bd.querySelector('#gb-wan-down-bytes').textContent = `🔽 ${fBy(wD)}`;
        bd.querySelector('#gb-wan-up-bps').textContent = `🔼 ${fB(wU)}`;
        bd.querySelector('#gb-wan-down-bps').textContent = `🔽 ${fB(wD)}`;
        bd.querySelector('#gb-lan-up-bytes').textContent = `🔼 ${fB(sU)}`;
        bd.querySelector('#gb-lan-down-bytes').textContent = `🔽 ${fB(sD)}`;
                bd.querySelector('#gb-lan-up-vol').textContent = `🔼 ${fV(LUp)}`;
        bd.querySelector('#gb-lan-down-vol').textContent = `🔽 ${fV(LDn)}`;
        bd.querySelector('#gb-wan-up-vol').textContent = `🔼 ${fV(S.wTotUp)}`;
        bd.querySelector('#gb-wan-down-vol').textContent = `🔽 ${fV(S.wTotDn)}`;
                bd.querySelector('#gb-int-up-vol').textContent = `🔼 ${fV(hpU)}`;
        bd.querySelector('#gb-int-down-vol').textContent = `🔽 ${fV(hpD)}`;
        bd.querySelector('#gb-abs-up-vol').textContent = `🔼 ${fV(abU)}`;
        bd.querySelector('#gb-abs-down-vol').textContent = `🔽 ${fV(abD)}`;
		bd.querySelector('#gb-perc-up').textContent = `🔼 ${((sU * 100) / (wU || Infinity) || 0).toFixed(1)}%`;
        bd.querySelector('#gb-perc-down').textContent = `🔽 ${((sD * 100) / (wD || Infinity) || 0).toFixed(1)}%`;
        画总速率图(bd);
        画锐行(bd);
                if (bd.querySelector('#gb-ratio-display')) {
          bd.querySelector('#gb-cur-up-vol').textContent = `🔼 ${fV(curHpU)}`;
          bd.querySelector('#gb-cur-down-vol').textContent = `🔽 ${fV(curHpD)}`;
          if (bd.querySelector('#gb-wan-zero-up')) {
              bd.querySelector('#gb-wan-zero-up').textContent = !S.wZEU ? '' : fSV(S.wZEU);
              bd.querySelector('#gb-wan-zero-down').textContent = !S.wZED ? '' : fSV(S.wZED);
              bd.querySelector('#gb-wan-zero-up-cnt').textContent = S.wZEUC || 0;
              bd.querySelector('#gb-wan-zero-down-cnt').textContent = S.wZEDC || 0;
          }
        }
      }
      const inv_tot_cU = tot_cU > 0 ? 100 / tot_cU : 0;
      const inv_tOD = tOD > 0 ? 100 / tOD : 0;
      const inv_sU = sU > 0 ? 100 / sU : 0;
      const inv_sD = sD > 0 ? 100 / sD : 0;
      for (let m in cI) {
        let it = oDC[m];
        if (!it) continue;
        const cC = cI[m] || { upRate: 0, dnRate: 0, iface: "", offUp: 0, offDn: 0 },
              cS = S.cls[m] || { intUp: 0, intDn: 0, onS: 0 };
        let cache = it._gege || (it._gege = {});

        let rRs = cC.rssi || 0, lRs = cS.lRs ?? rRs;
        if (rRs) { // 漏桶防抖核心（仅针对 -23, -34, -40, -55 敏感边界）
          if (((rRs > -23) !== (lRs > -23) || (rRs > -34) !== (lRs > -34) || (rRs > -40) !== (lRs > -40) || (rRs > -55) !== (lRs > -55)) && Math.abs(rRs - lRs) + (cS.dbC || 0) < 5) {
            rRs = lRs; cS.dbC = ((cS.dbC || 0) + 1) & 7; // 憋住不闪，压力槽+1
          } else { cS.dbC = 0; cS.lRs = rRs; } // 压力爆表或正常滑动，放行并归零
        }
        (cache.logo ??= it.querySelector('.dev-logo')).innerHTML = getIconSvg(rRs, !rRs) + (cC.rate ? `<div style="font-size:10.5px;color:#999;font-family:Consolas;margin-top:2px;">${cC.rate}M</div>` : '');

        let hqU = Math.max(0, (cS.lU || 0) - (cS.uB || 0));
        let hqD = Math.max(0, (cS.lD || 0) - (cS.dB || 0));
                let tN = cache.timeNode ??= it.querySelector('.gege-online-time');
        if (tN) tN.textContent = cS.onS > 0 ? '在线：' + fOT(cS.onS) : '';
        const cB = cache.connBox ??= it.querySelector('.gege-conn-box'), cp = cC.conn * 锐.连接比;
        if (cB) {
          (cache.cnV ??= cB.querySelector('.v-cn')).textContent = `连接 ${cC.conn}`;
          (cache.cnP ??= cB.querySelector('.v-cp')).textContent = `${cp.toFixed(1)}%`;
          (cache.cnB ??= cB.querySelector('.gege-conn-bar-inner')).style.width = `${Math.min(cp, 100)}%`;
        }

        const dI = cache.devIntro ??= it.querySelector('.dev-intro');
        let rN = dI && (cache.rssiNode ??= dI.querySelector('.gege-rssi'));
        if (rN) { let p = cC.rssi ? Math.round((cC.rssi + 93 - (cC.iface === '2.4G' ? 锐.衰减 : 0)) * 2 - 37) : 0; rN.innerHTML = cC.rssi ? `<span style="color:${p < 0?'#ff4c00':'inherit'}">${p}%</span>, ${cC.rssi}` : escapeHTML(cC.ssid); }
        if (dI) {
          let bx = cache.upBox ??= dI.querySelector('.gege-up-box');
          if (!bx) {
            bx = document.createElement('div'); bx.className = 'gege-up-box';
            bx.innerHTML = `<div class="t-row c-up"><span>↑ <span class="v-vol"></span></span><span class="v-pct"></span></div><div class="zte-thin-bar"><div class="zte-thin-bar-inner up"></div></div>`;
            dI.appendChild(bx);
            cache.upBox = bx;
          }
          const p = hqU * inv_tot_cU;
          (cache.upVol ??= bx.querySelector('.v-vol')).textContent = fVD(cS.intUp, cC.offUp);
          (cache.upPct ??= bx.querySelector('.v-pct')).textContent = p.toFixed(1) + '%';
          (cache.upBar ??= bx.querySelector('.zte-thin-bar-inner')).style.width = Math.min(p, 100) + '%';
        }
        
        const inf = cache.info ??= it.querySelector('.info');
        if (inf) {
                    const ipNode = cache.ipNode ??= inf.querySelector('.dev-ip');
          if (ipNode) {
            let zBadge = cache.zBadge ??= ipNode.querySelector('.gege-zero-badge');
            if (!zBadge) {
              zBadge = document.createElement('span'); zBadge.className = 'gege-zero-badge gege-box';
              ipNode.style.display = 'flex'; ipNode.style.justifyContent = 'space-between';
              zBadge.style.cssText = 'color: #999; font-size: 11.5px; font-family: Consolas; margin-right: 5px;';
                            ipNode.appendChild(zBadge);
              cache.zBadge = zBadge;
            }
            zBadge.textContent = ((cS.zUC || 0) + (cS.zDC || 0)) < 6 ? "" : `[0估] ${!cS.zEU ? '' : fSV(cS.zEU)}，${!cS.zED ? '' : fSV(cS.zED)}｜${cS.zUC || 0},${cS.zDC || 0}`;
          }
          
          let rB = cache.rBox ??= inf.querySelector('.gege-ratio-box');
          if (!rB) {
            Array.from(inf.querySelectorAll('.dev-ip:not(.gege-box *)')).slice(1).forEach(n => { n.style.display = 'none'; });
            inf.querySelectorAll('.dev-number:not(.gege-box *)').forEach(n => { n.style.display = 'none'; });
            rB = document.createElement('div'); rB.className = 'gege-ratio-box';
            rB.innerHTML = `<div class="gege-ratio-top"><span class="v-port"></span><span class="v-interval" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: normal; font-size: 12.5px; opacity: 0.75; letter-spacing: 0.5px;"><span class="c-up"></span><span style="color:#666; margin:0 3px;">，</span><span class="c-down"></span></span><span class="v-rt-pct"></span></div><div class="gege-ratio-bar"><div class="gege-ratio-bar-inner"></div></div>`;
            inf.appendChild(rB);
                        cache.rBox = rB;
          }
          
          const bR = (hqU + hqD) > 0 ? (hqU * 100 / (hqU + hqD)) : 0;
          let tC = "", tCol;
          if (CONFIG.calcMode === 1) {
            const rt = hqD > 0 ? (hqU / hqD) : (hqU > 0 ? Infinity : 0);
            if (rt > CONFIG.ratioExtremeUp) { tCol = '#ff4c00'; tC = (rt === Infinity ? '∞' : rt.toFixed(2)) + '⚠️'; }
            else if (rt > CONFIG.ratioWarnUp) { tCol = '#ff4c00'; tC = (rt * 100).toFixed(1) + '%'; }
            else if (rt > CONFIG.ratioExtremeDown) { tCol = '#0059fa'; tC = (rt * 100).toFixed(1) + '%'; }
            else { tCol = '#0059fa'; const rRt = hqU > 0 ? (hqD / hqU) : (hqD > 0 ? Infinity : 0); tC = (rRt === Infinity ? '∞' : rRt.toFixed(1)) + 'x'; }
          } else {
            tCol = bR > CONFIG.ratioThreshold ? '#ff4c00' : '#0059fa';
            tC = bR.toFixed(1) + '%';
          }
          
          (cache.rBoxPort ??= rB.querySelector('.v-port')).textContent = CONFIG.portMap[cC.iface] || cC.iface || "未知";
                    (cache.rBoxUp ??= rB.querySelector('.v-interval .c-up')).textContent = '' + fSV(hqU);
          (cache.rBoxDn ??= rB.querySelector('.v-interval .c-down')).textContent = '' + fSV(hqD);
          const rtP = cache.rtPct ??= rB.querySelector('.v-rt-pct');
          rtP.textContent = tC; rtP.style.color = tCol;
          (cache.rBoxBar ??= rB.querySelector('.gege-ratio-bar-inner')).style.width = Math.min(bR, 100) + '%';
                    
          let dBx = cache.dBox ??= inf.querySelector('.gege-down-box');
          if (!dBx) {
            dBx = document.createElement('div'); dBx.className = 'gege-down-box';
            dBx.innerHTML = `<div class="t-row c-down"><span>↓ <span class="v-vol"></span></span><span class="v-pct"></span></div><div class="zte-thin-bar"><div class="zte-thin-bar-inner down"></div></div>`;
            inf.appendChild(dBx);
            cache.dBox = dBx;
          }
          const dp = (cC.offDn || 0) * inv_tOD;
          (cache.dBoxVol ??= dBx.querySelector('.v-vol')).textContent = fVD(cS.intDn, cC.offDn);
                    (cache.dBoxPct ??= dBx.querySelector('.v-pct')).textContent = dp.toFixed(1) + '%';
          (cache.dBoxBar ??= dBx.querySelector('.zte-thin-bar-inner')).style.width = Math.min(dp, 100) + '%';
        }
        
        const sp = cache.speed ??= it.querySelector('.speed');
        if (sp) {
          let enh = cache.enh ??= sp.querySelector('.zte-enhance-speed');
          if (!enh) {
            sp.querySelectorAll('.connect-up, .connect-down').forEach(n => { n.style.display = 'none'; });
            enh = document.createElement('div'); enh.className = 'zte-enhance-speed';
            enh.innerHTML = `<div class="zte-bar-wrap zte-bar-up"><span class="v-val" style="white-space: nowrap; flex-shrink: 0;"></span><span class="v-spark" style="font-family: monospace; letter-spacing: -2px; font-size: 10px; margin: 0 6px; opacity: 0.65; white-space: pre; flex: 1; overflow: hidden; text-align: right;"></span><span class="v-pct" style="white-space: nowrap; flex-shrink: 0;"></span></div><div class="zte-bar-wrap zte-bar-down"><span class="v-val" style="white-space: nowrap; flex-shrink: 0;"></span><span class="v-spark" style="font-family: monospace; letter-spacing: -2px; font-size: 10px; margin: 0 6px; opacity: 0.65; white-space: pre; flex: 1; overflow: hidden; text-align: right;"></span><span class="v-pct" style="white-space: nowrap; flex-shrink: 0;"></span></div>`;
            sp.appendChild(enh);
            cache.enh = enh;
          }
          const pu = cC.upRate * inv_sU,
              pd = cC.dnRate * inv_sD,
              bU = cache.bU ??= enh.querySelector('.zte-bar-up'),
              bD = cache.bD ??= enh.querySelector('.zte-bar-down');
          
          bU.style.setProperty('--p-up', Math.min(pu, 100) + '%');
          (cache.bUVal ??= bU.querySelector('.v-val')).textContent = `🔼 ${fBy(cC.upRate)}`;
          (cache.bUPct ??= bU.querySelector('.v-pct')).textContent = pu.toFixed(1) + '%';
          
          bD.style.setProperty('--p-down', Math.min(pd, 100) + '%');
          (cache.bDVal ??= bD.querySelector('.v-val')).textContent = `🔽 ${fBy(cC.dnRate)}`;
          (cache.bDPct ??= bD.querySelector('.v-pct')).textContent = pd.toFixed(1) + '%';
          let clU = (S.aWu * 0.1) || 0; if (clU < 512000) clU = 512000;
          let clD = (S.aWd * 0.125) || 0;
          for (let i = 64; i--; ) { if (cS.hU[i] > clU) clU = cS.hU[i]; if (cS.hD[i] > clD) clD = cS.hD[i]; }
          (cache.bUSpk ??= bU.querySelector('.v-spark')).textContent = getSpark(cS.hU, cS.hIdx, clU);
          (cache.bDSpk ??= bD.querySelector('.v-spark')).textContent = getSpark(cS.hD, cS.hIdx, clD);
        }
      }
    });
  }
  async function bVD(ol, cI = {}) {
    try {
      let h2 = [], h5 = [], hX = [], hW = [];
      for (let m in cI) {
        let d = cI[m], tS = fOT(d.onSec), ifc = d.iface;
        let htm = `<div class="col-md-12 col-xs-12 config-item gege-list-item" data-gege-mac="${m}"><div class="config-item-box" style="display: flex; align-items: stretch;"><div class="col-md-5 col-xs-7 logo" style="width: 33%; display: flex; flex-direction: row; align-items: center;"><div class="dev-logo" style="width: 50px; min-width: 50px; margin-right: 15px; display: flex; flex-direction: column; align-items: center; justify-content: center;"></div><div class="dev-intro" style="flex: 1; display: flex; flex-direction: column; justify-content: flex-start; min-height: 100px;"><div style="display: flex; justify-content: space-between; align-items: baseline; width: 95%;"><div class="dev-name" style="font-weight: bold; color: #333; font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1; min-width: 0; margin-right: 8px;">${escapeHTML(d.name)}</div><div class="gege-rssi" style="font-size: 12px; font-weight: bold; color: #666; font-family: Consolas; white-space: nowrap; flex-shrink: 0;"></div></div><div class="gege-online-time" style="color: #999; font-size: 12px; font-family: Consolas; margin-top: 4px;">${d.onSec > 0 ? '在线：' + tS : ''}</div><div class="gege-conn-box"><div class="gege-ratio-top"><span class="v-cn"></span><span class="v-cp"></span></div><div class="gege-conn-bar"><div class="gege-conn-bar-inner"></div></div></div></div></div><div class="col-md-4 col-xs-5 info" style="width: 27%; display: flex; flex-direction: column; padding: 0 10px; border-right: 1px solid #eee;"><div class="dev-ip" style="color: #666; font-family: Consolas;">${escapeHTML(d.ip)}</div><div class="dev-number grey" style="color: #999; font-size: 12px; font-family: Consolas;">MAC：${m}</div></div><div class="col-md-3 col-xs-12 speed" style="width: 40%; display: flex; flex-direction: column; justify-content: center; padding: 0 10px;"></div></div></div>`;
        if (ifc === '有线') hW.push(htm);
        else if (ifc === '5G') h5.push(htm);
        else if (ifc === '2.4G') h2.push(htm);
        else hX.push(htm);
      }
      requestAnimationFrame(() => {
        ol.innerHTML = `<div style="padding: 20px; max-width: 1580px; margin: 0 auto; min-height: 100%;"><div id="gege-board-anchor"></div><div id="config-list" class="config-list gege-list-container"><div class="gege-section"><div class="config-title">有线设备</div>${hW.join('')||'<div class="gege-empty-state">没有连接设备</div>'}</div><div class="gege-section"><div class="config-title">无线设备（${锐.信道5 > 148 ? '5.8GHz' : '5.2GHz'}）</div>${h5.join('')||'<div class="gege-empty-state">没有连接设备</div>'}</div><div class="gege-section"><div class="config-title">无线设备（${锐.信道5 > 148 ? '5.2GHz' : '5.8GHz'}）</div>${hX.join('')||'<div class="gege-empty-state">没有连接设备</div>'}</div><div class="gege-section"><div class="config-title">无线设备（2.4GHz）</div>${h2.join('')||'<div class="gege-empty-state">没有连接设备</div>'}</div>
        </div><div style="margin-top: 25px; padding-top: 15px; border-top: 1px dashed #eee; text-align: center; font-family: Consolas, 'Microsoft YaHei', sans-serif;"><div style="font-size: 11.5px; color: #777; font-style: italic; margin-bottom: 8px;">“在一个文明社会，干净的、不被监视与吸血的网络，是我们每个人的基本权利。”</div><div style="font-size: 10.5px; color: #999; line-height: 1.3; margin-bottom: 8px;">本交互式程序属于“哥哥软件”系列；需持续遵守署名条款方可获得使用权，二开或发行请参阅许可证；按“原样且免费”提供，不对其适用性、稳定性、精密度或任何商业场景合规性作担保；个人分享请直接转载官方链接。<br>基于本程序的任何修改、使用任意部分代码、再发布或相关衍生版本的合法性的前置条件是：在提供最终用户界面时，均应显著、实质保留所有“哥哥科技”与法律声明，不得删除、隐藏或降低其可见性。<a href="https://github.com/ucxn/Bro-Stat/blob/main/License.md" target="_blank" style="color: #777; text-decoration: underline;">查看许可证/分享</a>
        <div style="font-size:12px;color:#555;"><svg xmlns="http://www.w3.org/2000/svg" width="131" height="18" viewBox="0 0 145 20" role="img" aria-label="Broware Attribution" style="vertical-align:middle;margin-right:6px"><defs><linearGradient id="bg1" x2="0" y2="1"><stop stop-color="#4b4b4b"/><stop offset=".5" stop-color="#333"/><stop offset="1" stop-color="#1f1f1f"/></linearGradient><linearGradient id="bg2" x2="0" y2="1"><stop stop-color="#52d58c"/><stop offset=".52" stop-color="#31bc71"/><stop offset="1" stop-color="#218b50"/></linearGradient><linearGradient id="sh" x2="0" y2="1"><stop stop-color="#fff" stop-opacity=".32"/><stop offset=".45" stop-color="#fff" stop-opacity=".08"/><stop offset=".46" stop-opacity="0"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="c"><rect width="145" height="20" rx="4"/></clipPath></defs><g clip-path="url(#c)"><path fill="url(#bg1)" d="M0 0h24v20H0z"/><path fill="url(#bg2)" d="M24 0h121v20H24z"/><path fill="url(#sh)" d="M0 0h145v20H0z"/></g><g transform="translate(4 2)"><rect width="15" height="15" rx=".6" fill="#fff"/><rect x="1" y="1" width="13" height="13" fill="#58d18d"/><path fill="#fff" d="M1 1h7v7z"/><path fill="#32bf70" d="M8 1h6v13H8z"/><path fill="#1ba856" d="M1 14h7V8l6 6z"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="11"><text x="84" y="15" fill="#000" fill-opacity=".28">Broware Attribution</text><text x="84" y="14">Broware Attribution</text></g></svg><a href="https://github.com/ucxn/Bro-Stat/blob/main/Ruijie-1.user.js" target="_blank" style="color: #0059fa; text-decoration: none; font-weight: bold;">Bro-Stat 增强组件</a> <span title="构建时间：2026-10.19&#15;架构设计：哥哥科技 BroTech&#10;Bilibili UID：501430041&#10;QQ群：680464365" style="background: rgba(0,0,0,0.04); padding: 2px 6px; border-radius: 4px; cursor: help; margin: 0 4px; font-family: Consolas;">锐捷版 ${版本号}</span> | Copyright &copy; 2026 <a href="https://www.bilibili.com/video/BV19ZpB64E6D" target="_blank" style="color: #0059fa; text-decoration: none; font-weight: bold;">哥哥科技</a> (BroTech)<span style="color: #888; font-weight: normal;"> | All Rights Reserved</span>&emsp;&nbsp;<a href="https://scriptcat.org/users/203510" target="_blank" style="color: #666; text-decoration: none;">点击分享</a></div></div></div></div>`;
      S._domRebuilt = true;});}
    catch (e) {
      requestAnimationFrame(() => {
        ol.innerHTML = `<div style="padding: 20px; color: red;">数据渲染失败: ${escapeHTML(e.message)}</div>`;
      });
    }
  }
  window.createGegeFloatingBtn = function () {
    if (document.getElementById('gege-floating-btn')) return;
    let b =
      document.createElement('div');
    b.id = 'gege-floating-btn';
    b.innerHTML = '🛸';
    b.style.cssText = `position: fixed; top: 60px; right: 60px; width: 50px; height: 50px; background: linear-gradient(135deg, #0059fa, #00c6ff); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 48px; box-shadow: 0 4px 15px rgba(0,89,250,0.5); cursor: pointer; z-index: 99999; transition: transform 0.3s ease; user-select: none;`;
        b.
    onmouseover = () => {
      b.style.transform = 'scale(1.1) rotate(15deg)';
    };
    b.onmouseout = () => {
      b.style.transform =
        'scale(1) rotate(0deg)';
    };
    b.onclick = () => window.gegeTogglePanel();
    document.body.appendChild(b);
  };
  window.gegeTogglePanel = function (fS = null) {
    let o = document.getElementById('gege-global-overlay'),
      iCO =
      o && o.style.display === 'block',
      tS = fS !== null ? fS : !iCO;
    if (!tS) {
      if (o) o.style.display = 'none';
      return;
    }
    if (!o) {
      o = document.createElement('div');
      o.id = 'gege-global-overlay';
      document.body.appendChild(o);
    }
    o.style.display = 'block';

if (!window.gegeBActivated) {
      window.gegeBActivated = !0;
      clearInterval(window.gegeMasterTimer);
      window.gegeMasterTimer = setInterval(eBET, CONFIG.wanRefreshInterval * 1000);
    }
    锐取射频(); // 每次点开面板读取一次射频信道
    bVD(o).then(() => eBET());
  };

  window.gegeBActivated = !1;
  window.gegeEngineRunning = !1;
  window.gegeHiddenDevices = {};
  window.gegeMasterTimer = null;
async function eBET() {
    if (window.gegeEngineRunning) return;
    if (!锐.auth) { 锐.错误 = '等待会话：在锐捷后台随便点一下，或停留在官方概览页'; await rSD(null, null, performance.now()); return; }
    window.gegeEngineRunning = !0;
    try {
      const [ov, ul] = await Promise.allSettled([锐取('ov'), 锐取('ul')]);
      锐.错误 = ov.status === 'rejected' && ul.status === 'rejected' ? `取数失败（${ov.reason?.message || ''}），登录过期请刷新页面` : '';
      await rSD(ov.status === 'fulfilled' ? ov.value : null, ul.status === 'fulfilled' ? ul.value : null, performance.now());
    }
    catch (e) {
      console.warn("[哥哥科技] 锐捷引擎中断(将重试):", e.message);
    }
    finally {
      window.gegeEngineRunning = !1;
    }
  }
  const 起 = () => {
    挂样式();
    if (window.createGegeFloatingBtn) window.createGegeFloatingBtn();
  };
  if (document.readyState === 'complete') 起(); else window.addEventListener('load', 起);
})();