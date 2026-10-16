// ==UserScript==
// @license         LicenseRef-BroTech-Additional-Terms AND Delayed Open Source Attribution License 1.0 (DOSA-1.0)
//
// ============================================================================
// 哥哥科技 Source 文件许可与适用范围声明
// BroTech Source File License and Scope Notice

The following license is effective only if all attribution requirements set forth in
the project’s primary license are fully and continuously complied with.

仅当完全且持续遵守项目主license里面的所有、全部署名要求时，以下授权才能生效。
// ============================================================================
//
// 【许可层级与解释顺序 / License Hierarchy and Order of Interpretation】
//
// 哥哥科技（BroTech）作为本项目的原作者，对本项目及其原创内容拥有完整的著作权。
//
// 本文件 @license 中所引用的任何公共许可证、通用许可证或第三方许可证文本，均仅作为
// 本项目许可体系中的副许可证及参考性许可文本使用。它们可以依其文本授予相应权利，
// 但其适用、解释及效力始终从属于哥哥科技附加条款（BroTech Additional Terms，
// 以下简称“附加条款”）。
//
// 无论 @license 中使用 AND、并列列举、引用、组合或其他任何表达方式，附加条款始终
// 构成本项目的主条款；被引用的公共许可证始终仅构成副许可证。AND 仅表示相关许可
// 条款需要共同适用，不表示各组成许可证在发生冲突时具有相同的解释顺位。
//
// 若任何公共许可证、通用许可证、第三方许可证与附加条款之间，就任何条款、子条款、
// 权利、义务、限制、署名要求、分发条件、修改条件、商业使用条件、解释方式或其他事项
// 产生任何不一致、矛盾、重叠或冲突，均以哥哥科技附加条款为准；与附加条款冲突的部分，
// 应按照附加条款所表达的含义进行解释和适用。
//
// 换言之：公共许可证负责提供本项目明确愿意授予的基础权利框架，哥哥科技附加条款负责
// 决定这些权利在本项目中的最终适用方式。公共许可证文本仅供本许可体系引用和参考，
// 不得被解释为能够覆盖、削弱、排除、替代或绕过哥哥科技附加条款。
//
// 对公共许可证的引用，不构成哥哥科技对任何未明确授予权利的放弃，也不得据此推定存在
// 超出本项目明确许可文本之外的额外授权。
//
// BroTech, as the original author of this project, retains full copyright in the
// project and its original content.
//
// Any public, general-purpose, or third-party license referenced in this file's
// @license field is incorporated only as a subordinate license and reference
// license text within this project's licensing framework. Such a license may
// grant the rights expressly provided by its terms, but its application,
// interpretation, and effect are always subordinate to the BroTech Additional
// Terms (the "Additional Terms").
//
// Regardless of whether the @license field uses AND, parallel listing,
// incorporation by reference, combination, or any other form of expression,
// the Additional Terms shall always constitute the primary terms governing this
// project, while every referenced public license shall remain a subordinate
// license. The use of AND means that the relevant license terms apply together;
// it does not give all constituent licenses equal interpretive priority in the
// event of a conflict.
//
// If any public, general-purpose, or third-party license conflicts, overlaps, or
// is inconsistent with the Additional Terms with respect to any provision,
// sub-provision, right, obligation, restriction, attribution requirement,
// distribution condition, modification condition, commercial-use condition,
// rule of interpretation, or other matter, the Additional Terms shall prevail.
// Any conflicting portion shall be interpreted and applied in accordance with
// the Additional Terms.
//
// Put simply: the referenced public license provides the baseline framework of
// rights that this project chooses to grant, while the BroTech Additional Terms
// determine how those rights ultimately apply to this project. Public license
// texts are incorporated only as subordinate and reference license texts and
// must not be interpreted to override, weaken, exclude, replace, or bypass the
// BroTech Additional Terms.
//
// Referencing a public license does not constitute a waiver by BroTech of any
// right not expressly granted, and no additional authorization beyond the
// project's express licensing terms may be inferred merely from that reference.
//
// ============================================================================
//
// 【本文件许可范围 / Scope of This File's License】
//
// 本文件上方 @license 所列许可条款，仅适用于本文件当前版本中实际、物理存在的
// 源代码、字面量、注释，以及由这些内容具体表达的程序逻辑。
//
// 本文件中实际存在的占位符、文件名、函数名、调用语句、接口名称、引用标记以及其他
// 指向外部内容的文字，本身属于本文件的一部分，并依照本文件的 @license 处理；但是，
// 这些文字所指向、调用、替换、拼接、引入或引用的任何外部代码、文件、实现或其他内容，
// 不因其名称、调用方式或引用关系出现在本文件中，而自动适用本文件的 @license，亦不
// 因此获得任何额外授权。
//
// 特别地，凡由本文件中的保留引用标记指向，并在构建、还原或发布过程中从 Reserved/
// 目录或其他独立来源填入的内容，其版权状态、许可条件及可使用范围，仅由该内容自身
// 所在文件、目录以及随附的版权或许可声明决定。
//
// 本文件对这些内容的引用、调用或占位，不改变、不扩大、不替代，也不重新许可这些内容
// 原有的权利状态。
//
// 因此，本文件所授予的权利，以本文件当前版本实际包含的内容为准。任何没有实际存在于
// 本文件中的代码、实现或由代码具体表达的程序逻辑，均不因本文件能够调用、引用或在
// 构建后包含它们，而获得本文件 @license 所授予的任何权利。
//
// 简单地说：这里没有的代码，一个字节都没有多授权。
//
// 若本文件经过构建、还原、拼接或其他处理，与适用不同许可条件或权利声明的内容共同
// 组成完整脚本，则不得仅依据本文件的 @license 判断该完整脚本或其中其他组成部分的
// 授权状态；各组成部分仍分别适用其自身的版权、许可及权利声明。
//
// 本声明仅用于明确本文件许可证的适用范围、许可层级及解释顺序，不应被理解为扩大任何
// 公共许可证本身原有的授权范围，也不改变 Reserved/ 或其他独立内容自身适用的版权、
// 许可或权利保留声明。
//
// The license identified in the @license field above applies only to the source
// code, literals, comments, and program logic concretely expressed by content
// actually and physically present in the current version of this file.
//
// Placeholders, filenames, function names, call statements, interface names,
// reference markers, and other text actually present in this file are themselves
// part of this file and are governed by this file's @license. However, any
// external code, file, implementation, or other content to which such text
// points, calls, refers, or which it causes to be substituted, concatenated,
// inserted, or incorporated does not become subject to this file's @license
// merely because its name, invocation, or reference appears in this file, and
// no additional rights in such content are granted on that basis.
//
// In particular, any content referenced by a reserved reference marker in this
// file and inserted from the Reserved/ directory or another independent source
// during building, restoration, or release is governed solely by the copyright
// status, license terms, and permissions applicable to that content in its own
// file, directory, or accompanying notice.
//
// Referencing, calling, or placing a placeholder for such content in this file
// does not modify, expand, replace, or relicense its existing rights status.
//
// Accordingly, the rights granted by this file are determined by the content
// actually contained in the current version of this file. Any code,
// implementation, or concretely expressed program logic that is not actually
// present in this file does not acquire rights under this file's @license merely
// because this file can call or reference it, or because it may later be
// incorporated during the build process.
//
// Put simply: if the code is not here, not one additional byte is licensed by
// this file.
//
// If this file is built, restored, concatenated, or otherwise combined with
// content governed by different license terms or rights notices to form a
// complete script, the licensing status of that complete script or of its other
// components must not be determined solely from this file's @license. Each
// component remains subject to its own applicable copyright, license, and
// rights notices.
//
// This notice clarifies the scope, hierarchy, and order of interpretation of
// this file's licensing terms. It does not enlarge the original scope of any
// referenced public license and does not alter any copyright, license, or
// reservation-of-rights notice independently applicable to content in the
// Reserved/ directory or elsewhere.
//
// ==/UserScript==

(function () {
  'use strict';

  console.log("🚀 哥哥科技 V5.9.9 终极引擎已装载...");

  function escapeHTML(str) {
    if (!str) return '';
    return String(str).replace(/[&<>'"]/g, function (match) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      } [match];
    });
  }

  // ======== [0] 用户极客环境变量配置区 ========
  const CONFIG = {
    readSaveData: 0, // 【历史记录】 1: 读档模式(继承本次历史量) | 0: 新局模式(从打开网页此刻归零重新计流)
    forceMeshMode: 0,
    uiLayout: 2,//【面板拓扑结构】 0: 经典版 | 1: 详细紧凑版(驾驶舱美学) | 2: 详细平铺版(报表流美学)
    injectMode: 3, //1: 优先，10秒悬浮舱(D)| 3：强制模式
    calcMode: 1,// 1: 上行/下行倍数模式, 0: 上行占总和比例模式
    ratioExtremeUp: 10, // 极端上传判定阈值 (> 1000%)
    ratioWarnUp: 0.07, // 重度上传警告阈值 (> 7%)
    ratioExtremeDown: 0.01, // 极端下载判定阈值 (< 1%)
    ratioThreshold: 7, // (仅calcMode=0时有效) 上传占比报警阈值(%)
    lanRefreshInterval: 3, // LAN口刷新时间(秒)，用于精准补偿0到唤醒时的瞬时流量
    wanRefreshInterval: 3, // 【新增】WAN口刷新时间(秒)，用于精准补偿0到唤醒时的瞬时流量
    portMap: {
      "eth1": "网口 1",
      "eth2": "网口 2",
      "eth3": "网口 3",
      "eth4": "网口 4",
      "wl0": "2.4G",
      "wl1": "5.2G",
      "wl2": "5.8G"
    }
  };

let _saved = null;
  if (CONFIG.readSaveData === 1 && typeof GM_getValue !== 'undefined') {
    try { _saved = GM_getValue('ha_snapshot', null); } catch(e) {console.warn(e);}
  }

  const S = {
    lt: 0, wInstUp: 0, wInstDn: 0,
    wTotUp: _saved?.global?.wan_up || 0,
    wTotDn: _saved?.global?.wan_down || 0,
    cls: {}, isPinned: !0,
    w2U: 0, w2D: 0, w2TotUp: 0, w2TotDn: 0, w2LT: undefined,
    hasW2: !1, is5G_149: !1,
    无线缓存: Object.create(null), 无线请求中: !1, 端口状态: Object.create(null), 端口请求中: !1, 端口已取: !1, 端口小齿轮: 0, 半双工色轮: 0, DOM缓存: null, DOM已重建: !1, 面板状态: null, HA小齿轮: 0, 包数据可用: !1, RSSI频率修正: undefined,
    总上行图: new Float64Array(8192), 总下行图: new Float64Array(8192), 总图点数: 0,
    wMaxU: 0, wMaxD: 0, wMinU: Infinity, wMinD: Infinity, 图表拖: null, 图表待画: 0
  };

  const _w = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
  const GBK = new TextDecoder('gbk');

  function fB(bps) {
		if (bps > 1e9) return `${(bps * 1e-6).toFixed(1)} Mbit/s`;
        if (bps > 1e6) return `${(bps * 1e-6).toFixed(2)} Mbps`;
        if (bps > 1e3) return `${(bps * 1e-3).toFixed(1)} kbps`;
        return `${Math.round(bps)} bps`;
    }

  function fBy(bps) {
        if (bps === 0) return '0  B';
        if (bps > 8388608) return `${(bps / 8388608).toFixed(2)} MiB/s`;
        return bps < 8602
            ? ((bps * 0.001 | 0) === bps * 0.001
                ? `${['0', '[1/8]', '[2/8]', '[3/8]', '[4/8]', '[5/8]', '[6/8]', '[7/8]', '[1]'][bps * 0.001]} kB/s`
                : `${(bps * 0.000125).toFixed(2)} kB/s`)
            : `${(bps / 8192).toFixed(1)} KiB/s`;
    }

  function fV(bits) {
        if (bits >= 84607500288) return `${(bits / 8589934592).toFixed(4)} GiB`;
	    	if (bits > 8388608000) return `${(bits / 8388608).toFixed(1)} MiB`;
        if (bits > 8388608) return `${(bits / 8388608).toFixed(4)} MiB`;
        if (bits > 8192) return `${(bits / 8192).toFixed(3)} KiB`;
        return `${Math.round(bits / 8)} B`;
    }

  function fSV(bits) {
    if (bits >= 84607500288) return `${(bits / 8589934592).toPrecision(4)}G`;
  	if (bits > 8388608000) return `${Math.round(bits / 8388608)}M`;
    if (bits > 8388608) return `${(bits / 8388608).toFixed(2)}M`;
    if (bits >= 8192) return `${(bits / 8192).toFixed(1)}K`;
    return `${Math.round(bits / 8)}B`;}

  /* @BroTech-Reserved text-utils.part.js */
  function 取名单项(t, 名) {
    let m = t.match(new RegExp('var\\s+' + 名 + '\\s*=\\s*new\\s+Array\\(([\\s\\S]*?)\\);'));
    return m ? (m[1].match(/"[^"]*"|'[^']*'/g) || []) : [];
  }
  function 净设备名(x) {
    x = (x || '').trim();
    return x && !/^(allow|deny|on|out|LAN|WLAN\d*|static|dynamic|0|未绑定|离线)$/i.test(x) ? x : '';
  }
  function H3C接口(x) {
    x = (x || '').toUpperCase();
    if (x.includes('WLAN6')) return 'wl1';
    if (x.includes('WLAN')) return 'wl0';
    let m = x.match(/(?:LAN|ETH(?:ERNET)?)[^0-9]*([1-9]\d*)/);
    if (m) return 'eth' + m[1];
    return /(?:LAN|ETH(?:ERNET)?)/.test(x) ? 'eth1' : '';
  }
  function 写设备名(d, mac, 名, 覆盖 = 0) {
    名 = 净设备名(名);
    if (!mac || !名) return;
    d[mac] ??= {};
    if (覆盖 || !d[mac].name) d[mac].name = 名;
  }

  function 短数(n) { return (+(n || 0).toPrecision(3)).toString(); }
  function 计算包比(u, d) { return d > 0 ? u / d : (u > 0 ? Infinity : 0); }
  function 格式化包比(r) { return r === Infinity ? '∞' : (!r || r < 0 ? '0%' : (r < 1e-3 ? `${短数(r * 1e4)}/万` : (r < 10 ? `${短数(r * 100)}%` : `${短数(r)}倍`))); }
  function 取网口图标(速率) {
    let s = +速率 || 0;
    if (s >= 2500) return `<svg viewBox="0 0 100 100" width="45" height="45"><rect x="15" y="15" width="70" height="65" rx="5" fill="#cfd8dc" stroke="#90a4ae" stroke-width="4"/><path d="M 25,25 L 75,25 L 75,60 L 60,60 L 60,75 L 40,75 L 40,60 L 25,60 Z" fill="#263238"/><g fill="#ffca28"><rect x="30" y="25" width="2.5" height="18"/><rect x="35" y="25" width="2.5" height="18"/><rect x="40" y="25" width="2.5" height="18"/><rect x="45" y="25" width="2.5" height="18"/><rect x="52.5" y="25" width="2.5" height="18"/><rect x="57.5" y="25" width="2.5" height="18"/><rect x="62.5" y="25" width="2.5" height="18"/><rect x="67.5" y="25" width="2.5" height="18"/></g><circle cx="21" cy="73" r="3.5" fill="#4caf50"/><circle cx="79" cy="73" r="3.5" fill="#ffb300"/></svg>`;
    let c = s >= 1000 ? '#4CAF50' : s >= 100 ? '#5394CC' : s > 0 ? '#E7B05C' : '#7b8aa0';
    return `<svg viewBox="0 0 100 100" width="45" height="45" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(180 50 50)"><path d="M18 82V36Q18 32 22 32H28V24Q28 20 32 20H38V14Q38 10 42 10H58Q62 10 62 14V20H68Q72 20 72 24V32H78Q82 32 82 36V82Q82 86 78 86H22Q18 86 18 82Z" fill="${c}" fill-opacity=".10" stroke="${c}" stroke-width="4" stroke-linejoin="round"/><g stroke="${c}" stroke-width="3.2" stroke-linecap="round"><path d="M31 54V76"/><path d="M36.5 54V76"/><path d="M42 54V76"/><path d="M47.5 54V76"/><path d="M53 54V76"/><path d="M58.5 54V76"/><path d="M64 54V76"/><path d="M69.5 54V76"/></g></g></svg>`;
  }
  function 取设备图标(信号, 有线, 速率 = 0) {
    if (有线) return 取网口图标(速率);
    let r = 信号 | 0, c = r > -24 ? '#4caf50' : r > -35 ? '#9c27b0' : '#0059fa';
    /* @BroTech-Reserved wifi-signal-icons.part.js */
  }
  const 火花字符 = [' ', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
  function 取火花线(环, 头, 最大, 最小 = 0) {
    let s = '';
    for (let i = 31; i >= 0; i--) {
      let v = 环[(头 - i) & 31] || 0;
      s += 火花字符[(v < 最小 || 最大 <= 0) ? 0 : Math.min(7, Math.max(1, (v / 最大 * 7) | 0))];
    }
    return s;
  }
  async function 刷无线信息(ts = Date.now()) {
    if (S.无线请求中) return;
    S.无线请求中 = !0;
    try {
      let r = await fetch(`/wlan_ap_client_list.asp?_=${ts}`);
      if (!r.ok) return;
      let t = GBK.decode(await r.arrayBuffer()), 新缓存 = Object.create(null), 要重绘 = !1;
      取名单项(t, 'dhcpd_client_list').forEach(s => {
        let p = s.slice(1, -1).split(';'), mac = nM(p[1]), 接口 = (p[5] || '').toUpperCase().includes('5G') ? 'wl1' : 'wl0';
        if (mac) {
          if (!S.无线缓存[mac] || S.无线缓存[mac].接口 !== 接口) 要重绘 = !0;
          新缓存[mac] = { 信号: (+p[6] || 0) - 92, 协商: +p[7] || 0, SSID: p[4] || '', 频段: p[5] || '', 接入点: p[8] || '', 接口, 名称: p[3] || '' };
          window.__h3cDict ??= {}; window.__h3cDict[mac] ??= {}; window.__h3cDict[mac].iface = 接口;
          if (p[3] && p[3].trim()) window.__h3cDict[mac].name = window.__h3cDict[mac].name || p[3].trim();
        }
      });
      for (let mac in S.无线缓存) if (!新缓存[mac]) { 要重绘 = !0; if (window.__h3cDict?.[mac]) delete window.__h3cDict[mac].iface; }
      S.无线缓存 = 新缓存;
      if (要重绘) { window.gegeForceUIRedraw = !0; S.DOM缓存 = null; }
    } catch(e) { console.warn(e); }
    finally { S.无线请求中 = !1; }
  }

  async function 刷端口信息(ts = Date.now()) {
    if (S.端口请求中) return;
    S.端口请求中 = !0;
    try {
      let r = await fetch(`/maintain_basic.asp?basicTab=1&_=${ts}`);
      if (!r.ok) return;
      let t = GBK.decode(await r.arrayBuffer()), 新状态 = Object.create(null), re = /cur_port_status\[\d+\]\s*=\s*\[\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*\]/g, m;
      while ((m = re.exec(t))) {
        let 接口 = H3C接口(m[1]);
        if (!/^eth\d+$/i.test(接口)) continue;
        let 状态 = m[2], sm = 状态.match(/([\d.]+)\s*([GMK])/i), rate = 0;
        if (sm) { rate = +sm[1] || 0; let u = sm[2].toUpperCase(); if (u === 'G') rate *= 1000; else if (u === 'K') rate *= 0.001; }
        新状态[接口] = { rate, half: /半双工|HALF/i.test(状态) };
      }
      if (Object.keys(新状态).length) S.端口状态 = 新状态;
      S.端口已取 = Object.keys(新状态).length > 0;
    } catch(e) { console.warn(e); }
    finally { S.端口请求中 = !1; }
  }


      /* @BroTech-Reserved speed-chart.part.js */

  const st = document.createElement('style');
  st.innerHTML = `/* @BroTech-Reserved style-panel.part.js */
    .gege-pkt-line{color:#666;font-size:11.5px;font-family:system-ui, sans-serif;line-height:1.35;white-space:normal}.dev-title-line{display:flex;align-items:center;justify-content:space-between;gap:10px;width:95%;}.dev-title-line .dev-name-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.gege-rssi{font-size:11.5px;font-weight:normal;color:#666;margin-left:2em;white-space:nowrap;flex-shrink:0;}
    @media (min-width:769px){.config-item-box{padding-bottom:4px!important}.gege-list-item{padding:6px 10px!important}}
    `;
  document.
  head.
  appendChild(st);
  window.gegeRenderedMacs = new Set();
async function rSD() {
    if (window.__gIsF) return;
    window.__gIsF = !0;
    try {
const ts = Date.now();
      let resW, resL, tW = "", tL = "", wanNow, lanNow;
      
      try { resW = await fetch(`/flow_polling.asp?_=${ts}`); if(resW.ok) tW = GBK.decode(await resW.arrayBuffer()); } catch(e){console.warn(e);}
      wanNow = performance.now();
      try { resL = await fetch(`/ip_statistics.asp?_=${ts}`); if(resL.ok) tL = GBK.decode(await resL.arrayBuffer()); } catch(e){console.warn(e);}
      lanNow = performance.now();

      let wB_m = tW.match(/wan_bytes\[0\]\s*=\s*\[(\d+),\s*(\d+)\]/);
      let wM_m = tW.match(/wan_ms\[0\]\s*=\s*\[(\d+),\s*(\d+)\]/);
      let hasWanBytes = !!wB_m, hasWanRate = !!wM_m;
      let cWU = S.wInstUp, cWD = S.wInstDn;
      if (hasWanRate) {
        cWU = (+wM_m[1] || 0) * 8;
        cWD = (+wM_m[2] || 0) * 8;
        记总速率图(cWU, cWD);
      }

      // 官方累计与高精积分响应无效处理
      if (hasWanBytes) {
        S.oWU = (+wB_m[1] || 0) * 8; S.oWD = (+wB_m[2] || 0) * 8;
        if (S.bWU === undefined) S.bWU = S.oWU;
        if (S.bWD === undefined) S.bWD = S.oWD;
        if (S.oWU < S.lRU) S.bWU = S.lRU = S.oWU;
        if (S.oWD < S.lRD) S.bWD = S.lRD = S.oWD;
        S.lRU = S.oWU; S.lRD = S.oWD;
        S.dTU = Math.max(0, S.oWU - S.bWU);
        S.dTD = Math.max(0, S.oWD - S.bWD);
      }

      S.hasW2 = !1; 

      let cSU = 0, cSD = 0, cI = Object.create(null);
      
// 1. 轻量级快车道：每次必跑，提取 ARP 映射，并生成当前全网 MAC 哈希
      let aL_m = tL.match(/var\s+arp_list\s*=\s*new\s+Array\(([\s\S]*?)\);/), lanValid = !!aL_m;
      let arp = {}, curMacs = [];
      if (aL_m) {
          aL_m[1].split(',').forEach(s => {
              let p = s.replace(/["'\n\r]/g, '').split(';');
              if(p[0] && p[1]) {
                  let m = nM(p[1]);
                  arp[p[0].trim()] = m;
                  curMacs.push(m);
              }
          });
      }
      curMacs.sort();
      let macHash = curMacs.join('|');
      
      window.__h3cDict ??= {};
      
      // 2. 重量级慢车道：仅当设备指纹发生变化时触发
      if (S.lMacHash !== macHash) {
          S.lMacHash = macHash;
          let D = window.__h3cDict;
          
          // 官方 getUserNameByIp 的顺序：ARP 定位 MAC -> 家长控制 net_mac_list -> WiFi 接入控制 wifi_mac_list -> DHCP 客户端表
          取名单项(tL, 'net_mac_list').forEach(s => {
              let p = s.slice(1, -1).split(';'), mac = nM(p[1]);
              if (!mac) return;
              D[mac] ??= {};
              写设备名(D, mac, p[3] || p[2], 1);
              let 接口 = H3C接口(p[6] || p[5]);
              if (接口) D[mac].iface = 接口;
          });
          取名单项(tL, 'wifi_mac_list').forEach(s => {
              let p = s.slice(1, -1).split(';'), mac = nM(p[1]);
              if (!mac) return;
              D[mac] ??= {};
              写设备名(D, mac, p[3] || p[2]);
              let 接口 = H3C接口(p[6] || p[5]);
              if (接口 && !D[mac].iface) D[mac].iface = 接口;
          });
          取名单项(tL, 'dhcpd_client_list').forEach(s => {
              let p = s.slice(1, -1).split(';'), mac = nM(p[0]);
              if (!mac) return;
              D[mac] ??= {};
              写设备名(D, mac, p[2]);
          });
          

      }

      // 3. 回归快车道：纯数字提取与字典命中
      let iS_re = /ip_stat\[\d+\]\s*=\s*\[(.*?)\];/g;
      let m;
      while ((m = iS_re.exec(tL)) !== null) {
          let p = m[1].replace(/["']/g, '').split(',');
          let ip = p[0].trim();
          let mac = arp[ip];
          if (mac) {
              let u = parseFloat(p[6]) * 1000 || 0;
              let dn = parseFloat(p[8]) * 1000 || 0;
              let dict = window.__h3cDict[mac] || {}, 无线 = S.无线缓存[mac] || {};
              cI[mac] = {
                  upRate: u, dnRate: dn, 包上: +p[5] || 0, 包下: +p[7] || 0,
                  iface: 无线.接口 || dict.iface || 'eth1', // 没有在 WiFi 列表里出现的，默认分配为有线
                  offUp: 0, offDn: 0,
                  onSec: 0,
                  name: dict.name || 无线.名称 || "未知设备",
                  ip: ip || "", 信号: 无线.信号 || 0, 协商: 无线.协商 || 0, SSID: 无线.SSID || "", 频段: 无线.频段 || ""
              };
              S.包数据可用 = S.包数据可用 || cI[mac].包上 > 0 || cI[mac].包下 > 0;
              cSU += u; cSD += dn;
          }
      }

      if (lanValid) S.lastCI = cI;
      else cI = S.lastCI || Object.create(null);
      let ol = document.getElementById('gege-global-overlay'), cM = Object.keys(cI), iD = lanValid && (window.gegeForceUIRedraw || (cM.length !== window.gegeRenderedMacs.size));
      if (!iD && cM.length > 0) { for (let i = 0; i < cM.length; i++) { if (!window.gegeRenderedMacs.has(cM[i])) { iD = !0; break; } } }
      if (iD) for (let m in S.cls) if (!cI[m]) {
        let cS = S.cls[m], ms = Math.min(lanNow - cS.lUT, CONFIG.lanRefreshInterval * 1000);
        if (cS.upR > 0) cS.intUp += cS.upR * ms * 0.0005;
        if (cS.dnR > 0) cS.intDn += cS.dnR * ms * 0.0005;
        if (cS.上次包上 > 0) cS.包上总 += cS.上次包上 * ms * 0.0005;
        if (cS.上次包下 > 0) cS.包下总 += cS.上次包下 * ms * 0.0005;
        cS.upR = cS.dnR = cS.上次包上 = cS.上次包下 = 0; cS.lUT = lanNow;
      }
            if (ol && ol.style.display === 'block' && (iD || !ol.querySelector('.gege-list-item'))) {
        bVD(ol, cI); window.gegeRenderedMacs = new Set(cM); window.gegeForceUIRedraw = !1;
      }
      const gDt = (S.lt !== 0) ? (lanNow - S.lt) * 0.001 : 0;
      if (hasWanRate && S.wLT === undefined) {
        S.wLT = wanNow;
      }
      else if (hasWanRate && (cWU !== S.wInstUp || cWD !== S.wInstDn)) {
        const wDt = wanNow - S.wLT;
        /* @BroTech-Reserved wan-trapezoid-wakeup.part.js */
        S.wLT = wanNow;
      }
      const 组刷新 = new Set;
      for (const m in cI) {
        let cC = cI[m], 新设备 = !S.cls[m];
        S.cls[m] ??= {
          upR: cC.upRate, dnR: cC.dnRate, lUT: lanNow,
          intUp: _saved?.devices?.[m]?.integral_up || 0,
          intDn: _saved?.devices?.[m]?.integral_down || 0,
          包上总: _saved?.devices?.[m]?.packet_up || 0, 包下总: _saved?.devices?.[m]?.packet_down || 0, 上次包上: cC.包上, 上次包下: cC.包下,
          onS: cC.onSec, lOS: cC.onSec, name: _saved?.devices?.[m]?.name || cC.name || m, hU: new Float64Array(32), hD: new Float64Array(32), hIdx: 0
        };
        let cS = S.cls[m],
          dU = cC.offUp - cS.lU,
          dD = cC.offDn - cS.lD;
        if (cC.name && cC.name !== '未知设备') cS.name = cC.name;
        if (dU < 0 || dD < 0) {
          if (dU < 0) {
            cS.uB += dU;
            cS.dpU = cS.lU;
          }
          if (dD < 0) {
            cS.dB += dD;
            cS.dpD = cS.lD;
          }
          cS.aR = !0;
        }
        else if (cS.aR) {
          if (dD > 2516582400 || dU > 671088640 || (cS.dpD && dD >= cS.dpD) || (cS.dpU && dU >= cS.dpU)) {
            cS.uB += dU;
            cS.dB += dD;
            cS.aR = !1;
            cS.dpU = 0;
            cS.dpD = 0;
          }
        }
        if (cS.lOS !== cC.onSec) {
          cS.onS = cC.onSec;
          cS.lOS = cC.onSec;
        }
        else {
          cS.onS = (cS.onS || cC.onSec || 0) + gDt;
        }
        if (!新设备 && !cS.aR && (cC.upRate !== cS.upR || cC.dnRate !== cS.dnR || cC.包上 !== cS.上次包上 || cC.包下 !== cS.上次包下)) 组刷新.add(cC.iface);
        cS.lU = cC.offUp;
        cS.lD = cC.offDn;
      }
      for (const m in cI) {
        let cC = cI[m], cS = S.cls[m], 自身刷新 = cC.upRate !== cS.upR || cC.dnRate !== cS.dnR || cC.包上 !== cS.上次包上 || cC.包下 !== cS.上次包下;
        if (自身刷新 || (!cS.aR && 组刷新.has(cC.iface))) {
          const ms = lanNow - cS.lUT;
          /* @BroTech-Reserved lan-trapezoid-wakeup.part.js */
          if (cS.上次包上 > 0) cS.包上总 += (cS.上次包上 + cC.包上) * ms * 0.0005;
          else if (cC.包上 > 0) cS.包上总 += cC.包上 * CONFIG.lanRefreshInterval * 0.5;
          if (cS.上次包下 > 0) cS.包下总 += (cS.上次包下 + cC.包下) * ms * 0.0005;
          else if (cC.包下 > 0) cS.包下总 += cC.包下 * CONFIG.lanRefreshInterval * 0.5;
          cS.upR = cC.upRate;
          cS.dnR = cC.dnRate;
          cS.上次包上 = cC.包上;
          cS.上次包下 = cC.包下;
          cS.lUT = lanNow;
        }
        cS.hIdx = (cS.hIdx + 1) & 31;
        cS.hU[cS.hIdx] = cC.upRate;
        cS.hD[cS.hIdx] = cC.dnRate;
      }
      S.lt = lanNow;
      if (hasWanRate) { S.wInstUp = cWU; S.wInstDn = cWD; }
      rUI(cWU, cWD, cSU, cSD, cI);
    }
    catch (e) {
      console.error("[哥哥科技] 周期采样中断:", e);
    }
    finally {
      window.__gIsF = !1;
    }
  }
  /* @BroTech-Reserved stage-ratio.part.js */
  function rUI(wU, wD, sU, sD, cI) {
    S.端口小齿轮 = ((S.端口小齿轮 || 0) + 1) & 63;
    if (S.端口小齿轮 === 1 || !S.端口已取) 刷端口信息(Date.now());
    S.半双工色轮 = ((S.半双工色轮 || 0) + 1) & 7;
    let LUp = 0, LDn = 0, hpU = 0, hpD = 0, curHpU = 0, curHpD = 0, 包上总 = 0, 包下总 = 0;
    for (let k in S.cls) {
      let s = S.cls[k];
      let cC = cI[k];
      let cU = s.intUp || 0;
      let cD = s.intDn || 0;
      let sessU = cU;
      let sessD = cD;
      LUp += s.intUp || 0;
      LDn += s.intDn || 0;
      hpU += sessU; 
      hpD += sessD;
      包上总 += s.包上总 || 0;
      包下总 += s.包下总 || 0;
      if (cC) {
        curHpU += sessU;
        curHpD += sessD;
      }
    }
    if (typeof GM_setValue !== 'undefined' && !((S.HA小齿轮 = ((S.HA小齿轮 || 0) + 1) & 1023))) {
      try {
        let cln = {};
        for (let k in S.cls) { let s = S.cls[k], cC = cI[k]; cln[k] = { up: s.intUp || 0, down: s.intDn || 0, integral_up: s.intUp || 0, integral_down: s.intDn || 0, packet_up: s.包上总 || 0, packet_down: s.包下总 || 0, status: cC ? (CONFIG.portMap[cC.iface] || cC.iface || "未知接口") : "off", name: cC?.name || s.name || k, ip: cC?.ip || "", raw_up: cC?.offUp || 0, raw_down: cC?.offDn || 0 }; }
        GM_setValue('ha_snapshot', {
                timestamp: Date.now(),
      global: {
        wan_up: S.wTotUp,
        wan_down: S.wTotDn,
        lan_integral_up: LUp,
        lan_integral_down: LDn,
            lan_high_up: hpU,
            lan_high_down: hpD,
            lan_packet_up: 包上总,
            lan_packet_down: 包下总,
          },
          devices: cln
        });
      } catch(e) {console.warn(e);}
    }
     S.rTick = ((S.rTick || 0) + 1) & 7;
    if (S.rTick === 1 || !S.cRT) {
        刷无线信息(Date.now());
        S.aWu = (S.wTotUp - (S.lwTU || S.wTotUp)) / (CONFIG.wanRefreshInterval << 3); S.lwTU = S.wTotUp;
        S.aWd = (S.wTotDn - (S.lwTD || S.wTotDn)) / (CONFIG.wanRefreshInterval << 3); S.lwTD = S.wTotDn;
              if (S.hasW2) {
          let rU = S.w2TotUp > 0 ? (S.wTotUp / S.w2TotUp) : (S.wTotUp > 0 ? Infinity : 0), rD = S.w2TotDn > 0 ? (S.wTotDn / S.w2TotDn) : (S.wTotDn > 0 ? Infinity : 0);
          let fR = (r) => r === Infinity ? '∞' : (r > 1 ? r.toFixed(2) + 'x' : (r * 100).toPrecision(3) + '%');
            S.cRT = `<span style="font-weight: bold;"><span style="color:#9c27b0;">${fR(rU)}</span>，<span style="color:#4caf50;">${fR(rD)}</span></span>`;
        } else {
            let rUp = calcStageRatio(S.wTotUp, LUp, hpU), rDn = calcStageRatio(S.wTotDn, LDn, hpD);
            S.cRT = `<span style="font-weight: bold;"><span style="color: ${rUp > 1.5 ? '#9c27b0' : (rUp > 1.15 ? '#FF9800' : '#4CAF50')};">${(rUp * 100).toFixed(2)}%</span>，<span style="color: ${rDn > 1.5 ? '#9c27b0' : (rDn > 1.15 ? '#FF9800' : '#4CAF50')};">${(rDn * 100).toFixed(2)}%</span></span>`;
        }
    }
        let bd = document.getElementById('zte-geek-board');
    if (!bd) {
      bd = document.createElement('div');
      bd.id = 'zte-geek-board';
 let layoutHtml = '';
        if (CONFIG.uiLayout === 1) { // 紧凑版 (驾驶舱)
            layoutHtml = `
                <div class="geek-row"><span class="geek-label">WAN口速率</span><div class="geek-val-box" style="position:relative;"><span class="c-up geek-fixed-width" id="gb-wan-up-bytes"></span><span class="c-down geek-fixed-width" id="gb-wan-down-bytes"></span><span style="font-weight: normal; margin-left: 5px;"><span class="c-up" id="gb-wan-up-bps"></span> | <span class="c-down" id="gb-wan-down-bps"></span></span><span id="gb-pwan-vol-container" style="display:none; position:absolute; left:clamp(450px, 60%, 700px); color:#333; font-weight:bold; white-space:nowrap;">副WAN总：<span class="c-up" id="gb-pwan-tot-up"></span> | <span class="c-down" id="gb-pwan-tot-down"></span></span></div><div class="geek-right-box" style="font-weight: normal; color: #666;" id="gb-wpeak-avg">峰值获取中...</div></div>
                <div class="geek-row"><span class="geek-label">局域网代数和</span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-lan-up-bytes"></span><span class="c-down geek-fixed-width" id="gb-lan-down-bytes"></span><span style="font-weight: normal; margin-left: 5px;"><span class="c-up" id="gb-lan-up-bps"></span> | <span class="c-down" id="gb-lan-down-bps"></span></span></div><div class="geek-right-box">实时占比：<span class="c-up" id="gb-perc-up"></span> | <span class="c-down" id="gb-perc-down"></span></div></div>
                <div class="geek-row"><span class="geek-label">WAN总计：</span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-wan-up-vol" title="高精积分存档"></span><span class="c-down geek-fixed-width" id="gb-wan-down-vol" title="高精积分存档"></span><span style="font-weight: bold; margin-left: 5px;" title="本次打开网页后的官方差值">本次官方：<span class="c-up" id="gb-sowan-up-vol"></span> | <span class="c-down" id="gb-sowan-down-vol"></span></span></div><div class="geek-right-box"><span style="font-weight: normal;">总官方：</span><span class="c-up" id="gb-owan-up-vol"></span> | <span class="c-down" id="gb-owan-down-vol"></span></div></div>
                <div class="geek-row"><span class="geek-label">LAN：<span id="gege-pin-btn" class="gege-pin" title="冻结窗格">📌</span></span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-lan-up-vol"></span><span class="c-down geek-fixed-width" id="gb-lan-down-vol"></span><span id="gb-packet-line" style="font-weight:bold;margin-left:5px;white-space:nowrap;"></span><span style="font-weight: normal; margin-left: 5px; color:#666;">高精统计：<span class="c-up" id="gb-int-up-vol"></span> | <span class="c-down" id="gb-int-down-vol"></span></span></div><div class="geek-right-box">${S.hasW2?'主次网比':'内外网比'}：<span id="gb-ratio-display"></span></div></div>`;
        } else if (CONFIG.uiLayout === 2) { // 平铺版 (报表流)
            layoutHtml = `
                <div class="geek-row"><span class="geek-label">WAN口速率</span><div class="geek-val-box" style="position:relative;"><span class="c-up geek-fixed-width" id="gb-wan-up-bytes"></span><span class="c-down geek-fixed-width" id="gb-wan-down-bytes"></span><span style="font-weight: normal; margin-left: 5px;"><span class="c-up" id="gb-wan-up-bps"></span> | <span class="c-down" id="gb-wan-down-bps"></span></span><span id="gb-pwan-vol-container" style="display:none; position:absolute; left:clamp(450px, 60%, 700px); color:#333; font-weight:bold; white-space:nowrap;">副WAN总：<span class="c-up" id="gb-pwan-tot-up"></span> | <span class="c-down" id="gb-pwan-tot-down"></span></span></div><div class="geek-right-box" style="font-weight: normal; color: #666;" id="gb-wpeak-avg">峰值获取中...</div></div>
                <div class="geek-row"><span class="geek-label">局域网代数和</span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-lan-up-bytes"></span><span class="c-down geek-fixed-width" id="gb-lan-down-bytes"></span><span style="font-weight: normal; margin-left: 5px;"><span class="c-up" id="gb-lan-up-bps"></span> | <span class="c-down" id="gb-lan-down-bps"></span></span></div><div class="geek-right-box">实时占比：<span class="c-up" id="gb-perc-up"></span> | <span class="c-down" id="gb-perc-down"></span></div></div>
                <div class="geek-row"><span class="geek-label">WAN总计：</span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-wan-up-vol" title="高精积分存档"></span><span class="c-down geek-fixed-width" id="gb-wan-down-vol" title="高精积分存档"></span><span style="font-weight: bold; margin-left: 5px;" title="本次打开网页后的官方差值">本次官方：<span class="c-up" id="gb-sowan-up-vol"></span> | <span class="c-down" id="gb-sowan-down-vol"></span></span></div><div class="geek-right-box"><span style="font-weight: normal;">总官方：</span><span class="c-up" id="gb-owan-up-vol"></span> | <span class="c-down" id="gb-owan-down-vol"></span></div></div>
                <div class="geek-row"><span class="geek-label">LAN：<span id="gege-pin-btn" class="gege-pin" title="冻结窗格">📌</span></span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-lan-up-vol"></span><span class="c-down geek-fixed-width" id="gb-lan-down-vol"></span><span id="gb-packet-line" style="font-weight:bold;margin-left:5px;white-space:nowrap;"></span></div><div class="geek-right-box"><span style="font-weight: normal;">${S.hasW2?'主次网比':'内外网比'}：</span><span id="gb-ratio-display"></span></div></div>`;
        } else { // 经典版 (0)
            layoutHtml = `
                <div class="geek-row"><span class="geek-label">WAN口速率</span><div class="geek-val-box" style="position:relative;"><span class="c-up geek-fixed-width" id="gb-wan-up-bytes"></span><span class="c-down geek-fixed-width" id="gb-wan-down-bytes"></span><span style="font-weight: normal; margin-left: 5px;"><span class="c-up" id="gb-wan-up-bps"></span> | <span class="c-down" id="gb-wan-down-bps"></span></span><span id="gb-pwan-vol-container" style="display:none; position:absolute; left:clamp(450px, 60%, 700px); color:#333; font-weight:bold; white-space:nowrap;">副WAN总：<span class="c-up" id="gb-pwan-tot-up"></span> | <span class="c-down" id="gb-pwan-tot-down"></span></span></div><div class="geek-right-box" style="font-weight: normal; color: #666;" id="gb-wpeak-avg">峰值获取中...</div></div>
                <div class="geek-row"><span class="geek-label">局域网代数和</span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-lan-up-bytes"></span><span class="c-down geek-fixed-width" id="gb-lan-down-bytes"></span><span style="font-weight: normal; margin-left: 5px;"><span class="c-up" id="gb-lan-up-bps"></span> | <span class="c-down" id="gb-lan-down-bps"></span></span></div><div class="geek-right-box">实时占比：<span class="c-up" id="gb-perc-up"></span> | <span class="c-down" id="gb-perc-down"></span></div></div>
                <div class="geek-row"><span class="geek-label">WAN总计：</span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-wan-up-vol" title="高精积分存档"></span><span class="c-down geek-fixed-width" id="gb-wan-down-vol" title="高精积分存档"></span></div><div class="geek-right-box"><span style="font-weight: normal;">总官方：</span><span class="c-up" id="gb-owan-up-vol"></span> | <span class="c-down" id="gb-owan-down-vol"></span></div></div>
                <div class="geek-row"><span class="geek-label">LAN：<span id="gege-pin-btn" class="gege-pin" title="冻结窗格">📌</span></span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-lan-up-vol"></span><span class="c-down geek-fixed-width" id="gb-lan-down-vol"></span><span id="gb-packet-line" style="font-weight:bold;margin-left:5px;white-space:nowrap;"></span></div><div class="geek-right-box"></div></div>`;
        }
                /* @BroTech-Reserved board-pin-anchor.part.js */
  
    let 面板状态 = iPO ? '悬浮' : '原生', oDC = S.DOM缓存;
    if (!oDC || S.DOM已重建 || S.面板状态 !== 面板状态) {
      oDC = Object.create(null);
          if (!iPO) {
      const M_RX = /([a-fA-F0-9]{2}[:-]){5}[a-fA-F0-9]{2}/;
      let aI = aC.querySelectorAll('.config-item');
      for (let n of aI) {
        let mN = n.querySelector('.dev-number'),
          mM = mN ? mN.textContent.match(M_RX) : null;
          if (mM) oDC[mM[0].toLowerCase().replace(/-/g, ':')] = n;
        }
      }
      else {
        let gI = aC.querySelectorAll('.gege-list-item');
        for (let n of gI) {
          let m = n.getAttribute('data-gege-mac');
          if (m) oDC[m] = n;
        }
      }
      S.DOM缓存 = oDC; S.DOM已重建 = !1; S.面板状态 = 面板状态;
    }
            if (bd.parentNode) {
        const setText = (id, text) => { const el = bd.querySelector(id); if (el) el.textContent = text; };
        let aW2U = S.hasW2 ? S.w2U : undefined, aW2D = S.hasW2 ? S.w2D : undefined, aW2TU = S.hasW2 ? S.w2TotUp : undefined, aW2TD = S.hasW2 ? S.w2TotDn : undefined;
        if (!S.runT) S.runT = performance.now();
        let dtR = (performance.now() - S.runT) / 1000;
        let aWU = dtR > 0 ? (S.dTU / dtR) : 0;
        let aWD = dtR > 0 ? (S.dTD / dtR) : 0;

        setText('#gb-wan-up-bytes', `🔼 ${fBy(wU + (aW2U||0))}`);
        setText('#gb-wan-down-bytes', `🔽 ${fBy(wD + (aW2D||0))}`);
        setText('#gb-wan-up-bps', `🔼 ${fB(wU)}`);
        setText('#gb-wan-down-bps', `🔽 ${fB(wD)}`);
        setText('#gb-wpeak-avg', `峰: 🔼${fBy(S.wMaxU)} 🔽${fBy(S.wMaxD)} ｜ 均: 🔼${fBy(aWU)} 🔽${fBy(aWD)}`);
        setText('#gb-lan-up-bytes', `🔼 ${fBy(sU)}`);
        setText('#gb-lan-down-bytes', `🔽 ${fBy(sD)}`);
        setText('#gb-lan-up-bps', `🔼 ${fB(sU)}`);
        setText('#gb-lan-down-bps', `🔽 ${fB(sD)}`);
                setText('#gb-perc-up', `🔼 ${wU>0?(sU*100/wU).toFixed(1):0.0}%`);
        setText('#gb-perc-down', `🔽 ${wD>0?(sD*100/wD).toFixed(1):0.0}%`);
        setText('#gb-lan-up-vol', `🔼 ${fV(LUp)}`);
        setText('#gb-lan-down-vol', `🔽 ${fV(LDn)}`);
        setText('#gb-wan-up-vol', `🔼 ${fV(S.wTotUp)}`);
        setText('#gb-wan-down-vol', `🔽 ${fV(S.wTotDn)}`);
        setText('#gb-sowan-up-vol', `🔼 ${fV(S.dTU || 0)}`);
        setText('#gb-sowan-down-vol', `🔽 ${fV(S.dTD || 0)}`);
        setText('#gb-owan-up-vol', `🔼 ${fV(S.oWU || 0)}`);
        setText('#gb-owan-down-vol', `🔽 ${fV(S.oWD || 0)}`);
        { let 包线 = bd.querySelector('#gb-packet-line'); if (包线) { 包线.style.display = S.包数据可用 ? 'inline' : 'none'; if (S.包数据可用) 包线.innerHTML = `<span style="color:#666;">本次包数：</span><span style="color:#ff4c00;">↑ ${Math.round(包上总)}包，${包上总 ? fSV(LUp / 包上总) : '0B'}/包</span><span style="color:#666; margin:0 6px;">|</span><span style="color:#0059fa;">↓ ${Math.round(包下总)}包，${包下总 ? fSV(LDn / 包下总) : '0B'}/包</span><span style="color:#4CAF50; margin-left:8px;">${格式化包比(计算包比(包上总, 包下总))}</span>`; } }
                画总速率图(bd);
        let pb = bd.querySelector('#gb-pwan-bps-container'), pv = bd.querySelector('#gb-pwan-vol-container');
        if (aW2U !== undefined) {
            if (pb) { pb.style.display = 'inline'; setText('#gb-pwan-bps-up', '🔼 ' + fB(aW2U)); setText('#gb-pwan-bps-down', '🔽 ' + fB(aW2D)); }
            if (pv) { pv.style.display = 'inline'; setText('#gb-pwan-tot-up', '🔼 ' + fV(aW2TU)); setText('#gb-pwan-tot-down', '🔽 ' + fV(aW2TD)); }
        } else {
            if (pb) pb.style.display = 'none'; if (pv) pv.style.display = 'none';
        }
        if (bd.querySelector('#gb-ratio-display')) {
          setText('#gb-cur-up-vol', `🔼 ${fV(curHpU)}`);
          setText('#gb-cur-down-vol', `🔽 ${fV(curHpD)}`);
          bd.querySelector('#gb-ratio-display').innerHTML = S.cRT;
          if (bd.querySelector('#gb-wan-zero-up')) {
              setText('#gb-wan-zero-up', !S.wZEU ? '' : fSV(S.wZEU));
              setText('#gb-wan-zero-down', !S.wZED ? '' : fSV(S.wZED));
              setText('#gb-wan-zero-up-cnt', S.wZEUC || 0);
              setText('#gb-wan-zero-down-cnt', S.wZEDC || 0);
          }
        }
      }
      const inv_boardUp = hpU > 0 ? 100 / hpU : 0;
      const inv_LDn = LDn > 0 ? 100 / LDn : 0;
      const inv_sU = sU > 0 ? 100 / sU : 0;
      const inv_sD = sD > 0 ? 100 / sD : 0;

      for (let m in cI) {
        let it = oDC[m];
        if (!it) continue;
        const cC = cI[m] || { upRate: 0, dnRate: 0, iface: "", offUp: 0, offDn: 0, 包上: 0, 包下: 0, 信号: 0 },
              cS = S.cls[m] || { intUp: 0, intDn: 0, onS: 0, 包上总: 0, 包下总: 0 };
        
        let cache = it._gege || (it._gege = {});
        let hqU = cS.intUp || 0; 
        let hqD = cS.intDn || 0;
                let tN = cache.timeNode ??= it.querySelector('.gege-online-time');
        if (tN && cS.onS > 0) tN.textContent = `在线：${fOT(cS.onS)}`;
        
        const dI = cache.devIntro ??= it.querySelector('.dev-intro');
        const inf = cache.info ??= it.querySelector('.info');
        let 有线 = /^eth\d+$/i.test(cC.iface || ''), 端口 = 有线 ? S.端口状态[cC.iface] : null, 连接速率 = 有线 ? (端口?.rate || 0) : (cC.协商 || 0), 半双工 = !!(有线 && 端口?.half);
        let 半双工颜色 = ['#ff4c00', '#ff9800', '#f4c20d', '#4caf50', '#00bcd4', '#0059fa', '#9c27b0', '#000'][S.半双工色轮 & 7];
        let rate标记 = 连接速率 ? `<div style="font-size:10.5px;color:${连接速率===2500?'#000':连接速率===100?'#ff4c00':连接速率===10?'#4caf50':'#999'};font-family:Consolas;margin-top:2px;font-weight:${连接速率===2500||连接速率===100?'bold':'normal'};">rate:${连接速率}${半双工 ? `<span style="color:${半双工颜色};">.H</span>` : ''}</div>` : '';
        (cache.logo ??= it.querySelector('.dev-logo')) && (cache.logo.innerHTML = 取设备图标(cC.信号 | 0, 有线, 连接速率) + rate标记);
        let rssiNode = cache.rssiNode ??= it.querySelector('.gege-rssi');
        if (rssiNode) {
          if (cC.信号 | 0) { let p = Math.round((cC.信号 | 0) + 92 - (cC.iface === 'wl0' ? (S.RSSI频率修正 ?? 0) : 0)); rssiNode.innerHTML = `<span style="color:${p < 0 ? '#ff4c00' : 'inherit'}">${p}%</span>, ${cC.信号 | 0}`; }
          else rssiNode.textContent = '';
        }
        let 包行 = inf && (cache.包数行 ??= inf.querySelector('.gege-pkt-line'));
        if (包行) { 包行.style.display = S.包数据可用 ? '' : 'none'; if (S.包数据可用) 包行.innerHTML = `<span style="color:#ff4c00;">↑ ${Math.round(cS.包上总 || 0)}包</span><span style="color:#FF9800;">，${包上总 ? ((cS.包上总 || 0) * 100 / 包上总).toFixed(1) : '0.0'}%</span><span style="margin:0 6px;"></span><span style="color:#0059fa;">↓ ${Math.round(cS.包下总 || 0)}包</span><span style="color:#9c27b0;">，${包下总 ? ((cS.包下总 || 0) * 100 / 包下总).toFixed(1) : '0.0'}%</span><span style="color:#4CAF50; margin-left:8px;">${格式化包比(计算包比(cS.包上总 || 0, cS.包下总 || 0))}</span>`; }

        /* @BroTech-Reserved device-card-integral.part.js */
          let clU = Math.max(...cS.hU, (S.aWu * 0.1) || 0, 512000);
          let clD = Math.max(...cS.hD, (S.aWd / 8) || 0);
          (cache.bUSpk ??= bU.querySelector('.v-spark')).textContent = 取火花线(cS.hU, cS.hIdx, clU, 73000);
          (cache.bDSpk ??= bD.querySelector('.v-spark')).textContent = 取火花线(cS.hD, cS.hIdx, clD, 1000000);
        }
      }
    });
  }
  async function bVD(ol, cI) {
    try {
      let h2 = [], h52 = [], h58 = [], hW = [];
      for (let m in cI) {
        let d = cI[m], tS = fOT(d.onSec), ifc = d.iface;
        let htm = `<div class="col-md-12 col-xs-12 config-item gege-list-item" data-gege-mac="${m}"><div class="config-item-box" style="display: flex; align-items: stretch;"><div class="col-md-5 col-xs-7 logo" style="width: 33%; display: flex; flex-direction: row; align-items: center;"><div class="dev-logo" style="width: 50px; min-height: 50px; min-width: 50px; margin-right: 15px; display: flex; flex-direction: column; align-items:center; justify-content:center;"></div><div class="dev-intro" style="flex: 1; display: flex; flex-direction: column; justify-content: flex-start; min-height: 50px;">
<div class="dev-title-line"><span class="dev-name-text" style="font-weight: bold; color: #333; font-size: 14px;">${escapeHTML(d.name)}</span><span class="gege-rssi"></span></div><div class="gege-online-time" style="color: #999; font-size: 12px; font-family: system-ui, sans-serif; margin-top: 4px;">${tS?'在线：'+tS:''}</div></div></div><div class="col-md-4 col-xs-5 info" style="width: 27%; display: flex; flex-direction: column; padding: 0 10px; border-right: 1px solid #eee;"><div class="dev-ip" style="color: #666; font-family: system-ui, sans-serif;">${escapeHTML(d.ip)}</div><div class="dev-number grey gege-pkt-line" style="color: #666; font-size: 11.5px; font-family: system-ui, sans-serif;"></div></div><div class="col-md-3 col-xs-12 speed" style="width: 40%; display: flex; flex-direction: column; justify-content: center; padding: 0 10px;"></div></div></div>`;
                if (['wl0', '2.4G'].includes(ifc)) h2.push(htm);
        else if (['wlan5', 'wl1', 'wlan4', '5.2', '5.2G'].includes(ifc)) h52.push(htm);
        else if (ifc === 'wl2' || ifc === 'wlan2' || ifc === '5.8G' || (/w/i.test(ifc) && !/wan/i.test(ifc))) h58.push(htm);
        else hW.push(htm);
      }
      requestAnimationFrame(() => {
        ol.innerHTML = `<div style="padding: 20px; width: 96%; margin: 0 auto; min-height: 100%;"><div id="gege-board-anchor"></div><div id="config-list" class="config-list gege-list-container"><div class="gege-section"><div class="config-title">有线设备${(window.gegeHiddenDevices && Object.keys(window.gegeHiddenDevices).length > 0) ? '<span style="color: #ff4c00; font-size: 13px; font-weight: normal; margin-left: 10px; font-family: system-ui, sans-serif;">(哥哥科技：智能Mesh适配)</span>' : ''}</div>${hW.join('')||'<div class="gege-empty-state">没有连接设备</div>'}</div><div class="gege-section"><div class="config-title">无线设备（${S.is5G_149?'5.8GHz':'5.2GHz'}）</div>${h52.join('')||'<div class="gege-empty-state">没有连接设备</div>'}</div><div class="gege-section"><div class="config-title">无线设备（2.4GHz）</div>${h2.join('')||'<div class="gege-empty-state">没有连接设备</div>'}</div><div class="gege-section"><div class="config-title">无线设备（${S.is5G_149?'5.2GHz':'5.8GHz'}）</div>${h58.join('')||'<div class="gege-empty-state">没有连接设备</div>'}
        </div><div style="margin-top: 25px; padding-top: 15px; border-top: 1px dashed #eee; text-align: center; font-family: Consolas, 'Microsoft YaHei', sans-serif;"><div style="font-size: 11.5px; color: #777; font-style: italic; margin-bottom: 8px;">“在一个文明社会，干净的、不被监视与吸血的网络，是我们每个人的基本权利。”</div><div style="font-size: 10.5px; color: #999; line-height: 1.3; margin-bottom: 8px;">本交互式程序属于“哥哥软件”系列；需持续遵守署名条款方可获得使用权，二开或发行请参阅许可证；按“原样且免费”提供，不对其适用性、稳定性、精密度或任何商业场景合规性作担保；个人分享请直接转载官方链接。<br>基于本程序的任何修改、使用任意部分代码、再发布或相关衍生版本的合法性的前置条件是：在提供最终用户界面时，均应显著、实质保留所有“哥哥科技”与法律声明，不得删除、隐藏或降低其可见性。<a href="https://github.com/ucxn/Bro-Stat/blob/main/License.md" target="_blank" style="color: #777; text-decoration: underline;">查看许可证/分享</a>
        <div style="font-size:12px;color:#555;"><svg xmlns="http://www.w3.org/2000/svg" width="131" height="18" viewBox="0 0 145 20" role="img" aria-label="Broware Attribution" style="vertical-align:middle;margin-right:6px"><defs><linearGradient id="bg1" x2="0" y2="1"><stop stop-color="#4b4b4b"/><stop offset=".5" stop-color="#333"/><stop offset="1" stop-color="#1f1f1f"/></linearGradient><linearGradient id="bg2" x2="0" y2="1"><stop stop-color="#52d58c"/><stop offset=".52" stop-color="#31bc71"/><stop offset="1" stop-color="#218b50"/></linearGradient><linearGradient id="sh" x2="0" y2="1"><stop stop-color="#fff" stop-opacity=".32"/><stop offset=".45" stop-color="#fff" stop-opacity=".08"/><stop offset=".46" stop-opacity="0"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="c"><rect width="145" height="20" rx="4"/></clipPath></defs><g clip-path="url(#c)"><path fill="url(#bg1)" d="M0 0h24v20H0z"/><path fill="url(#bg2)" d="M24 0h121v20H24z"/><path fill="url(#sh)" d="M0 0h145v20H0z"/></g><g transform="translate(4 2)"><rect width="15" height="15" rx=".6" fill="#fff"/><rect x="1" y="1" width="13" height="13" fill="#58d18d"/><path fill="#fff" d="M1 1h7v7z"/><path fill="#32bf70" d="M8 1h6v13H8z"/><path fill="#1ba856" d="M1 14h7V8l6 6z"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="11"><text x="84" y="15" fill="#000" fill-opacity=".28">Broware Attribution</text><text x="84" y="14">Broware Attribution</text></g></svg><a href="https://github.com/ucxn/Bro-Stat" target="_blank" style="color: #0059fa; text-decoration: none; font-weight: bold;">Bro-Stat 增强组件</a> Copyright &copy; 2026 <a href="https://www.bilibili.com/video/BV19ZpB64E6D" target="_blank" style="color: #0059fa; text-decoration: none; font-weight: bold;">哥哥科技</a> (BroTech)<span style="color: #888; font-weight: normal;"> | All Rights Reserved</span>&emsp;&nbsp;<a href="https://scriptcat.org/zh-CN/users/203510" target="_blank" style="color: #666; text-decoration: none;">点此分享</a></div></div></div></div>`;
        S.DOM已重建 = !0; S.DOM缓存 = null;
      });}
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
    b.style.cssText = 'position: fixed; top: 20px; right: 30%; width: 50px; height: 50px; background: linear-gradient(135deg, #0059fa, #00c6ff); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 48px; box-shadow: 0 4px 15px rgba(0,89,250,0.5); cursor: pointer; z-index: 99999; transition: transform 0.3s ease; user-select: none;';
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
    /* @BroTech-Reserved panel-toggle.part.js */
      
      fetch(`/wlan_ap_basic_5g.asp?_=${Date.now()}`)
      .then(r => r.arrayBuffer())
      .then(b => GBK.decode(b))
      .then(t => {
        let m = t.match(/var\s+curChannel\s*=\s*(\d+);/), 信道 = +(m?.[1] || 0);
        S.RSSI频率修正 = 信道 >= 32 && 信道 <= 177 ? 20 * Math.log10((5000 + 5 * 信道) / 2452) : 7.2;
        if (信道 >= 149 && 信道 <= 177 && !S.is5G_149) {
          S.is5G_149 = !0; CONFIG.portMap.wl1 = "5.8G";
          let ol = document.getElementById('gege-global-overlay');
          if (ol && ol.style.display === 'block') window.gegeForceUIRedraw = !0;
        }
      }).catch(e => { S.RSSI频率修正 = 7.2; console.warn("[H3C] 5G信道探测异常:", e); });
    /* @BroTech-Reserved panel-boot.part.js */
})();