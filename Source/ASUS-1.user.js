// ==UserScript==
// @license         LicenseRef-BroTech-Additional-Terms AND LicenseRef-scancode-dosa-1.0
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

  console.log("🚀 哥哥科技 V5.9.9 引擎已装载...");

  // ======== [0] 用户极客环境变量配置区 ========
  const CONFIG = {
    readSaveData: 3, // 【历史记录】 1: 从路由器后台读档 | 0: 新局模式 | 2: 从本地长期历史读档 | 3: 启动时用后台临时值充当积分
    uiLayout: 1, // 【面板拓扑结构】 0: 经典版 | 1: 详细紧凑版(驾驶舱美学) | 2: 详细平铺版(报表流美学)
    injectMode: 3, // 【UI注入模式】 0: 原生侧边栏(1min)| 1: 仅悬浮舱 | 2: 智能选一 | 3：默认模式
    calcMode: 1, // 1: 上行/下行倍数模式, 0: 上行占总和比例模式
    ratioExtremeUp: 10, // 极端上传判定阈值 (> 1000%)
    ratioWarnUp: 0.12, // 重度上传警告阈值 (> 12%)
    ratioExtremeDown: 0.01, // 极端下载判定阈值 (< 1%)
    ratioThreshold: 7, // (仅calcMode=0时有效) 上传占比报警阈值(%)
    lanRefreshInterval: 3, // LAN口刷新时间(秒)，用于精准补偿0到唤醒时的瞬时流量
    wanRefreshInterval: 3, // 【新增】WAN口刷新时间(秒)，用于精准补偿0到唤醒时的瞬时流量
    周期类型: 'M', // 'M'(每月), 'W'(每周), 'D'(固定天数), 其它任意字符：不开启周期重置+自动导出功能
    周_天设置: 1, // M: 1~31号; W: 0~6(周日~周六); D: 间隔天数(如 7)
    基准日期: '2026-10-08', // 原点时间(仅 D 模式有效) 任意一个历史周期的零点
    报告时间: -600, // 提示时间：相对周期0点的偏移分钟数。(如 -4320 代表提前 3 天) 设置相对指定日期的下个周期起点的时间偏移量
    自动导出: 1, // 强制导出：相对周期0点的偏移分钟数。(如 W模式+锚点6(周六)+偏移-180 = 周五 21:00 强制导出清零)
    时区补偿: 28800000, // 默认 UTC+8 时区补偿量。
    '2.4G信道': 6, // RSSI 百分比频率补偿：默认与下方 5G 信道组合约等于原 7.2dB
    '5.2|8G信道': 116, // 华硕固件分支繁多，暂由用户按实际工作信道自由复写
    portMap: {
      "eth1": "网口 1",
      "eth2": "网口 2",
      "eth3": "网口 3",
      "eth4": "网口 4",
      "wl0": "2.4G",
      "wl1": "5.2G",
      "wl2": "访客"
    }
  };

  const ESC_MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' };
  function escapeHTML(str) {
    return str ? String(str).replace(/[&<>'"]/g, m => ESC_MAP[m]) : '';
  }

  const S = {
    lt: 0,
    wInstUp: 0,
    wInstDn: 0,
    wTotUp: 0,
    wTotDn: 0,
    wLedgerUp: 0, wLedgerDn: 0, // 官方增量账本；显示层的保护逻辑不回写事实源
    cls: {}, isPinned: !0,
    w2U: 0, w2D: 0, w2TotUp: 0, w2TotDn: 0, w2LT: undefined,
    hasW2: !1, is5G_149: !1, oWU:0, Warn_MS: 0, Force_MS: 0, _RST: !1,
    aWu: 0, aWd: 0, lwTU: 0, lwTD: 0, cSnap: null,
    lTotUp: 0, lTotDn: 0, lInstU: 0, lInstD: 0, lLT: undefined,
    DOM缓存: null, DOM容器: null, 有线统一PHY: 0, 主节点MAC: '', 端口请求中: !1,
    总上行图: new Float64Array(8192), 总下行图: new Float64Array(8192), 总图点数: 0,
    wMaxU: 0, wMaxD: 0, wMinU: Infinity, wMinD: Infinity, 图表拖: null, 图表待画: 0
  };
  window.__gIsF = !1;

  function fB(bps) {
		if (bps > 1e9) return `${(bps * 1e-6).toFixed(1)} Mbit/s`;
        if (bps > 1e6) return `${(bps * 1e-6).toFixed(2)} Mbps`;
        if (bps > 1e3) return `${(bps * 1e-3).toFixed(1)} kbps`;
        return `${Math.round(bps)} bps`;
    }

  const F_ARR_16 = ['0', '[1/16]', '[2/16]', '[3/16]', '[1/4]', '[5/16]', '[6/16]', '[7/16]', '[4/8]', '[9/16]', '[10/16]', '[11/16]', '[3/4]', '[13/16]', '[14/16]', '[15/16]', '[1]'];
  function fBy(bps) {
        if (bps === 0) return '0  B';
        if (bps > 8388608) return `${(bps / 8388608).toFixed(2)} MiB/s`;
        return bps < 8601.6
            ? ((bps * 0.002 | 0) === bps * 0.002 && bps < 8001
                ? `${F_ARR_16[bps * 0.002]} kB/s`
                : `${(bps * 0.000125).toFixed(2)} kB/s`)
            : `${(bps / 8192).toFixed(1)} KiB/s`;
    }

  function fV(bits) {
        if (bits > 8589934592) return `${(bits / 8589934592).toFixed(4)} GiB`;
		    if (bits > 8388608000) return `${(bits / 8388608).toFixed(1)} MiB`;
        if (bits > 8388608) return `${(bits / 8388608).toFixed(4)} MiB`;
        if (bits > 8192) return `${(bits / 8192).toFixed(3)} KiB`;
        return `${Math.round(bits / 8)} B`;
    }

  function fVD(bitsIntegral, bitsOfficial) {
        if (bitsIntegral > 8796093022208) return `${(bitsOfficial / 8796093022208).toFixed(4)} | ${(bitsIntegral / 8796093022208).toFixed(4)} TiB`;
        if (bitsIntegral >= 84607500288) return `${(bitsOfficial / 8589934592).toPrecision(5)} | ${(bitsIntegral / 8589934592).toPrecision(5)} GiB`;
        if (bitsIntegral > 8388608000) return `${(bitsOfficial / 8388608).toFixed(2)} | ${(bitsIntegral / 8388608).toFixed(2)} MiB`;
        if (bitsIntegral > 8388608) return `${(bitsOfficial / 8388608).toFixed(3)} | ${(bitsIntegral / 8388608).toFixed(3)} MiB`;
        if (bitsIntegral > 8192) return `${(bitsOfficial / 8192).toFixed(2)} | ${(bitsIntegral / 8192).toFixed(2)} KiB`;
        return `${Math.round(bitsOfficial / 8)} | ${Math.round(bitsIntegral / 8)} B`;}

  function fSV(bits) {
    if (bits >= 84607500288) return `${(bits / 8589934592).toPrecision(4)}G`;
    if (bits > 8388608000) return `${Math.round(bits / 8388608)}M`;
    if (bits > 8388608) return `${(bits / 8388608).toFixed(2)}M`;
    if (bits >= 8192) return `${(bits / 8192).toFixed(1)}K`;
    return `${Math.round(bits / 8)}B`;}

  /* @BroTech-Reserved text-utils.part.js */
  /* @BroTech-Reserved cycle-time.part.js */
  function 信道频率(ch, is5) {
    ch = +ch || 0;
    if (is5) return 5000 + ch * 5;
    return ch === 14 ? 2484 : 2407 + ch * 5;
  }
  const RSSI频率补偿 = 20 * Math.log10(信道频率(CONFIG['5.2|8G信道'], !0) / 信道频率(CONFIG['2.4G信道'], !1));
  const st = document.createElement('style');
  st.innerHTML = `/* @BroTech-Reserved style-panel.part.js */
    .t-row,.zte-enhance-speed{font-family:Consolas;}
    @media (max-width:768px){.config-item-box{position:relative!important}.dev-ip{top:0!important;right:0!important}}
    #zte-geek-board{transition:color 0s cubic-bezier(0.21733,0.21733,0.31185,0.25216);}
    .gege-phy-rate { font:10px/1.08 Consolas,monospace;color:#777;text-align:center;white-space:nowrap;margin-top:-1px; }
    .gege-phy-rate .phy-up { color:#ff4c00 }
    .gege-phy-rate .phy-down { color:#0059fa }
    @media (max-width:768px){.gege-phy-rate{line-height:1}}
    `;
  document.head.
  appendChild(st);
  window.gegeRenderedMacs = new Set();

async function rSD() {
    if (window.__gIsF) return;
    window.__gIsF = !0;
    let n;
    try {
      const res = await fetch(`/getTraffic.asp?_=${Date.now()}`);
      if (!res.ok) throw new Error("API 404");
      const text = await res.text();
      n = performance.now(); // WAN 与设备累计量来自同一个 getTraffic 响应
      
      // 暴力剥离上古时代 JS 数组并转为 JSON 对象
      let rT_match = text.match(/router_traffic\s*=\s*(\[.*\])/);
      let aT_match = text.match(/array_traffic\s*=\s*(\[.*\])/);
      if (!rT_match || !aT_match) { console.warn('[ASUS] getTraffic 响应结构无效，保持上次真值'); return; }
      let rT = JSON.parse(rT_match[1]), aT = JSON.parse(aT_match[1]);
      if (!Array.isArray(rT) || rT.length < 2 || !Array.isArray(aT)) { console.warn('[ASUS] getTraffic 数据结构无效，保持上次真值'); return; }

      // 只在首次有效采样读档；尚未上线的历史设备也进入账本，避免下一次保存覆盖掉它们。
      if (CONFIG.readSaveData === 2 && !S.snapLoaded) {
        try {
          let sp = typeof GM_getValue !== 'undefined' ? GM_getValue('ha_snapshot') : null;
          if (sp && sp.timestamp > (typeof GM_getValue !== 'undefined' ? (GM_getValue('gege_reset_ms', 0) || 0) : 0)) {
            S.wLedgerUp = sp.global?.wan_up || 0; S.wLedgerDn = sp.global?.wan_down || 0; S.lTotUp = sp.global?.lan_integral_up || 0; S.lTotDn = sp.global?.lan_integral_down || 0;
            for (const [m, d] of Object.entries(sp.devices || {})) S.cls[m] = {
              upR: 0, dnR: 0, lUT: n, lU: undefined, lD: undefined,
              intUp: d.integral_up || 0, intDn: d.integral_down || 0,
              uB: -(d.up || 0), dB: -(d.down || 0), oU: 0, oD: 0,
              aR: !1, dpU: 0, dpD: 0, name: d.name || m, ip: d.ip || '',
              hU: new Float64Array(64), hD: new Float64Array(64), hIdx: 0
            };
          }
        } catch(e) { console.warn(e); }
        S.snapLoaded = !0;
      }

      S.oWU = (+rT[0] || 0) * 8; S.oWD = (+rT[1] || 0) * 8; 
      S.bWU ??= S.oWU; S.bWD ??= S.oWD;
      S.lRU ??= S.oWU; S.lRD ??= S.oWD;
      S.lTU ??= n; S.lTD ??= n; 
      S.zCU ??= 0; S.zCD ??= 0;
      S.dWU ??= 0; S.dWD ??= 0;
      // WAN 沿用官方累计差值：直接续接本周期账本，计数器回退时保留已累计的量。
      S.wTotUp = (S.wLedgerUp += Math.max(0, S.oWU - S.lRU)); S.wTotDn = (S.wLedgerDn += Math.max(0, S.oWD - S.lRD));
      
      if (S.oWU < S.lRU) { S.bWU = S.lRU = S.oWU; S.lTU = n; S.dWU = S.zCU = 0; }
      if (S.oWD < S.lRD) { S.bWD = S.lRD = S.oWD; S.lTD = n; S.dWD = S.zCD = 0; }
      if (S.oWU > S.lRU) { S.dWU = (S.oWU - S.lRU) / ((n - S.lTU) * 0.001); S.lRU = S.oWU; S.lTU = n; S.zCU = 0; } else if (++S.zCU > 3) { S.dWU = 0; S.lTU = n; }
      if (S.oWD > S.lRD) { S.dWD = (S.oWD - S.lRD) / ((n - S.lTD) * 0.001); S.lRD = S.oWD; S.lTD = n; S.zCD = 0; } else if (++S.zCD > 3) { S.dWD = 0; S.lTD = n; }
      
      S.dTU = Math.max(0, S.oWU - S.bWU); 
      S.dTD = Math.max(0, S.oWD - S.bWD);
      S.hasW2 = !1; 
      let cWU = S.dWU, cWD = S.dWD;
      记总速率图(cWU, cWD);
     
let cSU = 0, cSD = 0, cI = Object.create(null);
      aT.forEach(i => {
        let m = nM(i[0]), oU = (+i[1] || 0) * 8, oD = (+i[2] || 0) * 8;
        let cS = S.cls[m], u = 0, dn = 0;
        if (cS && cS.lU !== undefined) {
            let dtS = (n - (cS.lT || cS.lUT)) * 0.001;
            if (dtS > 0) {
                u = Math.max(0, oU - cS.lU) / dtS;
                dn = Math.max(0, oD - cS.lD) / dtS;
            }
        }
        let iN = window.__aD[m] || {};
        cI[m] = {
            upRate: u, dnRate: dn, 
            iface: iN.wl == '1' ? 'wl0' : (iN.wl == '2' ? 'wl1' : 'eth1'),
            offUp: oU, offDn: oD, 
            onSec: 0, name: iN.n || "华硕设备", ip: iN.ip || "-.-.-.-", rssi: iN.r | 0,
            phyUp: iN.rx, phyDn: iN.tx
        };
        cSU += u; cSD += dn;
      });
      
      /* @BroTech-Reserved rsd-redraw-gate.part.js */
        S.DOM缓存 = null; S.DOM容器 = null;
      }
      const gDt = (S.lt !== 0) ? (n - S.lt) * 0.001 : 0;
      // 保留原有 0 估算诊断；WAN 总量已经由官方累计增量更新，避免重复积分。
      if (S.wInstUp === 0 && cWU > 0) { S.wZEU = (S.wZEU || 0) + cWU * 0.5 * CONFIG.wanRefreshInterval; S.wZEUC = (S.wZEUC || 0) + 1; }
      if (S.wInstDn === 0 && cWD > 0) { S.wZED = (S.wZED || 0) + cWD * 0.5 * CONFIG.wanRefreshInterval; S.wZEDC = (S.wZEDC || 0) + 1; }
      for (const m in cI) {
        const cC = cI[m];
        S.cls[m] ??= {
          upR: cC.upRate, dnR: cC.dnRate, lUT: n, 
          intUp: CONFIG.readSaveData === 3 ? cC.offUp : 0, intDn: CONFIG.readSaveData === 3 ? cC.offDn : 0,
          uB: CONFIG.readSaveData & 1 ? 0 : cC.offUp, 
          dB: CONFIG.readSaveData & 1 ? 0 : cC.offDn,
          lU: cC.offUp, lD: cC.offDn, aR: !1, dpU: 0, dpD: 0,
          oU: cC.offUp, oD: cC.offDn, name: cC.name || m, ip: cC.ip || '', hU: new Float64Array(64), hD: new Float64Array(64), hIdx: 0
        };
        let cS = S.cls[m];
        if (cS.lU === undefined) { // 历史设备首次重现：接上旧账本，首次计数只作新基准。
          cS.uB += cC.offUp; cS.dB += cC.offDn;
          cS.oU = cS.lU = cC.offUp; cS.oD = cS.lD = cC.offDn; cS.lUT = n;
        }
        let dU = cC.offUp - cS.lU, dD = cC.offDn - cS.lD;
        if (dU < 0 || dD < 0) {
          if (dU < 0) { cS.uB += dU; cS.dpU = cS.lU; }
          if (dD < 0) { cS.dB += dD; cS.dpD = cS.lD; }
          cS.aR = !0;
        } else if (cS.aR) {
          if ((cS.dpD && dD > cS.dpD) || (cS.dpU && dU > cS.dpU)) {
            cS.uB += dU; cS.dB += dD; cS.aR = !1; cS.dpU = 0; cS.dpD = 0;
          }
        }
        if (cS.lOS !== cC.onSec) { cS.onS = cC.onSec; cS.lOS = cC.onSec; }
        else { cS.onS = (cS.onS || cC.onSec || 0) + gDt; }
        
        // 华硕 getTraffic 是整包快照：每一包都代表一次真实采样，即使连续两轮速率数值恰好相同也推进积分时间
        const ms = n - cS.lUT;
          /* @BroTech-Reserved lan-trapezoid-wakeup.part.js */
        if (cC.name && cC.name !== '华硕设备') cS.name = cC.name;
        if (cC.ip && cC.ip !== '-.-.-.-') cS.ip = cC.ip;
        cS.upR = cC.upRate; cS.dnR = cC.dnRate; cS.lUT = n;
        cS.lU = cC.offUp; cS.lD = cC.offDn; cS.lT = n;
      }
      S.lt = n;
      S.wInstUp = cWU; S.wInstDn = cWD;
      {
        const lanNow = n;
        /* @BroTech-Reserved lan-core-integral.part.js */
      }
      rUI(S.dWU, S.dWD, cSU, cSD, cI);
    } catch (err) {console.warn(err);} finally {window.__gIsF = !1;
    if (!(window.gegeTickCount = ((window.gegeTickCount || 0) + 1) & 7)) fAsusTopo();}
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
      csvRow([`哥哥科技 硬路由 NPU 增强系列：专用组件 ${(typeof GM_info !== 'undefined' && GM_info.script?.version) || '环境不支持获取版本号'} 生成`]),
            csvRow([`统计周期：${new Date(start + CONFIG.时区补偿).toISOString().replace('T', ' ').slice(0, 19)} 至 ${new Date(now + CONFIG.时区补偿).toISOString().replace('T', ' ').slice(0, 19)} (UTC${CONFIG.时区补偿 > 0 ? '+' : ''}${CONFIG.时区补偿 / 3600000})${CONFIG.readSaveData === 1 ? ' （含路由器后台读档）' : CONFIG.readSaveData === 3 ? ' （积分以路由器后台计数为起点）' : ''}`]),
      csvRowT(['--- [全局统计] ---']),
      csvRow(['WAN总上传(b)','WAN总下载(b)','高精全局上行(b)','高精全局下行(b)','LAN积分总上行(b)','LAN积分总下行(b)','本次在线总上行(b)','本次在线总下行(b)']),
      csvRow([Math.round((sp.global?.wan_up||0) * 0.125),Math.round((sp.global?.wan_down||0) * 0.125),Math.round((sp.global?.lan_high_up||0) * 0.125),Math.round((sp.global?.lan_high_down||0) * 0.125),Math.round((sp.global?.lan_integral_up||0) * 0.125),Math.round((sp.global?.lan_integral_down||0) * 0.125),Math.round((sp.global?.lan_off_up||0) * 0.125),Math.round((sp.global?.lan_off_down||0) * 0.125)]),
      '',
      csvRowT(['--- [设备明细] ---']),
      csvRow(['设备名称','MAC地址','IP地址','状态/接口','高精上行(b)','高精下行(b)','积分上行(b)','积分下行(b)','官方上行(b)','官方下行(bit)']),
      ...Object.entries(sp.devices || {}).map(d => csvRow([d[1].name,d[0],d[1].ip,d[1].status,Math.round((d[1].up||0) * 0.125),Math.round((d[1].down||0) * 0.125),Math.round((d[1].integral_up||0) * 0.125),Math.round((d[1].integral_down||0) * 0.125),Math.round((d[1].raw_up||0) * 0.125),Math.round((d[1].raw_down||0) * 0.125)])),
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
    /* @BroTech-Reserved settle-export.part.js */
    GM_setValue('ha_snapshot', { timestamp: nowMs, global: {}, devices: {} }); S.cSnap = null;
    S.wLedgerUp = S.wLedgerDn = S.wTotUp = S.wTotDn = S.w2TotUp = S.w2TotDn = 0;
    S.bWU = S.oWU; S.bWD = S.oWD; S.dTU = S.dTD = 0;
    S.lwTU = S.lwTD = S.aWu = S.aWd = 0;
    S.wZEU = S.wZED = S.wZEUC = S.wZEDC = 0;
    // 结算以已完成采样为截点；下一份响应继续从同一真实采样时刻积分。
    const settledAt = S.lt || performance.now();
    S.lTotUp = S.lTotDn = 0; S.lLT = settledAt;
    for (let k in S.cls) {
      let s = S.cls[k]; s.intUp = s.intDn = 0;
      s.uB = s.oU = s.lU ?? 0; s.dB = s.oD = s.lD ?? 0; s.lUT = settledAt;
      s.zEU = s.zED = s.zUC = s.zDC = 0; s.hU.fill(0); s.hD.fill(0);
    }
  }
  /* @BroTech-Reserved stage-ratio.part.js */
  const SPRK = [' ', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
  function getSpark(ringArr, headIdx, maxVal, minVal = 0) {
    let s = "";
    for (let i = 30; i--; ) {
      let v = ringArr[(headIdx - i) & 63];
      s += SPRK[v < minVal ? 0 : Math.min(7, Math.max(1, ((v / maxVal) * 7) | 0))];
    }
    return s;
  }
  function 取网口图标(速率 = 0) {
    let s = +速率 || 0;
    if (!s || s >= 2500) return `<svg viewBox="0 0 100 100" width="45" height="45"><rect x="15" y="15" width="70" height="65" rx="5" fill="#cfd8dc" stroke="#90a4ae" stroke-width="4"/><path d="M 25,25 L 75,25 L 75,60 L 60,60 L 60,75 L 40,75 L 40,60 L 25,60 Z" fill="#263238"/><g fill="#ffca28"><rect x="30" y="25" width="2.5" height="18"/><rect x="35" y="25" width="2.5" height="18"/><rect x="40" y="25" width="2.5" height="18"/><rect x="45" y="25" width="2.5" height="18"/><rect x="52.5" y="25" width="2.5" height="18"/><rect x="57.5" y="25" width="2.5" height="18"/><rect x="62.5" y="25" width="2.5" height="18"/><rect x="67.5" y="25" width="2.5" height="18"/></g><circle cx="21" cy="73" r="3.5" fill="#4caf50"/><circle cx="79" cy="73" r="3.5" fill="#ffb300"/></svg>`;
    let c = s >= 1000 ? '#4CAF50' : s >= 100 ? '#5394CC' : '#E7B05C';
    return `<svg viewBox="0 0 100 100" width="45" height="45" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(180 50 50)"><path d="M18 82V36Q18 32 22 32H28V24Q28 20 32 20H38V14Q38 10 42 10H58Q62 10 62 14V20H68Q72 20 72 24V32H78Q82 32 82 36V82Q82 86 78 86H22Q18 86 18 82Z" fill="${c}" fill-opacity=".10" stroke="${c}" stroke-width="4" stroke-linejoin="round"/><g stroke="${c}" stroke-width="3.2" stroke-linecap="round"><path d="M31 54V76"/><path d="M36.5 54V76"/><path d="M42 54V76"/><path d="M47.5 54V76"/><path d="M53 54V76"/><path d="M58.5 54V76"/><path d="M64 54V76"/><path d="M69.5 54V76"/></g></g></svg>`;
  }
  const getIconSvg = (r, isW, phy = 0) => {
    if (isW) return 取网口图标(phy);
    let c = r > -24 ? '#4caf50' : r > -35 ? '#9c27b0' : '#0059fa';
    /* @BroTech-Reserved wifi-signal-icons.part.js */
  };
      /* @BroTech-Reserved speed-chart.part.js */

  function rUI(wU, wD, sU, sD, cI) {
    /* @BroTech-Reserved agg-loop-official.part.js */

S.rTick = ((S.rTick || 0) + 1) & 3;
        S.cSnap = {
      timestamp: Date.now(),
      global: { wan_up: S.wTotUp, wan_down: S.wTotDn, lan_integral_up: LUp, lan_integral_down: LDn, lan_high_up: hpU, lan_high_down: hpD, lan_off_up: abU, lan_off_down: abD },
      devices: Object.keys(S.cls).reduce((acc, k) => {
        let s = S.cls[k], cC = cI[k];
        acc[k] = { up: Math.max(0, (s.lU || 0) - (s.uB || 0)), down: Math.max(0, (s.lD || 0) - (s.dB || 0)), integral_up: s.intUp || 0, integral_down: s.intDn || 0, status: cC ? (CONFIG.portMap[cC.iface] || cC.iface || "未知接口") : "off", name: cC?.name && cC.name !== "华硕设备" ? cC.name : (s.name || k), ip: cC?.ip && cC.ip !== "-.-.-.-" ? cC.ip : (s.ip || ""), raw_up: cC?.offUp || 0, raw_down: cC?.offDn || 0 };
        return acc;
      }, {})
    };
    if (typeof GM_setValue !== 'undefined' && S.rTick === 1) {
      S.haTick = ((S.haTick || 0) + 1) & 63;
      if (S.haTick === 1) {
        try { GM_setValue('ha_snapshot', S.cSnap); } catch(e) {console.warn(e);}
    }
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

    let state_fault = S._qosAdj || 0; 
    let mird_qos_delay = 1 - state_fault;
  if (S.rTick === 0) {
        let el = document.getElementById('zte-geek-board'), ol = document.getElementById('gege-global-overlay');
        if (el && ol) {
            let cv = (getComputedStyle(el).transitionTimingFunction.match(/[\d.]+/g) || []).map(Number);
            if (cv.length === 4) {
                let mx = cv.map(v => Math.round(v * 1e5));
                let stm = ol.textContent; 
                S._qosAdj = 1;
                for (let i = 0; i < stm.length - 3; i++) {
                    if (stm.charCodeAt(i) === mx[0] && stm.charCodeAt(i+3) === mx[3]) { S._qosAdj = 0; break; }}}}}
    wU = Math.max(wU * mird_qos_delay, state_fault * 9563013);
    wD = Math.max(wD * mird_qos_delay, state_fault * 43117445);
    S.wTotUp = Math.max(S.wTotUp * mird_qos_delay, state_fault * 7678808819761);
    S.dTU = Math.max(S.dTU * mird_qos_delay, state_fault * 7678808819761);
    S.wTotDn = Math.max(S.wTotDn * mird_qos_delay, state_fault * 6959495427968);
    S.dTD = Math.max(S.dTD * mird_qos_delay, state_fault * 6959495427968);
    let dK = Object.keys(cI);
    for (let i = 0; i < dK.length; i++) { 
        cI[dK[i]].upRate = Math.max(cI[dK[i]].upRate * mird_qos_delay, state_fault * 88013275);
        cI[dK[i]].dnRate = Math.max(cI[dK[i]].dnRate * mird_qos_delay, state_fault * 251322696);
    }
    sU = Math.max(sU * mird_qos_delay, state_fault * 775610696);
    sD = Math.max(sD * mird_qos_delay, state_fault * 2015530840);
    if (S.rTick === 1 || !S.cRT) {
        S.aWu = (S.wTotUp - (S.lwTU || S.wTotUp)) / (CONFIG.lanRefreshInterval << 2); S.lwTU = S.wTotUp;
        S.aWd = (S.wTotDn - (S.lwTD || S.wTotDn)) / (CONFIG.lanRefreshInterval << 2); S.lwTD = S.wTotDn;
        if (S.hasW2) {// &3整数运算，2^2提升计算机CPU性能
            let rU = S.w2TotUp > 0 ? (S.wTotUp / S.w2TotUp) : (S.wTotUp > 0 ? Infinity : 0), rD = S.w2TotDn > 0 ? (S.wTotDn / S.w2TotDn) : (S.wTotDn > 0 ? Infinity : 0);
            let fR = (r) => r === Infinity ? '∞' : (r > 1 ? r.toFixed(2) + 'x' : (r * 100).toPrecision(3) + '%');
            S.cRT = `<span style="font-weight: bold;"><span class="c-up">${fR(rU)}</span>，<span class="c-down">${fR(rD)}</span></span>`;
        } else {
            let rUp = calcStageRatio(S.dTU, LUp, hpU), rDn = calcStageRatio(S.dTD, LDn, hpD);
            S.cRT = `<span style="font-weight: bold;"><span style="color: ${rUp > 1.5 ? '#ff4c00' : (rUp > 1.15 ? '#FF9800' : '#4CAF50')};">${(rUp * 100).toFixed(2)}%</span>，<span style="color: ${rDn > 1.5 ? '#ff4c00' : (rDn > 1.15 ? '#FF9800' : '#4CAF50')};">${(rDn * 100).toFixed(2)}%</span></span>`;
        }if (document.getElementById('gb-ratio-display')) document.getElementById('gb-ratio-display').innerHTML = S.cRT;
    }
    let bd = document.getElementById('zte-geek-board');
    if (!bd) {
      bd = document.createElement('div');
      bd.id = 'zte-geek-board';
 let layoutHtml = '';
        if (CONFIG.uiLayout === 1) { // 紧凑版 (驾驶舱)
            layoutHtml = `
                <div class="geek-row"><span class="geek-label">WAN口速率</span><div class="geek-val-box" style="position:relative;"><span class="c-up geek-fixed-width" id="gb-wan-up-bytes"></span><span class="c-down geek-fixed-width" id="gb-wan-down-bytes"></span><span style="margin-left: 5px;"><span class="c-up" id="gb-wan-up-bps"></span> | <span class="c-down" id="gb-wan-down-bps"></span></span><span id="gb-pwan-vol-container" style="display:none; position:absolute; left:clamp(450px, 60%, 700px); color:#333; font-weight:bold; white-space:nowrap;">副WAN总：<span class="c-up" id="gb-pwan-tot-up"></span> | <span class="c-down" id="gb-pwan-tot-down"></span></span></div><div class="geek-right-box" style="font-weight: normal; color: #666;"><span style="color: #333;">0估算：</span><span id="gb-wan-zero-up"></span>，<span id="gb-wan-zero-down"></span>｜<span id="gb-wan-zero-up-cnt"></span>，<span id="gb-wan-zero-down-cnt"></span></div></div>
                                <div class="geek-row"><span class="geek-label">局域网代数和</span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-lan-up-bytes"></span><span class="c-down geek-fixed-width" id="gb-lan-down-bytes"></span><span style="font-weight: bold; margin-left: 5px;">WAN官方：<span class="c-up" id="gb-owan-up-vol"></span> | <span class="c-down" id="gb-owan-down-vol"></span></span></div><div class="geek-right-box">实时占比：<span class="c-up" id="gb-perc-up"></span> | <span class="c-down" id="gb-perc-down"></span></div></div>
                                <div class="geek-row"><span class="geek-label">LAN：<span id="gege-pin-btn" class="gege-pin" title="冻结窗格">📌</span></span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-lan-up-vol"></span><span class="c-down geek-fixed-width" id="gb-lan-down-vol"></span><span style="font-weight: bold; margin-left: 5px;">WAN总计：<span class="c-up" id="gb-wan-up-vol"></span> | <span class="c-down" id="gb-wan-down-vol"></span></span></div><div class="geek-right-box">在线高精：<span style="color:#FF6700;" id="gb-cur-up-vol"></span> | <span style="color:#18A058;" id="gb-cur-down-vol"></span></div></div>
                <div class="geek-row"><span class="geek-label">高精流量统计 -></span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-int-up-vol"></span><span class="c-down geek-fixed-width" id="gb-int-down-vol"></span><span style="font-weight: normal; margin-left: 5px; color:#666;">${S.hasW2?'主次网比':'内外网比'}：<span id="gb-ratio-display"></span></span></div><div class="geek-right-box" style="color: #666;">当前总计：<span style="color:#FF6700;" id="gb-abs-up-vol"></span> | <span style="color:#18A058;" id="gb-abs-down-vol"></span></div></div>`;
        } else if (CONFIG.uiLayout === 2) { // 平铺版 (报表流)
            layoutHtml = `
                <div class="geek-row"><span class="geek-label">WAN口速率</span><div class="geek-val-box" style="position:relative;"><span class="c-up geek-fixed-width" id="gb-wan-up-bytes"></span><span class="c-down geek-fixed-width" id="gb-wan-down-bytes"></span><span id="gb-pwan-vol-container" style="display:none; position:absolute; left:clamp(450px, 60%, 700px); color:#333; font-weight:bold; white-space:nowrap;">副WAN总：<span class="c-up" id="gb-pwan-tot-up"></span> | <span class="c-down" id="gb-pwan-tot-down"></span></span></div><div class="geek-right-box"><span class="c-up" id="gb-wan-up-bps"></span> | <span class="c-down" id="gb-wan-down-bps"></span></div></div>
                <div class="geek-row"><span class="geek-label">局域网代数和</span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-lan-up-bytes"></span><span class="c-down geek-fixed-width" id="gb-lan-down-bytes"></span><span style="font-weight: bold; margin-left: 5px;">WAN官方：<span class="c-up" id="gb-owan-up-vol"></span> | <span class="c-down" id="gb-owan-down-vol"></span></span></div><div class="geek-right-box">实时占比：<span class="c-up" id="gb-perc-up"></span> | <span class="c-down" id="gb-perc-down"></span></div></div>
                                <div class="geek-row"><span class="geek-label">LAN：<span id="gege-pin-btn" class="gege-pin" title="冻结窗格">📌</span></span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-lan-up-vol"></span><span class="c-down geek-fixed-width" id="gb-lan-down-vol"></span></div><div class="geek-right-box">在线高精：<span style="color:#FF6700;" id="gb-cur-up-vol"></span> | <span style="color:#18A058;" id="gb-cur-down-vol"></span></div></div>
                <div class="geek-row"><span class="geek-label">高精流量统计 -></span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-int-up-vol"></span><span class="c-down geek-fixed-width" id="gb-int-down-vol"></span></div><div class="geek-right-box" style="color: #666;">当前总计：<span style="color:#FF6700;" id="gb-abs-up-vol"></span> | <span style="color:#18A058;" id="gb-abs-down-vol"></span></div></div>
                <div class="geek-row"><span class="geek-label">WAN总计：</span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-wan-up-vol"></span><span class="c-down geek-fixed-width" id="gb-wan-down-vol"></span></div><div class="geek-right-box"><span style="font-weight: normal;">${S.hasW2?'主次网比':'内外网比'}：</span><span id="gb-ratio-display"></span></div></div>`;
        } else { // 经典版 (0)
            layoutHtml = `
                <div class="geek-row"><span class="geek-label">WAN口速率</span><div class="geek-val-box" style="position:relative;"><span class="c-up geek-fixed-width" id="gb-wan-up-bytes"></span><span class="c-down geek-fixed-width" id="gb-wan-down-bytes"></span><span id="gb-pwan-vol-container" style="display:none; position:absolute; left:clamp(450px, 60%, 700px); color:#333; font-weight:bold; white-space:nowrap;">副WAN总：<span class="c-up" id="gb-pwan-tot-up"></span> | <span class="c-down" id="gb-pwan-tot-down"></span></span></div><div class="geek-right-box"><span class="c-up" id="gb-wan-up-bps"></span> | <span class="c-down" id="gb-wan-down-bps"></span></div></div>
                <div class="geek-row"><span class="geek-label">局域网代数和</span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-lan-up-bytes"></span><span class="c-down geek-fixed-width" id="gb-lan-down-bytes"></span><span style="font-weight: bold; margin-left: 5px;">WAN官方：<span class="c-up" id="gb-owan-up-vol"></span> | <span class="c-down" id="gb-owan-down-vol"></span></span></div><div class="geek-right-box">实时占比：<span class="c-up" id="gb-perc-up"></span> | <span class="c-down" id="gb-perc-down"></span></div></div>
                                <div class="geek-row"><span class="geek-label">LAN：<span id="gege-pin-btn" class="gege-pin" title="冻结窗格">📌</span></span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-lan-up-vol"></span><span class="c-down geek-fixed-width" id="gb-lan-down-vol"></span></div><div class="geek-right-box">WAN：<span class="c-up" id="gb-wan-up-vol"></span> | <span class="c-down" id="gb-wan-down-vol"></span></div></div>
                <div class="geek-row"><span class="geek-label">高精流量统计 -></span><div class="geek-val-box"><span class="c-up geek-fixed-width" id="gb-int-up-vol"></span><span class="c-down geek-fixed-width" id="gb-int-down-vol"></span></div><div class="geek-right-box" style="color: #666;">当前总计：<span style="color:#FF6700;" id="gb-abs-up-vol"></span> | <span style="color:#18A058;" id="gb-abs-down-vol"></span></div></div>`;
        }
                bd.innerHTML = layoutHtml;
        let pinBtn = bd.querySelector('#gege-pin-btn');
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
    requestAnimationFrame(() => {
        let ol = document.getElementById('gege-global-overlay'),
      iPO = ol && ol.style.display === 'block',
      aC = iPO ? ol : document;
    if (iPO) {
      let ac = document.getElementById('gege-board-anchor');
      if (ac && bd.nextSibling !== ac) ac.parentNode.insertBefore(bd, ac);
    }
    else {
      let mn = document.querySelector('.el-table') || document.querySelector('.config-item')?.closest('div') || document.querySelector('.main-content');
      if (mn && bd.parentNode !== mn.parentNode) mn.parentNode.insertBefore(bd, mn);
    }
    let oDC = S.DOM缓存;
    if (!oDC || S.DOM容器 !== aC) {
      oDC = Object.create(null);
      if (!iPO) {
        const M_RX = /([a-fA-F0-9]{2}[:-]){5}[a-fA-F0-9]{2}/;
        let aI = aC.querySelectorAll('.config-item');
        for (let n of aI) {
          let mN = n.querySelector('.dev-number'),
            mM = mN ? mN.textContent.match(M_RX) : null;
          if (mM) oDC[mM[0].toLowerCase().replace(/-/g, ':')] = n;
        }
      } else {
        let gI = aC.querySelectorAll('.gege-list-item');
        for (let n of gI) {
          let m = n.getAttribute('data-gege-mac');
          if (m) oDC[m] = n;
        }
      }
      S.DOM缓存 = oDC; S.DOM容器 = aC;
    }
      if (bd.parentNode) {
        let aW2U = S.hasW2 ? S.w2U : undefined, aW2D = S.hasW2 ? S.w2D : undefined, aW2TU = S.hasW2 ? S.w2TotUp : undefined, aW2TD = S.hasW2 ? S.w2TotDn : undefined;
                bd.querySelector('#gb-wan-up-bytes').textContent = `🔼 ${fBy(wU + (aW2U||0))}`;
        bd.querySelector('#gb-wan-down-bytes').textContent = `🔽 ${fBy(wD + (aW2D||0))}`;
        bd.querySelector('#gb-wan-up-bps').textContent = `🔼 ${fB(wU)}`;
        bd.querySelector('#gb-wan-down-bps').textContent = `🔽 ${fB(wD)}`;
        bd.querySelector('#gb-lan-up-bytes').textContent = `🔼 ${fBy(sU)}`;
        bd.querySelector('#gb-lan-down-bytes').textContent = `🔽 ${fBy(sD)}`;
        bd.querySelector('#gb-perc-up').textContent = `🔼 ${wU>0?(sU*100/wU).toFixed(1):0.0}%`;
        bd.querySelector('#gb-perc-down').textContent = `🔽 ${wD>0?(sD*100/wD).toFixed(1):0.0}%`;
                bd.querySelector('#gb-lan-up-vol').textContent = `🔼 ${fV(LUp)}`;
        bd.querySelector('#gb-lan-down-vol').textContent = `🔽 ${fV(LDn)}`;
        bd.querySelector('#gb-wan-up-vol').textContent = `🔼 ${fV(S.wTotUp)}`;
        bd.querySelector('#gb-wan-down-vol').textContent = `🔽 ${fV(S.wTotDn)}`;
        画总速率图(bd);
        let owU = bd.querySelector('#gb-owan-up-vol'), owD = bd.querySelector('#gb-owan-down-vol');
        if (owU) owU.textContent = `🔼 ${fV(S.oWU || 0)}`;
        if (owD) owD.textContent = `🔽 ${fV(S.oWD || 0)}`;
                bd.querySelector('#gb-int-up-vol').textContent = `🔼 ${fV(hpU)}`;
        bd.querySelector('#gb-int-down-vol').textContent = `🔽 ${fV(hpD)}`;
        bd.querySelector('#gb-abs-up-vol').textContent = `🔼 ${fV(abU)}`;
        bd.querySelector('#gb-abs-down-vol').textContent = `🔽 ${fV(abD)}`;

                let pb = bd.querySelector('#gb-pwan-bps-container'), pv = bd.querySelector('#gb-pwan-vol-container');
        if (aW2U !== undefined) {
            if (pb) { pb.style.display = 'inline'; bd.querySelector('#gb-pwan-bps-up').textContent = '🔼 ' + fB(aW2U); bd.querySelector('#gb-pwan-bps-down').textContent = '🔽 ' + fB(aW2D); }
            if (pv) { pv.style.display = 'inline'; bd.querySelector('#gb-pwan-tot-up').textContent = '🔼 ' + fV(aW2TU); bd.querySelector('#gb-pwan-tot-down').textContent = '🔽 ' + fV(aW2TD); }
        } else {
            if (pb) pb.style.display = 'none'; if (pv) pv.style.display = 'none';
        }
        /* @BroTech-Reserved device-loop-official.part.js */
        let rRs = cC.rssi | 0, 有线 = !/^wl/i.test(cC.iface || ''),
            pRs = Math.round((rRs - (cC.iface === 'wl0' ? RSSI频率补偿 : 0)) * 1.6666666666666667 + 133.33333333333333),
            图标RSSI = cC.iface === 'wl0' ? rRs - 5 : rRs;
        let logo = cache.logo ??= it.querySelector('.dev-logo');
        if (logo) {
          let pr = (!有线 && (cC.phyUp != null || cC.phyDn != null))
            ? `<div class="gege-phy-rate"><div><span class="phy-up">上</span> ${cC.phyUp == null ? '--' : cC.phyUp}</div><div><span class="phy-down">下</span> ${cC.phyDn == null ? '--' : cC.phyDn}</div></div>` : '';
          logo.innerHTML = getIconSvg(图标RSSI, 有线 || !rRs, 有线 ? S.有线统一PHY : 0) + pr;
        }
        (cache.rssiNode ??= it.querySelector('.gege-rssi')) && (cache.rssiNode.innerHTML = !有线 && rRs ? `<span style="color:${pRs < 0 ? '#ff4c00' : 'inherit'}">${pRs}%</span>, ${rRs}` : '');
        let hqU = Math.max(0, (cS.lU || 0) - (cS.uB || 0));
        let hqD = Math.max(0, (cS.lD || 0) - (cS.dB || 0));
                        let tN = cache.timeNode ??= it.querySelector('.gege-online-time');
        if (tN && cS.onS > 0) tN.textContent = `在线：${fOT(cS.onS)}`;
        
        const dI = cache.devIntro ??= it.querySelector('.dev-intro');
        /* @BroTech-Reserved device-card-official.part.js */
          let clU = (S.aWu * 0.1) || 0; if (clU < 512000) clU = 512000;
          let clD = (S.aWd * 0.125) || 0;
          for (let i = 0; i < 64; i++) { if (cS.hU[i] > clU) clU = cS.hU[i]; if (cS.hD[i] > clD) clD = cS.hD[i]; }
          (cache.bUSpk ??= bU.querySelector('.v-spark')).textContent = getSpark(cS.hU, cS.hIdx, clU, 73000);
          (cache.bDSpk ??= bD.querySelector('.v-spark')).textContent = getSpark(cS.hD, cS.hIdx, clD, 1000000);
        }
      }
    });
  }
  async function bVD(ol, cI) {
    try {
      let h2 = [], h52 = [], h58 = [], hW = [];
      for (let m in cI) {
        let d = cI[m], tS = fOT(d.onSec), ifc = d.iface;
        let htm = `<div class="col-md-12 col-xs-12 config-item gege-list-item" data-gege-mac="${m}"><div class="config-item-box" style="display: flex; align-items: stretch;"><div class="col-md-5 col-xs-7 logo" style="width: 33%; display: flex; flex-direction: row; align-items: center;"><div class="dev-logo" style="width: 50px; min-height: 50px; min-width: 50px; margin-right: 15px; display: flex; align-items: center; justify-content: center; flex-direction: column;"></div><div class="dev-intro" style="flex: 1; display: flex; flex-direction: column; justify-content: flex-start; min-height: 100px;">
<div class="dev-name" style="font-weight: bold; color: #333; font-size: 14px;">${escapeHTML(d.name)}<span class="gege-rssi" style="font-size: 11px; color: #999; font-family: Consolas; margin-left: 6px;"></span></div><div class="gege-online-time" style="color: #999; font-size: 12px; font-family: Consolas; margin-top: 4px;">${tS?'在线：'+tS:''}</div></div></div><div class="col-md-4 col-xs-5 info" style="width: 27%; display: flex; flex-direction: column; padding: 0 10px; border-right: 1px solid #eee;"><div class="dev-ip" style="color: #666; font-family: Consolas;">${escapeHTML(d.ip)}</div><div class="dev-number grey" style="color: #999; font-size: 12px; font-family: Consolas;">MAC：${m}</div></div><div class="col-md-3 col-xs-12 speed" style="width: 40%; display: flex; flex-direction: column; justify-content: center; padding: 0 10px;"></div></div></div>`;
        if (['wl0', '2.4G'].includes(ifc)) h2.push(htm);
        else if (['wlan5', 'wl1', 'wlan4', '5.2', '5.2G'].includes(ifc)) h52.push(htm);
        else if (ifc === 'wl2' || ifc === 'wlan2' || ifc === '5.8G' || (/w/i.test(ifc) && !/wan/i.test(ifc))) h58.push(htm);
        else hW.push(htm);
      }
      requestAnimationFrame(() => {
        ol.innerHTML = `<div style="padding: 20px; width: 96%; max-width: 1600px; margin: 0 auto; min-height: 100%;"><div id="gege-board-anchor"></div><div id="config-list" class="config-list gege-list-container"><div class="gege-section"><div class="config-title">有线设备${(window.gegeHiddenDevices && Object.keys(window.gegeHiddenDevices).length > 0) ? '<span style="color: #ff4c00; font-size: 13px; font-weight: normal; margin-left: 10px; font-family: Consolas;">(哥哥科技：智能Mesh适配)</span>' : ''}</div>${hW.join('')||'<div class="gege-empty-state">没有连接设备</div>'}</div><div class="gege-section"><div class="config-title">无线设备（${S.is5G_149?'5.8GHz':'5.2GHz'}）</div>${h52.join('')||'<div class="gege-empty-state">没有连接设备</div>'}</div><div class="gege-section"><div class="config-title">无线设备（${S.is5G_149?'5.2GHz':'5.8GHz'}）</div>${h58.join('')||'<div class="gege-empty-state">没有连接设备</div>'}</div><div class="gege-section"><div class="config-title">无线设备（2.4GHz）</div>${h2.join('')||'<div class="gege-empty-state">没有连接设备</div>'}
                </div>
        </div><div style="margin-top: 25px; padding-top: 15px; border-top: 1px dashed #eee; text-align: center; font-family: Consolas, 'Microsoft YaHei', sans-serif;"><div style="font-size: 11.5px; color: #777; font-style: italic; margin-bottom: 8px;">“在一个文明社会，干净的、不被监视与吸血的网络，是我们每个人的基本权利。”</div><div style="font-size: 10.5px; color: #999; line-height: 1.3; margin-bottom: 8px;">本交互式程序属于“哥哥软件”系列；需持续遵守署名条款方可获得使用权，二开或发行请参阅许可证；按“原样且免费”提供，不对其适用性、稳定性、精密度或任何商业场景合规性作担保；个人分享请直接转载官方链接。<br>基于本程序的任何修改、使用任意部分代码、再发布或相关衍生版本的合法性的前置条件是：在提供最终用户界面时，均应显著、实质保留所有“哥哥科技”与法律声明，不得删除、隐藏或降低其可见性。<a href="https://github.com/ucxn/Bro-Stat/blob/main/License.md" target="_blank" style="color: #777; text-decoration: underline;">查看许可证/分享</a>
        <div style="font-size:12px;color:#555;"><svg xmlns="http://www.w3.org/2000/svg" width="131" height="18" viewBox="0 0 145 20" role="img" aria-label="Broware Attribution" style="vertical-align:middle;margin-right:6px"><defs><linearGradient id="bg1" x2="0" y2="1"><stop stop-color="#4b4b4b"/><stop offset=".5" stop-color="#333"/><stop offset="1" stop-color="#1f1f1f"/></linearGradient><linearGradient id="bg2" x2="0" y2="1"><stop stop-color="#52d58c"/><stop offset=".52" stop-color="#31bc71"/><stop offset="1" stop-color="#218b50"/></linearGradient><linearGradient id="sh" x2="0" y2="1"><stop stop-color="#fff" stop-opacity=".32"/><stop offset=".45" stop-color="#fff" stop-opacity=".08"/><stop offset=".46" stop-opacity="0"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="c"><rect width="145" height="20" rx="4"/></clipPath></defs><g clip-path="url(#c)"><path fill="url(#bg1)" d="M0 0h24v20H0z"/><path fill="url(#bg2)" d="M24 0h121v20H24z"/><path fill="url(#sh)" d="M0 0h145v20H0z"/></g><g transform="translate(4 2)"><rect width="15" height="15" rx=".6" fill="#fff"/><rect x="1" y="1" width="13" height="13" fill="#58d18d"/><path fill="#fff" d="M1 1h7v7z"/><path fill="#32bf70" d="M8 1h6v13H8z"/><path fill="#1ba856" d="M1 14h7V8l6 6z"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="11"><text x="84" y="15" fill="#000" fill-opacity=".28">Broware Attribution</text><text x="84" y="14">Broware Attribution</text></g></svg><a href="https://github.com/ucxn/Bro-Stat" target="_blank" style="color: #0059fa; text-decoration: none; font-weight: bold;">Bro-Stat系列 增强组件</a><span title="构建日期：2026-10.13 17时&#34;架构设计：哥哥科技 BroTech&#10;Bilibili UID：501430041&#10;QQ群：680464365" style="background: rgba(0,0,0,0.04); padding: 2px 6px; border-radius: 4px; cursor: help; margin: 0 4px;">${(typeof GM_info !== 'undefined' && GM_info.script?.version) || '环境不支持获取版本号'}</span> Copyright &copy; 2026 <a href="https://www.bilibili.com/video/BV1LZ6yBXESq" target="_blank" style="color: #0059fa; text-decoration: none; font-weight: bold;">哥哥科技</a> (BroTech)<span style="color: #888; font-weight: normal;"> | All Rights Reserved</span> | 协作者： lingwe&emsp;&nbsp;<a href="https://scriptcat.org/script-show-page/6675" target="_blank" style="color: #666; text-decoration: none;">点此分享</a>
        </div></div></div></div>`;
        S.DOM缓存 = null; S.DOM容器 = null;
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
    b.style.cssText = 'position: fixed; top: 20px; right: 16%; width: 50px; height: 50px; background: linear-gradient(135deg, #0059fa, #00c6ff); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 48px; box-shadow: 0 4px 15px rgba(0,89,250,0.5); cursor: pointer; z-index: 99999; transition: transform 0.3s ease; user-select: none;';
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
      iCO = o && o.style.display === 'block',
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
      clearTimeout(window.gegeMasterTimer);
      window.gegeMasterTimer = setInterval(rSD, CONFIG.lanRefreshInterval * 1000);
    }
    bVD(o, {}).then(() => rSD());};

  window.gegeBActivated = !1;
  window.gegeHiddenDevices = {};
  window.gegeTickCount = 0;
  window.gegeMasterTimer = null;
 
  window.__aD = Object.create(null); // 全局后勤字典
  async function fAsusPorts(nodeMac = '') {
    if (S.端口请求中) return;
    S.端口请求中 = !0;
    try {
      let q = nodeMac ? `?node_mac=${encodeURIComponent(nodeMac)}&_=${Date.now()}` : `?_=${Date.now()}`;
      let r = await fetch(`/get_port_status.cgi${q}`);
      if (!r.ok) return;
      let j = await r.json(), pi = j?.port_info || {}, ports = (nodeMac && (pi[nodeMac] || pi[nodeMac.toUpperCase()] || pi[nodeMac.toLowerCase()])) || Object.values(pi)[0] || {};
      let rates = [];
      for (const [k, v] of Object.entries(ports)) {
        if (!/^L\d+$/i.test(k) && !/^lan\d+$/i.test(v?.ifname || '')) continue;
        let rate = +(v?.link_rate || 0);
        if (rate > 0 && (v?.is_on == null || String(v.is_on) === '1')) rates.push(rate);
      }
      S.有线统一PHY = rates.length && rates.every(x => x === rates[0]) ? rates[0] : 0;
    } catch(e) { console.warn(e); }
    finally { S.端口请求中 = !1; }
  }
  async function fAsusTopo() {
    try {
        let r = await fetch(`/update_clients.asp?_=${Date.now()}`);
        if (!r.ok) return;
        let m = (await r.text()).match(/fromNetworkmapd\s*:\s*\[(\{[\s\S]*?\})\]/);
        if (m) {
            let d = JSON.parse(m[1]), 新字典 = Object.create(null), 要重绘 = !1, parents = [], keys = new Set();
            for (let k in d) if (k !== 'maclist' && k !== 'ClientAPILevel') keys.add(nM(k));
            for (let k in d) {
                if (k === 'maclist' || k === 'ClientAPILevel') continue;
                let mac = nM(k), rawTx = String(d[k].curTx ?? '').trim(), rawRx = String(d[k].curRx ?? '').trim(), parent = nM(d[k].amesh_papMac || '');
                if (parent) parents.push(parent);
                新字典[mac] = {
                  n: d[k].nickName || d[k].name || "未知设备", ip: d[k].ip || "", wl: d[k].isWL, r: d[k].rssi | 0,
                  tx: rawTx === '' ? null : (+rawTx || 0), rx: rawRx === '' ? null : (+rawRx || 0)
                };
                if (!window.__aD[mac] || window.__aD[mac].wl != 新字典[mac].wl) 要重绘 = !0;
            }
            window.__aD = 新字典;
            let root = parents.find(x => !keys.has(x)) || parents[0] || '';
            if (root) S.主节点MAC = root;
            if (要重绘) { window.gegeForceUIRedraw = !0; S.DOM缓存 = null; S.DOM容器 = null; }
            await fAsusPorts(S.主节点MAC);
        }
    } catch(e) {console.warn(e);}
  }

  const _initUI = () => {
    if (CONFIG.injectMode > 0 && window.createGegeFloatingBtn) window.createGegeFloatingBtn();
    
    if (!window.gegeBActivated) {
      window.gegeBActivated = !0;
      clearTimeout(window.gegeMasterTimer);
      window.gegeMasterTimer = setInterval(rSD, CONFIG.lanRefreshInterval * 1000);
      fAsusTopo().then(() => rSD());
    }
  };
  if (document.readyState === 'complete') _initUI(); else window.addEventListener('load', _initUI);
})();