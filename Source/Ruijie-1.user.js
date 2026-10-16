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

  if (!/^\/cgi-bin\/luci/.test(location.pathname)) return;
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
    const oOpen = XP.open, oSend = XP.send;
    XP.open = function (m, u) {
      try {
        const s = String(u), k = /[?&]auth=([0-9a-f]+)/.exec(s);
        if (k) { const 首次 = !锐.auth; 锐.auth = k[1]; if (首次) setTimeout(锐取射频); } // 网页打开后读取一次射频信道
        this.__gegeU = s;
      } catch (e) { console.warn(e); }
      return oOpen.apply(this, arguments);
    };
    XP.send = function (b) {
      if (typeof b === 'string' && b.indexOf('"method":"ping"') !== -1 && (this.__gegeU || '').indexOf('/api/system') !== -1) {
        this.addEventListener('load', function () { try { 收延迟(this.responseText); } catch (e) { console.warn('[Ruijie] ping 响应无效', e); } });
      }
      return oSend.apply(this, arguments);
    };
  })();

  // ======== [2] 主动取数：请求体与签名必须逐字节一致（签名只与请求体有关，与会话无关） ========
  const 锐请求 = {
    ov: ['{"method":"devSta.get","params":{"module":"overview","noParse":false,"async":null,"remoteIp":false,"device":"pc"}}',
      '0a02ec86281388dc9c23987f67609885', 'e29be7fc26168f4c0addfa6146da910d'],
    ul: ['{"method":"cmdArr","params":{"device":"pc","params":[{"method":"devSta.get","params":{"module":"user_list","noParse":true,"async":null,"remoteIp":false,"data":{"devType":"all","dataType":"timely"}}},{"method":"acConfig.get","params":{"module":"wirelessMacFilter","noParse":false,"async":null,"remoteIp":false}}]}}',
      'b3011dc5550b351d6ef7935602aa6b40', '23241979c5f2f63c22b3d59ec531e44e'],
    // 官方页面「设备列表」同款请求：user_list+flow+port_status+ap_list，仅取第 4 项 ap_list（射频信道/占用/底噪），用不到的几项不解析
    ap: ['{"method":"cmdArr","params":{"device":"pc","params":[{"method":"devSta.get","params":{"module":"user_list","noParse":true,"async":null,"remoteIp":false,"data":{"devType":"all","dataType":"timely"}}},{"method":"devSta.get","params":{"module":"flow","noParse":true,"async":null,"remoteIp":false,"data":{"func":"interface_info"}}},{"method":"devSta.get","params":{"module":"port_status","noParse":true,"async":null,"remoteIp":false}},{"method":"devSta.get","params":{"module":"ap_list","noParse":true,"async":null,"remoteIp":false}}]}}',
      '0cfc3dc6fb02046b214b396eb0b20b71', 'a6daf4986b6f0869804ee5587d7e6d2b']
  };
  async function 锐取(k) {
    const [body, ca, csa] = 锐请求[k];
    const r = await fetch(`/cgi-bin/luci/api/cmd?auth=${锐.auth}`, {
      method: 'POST', credentials: 'same-origin', body,
      headers: { 'Content-Type': 'application/json;charset=UTF-8', 'Content-Accept': ca, 'Contents-Accept': csa }
    });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const j = await r.json();
    if (j.code !== 0) throw new Error('code ' + j.code);
    return j.data;
  }
  // 射频信道：只在「网页打开后」与「每次点开面板」各读一次，不进 1 秒循环。channel 形如 "auto-6,auto-60"，与 band/chutil/channf 按逗号逐项对应
  async function 锐取射频() {
    if (!锐.auth || 锐.射频取中) return;
    锐.射频取中 = !0;
    try {
      const a = (await 锐取('ap'))[3]?.list?.[0];
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

  /* @BroTech-Reserved cycle-time.part.js */
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

  /* @BroTech-Reserved text-utils.part.js */

  function 挂样式() {
  const st = document.createElement('style');
  st.innerHTML = `/* @BroTech-Reserved style-panel.part.js */
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
      const wanValid = !!ovD && typeof ovD === 'object' && 'up_rate' in ovD && 'down_rate' in ovD;
      let cWU = S.wInstUp, cWD = S.wInstDn, cI = Object.create(null);
      if (wanValid) {
        锐.ov = ovD;
        S.hasW2 = !1;
        cWU = +ovD.up_rate || 0; // 锐捷 overview 速率单位即 bit/s
        cWD = +ovD.down_rate || 0;
        记总速率图(cWU, cWD);
      }
      let cSU = 0, cSD = 0, cTot = 0;
      const hostList = Array.isArray(ulD) ? ulD[0]?.list : null, lanValid = Array.isArray(hostList);
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
        /* @BroTech-Reserved wan-trapezoid-wakeup.part.js */
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
        /* @BroTech-Reserved counter-guard-head.part.js */
            cS.dpU && dU > cS.dpU * 0.975 && cS.dpD && dD > cS.dpD * 0.975
        ) {
              if (dU < cS.dpU * 1.1 || dU < cS.dpU + CONFIG.宽带最大外网上行速率 * CONFIG.lanRefreshInterval) {
                cS.uB += cS.dpU; cS.oU += cS.dpU;
              } else { cS.uB += dU; cS.oU += dU; }
              /* @BroTech-Reserved counter-guard-tail.part.js */
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
          /* @BroTech-Reserved lan-trapezoid-wakeup.part.js */
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
        /* @BroTech-Reserved lan-core-integral.part.js */
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
    /* @BroTech-Reserved csv-report-head.part.js */
      csvRow([`统计周期：${new Date(start + CONFIG.时区补偿).toISOString().replace('T', ' ').slice(0, 19)} 至 ${new Date(now + CONFIG.时区补偿).toISOString().replace('T', ' ').slice(0, 19)} (UTC${CONFIG.时区补偿 > 0 ? '+' : ''}${CONFIG.时区补偿 / 3600000})${CONFIG.readSaveData === 1 ? ' （含路由器后台读档）' : CONFIG.readSaveData === 3 ? ' （积分以路由器后台计数为起点）' : ''}`]),
/* @BroTech-Reserved csv-report-tail.part.js */
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
    GM_setValue('ha_snapshot', { timestamp: nowMs, global: {}, devices: {} }); S.snap = {}; S.cSnap = null;
        S.wTotUp = S.wTotDn = S.w2TotUp = S.w2TotDn = S.lTotUp = S.lTotDn = 0; S.lLT = performance.now(); // 内存原地清零
    for (let k in S.cls) { let s = S.cls[k]; s.intUp = s.intDn = 0; s.uB = s.oU = s.lU; s.dB = s.oD = s.lD; s.hU.fill(0); s.hD.fill(0); } // 内存原地清零底表
  }

  /* @BroTech-Reserved stage-ratio.part.js */
      const SPRK = [' ', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
      function getSpark(ringArr, headIdx, maxVal) {
        let s = "";
        for (let i = 16; i--; ) {
          let v = ringArr[(headIdx - i) & 63];
          s += SPRK[v > 0 ? Math.min(7, Math.max(1, ((v / maxVal) * 7) | 0)) : 0];
        }
        return s;
      }
      /* @BroTech-Reserved speed-chart.part.js */
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
    /* @BroTech-Reserved wifi-signal-icons.part.js */
      };
      function rUI(wU, wD, sU, sD, cI) {
    /* @BroTech-Reserved agg-loop-official.part.js */
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
                /* @BroTech-Reserved board-pin-anchor.part.js */
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
                /* @BroTech-Reserved device-loop-official.part.js */

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
        /* @BroTech-Reserved device-card-official.part.js */
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
        <div style="font-size:12px;color:#555;"><svg xmlns="http://www.w3.org/2000/svg" width="131" height="18" viewBox="0 0 145 20" role="img" aria-label="Broware Attribution" style="vertical-align:middle;margin-right:6px"><defs><linearGradient id="bg1" x2="0" y2="1"><stop stop-color="#4b4b4b"/><stop offset=".5" stop-color="#333"/><stop offset="1" stop-color="#1f1f1f"/></linearGradient><linearGradient id="bg2" x2="0" y2="1"><stop stop-color="#52d58c"/><stop offset=".52" stop-color="#31bc71"/><stop offset="1" stop-color="#218b50"/></linearGradient><linearGradient id="sh" x2="0" y2="1"><stop stop-color="#fff" stop-opacity=".32"/><stop offset=".45" stop-color="#fff" stop-opacity=".08"/><stop offset=".46" stop-opacity="0"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="c"><rect width="145" height="20" rx="4"/></clipPath></defs><g clip-path="url(#c)"><path fill="url(#bg1)" d="M0 0h24v20H0z"/><path fill="url(#bg2)" d="M24 0h121v20H24z"/><path fill="url(#sh)" d="M0 0h145v20H0z"/></g><g transform="translate(4 2)"><rect width="15" height="15" rx=".6" fill="#fff"/><rect x="1" y="1" width="13" height="13" fill="#58d18d"/><path fill="#fff" d="M1 1h7v7z"/><path fill="#32bf70" d="M8 1h6v13H8z"/><path fill="#1ba856" d="M1 14h7V8l6 6z"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="11"><text x="84" y="15" fill="#000" fill-opacity=".28">Broware Attribution</text><text x="84" y="14">Broware Attribution</text></g></svg><a href="https://github.com/ucxn/Bro-Stat/blob/main/Ruijie-1.user.js" target="_blank" style="color: #0059fa; text-decoration: none; font-weight: bold;">Bro-Stat 增强组件</a> <span title="构建时间：2026-10.13&#10;架构设计：哥哥科技 BroTech&#10;Bilibili UID：501430041&#10;QQ群：680464365" style="background: rgba(0,0,0,0.04); padding: 2px 6px; border-radius: 4px; cursor: help; margin: 0 4px; font-family: Consolas;">锐捷版 ${版本号}</span> | Copyright &copy; 2026 <a href="https://www.bilibili.com/video/BV19ZpB64E6D" target="_blank" style="color: #0059fa; text-decoration: none; font-weight: bold;">哥哥科技</a> (BroTech)<span style="color: #888; font-weight: normal;"> | All Rights Reserved</span>&emsp;&nbsp;<a href="https://scriptcat.org/users/203510" target="_blank" style="color: #666; text-decoration: none;">点击分享</a></div></div></div></div>`;
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
    b.style.cssText = `position: fixed; bottom: 60px; right: 60px; width: 50px; height: 50px; background: linear-gradient(135deg, #0059fa, #00c6ff); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 48px; box-shadow: 0 4px 15px rgba(0,89,250,0.5); cursor: pointer; z-index: 99999; transition: transform 0.3s ease; user-select: none;`;
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
    if (!document.querySelector('script[src*="eweb-"],link[href*="eweb-"]')) return; // 非锐捷 eWeb 后台：不挂任何界面
    挂样式();
    if (window.createGegeFloatingBtn) window.createGegeFloatingBtn();
  };
  if (document.readyState === 'complete') 起(); else window.addEventListener('load', 起);
})();