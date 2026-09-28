  S.calcTime = (L) => {
    S.Force_MS = (CONFIG.周期类型 === 'M' ? Date.UTC(new Date(L).getUTCFullYear(), new Date(L).getUTCMonth() + (L >= Date.UTC(new Date(L).getUTCFullYear(), new Date(L).getUTCMonth(), CONFIG.周_天设置) ? 1 : 0), CONFIG.周_天设置) : (CONFIG.周期类型 === 'W' ? Date.UTC(new Date(L).getUTCFullYear(), new Date(L).getUTCMonth(), new Date(L).getUTCDate()) + ((CONFIG.周_天设置 - new Date(L).getUTCDay() > 0 ? CONFIG.周_天设置 - new Date(L).getUTCDay() : CONFIG.周_天设置 - new Date(L).getUTCDay() + 7) * 86400000) : (CONFIG.周期类型 === 'D' ? Date.parse(CONFIG.基准日期 + 'T00:00:00Z') + (Math.floor((L - Date.parse(CONFIG.基准日期 + 'T00:00:00Z')) / (CONFIG.周_天设置 * 86400000)) + 1) * CONFIG.周_天设置 * 86400000 : Infinity))) - CONFIG.时区补偿;
    S.Warn_MS = S.Force_MS + CONFIG.报告时间 * 60000;
    S.Force_MS += CONFIG.自动导出 * 60000;
  };S.calcTime((typeof GM_getValue !== 'undefined' && GM_getValue('gege_reset_ms')) ? (GM_getValue('gege_reset_ms') + CONFIG.时区补偿) : Date.now() + CONFIG.时区补偿);
  if (typeof GM_getValue !== 'undefined' && GM_getValue('gege_reset_ms') >= Math.min(S.Warn_MS, S.Force_MS)) S.calcTime(S.Force_MS - CONFIG.自动导出 * 60000 + 1000 + CONFIG.时区补偿);
