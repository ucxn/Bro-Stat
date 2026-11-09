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
          name: cC?.name || s.name || k, ip: s.ip,
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