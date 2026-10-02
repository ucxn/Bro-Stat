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
    uiLayout: 2,//【面板拓扑结构】 0: 经典版 | 1: 详细紧凑版(驾驶舱美学) | 2: 详细平铺版(报表流美学)
    injectMode: 3, //1: 优先，10秒悬浮舱(D)| 3：强制模式
    calcMode: 1,// 1: 上行/下行倍数模式, 0: 上行占总和比例模式
    ratioExtremeUp: 10, // 极端上传判定阈值 (> 1000%)
    ratioWarnUp: 0.07, // 重度上传警告阈值 (> 7%)
    ratioExtremeDown: 0.01, // 极端下载判定阈值 (< 1%)
    ratioThreshold: 7, // (仅calcMode=0时有效) 上传占比报警阈值(%)
    lanRefreshInterval: 3, // LAN设备速率有效刷新周期(秒)，可独立配置；建议大于wanRefreshInterval
    wanRefreshInterval: 1, // WAN刷新周期(秒)，主调度时钟；只要快于LAN即可任意配置
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
      "wire": "有线",
      "2.4G": "2.4G",
      "6G": "6G"
    }
  };

const ESC_MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' };
  function escapeHTML(str) {
    return str ? String(str).replace(/[&<>'"]/g, m => ESC_MAP[m]) : '';
  }

let _saved = null;
  if (CONFIG.readSaveData === 1 && typeof GM_getValue !== 'undefined') {
    try { let sp = GM_getValue('ha_snapshot', null); _saved = sp && sp.timestamp > (GM_getValue('gege_reset_ms', 0) || 0) ? sp : null; } catch (e) { console.warn(e); }
  }

  const S = {
    lt: 0, wInstUp: 0, wInstDn: 0,
    wTotUp: _saved?.global?.wan_up || 0,
    wTotDn: _saved?.global?.wan_down || 0,
    cls: {}, isPinned: !0, pI: null,
    is5G_149: !1, RSSI频率修正: undefined,
    Warn_MS: 0, Force_MS: 0, _RST: !1,
    aWu: 0, aWd: 0, lwTU: 0, lwTD: 0, cSnap: null,
    总上行图: new Float64Array(8192), 总下行图: new Float64Array(8192), 总图点数: 0,
    wMaxU: 0, wMaxD: 0, wMinU: Infinity, wMinD: Infinity, 图表拖: null, 图表待画: 0,
    wDue: 0, lDue: 0, haDue: 0
  };

  const _w = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;

  /* @BroTech-Reserved cycle-time.part.js */
  const 版本号 = (typeof GM_info !== 'undefined' && GM_info.script?.version) || '环境不支持获取版本号';

  function fB(bps) {
        if (bps > 1e9) return `${Math.round(bps * 1e-6)} Mbit/s`;
        if (bps > 1e6) return `${(bps * 1e-6).toFixed(2)} Mbps`;
        return `${(bps * 1e-3).toFixed(2)} kbps`;
    }

  function fBy(bps) {
        if (bps === 1) return '拦截中…';
        if (bps > 8388608) return `${(bps * 1.1920928955078125e-7).toFixed(2)} M/s`;
        if (bps > 8191) return `${Math.round(bps * 0.0001220703125)} K/s`;
        return bps ? `${(bps * 0.0001220703125).toPrecision(3)} K/s` : '0 K/s';
    }
  function fV(bits) {
        if (bits > 83886079999) return `${(bits / 8589934592).toFixed(4)} G`;
        if (bits > 8388608000) return `${(bits / 8388608).toFixed(1)} M`;
        if (bits > 8388608) return `${(bits / 8388608).toFixed(4)} M`;
        if (bits > 8192) return `${(bits / 8192).toFixed(2)} K`;
        return `${Math.round(bits / 8)} B`;
    }

  function fSV(bits) {
    if (bits > 84607500287) return `${(bits / 8589934592).toPrecision(4)}GiB`;
    if (bits > 8388608000) return `${Math.round(bits / 8388608)}MiB`;
    if (bits > 8388608) return `${(bits / 8388608).toPrecision(4)}MiB`;
    if (bits > 8191) return `${(bits / 8192).toFixed(1)}KiB`;
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

  const st = document.createElement('style');
  /* @BroTech-Reserved style-nested-p01-01.part.js */
  window.gegeRenderedMacs = new Set();
  let gTD = p => { const v = _w.document.querySelector('#app')?.__vue__; if (!v?.$getData) return; gTD = v.$getData.bind(v); return gTD(p); };
  function fCH() {
    return Promise.resolve(gTD({modules:"wifiAdvCfg"})).then(d => {
      if (!d?.wifiAdvCfg?.wifiChannelCurrent || !d.wifiAdvCfg.wifiChannelCurrent_5g) return;
      S.RSSI频率修正 = 20 * Math.log10((5000 + 5 * +(d.wifiAdvCfg.wifiChannelCurrent_5g||44)) / (2407 + 5 * +(d.wifiAdvCfg.wifiChannelCurrent||10)));
      S.is5G_149 = +d.wifiAdvCfg.wifiChannelCurrent_5g > 148;
      CONFIG.portMap['5G'] = S.is5G_149 ? '5.8G' : '5.2G';
    }).catch(e => console.warn("[哥哥科技] 无线信道彩蛋探测异常:", e));
  }
async function rSD(wantWan = !0, wantLan = !0) {
    if (window.__gIsF || !wantWan && !wantLan) return;
    window.__gIsF = !0;
    try {
      const d = await gTD({modules:wantWan?(wantLan?"wanStatus,deviceList":"wanStatus"):"deviceList",timerRefresh:1});
      if (!d) return;
      const now = performance.now(), wanValid = !!d.wanStatus, lanValid = Array.isArray(d.deviceList);
      let cWU = S.wInstUp, cWD = S.wInstDn, cSU = 0, cSD = 0, cI = Object.create(null);
      if (wanValid) {
        cWU = (+d.wanStatus.wanUpSpeed || 0) * 8192;
        cWD = (+d.wanStatus.wanDownSpeed || 0) * 8192;
        记总速率图(cWU, cWD);
      }
      if (lanValid) for (let n = 0; n < d.deviceList.length; n++) for (let z = 0, a; z < 2; z++) {
        a = z ? d.deviceList[n].guestList : d.deviceList[n].onlineList;
        if (!a) continue;
        for (let j = 0; j < a.length; j++) if (a[j].mac) {
          const m = nM(a[j].mac), u = (+a[j].upSpeed || 0) * 8192, dn = (+a[j].downSpeed || 0) * 8192;
          cI[m] = {
            upRate: u, dnRate: dn, iface: a[j].connectType || "",
            onSec: +a[j].connectTime || 0, name: a[j].hostname || "未知设备", ip: a[j].ip || "",
            rssi: +a[j].rssi || 0, rate: +a[j].deviceRate || 0, vendor: a[j].manufacturer || ""
          };
          cSU += u; cSD += dn;
        }
      }
            if (lanValid) S.lastCI = cI;
      else {
        cI = S.lastCI || Object.create(null);
        for (const d of Object.values(cI)) { cSU += d.upRate || 0; cSD += d.dnRate || 0; }
      }
      let ol = document.getElementById('gege-global-overlay'), cM = Object.keys(cI), iD = lanValid && (window.gegeForceUIRedraw || cM.length !== window.gegeRenderedMacs.size);
      if (!iD && cM.length) for (let i = 0; i < cM.length; i++) if (!window.gegeRenderedMacs.has(cM[i])) { iD = !0; break; }
      if (iD) for (let m in S.cls) if (!cI[m]) {
        let cS = S.cls[m], ms = now - cS.lUT;
                  if (ms > CONFIG.lanRefreshInterval * 1000) ms = CONFIG.lanRefreshInterval * 1000;
          cS.intUp += cS.upR * ms * 0.0005;
          cS.intDn += cS.dnR * ms * 0.0005;
          cS.upR = cS.dnR = 0;
      }
      if (ol && ol.style.display === 'block' && (iD || !ol.querySelector('.gege-list-item'))) {
        bVD(ol, cI); window.gegeRenderedMacs = new Set(cM); window.gegeForceUIRedraw = !1;
      }
      const gDt = S.lt ? (now - S.lt) * 0.001 : 0;
      if (wanValid && S.wLT === undefined) S.wLT = now;
      else if (wanValid && (cWU !== S.wInstUp || cWD !== S.wInstDn)) {
        const wDt = now - S.wLT;
        /* @BroTech-Reserved wan-trapezoid-wakeup.part.js */
        S.wLT = now;
      }
      const 本轮刷新接口 = new Set();
      for (const m in cI) {
        const cC = cI[m];
        let cS = S.cls[m];
        if (!cS) cS = S.cls[m] = {
          upR: cC.upRate, dnR: cC.dnRate, lUT: now, aR: 0,
          intUp: _saved?.devices?.[m]?.integral_up || 0, intDn: _saved?.devices?.[m]?.integral_down || 0,
          onS: cC.onSec, lOS: cC.onSec, name: _saved?.devices?.[m]?.name || cC.name || m,
          hU: new Float64Array(128), hD: new Float64Array(128), hIdx: 0, ifc: cC.iface
        };
        else {
          if (cS.ifc !== cC.iface) {
            if (CONFIG.盲漫游 !== 0) cS.aR = CONFIG.盲漫游 === 1 ? 2 : 1;
            cS.ifc = cC.iface;
          } else if (cS.aR > 0) cS.aR--;
          if (cS.aR === 2 || cS.aR === 1 && cC.upRate > CONFIG.宽带最大外网上行速率 * 0.6 || cC.upRate > 6e8) { cSU -= cC.upRate; cC.upRate = 1; }
          if (cS.aR === 2 || cS.aR === 1 && cC.dnRate > CONFIG.宽带最大外网下行速率 * 0.6 || cC.dnRate > 24e8) { cSD -= cC.dnRate; cC.dnRate = 1; }
          if (cS.aR === 0 && (cC.upRate !== cS.upR || cC.dnRate !== cS.dnR)) 本轮刷新接口.add(cC.iface);
          if (cS.lOS !== cC.onSec) { cS.onS = cC.onSec; cS.lOS = cC.onSec; }
          else cS.onS = (cS.onS || cC.onSec || 0) + gDt;
        }
        if (cC.name && cC.name !== '未知设备') cS.name = cC.name;
      }
      for (const m in cI) {
        const cC = cI[m];
        const cS = S.cls[m];
        if (cC.upRate !== cS.upR || cC.dnRate !== cS.dnR || cS.aR === 0 && 本轮刷新接口.has(cC.iface)) {
          const ms = now - cS.lUT;
          /* @BroTech-Reserved lan-trapezoid-wakeup.part.js */
          cS.upR = cC.upRate; cS.dnR = cC.dnRate; cS.lUT = now;
        }
      }
      S.lt = now;
      if (wanValid) { S.wInstUp = cWU; S.wInstDn = cWD; }
      rUI(cWU, cWD, cSU, cSD, cI, wanValid);
    } catch (e) {
      console.error("[哥哥科技/Tenda] 周期采样中断:", e);
    } finally {
      window.__gIsF = !1;
    }
  }

  async function gegePollLoop() {
    if (!window.gegeBActivated) return;
    const now = performance.now(), wStep = CONFIG.wanRefreshInterval * 1000, lStep = CONFIG.lanRefreshInterval * 1000, w = now + 1 >= S.wDue, l = now + 1 >= S.lDue;
    if (w) do S.wDue += wStep; while (S.wDue <= now);
    if (l) do S.lDue += lStep; while (S.lDue <= now);
    if (w || l) await rSD(w, l);
    const after = performance.now();
    window.gegeMasterTimer = setTimeout(gegePollLoop, Math.max(1, Math.min(S.wDue, S.lDue) - after));
  }
  function gegeStartPoll() {
    clearTimeout(window.gegeMasterTimer);
    const now = performance.now();
    S.wDue = now + CONFIG.wanRefreshInterval * 1000;
    S.lDue = now + CONFIG.lanRefreshInterval * 1000;
    window.gegeMasterTimer = setTimeout(gegePollLoop, Math.max(1, Math.min(S.wDue, S.lDue) - now));
    }

  function buildCSV() {
    /* @BroTech-Reserved buildCSV-nested-p01-01.part.js */
function doSettle(nowMs) {
    /* @BroTech-Reserved settle-all-01.part.js */
    GM_setValue('ha_snapshot', { timestamp: nowMs, global: {}, devices: {} }); _saved = null; S.cSnap = null;
    S.wTotUp = S.wTotDn = 0; // 内存原地清零
    for (let k in S.cls) { let s = S.cls[k]; s.intUp = s.intDn = 0; s.hU.fill(0); s.hD.fill(0); } // 内存原地清零底表
        document.getElementById('gb-w-bnr')?.remove(); // 预警横幅
    S.calcTime(Math.max(nowMs, S.Force_MS - CONFIG.自动导出 * 60000 + 1000) + CONFIG.时区补偿); // 瞬间算出下月/下周新线
    window.gegeForceUIRedraw = !0; // 重绘 UI
    setTimeout(() => { S._RST = !1; }, 2000); // 解开安全锁
  }

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
      const gPSvg = rate => {
        const c = rate === 10 ? '#E7B05C' : rate === 100 ? '#5394CC' : rate === 1000 ? '#4CAF50' : '';
        if (c) return /* @BroTech-Reserved icon-wired-active-svg.part.js */;
        return /* @BroTech-Reserved icon-wired-default-svg.part.js */;
      };
      const gWSvg = r => {
        const c = r > -24 ? '#4caf50' : r > -35 ? '#9c27b0' : '#0059fa';
        if (r > -41) return `<svg viewBox="0 0 100 100" width="45" height="45"><path d="M 50,85 L 10,35 A 65,65 0 0,1 90,35 Z" fill="${c}"/></svg>`;
        if (r > -46) return /* @BroTech-Reserved icon-wifi-high-svg.part.js */;
        if (r > -50) return /* @BroTech-Reserved icon-wifi-good-svg.part.js */;
        if (r > -56) return /* @BroTech-Reserved icon-wifi-three-ring-svg.part.js */;
        if (r > -61) return /* @BroTech-Reserved icon-wifi-two-ring-svg.part.js */;
        if (r > -68) return /* @BroTech-Reserved icon-wifi-one-ring-svg.part.js */;
        if (r > -71) return /* @BroTech-Reserved icon-wifi-edge-svg.part.js */;
        if (r > -75) return /* @BroTech-Reserved icon-wifi-warning-yellow-svg.part.js */;
        if (r > -78) return /* @BroTech-Reserved icon-wifi-warning-orange-svg.part.js */;
        if (r > -85) return /* @BroTech-Reserved icon-wifi-question-svg.part.js */;
        return /* @BroTech-Reserved icon-wifi-lost-svg.part.js */;
      };

  function rUI(wU, wD, sU, sD, cI, wanTick) {
    let LUp = 0, LDn = 0;
    for (let k in S.cls) {
      LUp += S.cls[k].intUp || 0;
      LDn += S.cls[k].intDn || 0;
    }
    S.cSnap = {
            timestamp: Date.now(),
      global: {
        wan_up: S.wTotUp,
        wan_down: S.wTotDn,
        lan_integral_up: LUp,
        lan_integral_down: LDn,
        lan_high_up: LUp,
        lan_high_down: LDn
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
          raw_up: 0,
          raw_down: 0
        };
        return acc;
      }, {})
    };
    if (wanTick) {
      S.rTick = ((S.rTick || 0) + 1) & 3;
      if (S.rTick === 1 || !S.cRT) {
        for (let k in S.cls) {
          let s = S.cls[k], cC = cI[k];
          s.hIdx = (s.hIdx + 1) & 127;
          s.hU[s.hIdx] = cC ? cC.upRate : 0;
          s.hD[s.hIdx] = cC ? cC.dnRate : 0;
/* @BroTech-Reserved ha-quick-report.part.js */
        }
        if (typeof GM_setValue !== 'undefined') {
          let nowMs = Date.now();
          if (!S.haDue || nowMs >= S.haDue) {
            S.haDue = nowMs + 768000;
            try { GM_setValue('ha_snapshot', S.cSnap); } catch (e) { console.warn(e); }
            Promise.resolve(gTD({modules:"ethPortStatus",timerRefresh:1})).then(d => { if (d?.ethPortStatus) S.pI = d.ethPortStatus; }).catch(e => console.warn("[哥哥科技/Tenda] 物理网口探测异常:", e));
          }
          if (nowMs >= S.Force_MS && !S._RST) {
            doSettle(nowMs);
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
        S.aWu = (S.wTotUp - (S.lwTU || S.wTotUp)) / (CONFIG.wanRefreshInterval * 4); S.lwTU = S.wTotUp;
        S.aWd = (S.wTotDn - (S.lwTD || S.wTotDn)) / (CONFIG.wanRefreshInterval * 4); S.lwTD = S.wTotDn;
        const rUp = S.wTotUp ? LUp / S.wTotUp : 1, rDn = S.wTotDn ? LDn / S.wTotDn : 1;
                    S.cRT = `<span style="font-weight: bold;"><span style="color: ${rUp > 1.5 ? '#ff4c00' : (rUp > 1.15 ? '#FF9800' : '#4CAF50')};">${(rUp * 100).toFixed(2)}%</span>，<span style="color: ${rDn > 1.5 ? '#ff4c00' : (rDn > 1.15 ? '#FF9800' : '#4CAF50')};">${(rDn * 100).toFixed(2)}%</span></span>`;
            if (document.getElementById('gb-ratio-display')) document.getElementById('gb-ratio-display').innerHTML = S.cRT;
        }
    }
        let bd = document.getElementById('zte-geek-board');
    if (!bd) {
      bd = document.createElement('div');
      bd.id = 'zte-geek-board';
/* @BroTech-Reserved board-layout.part.js */
        layoutHtml += `<div class="geek-row" id="gb-phys-row" style="display:none;height:auto!important;flex-wrap:wrap;"><span class="geek-label" style="font-weight:normal;color:#666;">物理网口</span><div class="geek-val-box" id="gb-phys-data" style="flex-wrap:wrap;font-size:13px;font-weight:normal;"></div></div>`;
/* @BroTech-Reserved board-mount.part.js */
        setText('#gb-wan-up-bytes', `🔼 ${fB(wU)}`);
        setText('#gb-wan-down-bytes', `🔽 ${fB(wD)}`);
        setText('#gb-wan-up-bps', `🔼 ${fBy(wU)}`);
        setText('#gb-wan-down-bps', `🔽 ${fBy(wD)}`);
        setText('#gb-lan-up-bytes', `🔼 ${fB(sU)}`);
        setText('#gb-lan-down-bytes', `🔽 ${fB(sD)}`);
                setText('#gb-perc-up', `🔼 ${wU>0?(sU*100/wU).toFixed(1):0.0}%`);
        setText('#gb-perc-down', `🔽 ${wD>0?(sD*100/wD).toFixed(1):0.0}%`);
        setText('#gb-lan-up-vol', `🔼 ${fV(LUp)}`);
        setText('#gb-lan-down-vol', `🔽 ${fV(LDn)}`);
        setText('#gb-wan-up-vol', `🔼 ${fV(S.wTotUp)}`);
        setText('#gb-wan-down-vol', `🔽 ${fV(S.wTotDn)}`);
        if (S.pI?.ports?.length) {
          bd.querySelector('#gb-phys-row').style.display = 'flex';
          let h = '';
          for (let i = 0; i < S.pI.ports.length; i++) h += `<span style="margin-right:14px;color:${S.pI.ports[i].connected?'#333':'#999'};">${S.pI.ports[i].name==='wan'?'WAN':S.pI.ports[i].name==='lan'?'LAN '+i:S.pI.ports[i].name.toUpperCase()+' '+(i+1)}：${S.pI.ports[i].connected?(S.pI.ports[i].portSpeedType===2?'2.5GE':'GE'):'未连接'}</span>`;
          bd.querySelector('#gb-phys-data').innerHTML = h;
        }
        画总速率图(bd);
                if (bd.querySelector('#gb-ratio-display')) {
          if (bd.querySelector('#gb-wan-zero-up')) {
              setText('#gb-wan-zero-up', !S.wZEU ? '' : fSV(S.wZEU));
              setText('#gb-wan-zero-down', !S.wZED ? '' : fSV(S.wZED));
              setText('#gb-wan-zero-up-cnt', S.wZEUC || 0);
              setText('#gb-wan-zero-down-cnt', S.wZEDC || 0);
          }
        }
      }
      const inv_boardUp = LUp > 0 ? 100 / LUp : 0;
            const inv_LDn = LDn > 0 ? 100 / LDn : 0;
      const inv_sU = sU > 0 ? 100 / sU : 0;
      const inv_sD = sD > 0 ? 100 / sD : 0;

      for (let m in cI) {
        let it = oDC[m];
        if (!it) continue;
        const cC = cI[m] || { upRate: 0, dnRate: 0, iface: "" },
              cS = S.cls[m] || { intUp: 0, intDn: 0, onS: 0 };
        
        let cache = it._gege || (it._gege = {}), rRs = cC.rssi, lRs = cS.lRs ?? rRs;
        if (cC.iface !== 'wire' && rRs) {
          if (((rRs > -24) !== (lRs > -24) || (rRs > -35) !== (lRs > -35) || (rRs > -41) !== (lRs > -41) || (rRs > -56) !== (lRs > -56)) && Math.abs(rRs - lRs) + (cS.dbC || 0) < 5) {
            rRs = lRs; cS.dbC = ((cS.dbC || 0) + 1) & 7;
          } else { cS.dbC = 0; cS.lRs = rRs; }
        }
        (cache.logo ??= it.querySelector('.dev-logo')).innerHTML = (cC.iface === 'wire' ? gPSvg(cC.rate) : rRs ? gWSvg(rRs) : '') + (cC.rate ? `<div style="font-size:10.5px;color:${cC.rate===2500?'#000':cC.rate===100?'#4caf50':cC.rate===10?'#ff4c00':'#999'};font-family:Consolas;margin-top:2px;font-weight:${cC.rate===2500||cC.rate===100?'bold':'normal'};">rate:${cC.rate}</div>` : '');
        const rN = cache.rssiNode ??= (cache.devIntro ??= it.querySelector('.dev-intro'))?.querySelector('.gege-rssi');
        if (rN) { const p = Math.round((cC.rssi - (cC.iface === '2.4G' ? S.RSSI频率修正 || 0 : 0)) * 1.6666666666666667 + 133.33333333333334); rN.innerHTML = cC.iface === 'wire' ? escapeHTML(cC.vendor || '') : cC.rssi ? `<span style="color:${p < 0?'#ff4c00':'inherit'}">${p}%</span>, ${cC.rssi}` : ''; }
        
/* @BroTech-Reserved rui-device-bars.part.js */
  async function bVD(ol, cI) {
    try {
      let h2 = [], h5 = [], h6 = [], hW = [];
      for (let m in cI) {
        let d = cI[m], tS = fOT(d.onSec), ifc = d.iface;
        let htm = `<div class="col-md-12 col-xs-12 config-item gege-list-item" data-gege-mac="${m}"><div class="config-item-box" style="display:flex;align-items:stretch;"><div class="col-md-5 col-xs-7 logo" style="width:33%;display:flex;flex-direction:row;align-items:center;"><div class="dev-logo" style="width:50px;height:50px;min-width:50px;margin-right:15px;display:flex;flex-direction:column;align-items:center;justify-content:center;"></div><div class="dev-intro" style="flex:1;display:flex;flex-direction:column;justify-content:flex-start;min-height:50px;"><div style="display:flex;justify-content:space-between;align-items:baseline;width:95%;"><div class="dev-name" style="font-weight:bold;color:#333;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0;margin-right:8px;">${escapeHTML(d.name)}</div><div class="gege-rssi" style="font-size:12px;font-weight:bold;color:#666;font-family:Consolas;white-space:nowrap;flex-shrink:0;"></div></div><div class="gege-online-time" style="color:#999;font-size:12px;font-family:system-ui,sans-serif;margin-top:4px;">${tS?'在线：'+tS:''}</div></div></div><div class="col-md-4 col-xs-5 info" style="width:27%;display:flex;flex-direction:column;padding:0 10px;border-right:1px solid #eee;"><div class="dev-ip" style="color:#666;font-family:system-ui,sans-serif;">${escapeHTML(d.ip)}</div><div class="dev-number grey" style="color:#999;font-size:12px;font-family:system-ui,sans-serif;">MAC：${m}</div></div><div class="col-md-3 col-xs-12 speed" style="width:40%;display:flex;flex-direction:column;justify-content:center;padding:0 10px;"></div></div></div>`;
        if (ifc === '2.4G') h2.push(htm);
        else if (ifc === '5G') h5.push(htm);
        else if (ifc === '6G') h6.push(htm);
        else hW.push(htm);
      }
      requestAnimationFrame(() => {
        ol.innerHTML = `<div style="padding:20px;width:96%;margin:0 auto;min-height:100%;"><div id="gege-board-anchor"></div><div id="config-list" class="config-list gege-list-container"><div class="gege-section"><div class="config-title">有线设备</div>${hW.join('')||'<div class="gege-empty-state">没有连接设备</div>'}</div><div class="gege-section"><div class="config-title">无线设备（${S.is5G_149?'5.8GHz':'5.2GHz'}）</div>${h5.join('')||'<div class="gege-empty-state">没有连接设备</div>'}</div>${h6.length?`<div class="gege-section"><div class="config-title">无线设备（6GHz）</div>${h6.join('')}</div>`:''}<div class="gege-section"><div class="config-title">无线设备（2.4GHz）</div>${h2.join('')||'<div class="gege-empty-state">没有连接设备</div>'}
        </div><div style="margin-top: 25px; padding-top: 15px; border-top: 1px dashed #eee; text-align: center; font-family: Consolas, 'Microsoft YaHei', sans-serif;"><div style="font-size: 11.5px; color: #777; font-style: italic; margin-bottom: 8px;">“在一个文明社会，干净的、不被监视与吸血的网络，是我们每个人的基本权利。”</div><div style="font-size: 10.5px; color: #999; line-height: 1.3; margin-bottom: 8px;">本交互式程序属于“哥哥软件”系列；仅供使用，传播请尊重署名，二开或发行请参阅许可证；按“原样 (AS IS)”且免费提供，不对其适用性、稳定性、精密度或任何商业场景合规性作任何明示或暗示的担保。<br>基于本程序的任何修改、使用任意部分代码、再发布或相关衍生版本的合法性的前置条件是：在提供最终用户界面时，均应显著保留保留所有“哥哥科技”与法律声明，不得删除、隐藏或降低其可见性。<a href="https://github.com/ucxn/Bro-Stat/blob/main/License.md" target="_blank" style="color: #777; text-decoration: underline;">许可证</a>
        <div style="font-size:12px;color:#555;"><svg xmlns="http://www.w3.org/2000/svg" width="131" height="18" viewBox="0 0 145 20" role="img" aria-label="Broware Attribution" style="vertical-align:middle;margin-right:6px"><defs><linearGradient id="bg1" x2="0" y2="1"><stop stop-color="#4b4b4b"/><stop offset=".5" stop-color="#333"/><stop offset="1" stop-color="#1f1f1f"/></linearGradient><linearGradient id="bg2" x2="0" y2="1"><stop stop-color="#52d58c"/><stop offset=".52" stop-color="#31bc71"/><stop offset="1" stop-color="#218b50"/></linearGradient><linearGradient id="sh" x2="0" y2="1"><stop stop-color="#fff" stop-opacity=".32"/><stop offset=".45" stop-color="#fff" stop-opacity=".08"/><stop offset=".46" stop-opacity="0"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="c"><rect width="145" height="20" rx="4"/></clipPath></defs><g clip-path="url(#c)"><path fill="url(#bg1)" d="M0 0h24v20H0z"/><path fill="url(#bg2)" d="M24 0h121v20H24z"/><path fill="url(#sh)" d="M0 0h145v20H0z"/></g><g transform="translate(4 2)"><rect width="15" height="15" rx=".6" fill="#fff"/><rect x="1" y="1" width="13" height="13" fill="#58d18d"/><path fill="#fff" d="M1 1h7v7z"/><path fill="#32bf70" d="M8 1h6v13H8z"/><path fill="#1ba856" d="M1 14h7V8l6 6z"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="11"><text x="84" y="15" fill="#000" fill-opacity=".28">Broware Attribution</text><text x="84" y="14">Broware Attribution</text></g></svg><a href="https://github.com/ucxn/Bro-Stat" target="_blank" style="color: #0059fa; text-decoration: none; font-weight: bold;">Bro-Stat 增强组件 Tenda-${版本号}</a> Copyright &copy; 2026 <a href="https://www.bilibili.com/video/BV1PtR7B8ECC" target="_blank" style="color: #0059fa; text-decoration: none; font-weight: bold;">哥哥科技</a> (BroTech)<span style="color: #888; font-weight: normal;"> | All Rights Reserved</span>&emsp;&nbsp;<a href="https://scriptcat.org/zh-CN/users/203510" target="_blank" style="color: #666; text-decoration: none;">点此分享</a></div></div></div></div>`;
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

    if (location.href.toLowerCase().includes('login')) {
      GM_setValue('gege_open_after_jump', 0);
      return;
    }
    if (location.pathname.includes('/phone/')) {
      GM_setValue('gege_open_after_jump', Date.now());
      const p = _w.document.querySelector('#app')?.__vue_app__?._context?.provides, g = p?.$getData, m = p?.$postModule;
      if (!g || !m) {
        GM_setValue('gege_open_after_jump', 0);
        console.warn('[哥哥科技/Tenda] 未找到手机版官方切换接口');
        return;
      }
      Promise.resolve(g({modules:'localhost'})).then(d => {
        if (!d?.localhost?.ip) throw new Error('localhost.ip unavailable');
        return m({VisitWebVersion:{visitWebEn:!0,visitIp:d.localhost.ip}}, !1);
      }).then(() => { _w.location.href = '//' + _w.location.host; }).catch(e => {
        GM_setValue('gege_open_after_jump', 0);
        console.warn('[哥哥科技/Tenda] 手机版切换电脑版失败:', e);
      });
      return;
    }
    if (location.pathname !== '/index.html') return;
    if (location.hash !== '#/advance/advance/dmz') location.hash = '#/advance/advance/dmz';
    
    if (!o) {
      o = document.createElement('div');
      o.id = 'gege-global-overlay';
      document.body.appendChild(o);
    }
    o.style.display = 'block';
if (!window.gegeBActivated) {
      window.gegeBActivated = !0;
      fCH().then(() => { window.gegeForceUIRedraw = !0; return rSD(!0, !0); }).finally(gegeStartPoll);
    } else fCH().then(() => { window.gegeForceUIRedraw = !0; rSD(!0, !0); });
  };

  window.gegeBActivated = !1;
  window.gegeMasterTimer = null;
  const _initUI = () => {
    if (CONFIG.injectMode === 3 || (CONFIG.injectMode === 1 && +(window.location.hostname.slice(window.location.hostname.lastIndexOf('.') + 1)) < 6)) {
      if (window.createGegeFloatingBtn) window.createGegeFloatingBtn();
    }
(j => {
  if (location.pathname !== '/index.html' || !j) return;
  function f() {
    clearTimeout(f.t);
    f.t = setTimeout(() => {
      if (Date.now() - j >= 120000) {
        GM_setValue('gege_open_after_jump', 0);
        window.removeEventListener('hashchange', f);
        return;
      }
      Promise.resolve(gTD({modules:'wanStatus',timerRefresh:1})).then(d => {
        if (!d?.wanStatus) return f();
        window.removeEventListener('hashchange', f);
        GM_setValue('gege_open_after_jump', 0);
        window.gegeTogglePanel(true);
      }, f);
    }, 200);
  }
  window.addEventListener('hashchange', f);
  f();
})(GM_getValue('gege_open_after_jump', 0));
  };

  if (document.readyState === 'complete') _initUI(); else window.addEventListener('load', _initUI);
  if (sessionStorage.getItem('stok_id') && !location.href.toLowerCase().includes('login')) window.gegeTendaKeepAlive = setInterval(() => { const i = document.createElement('iframe'); i.style.display = 'none'; i.src = `${location.origin}/index.html?${Math.random()}#/advance/advance/dmz`; document.documentElement.appendChild(i); setTimeout(() => i.remove(), 5000); }, 288000);
})();