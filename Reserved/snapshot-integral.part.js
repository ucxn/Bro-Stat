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
          ip: s.ip,
