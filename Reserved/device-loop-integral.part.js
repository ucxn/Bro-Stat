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
        let cache = it._gege || (it._gege = {});
        const hqU = cS.intUp || 0;
        const hqD = cS.intDn || 0;
        const tN = cache.timeNode ??= it.querySelector('.gege-online-time');
        if (tN && cS.onS > 0) tN.textContent = `在线：${fOT(cS.onS)}`;
        const dI = cache.devIntro ??= it.querySelector('.dev-intro');
        const inf = cache.info ??= it.querySelector('.info');
        /* @BroTech-Reserved device-card-integral.part.js */
          let clU = (S.aWu * 0.1) || 0; if (clU < 512000) clU = 512000;
          let clD = (S.aWd * 0.125) || 0;
          for (let i = 0; i < 128; i++) { if (cS.hU[i] > clU) clU = cS.hU[i]; if (cS.hD[i] > clD) clD = cS.hD[i]; }
          const spU = getSpark(cS.hU, cS.hIdx, clU), spD = getSpark(cS.hD, cS.hIdx, clD);
          if (cache.spU !== spU) { cache.spU = spU; (cache.bUSpk ??= bU.querySelector('.v-spark')).textContent = spU; }
          if (cache.spD !== spD) { cache.spD = spD; (cache.bDSpk ??= bD.querySelector('.v-spark')).textContent = spD; }
        }
