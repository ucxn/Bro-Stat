// ==UserScript==
// @license         LicenseRef-BroTech-Additional-Terms AND Delayed Open Source Attribution License 1.0
//
// ============================================================================
// 哥哥科技 Source 文件许可与适用范围声明
// BroTech Source File License and Scope Notice
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
    readSaveData: 1, // 【历史记录】 从本地长期历史读档 [自动保存！] | 0: 新局模式
    forceMeshMode: 0,
    uiLayout: 2,//【面板拓扑结构】 0: 经典版 | 1: 详细紧凑版(驾驶舱美学) | 2: 详细平铺版(报表流美学)
    injectMode: 3, //1: 优先，10秒悬浮舱(D)| 3：强制模式
    calcMode: 1,// 1: 上行/下行倍数模式, 0: 上行占总和比例模式
    ratioExtremeUp: 10, // 极端上传判定阈值 (> 1000%)
    ratioWarnUp: 0.07, // 重度上传警告阈值 (> 7%)
    ratioExtremeDown: 0.01, // 极端下载判定阈值 (< 1%)
    ratioThreshold: 7, // (仅calcMode=0时有效) 上传占比报警阈值(%)
    lanRefreshInterval: 3, // LAN口刷新时间(秒)，用于精准补偿0到唤醒时的瞬时流量
    wanRefreshInterval: 3, // WAN口刷新时间(秒)，用于精准补偿0到唤醒时的瞬时流量
    宽带最大外网上行速率: 3e8,
    宽带最大外网下行速率: 24e8, // 配置外网最大上传|下载比特(bit/bps)速率，请略微大于真实值；500兆为5e8，一千兆1e9
    周期类型: 'M', // 'M'(每月), 'W'(每周), 'D'(固定天数), 其它任意字符：不开启周期重置+自动导出功能
    周_天设置: 1, // M: 1~31号; W: 0~6(周日~周六); D: 间隔天数(如 7)
    基准日期: '2026-06-20', // 原点时间(仅 D 模式有效) 任意一个历史周期的零点
    报告时间: -1080, // 提示时间：相对周期0点的偏移分钟数。(如 -4320 代表提前 3 天) 设置相对指定日期的下个周期起点的时间偏移量
    自动导出: 0, // 强制导出：相对周期0点的偏移分钟数。(如 W模式+锚点6(周六)+偏移-180 = 周五 21:00 强制导出清零)
    时区补偿: 28800000, // 默认 UTC+8 时区补偿量。
    盲漫游: undefined, //是否拦截漫游可能产生的异常高网速
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

const ESC_MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' };
  function escapeHTML(str) {
    return str ? String(str).replace(/[&<>'"]/g, m => ESC_MAP[m]) : '';
  }

const __origOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url) {
    let m = String(url).match(/stok=([a-zA-Z0-9]+)/i);
    if (m) window.__tpStok = m[1];
    return __origOpen.apply(this, arguments);
  };

let _saved = null;
  if (CONFIG.readSaveData === 1 && typeof GM_getValue !== 'undefined') {
    try { let sp = GM_getValue('ha_snapshot', null); _saved = sp && sp.timestamp > (GM_getValue('gege_reset_ms', 0) || 0) ? sp : null; } catch(e) {console.warn(e)}
  }

  const S = {
    lt: 0, wInstUp: 0, wInstDn: 0,
    // [修改] 启动时将 WAN口 总量继承为存档数据
    wTotUp: _saved?.global?.wan_up || 0,
    wTotDn: _saved?.global?.wan_down || 0,
    cls: {}, isPinned: !0,
    w2U: 0, w2D: 0, w2TotUp: 0, w2TotDn: 0, w2LT: undefined,
    hasW2: !1, is5G_149: !1,
    Warn_MS: 0, Force_MS: 0, _RST: !1,
    aWu: 0, aWd: 0, lwTU: 0, lwTD: 0, cSnap: null,
    总上行图: new Float64Array(8192), 总下行图: new Float64Array(8192), 总图点数: 0,
    wMaxU: 0, wMaxD: 0, wMinU: Infinity, wMinD: Infinity, 图表拖: null, 图表待画: 0
  };

  const _w = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;

  /* @BroTech-Reserved cycle-time.part.js */
  const 版本号 = (typeof GM_info !== 'undefined' && GM_info.script?.version) || '环境不支持获取版本号';

  function fB(bps) {
		if (bps > 1e9) return `${(bps * 1e-6).toFixed(1)} Mbit/s`;
        if (bps > 1e6) return `${(bps * 1e-6).toFixed(2)} Mbps`;
        if (bps > 1e3) return `${(bps * 1e-3).toFixed(1)} kbps`;
        return `${Math.round(bps)} bps`;
    }

const F_ARR_8 = ['0', '[1/8]', '[2/8]', '[3/8]', '[4/8]', '[5/8]', '[6/8]', '[7/8]', '[1]'];
  function fBy(bps) {
        if (bps === 0) return '0  B';
        if (bps > 8388608) return `${(bps / 8388608).toFixed(2)} MiB/s`;
        if (bps === 0.5) return `拦截中…`;
        return bps < 8602
            ? ((bps * 0.001 | 0) === bps * 0.001
                ? `${F_ARR_8[bps * 0.001]} kB/s`
                : `${(bps * 0.000125).toFixed(2)} kB/s`)
            : `${(bps / 8192).toFixed(1)} K/s`;
    }
  function fV(bits) {
        if (bits > 83886080000) return `${(bits / 8589934592).toFixed(4)} G`;
		    if (bits > 8388608000) return `${(bits / 8388608).toFixed(1)} M`;
        if (bits > 8388608) return `${(bits / 8388608).toFixed(4)} M`;
        if (bits > 8192) return `${(bits / 8192).toFixed(3)} K`;
        return `${Math.round(bits / 8)} B`;
    }

  function fSV(bits) {
    if (bits >= 84607500288) return `${(bits / 8589934592).toPrecision(4)}G`;
    if (bits > 8388608000) return `${Math.round(bits / 8388608)}M`;
    if (bits > 8388608) return `${(bits / 8388608).toFixed(2)}M`;
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

  function dN(s) {
    if (!s) return '';
    s = String(s);
    if (!/%[0-9a-fA-F]{2}/.test(s)) return s;
    try { return decodeURIComponent(s); } catch (_) { return s; }
  }

  const st = document.createElement('style');
  /* @BroTech-Reserved style-nested-p01-01.part.js */
  window.gegeRenderedMacs = new Set();
  const TP_WAN_REQUEST = { network: { name: ["wan_status", "wan_status_2"] }, method: "get" };
  const TP_HOST_REQUEST = { hosts_info: { table: "online_host" }, method: "get" };
  const TP_COMBINED_REQUEST = { network: { name: ["wan_status", "wan_status_2"] }, hosts_info: { table: "online_host" }, method: "get" };
  async function tpDsPost(apiUrl, body) {
    const r = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    return r.ok ? r.json() : null;
  }
  let readTpStats = async function (apiUrl) {
    try {
      const both = await tpDsPost(apiUrl, TP_COMBINED_REQUEST);
      if (both?.error_code === 0 && both.network?.wan_status && Array.isArray(both.hosts_info?.online_host)) {
        readTpStats = async url => {
          const data = await tpDsPost(url, TP_COMBINED_REQUEST);
          return [data, data];
        };
        return [both, both];
      }
    } catch (e) { console.warn("[TP] 混合包探测失败，退回双包", e); }
    readTpStats = async url => {
      let wan = null, hosts = null;
      try { wan = await tpDsPost(url, TP_WAN_REQUEST); } catch (e) { console.warn("[TP] WAN口拉取失败", e); }
      try { hosts = await tpDsPost(url, TP_HOST_REQUEST); } catch (e) { console.warn("[TP] 设备列表拉取失败", e); }
      return [wan, hosts];
    };
    return readTpStats(apiUrl);
  };
async function rSD() {
    if (window.__gIsF) return;
    window.__gIsF = !0;
    try {
      let stk = window.__tpStok;
      if (!stk) {
          window.__gIsF = !1;
          return; // 还没到就等下一秒再试
      }
      let apiUrl = `/stok=${stk}/ds`;
      let dW = null, dL = null, wanNow, lanNow;
      [dW, dL] = await readTpStats(apiUrl);
      wanNow = performance.now();
      lanNow = performance.now();
      
      let wanValid = dW?.error_code === 0 && !!dW.network?.wan_status;
      let lanValid = dL?.error_code === 0 && Array.isArray(dL.hosts_info?.online_host);
      let cWU = S.wInstUp, cWD = S.wInstDn;
      if (wanValid) {
        let curW = dW.network.wan_status;
        cWU = (+curW.up_speed || 0) * 8000; // TP 的主、副 WAN 都是 kByte/s，转成 bps 需要 * 8000
        cWD = (+curW.down_speed || 0) * 8000;
        记总速率图(cWU, cWD);
      }
      
      if (wanValid) S.hasW2 = !!(dW.network.wan_status_2?.ipaddr && dW.network.wan_status_2.ipaddr !== "0.0.0.0");
      if (wanValid && S.hasW2) {
        let u2 = (+dW.network.wan_status_2.up_speed || 0) * 8000, d2 = (+dW.network.wan_status_2.down_speed || 0) * 8000;
        if (S.w2LT === undefined) S.w2LT = wanNow;
        else if (S.w2U !== u2 || S.w2D !== d2) {
          let dt = wanNow - S.w2LT;
          if (S.w2U > 0) S.w2TotUp += (S.w2U + u2) * dt * 0.0005; else if (u2 > 0) S.w2TotUp += u2 * 0.5 * CONFIG.wanRefreshInterval;
          if (S.w2D > 0) S.w2TotDn += (S.w2D + d2) * dt * 0.0005; else if (d2 > 0) S.w2TotDn += d2 * 0.5 * CONFIG.wanRefreshInterval;
          S.w2LT = wanNow;
        }
        S.w2U = u2; S.w2D = d2;
      }

      let cSU = 0, cSD = 0, cI = Object.create(null);
      (lanValid ? dL.hosts_info.online_host : []).forEach(obj => {
        let i = obj[Object.keys(obj)[0]]; 
        if (i && i.mac) {
          let m = nM(i.mac), u = (+i.up_speed || 0) * 8, dn = (+i.down_speed || 0) * 8;
          cI[m] = {
            upRate: u, dnRate: dn,
            iface: i.type === '0' ? 'eth1' : (i.phy_mode === '7' ? 'wl1' : 'wl0'),
            offUp: 0, offDn: 0, 
            onSec: +(i.online_time || 0),
            name: dN(i.hostname) || "未知设备",
            ip: i.ip || ""
          };
          cSU += u; cSD += dn;
        }
      });

            if (lanValid) S.lastCI = cI;
      else {
        cI = S.lastCI || Object.create(null);
        for (const d of Object.values(cI)) { cSU += d.upRate || 0; cSD += d.dnRate || 0; }
      }
      let ol = document.getElementById('gege-global-overlay'), cM = Object.keys(cI), iD = lanValid && (window.gegeForceUIRedraw || (cM.length !== window.gegeRenderedMacs.size));
      if (!iD && cM.length > 0) { for (let i = 0; i < cM.length; i++) { if (!window.gegeRenderedMacs.has(cM[i])) { iD = !0; break; } } }
      if (iD) {
        for (let m in S.cls) if (!cI[m]) {
          let cS = S.cls[m], ms = lanNow - cS.lUT;
                    if (ms > CONFIG.lanRefreshInterval * 1000) ms = CONFIG.lanRefreshInterval * 1000;
          cS.intUp += cS.upR * ms * 0.0005;
          cS.intDn += cS.dnR * ms * 0.0005;
          cS.upR = cS.dnR = 0;
        }}
            if (ol && ol.style.display === 'block' && (iD || !ol.querySelector('.gege-list-item'))) {
        bVD(ol, cI); window.gegeRenderedMacs = new Set(cM); window.gegeForceUIRedraw = !1;
      }
      const gDt = (S.lt !== 0) ? (lanNow - S.lt) * 0.001 : 0;
            if (wanValid && S.wLT === undefined) {
        S.wLT = wanNow;
      }
      else if (wanValid && (cWU !== S.wInstUp || cWD !== S.wInstDn)) {
        const wDt = wanNow - S.wLT;
        /* @BroTech-Reserved wan-trapezoid-wakeup.part.js */
        S.wLT = wanNow;
      }
      const 本轮刷新接口 = new Set();
      for (const m in cI) {
        const cC = cI[m];
        let cS = S.cls[m];
        if (!cS) {
          cS = S.cls[m] = {
            upR: cC.upRate, dnR: cC.dnRate, lUT: lanNow, aR: 0,
            intUp: _saved?.devices?.[m]?.integral_up || 0,
            intDn: _saved?.devices?.[m]?.integral_down || 0,
            onS: cC.onSec, lOS: cC.onSec, name: _saved?.devices?.[m]?.name || cC.name || m, hU: new Float64Array(128), hD: new Float64Array(128), hIdx: 0, ifc: cC.iface
          };
        } else {
          let dU = cC.offUp - cS.lU, dD = cC.offDn - cS.lD;
          if (cS.ifc !== cC.iface) { if (CONFIG.盲漫游 != 0) cS.aR = 1; if (CONFIG.盲漫游 === 1) cS.aR = 2; cS.ifc = cC.iface; }
          if (dU < 0 || dD < 0) {
            if (dU < 0) {
              cS.uB += dU;
              cS.oU += dU;
              cS.dpU = cS.lU;
            }
            if (dD < 0) {
              cS.dB += dD;
              cS.oD += dD;
              cS.dpD = cS.lD;
            }
            cS.aR = 3;
          }
          else if (cS.aR === 3) {
            if (dU > 0 || dD > 0) {
            if (cS.dpU && dU >= cS.dpU && cS.dpD && dD >= cS.dpD) {
              if (dU < cS.dpU * 1.1 || dU < cS.dpU + CONFIG.宽带最大外网上行速率 * CONFIG.lanRefreshInterval) {
                cS.uB += cS.dpU; cS.oU += cS.dpU;
                } else {
                  cS.uB += dU; cS.oU += dU; cS.dB += dD; cS.oD += dD; }
               if (dD < cS.dpD * 1.1 || dD < cS.dpD + CONFIG.宽带最大外网下行速率 * CONFIG.lanRefreshInterval) {
                cS.dB += cS.dpD; cS.oD += cS.dpD;
                } else {cS.dB += dD; cS.oD += dD;
                }
              cS.aR = 2; if (CONFIG.盲漫游 === undefined) CONFIG.盲漫游 = 1;
              } else {
                cS.aR = 0; 
              }
              cS.dpU = 0; cS.dpD = 0; 
            }
          }
          else if (cS.aR > 0) { cS.aR--; }
          if (cS.aR === 2 || (cS.aR == 1 && cC.upRate > CONFIG.宽带最大外网上行速率 * 0.6) || cC.upRate > 6e8) { cSU -= cC.upRate; cC.upRate = 0.5; }
          if (cS.aR === 2 || (cS.aR == 1 && cC.dnRate > CONFIG.宽带最大外网下行速率 * 0.6) || cC.dnRate > 24e8) { cSD -= cC.dnRate; cC.dnRate = 0.5; }
          if (cS.aR === 0 && (cC.upRate !== cS.upR || cC.dnRate !== cS.dnR)) 本轮刷新接口.add(cC.iface);
          if (cS.lOS !== cC.onSec) { cS.onS = cC.onSec; cS.lOS = cC.onSec; }
          else { cS.onS = (cS.onS || cC.onSec || 0) + gDt; }
        }
        if (cC.name && cC.name !== '未知设备') cS.name = cC.name;
        cS.lU = cC.offUp;
        cS.lD = cC.offDn;
      }
      for (const m in cI) {
        const cC = cI[m];
        let cS = S.cls[m];
        if (cC.upRate !== cS.upR || cC.dnRate !== cS.dnR || cS.aR === 0 && 本轮刷新接口.has(cC.iface)) {
          const ms = lanNow - cS.lUT;
          /* @BroTech-Reserved lan-trapezoid-wakeup.part.js */
          cS.upR = cC.upRate;
          cS.dnR = cC.dnRate;
          cS.lUT = lanNow;
        }
      }
      S.lt = lanNow;
      if (wanValid) { S.wInstUp = cWU; S.wInstDn = cWD; }
      rUI(cWU, cWD, cSU, cSD, cI);
    }
    catch (e) {
      console.error("[哥哥科技] 周期采样中断:", e);
    }
    finally {
      window.__gIsF = !1;
    }
    }

  function buildCSV() {
    /* @BroTech-Reserved buildCSV-nested-p01-01.part.js */
function doSettle(nowMs) {
    /* @BroTech-Reserved settle-all-01.part.js */
    GM_setValue('ha_snapshot', { timestamp: nowMs, global: {}, devices: {} }); _saved = null; S.cSnap = null;
        S.wTotUp = S.wTotDn = S.w2TotUp = S.w2TotDn = 0; // 内存原地清零
    for (let k in S.cls) { let s = S.cls[k]; s.intUp = s.intDn = 0; s.uB = s.oU = s.lU; s.dB = s.oD = s.lD; s.hU.fill(0); s.hD.fill(0); } // 内存原地清零底表
        document.getElementById('gb-w-bnr')?.remove(); // 预警横幅
    S.calcTime(Math.max(nowMs, S.Force_MS - CONFIG.自动导出 * 60000 + 1000) + CONFIG.时区补偿); // 瞬间算出下月/下周新线
    window.gegeForceUIRedraw = !0; // 重绘 UI
    setTimeout(() => { S._RST = !1; }, 2000); // 解开安全锁
  }

/* @BroTech-Reserved stage-ratio.part.js */

const SPRK = [' ', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
      function getSpark(ringArr, headIdx, maxVal) {
        let s = "";
        for (let i = 64; i--; ) {
          let v = ringArr[(headIdx - i) & 127];
          s += SPRK[v > 0 ? Math.min(7, Math.max(1, ((v / maxVal) * 7) | 0)) : 0];
        }
        return s;
      }

      /* @BroTech-Reserved speed-chart-core.part.js */
  function rUI(wU, wD, sU, sD, cI) {
    let LUp = 0, LDn = 0, hpU = 0, hpD = 0;
    for (let k in S.cls) {
      let s = S.cls[k];
      let cU = s.intUp || 0;
      let cD = s.intDn || 0;
      let sessU = cU;
      let sessD = cD;
      LUp += s.intUp || 0;
      LDn += s.intDn || 0;
      hpU += sessU; 
      hpD += sessD;
    }
    S.cSnap = {
            timestamp: Date.now(),
      global: {
        wan_up: S.wTotUp,
        wan_down: S.wTotDn,
        lan_integral_up: LUp,
        lan_integral_down: LDn,
        lan_high_up: hpU,
        lan_high_down: hpD
            },
      devices: Object.keys(S.cls).reduce((acc, k) => {
        let s = S.cls[k], cC = cI[k];
        acc[k] = {
          up: s.intUp || 0,
          down: s.intDn || 0,
          integral_up: s.intUp || 0,
          integral_down: s.intDn || 0,
          status: cC ? (CONFIG.portMap[cC.iface] || cC.iface || "未知接口") : "off",
          name: cC?.name || s.name || k,
          ip: cC?.ip || "",
          raw_up: cC?.offUp || 0,
          raw_down: cC?.offDn || 0
        };
        return acc;
      }, {})
    };
    S.rTick = ((S.rTick || 0) + 1) & 3;
    if (S.rTick === 1 || !S.cRT) {
      for (let k in S.cls) {
        let s = S.cls[k], cC = cI[k];
        s.hIdx = (s.hIdx + 1) & 127;
        s.hU[s.hIdx] = cC ? cC.upRate : 0;
        s.hD[s.hIdx] = cC ? cC.dnRate : 0;
      }
      if (typeof GM_setValue !== 'undefined') {
        S.haTick = ((S.haTick || 0) + 1) & 63;
        if (S.haTick === 1) {
          try { GM_setValue('ha_snapshot', S.cSnap); } catch(e) {console.warn(e)}
        }
        let nowMs = Date.now();
                if (nowMs >= S.Force_MS && !S._RST) {doSettle(nowMs);
        } else if (nowMs >= S.Warn_MS && !document.getElementById('gb-w-bnr')) {
          let bd = document.getElementById('zte-geek-board');
          if (bd) {
            let bn = document.createElement('div'); bn.id = 'gb-w-bnr';
            bn.style.cssText = 'background:#fff3cd;color:#856404;padding:10px 15px;margin-bottom:10px;border-radius:6px;border-left:5px solid #ffc107;font-weight:bold;font-size:13px;display:flex;justify-content:space-between;align-items:center;width:100%;box-sizing:border-box;';
            bn.innerHTML = `<span> 统计周期即将结束，流量将在跨越边界时自动清零备份。</span><button id="gb-f-btn" style="background:#ffc107;border:none;padding:4px 10px;border-radius:4px;cursor:pointer;font-weight:bold;color:#333;">立即导出并清零</button>`;
            bd.insertBefore(bn, bd.firstChild);
            document.getElementById('gb-f-btn').onclick = () => doSettle(Date.now());}
          }
      }
      S.aWu = (S.wTotUp - (S.lwTU || S.wTotUp)) / (CONFIG.wanRefreshInterval << 2); S.lwTU = S.wTotUp;
      S.aWd = (S.wTotDn - (S.lwTD || S.wTotDn)) / (CONFIG.wanRefreshInterval << 2); S.lwTD = S.wTotDn;
            if (S.hasW2) {
          let rU = S.w2TotUp > 0 ? (S.wTotUp / S.w2TotUp) : (S.wTotUp > 0 ? Infinity : 0), rD = S.w2TotDn > 0 ? (S.wTotDn / S.w2TotDn) : (S.wTotDn > 0 ? Infinity : 0);
          let fR = (r) => r === Infinity ? '∞' : (r > 1 ? r.toFixed(2) + 'x' : (r * 100).toPrecision(3) + '%');
          S.cRT = `<span style="font-weight: bold;"><span class="c-up">${fR(rU)}</span>，<span class="c-down">${fR(rD)}</span></span>`;
      } else {
          let rUp = calcStageRatio(S.wTotUp, LUp, hpU), rDn = calcStageRatio(S.wTotDn, LDn, hpD);
          S.cRT = `<span style="font-weight: bold;"><span style="color: ${rUp > 1.5 ? '#ff4c00' : (rUp > 1.15 ? '#FF9800' : '#4CAF50')};">${(rUp * 100).toFixed(2)}%</span>，<span style="color: ${rDn > 1.5 ? '#ff4c00' : (rDn > 1.15 ? '#FF9800' : '#4CAF50')};">${(rDn * 100).toFixed(2)}%</span></span>`;
      }
      if (document.getElementById('gb-ratio-display')) document.getElementById('gb-ratio-display').innerHTML = S.cRT;
        }
        let bd = document.getElementById('zte-geek-board');
    if (!bd) {
      bd = document.createElement('div');
      bd.id = 'zte-geek-board';
/* @BroTech-Reserved board-layout.part.js */
/* @BroTech-Reserved board-mount.part.js */
        let aW2U = S.hasW2 ? S.w2U : undefined, aW2D = S.hasW2 ? S.w2D : undefined, aW2TU = S.hasW2 ? S.w2TotUp : undefined, aW2TD = S.hasW2 ? S.w2TotDn : undefined;
        setText('#gb-wan-up-bytes', `🔼 ${fBy(wU + (aW2U||0))}`);
        setText('#gb-wan-down-bytes', `🔽 ${fBy(wD + (aW2D||0))}`);
        setText('#gb-wan-up-bps', `🔼 ${fB(wU)}`);
        setText('#gb-wan-down-bps', `🔽 ${fB(wD)}`);
        setText('#gb-lan-up-bytes', `🔼 ${fBy(sU)}`);
        setText('#gb-lan-down-bytes', `🔽 ${fBy(sD)}`);
        setText('#gb-perc-up', `🔼 ${wU>0?(sU*100/wU).toFixed(1):0.0}%`);
        setText('#gb-perc-down', `🔽 ${wD>0?(sD*100/wD).toFixed(1):0.0}%`);
        setText('#gb-lan-up-vol', `🔼 ${fV(LUp)}`);
        setText('#gb-lan-down-vol', `🔽 ${fV(LDn)}`);
        setText('#gb-wan-up-vol', `🔼 ${fV(S.wTotUp)}`);
        setText('#gb-wan-down-vol', `🔽 ${fV(S.wTotDn)}`);
                画总速率图(bd);
        let pb = bd.querySelector('#gb-pwan-bps-container'), pv = bd.querySelector('#gb-pwan-vol-container');
        if (aW2U !== undefined) {
            if (pb) { pb.style.display = 'inline'; setText('#gb-pwan-bps-up', '🔼 ' + fB(aW2U)); setText('#gb-pwan-bps-down', '🔽 ' + fB(aW2D)); }
            if (pv) { pv.style.display = 'inline'; setText('#gb-pwan-tot-up', '🔼 ' + fV(aW2TU)); setText('#gb-pwan-tot-down', '🔽 ' + fV(aW2TD)); }
        } else {
            if (pb) pb.style.display = 'none'; if (pv) pv.style.display = 'none';
        }
                if (bd.querySelector('#gb-ratio-display')) {
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
        const cC = cI[m] || { upRate: 0, dnRate: 0, iface: "", offUp: 0, offDn: 0 },
              cS = S.cls[m] || { intUp: 0, intDn: 0, onS: 0 };
        
        let cache = it._gege || (it._gege = {});
/* @BroTech-Reserved rui-device-bars.part.js */
  async function bVD(ol, cI) {
    try {
      let h2 = [], h52 = [], h58 = [], hW = [];
      for (let m in cI) {
        let d = cI[m], tS = fOT(d.onSec), ifc = d.iface;
        let htm = `<div class="col-md-12 col-xs-12 config-item gege-list-item" data-gege-mac="${m}"><div class="config-item-box" style="display: flex; align-items: stretch;"><div class="col-md-5 col-xs-7 logo" style="width: 33%; display: flex; flex-direction: row; align-items: center;"><div class="dev-logo" style="width: 50px; height: 50px; min-width: 50px; margin-right: 15px; background: url('/jquery/static/img/home/unknown_computer.png') 0% 0% / 50px no-repeat; display: inline-block;"></div><div class="dev-intro" style="flex: 1; display: flex; flex-direction: column; justify-content: flex-start; min-height: 50px;">
<div class="dev-name" style="font-weight: bold; color: #333; font-size: 14px;">${escapeHTML(d.name)}</div><div class="gege-online-time" style="color: #999; font-size: 12px; font-family: system-ui, sans-serif; margin-top: 4px;">${tS?'在线：'+tS:''}</div></div></div><div class="col-md-4 col-xs-5 info" style="width: 27%; display: flex; flex-direction: column; padding: 0 10px; border-right: 1px solid #eee;"><div class="dev-ip" style="color: #666; font-family: system-ui, sans-serif;">${escapeHTML(d.ip)}</div><div class="dev-number grey" style="color: #999; font-size: 12px; font-family: system-ui, sans-serif;">MAC：${m}</div></div><div class="col-md-3 col-xs-12 speed" style="width: 40%; display: flex; flex-direction: column; justify-content: center; padding: 0 10px;"></div></div></div>`;
                if (['wl0', '2.4G'].includes(ifc)) h2.push(htm);
        else if (['wlan5', 'wl1', 'wlan4', '5.2', '5.2G'].includes(ifc)) h52.push(htm);
        else if (ifc === 'wl2' || ifc === 'wlan2' || ifc === '5.8G' || (/w/i.test(ifc) && !/wan/i.test(ifc))) h58.push(htm);
        else hW.push(htm);
      }
      requestAnimationFrame(() => {
        ol.innerHTML = `<div style="padding: 20px; width: 96%; margin: 0 auto; min-height: 100%;"><div id="gege-board-anchor"></div><div id="config-list" class="config-list gege-list-container"><div class="gege-section"><div class="config-title">有线设备${(window.gegeHiddenDevices && Object.keys(window.gegeHiddenDevices).length > 0) ? '<span style="color: #ff4c00; font-size: 13px; font-weight: normal; margin-left: 10px; font-family: system-ui, sans-serif;">(哥哥科技：智能Mesh适配)</span>' : ''}</div>${hW.join('')||'<div class="gege-empty-state">没有连接设备</div>'}</div><div class="gege-section"><div class="config-title">无线设备（${S.is5G_149?'5.8GHz':'5.2GHz'}）</div>${h52.join('')||'<div class="gege-empty-state">没有连接设备</div>'}</div><div class="gege-section"><div class="config-title">无线设备（${S.is5G_149?'5.2GHz':'5.8GHz'}）</div>${h58.join('')||'<div class="gege-empty-state">没有连接设备</div>'}</div><div class="gege-section"><div class="config-title">无线设备（2.4GHz）</div>${h2.join('')||'<div class="gege-empty-state">没有连接设备</div>'}
        </div><div style="margin-top: 25px; padding-top: 15px; border-top: 1px dashed #eee; text-align: center; font-family: Consolas, 'Microsoft YaHei', sans-serif;"><div style="font-size: 11.5px; color: #777; font-style: italic; margin-bottom: 8px;">“在一个文明社会，干净的、不被监视与吸血的网络，是我们每个人的基本权利。”</div><div style="font-size: 10.5px; color: #999; line-height: 1.3; margin-bottom: 8px;">本交互式程序基于 Delayed Open Source Attribution License 1.0 发行，按“原样 (AS IS)”提供，不对其适用性、稳定性、精密度或任何商业场景合规性作任何明示或暗示的担保。<br>根据 DOSA-1.0 第 2 条规定，基于本程序的任何修改均不得移除、隐藏或篡改本界面的署名与法律声明。保留此界面GUI的完整性是使用本软件代码的合法性的前置条件。<a href="https://github.com/ucxn/Bro-Stat/blob/main/License.md" target="_blank" style="color: #777; text-decoration: underline;">许可证</a>
        </div><div style="font-size: 12px; color: #555;"><a href="https://github.com/ucxn/Bro-Stat" target="_blank" style="color: #0059fa; text-decoration: none; font-weight: bold;">Bro-Stat 增强组件 TP-${版本号}</a> Copyright &copy; 2026 <a href="https://www.bilibili.com/video/BV1PtR7B8ECC" target="_blank" style="color: #0059fa; text-decoration: none; font-weight: bold;">哥哥科技</a> (BroTech)<span style="color: #888; font-weight: normal;"> | All Rights Reserved</span>&emsp;&nbsp;<a href="https://scriptcat.org/zh-CN/users/203510" target="_blank" style="color: #666; text-decoration: none;">点此分享</a></div></div></div></div>`;
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
    let o = document.getElementById('gege-global-overlay');
    let tS = fS !== null ? fS : !(o && o.style.display === 'block');
    
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
    bVD(o, Object.create(null)).then(() => rSD());
  };

  window.gegeBActivated = !1;
  window.gegeHiddenDevices = {};
  window.gegeMasterTimer = null;
  const tKA = () => {
    let i = document.createElement('iframe');
    i.id = 'gege-keepalive-iframe';
    i.style.display = 'none';
    const p = ["/#/sys", "/#/app", "/#/wlan/"];
    i.src = `${window.location.origin}${p[Math.floor(Math.random()*p.length)]}`;
        let z = document.getElementById('gege-keepalive-iframe');
    if (z) z.remove();
    document.body.appendChild(i);
    setTimeout(() => {
      if (i.parentNode) {
        i.src = 'about:blank';
        i.remove();
      }
    }, 12000);
  };
  setTimeout(tKA, 2000);
  setInterval(tKA, 720000);
  const _initUI = () => {
        if (CONFIG.injectMode === 3 || (CONFIG.injectMode === 1 && +(window.location.hostname.slice(window.location.hostname.lastIndexOf('.') + 1)) < 6)) {
      if (window.createGegeFloatingBtn) window.createGegeFloatingBtn();
    }
  };

  if (document.readyState === 'complete') _initUI(); else window.addEventListener('load', _initUI);

})();
