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
            if (wanValid && !S.wLT) {
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
          oU: cC.offUp, oD: cC.offDn, name: spD?.name || cC.name || m, ip: cC.ip || '', hU: new Float64Array(64), hD: new Float64Array(64), hIdx: 0, ifc: cC.iface
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