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