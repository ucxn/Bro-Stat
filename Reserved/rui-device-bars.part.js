        const hqU = cS.intUp || 0; 
        const hqD = cS.intDn || 0;
        const tN = cache.timeNode ??= it.querySelector('.gege-online-time');
        if (tN && cS.onS > 0) tN.textContent = `在线：${fOT(cS.onS)}`;
        
        const dI = cache.devIntro ??= it.querySelector('.dev-intro');
        const inf = cache.info ??= it.querySelector('.info');

        if (dI && inf) {
          let rB = cache.rBox ??= dI.querySelector('.gege-ratio-box');
          if (!rB) {
            let oRB = inf.querySelector('.gege-ratio-box'); if (oRB) oRB.remove();
            rB = document.createElement('div'); rB.className = 'gege-ratio-box';
            rB.style.cssText = 'margin-top: 4px; width: 95%; margin-bottom: 2px;';
            rB.innerHTML = `<div class="gege-ratio-top"><span class="v-port"></span><span class="v-interval" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: normal; font-size: 12.5px; opacity: 0.75; letter-spacing: 0.5px;"><span class="c-up"></span><span style="color:#666; margin:0 3px;">，</span><span class="c-down"></span></span><span class="v-rt-pct"></span></div><div class="gege-ratio-bar"><div class="gege-ratio-bar-inner"></div></div>`;
            dI.appendChild(rB);
                        cache.rBox = rB;
          }
          
          const bR = (hqU + hqD) > 0 ? (hqU * 100 / (hqU + hqD)) : 0;
          let tC = "", tCol = "#0059fa";
          if (CONFIG.calcMode === 1) {
            const rt = hqD > 0 ? (hqU / hqD) : (hqU > 0 ? Infinity : 0);
            if (rt > CONFIG.ratioExtremeUp) { tCol = '#ff4c00'; tC = (rt === Infinity ? '∞' : rt.toFixed(2)) + '⚠️'; }
            else if (rt > CONFIG.ratioWarnUp) { tCol = '#ff4c00'; tC = (rt * 100).toFixed(1) + '%'; }
            else if (rt > CONFIG.ratioExtremeDown) { tCol = '#0059fa'; tC = (rt * 100).toFixed(1) + '%'; }
            else { tCol = '#0059fa'; const rRt = hqU > 0 ? (hqD / hqU) : (hqD > 0 ? Infinity : 0); tC = (rRt === Infinity ? '∞' : rRt.toFixed(1)) + 'x'; }
          } else {
            tCol = bR > CONFIG.ratioThreshold ? '#ff4c00' : '#0059fa';
            tC = bR.toFixed(1) + '%';
          }
          (cache.rBoxPort ??= rB.querySelector('.v-port')).textContent = CONFIG.portMap[cC.iface] || cC.iface || "未知";
                    (cache.rBoxUp ??= rB.querySelector('.v-interval .c-up')).textContent = '' + fSV(hqU);
          (cache.rBoxDn ??= rB.querySelector('.v-interval .c-down')).textContent = '' + fSV(hqD);
          const rtP = cache.rtPct ??= rB.querySelector('.v-rt-pct');
          rtP.textContent = tC; rtP.style.color = tCol;
          (cache.rBoxBar ??= rB.querySelector('.gege-ratio-bar-inner')).style.width = Math.min(bR, 100) + '%';
                    let ipNode = cache.ipNode ??= inf.querySelector('.dev-ip');
          if (ipNode) {
            let zBadge = cache.zBadge ??= ipNode.querySelector('.gege-zero-badge');
            if (!zBadge) {
              zBadge = document.createElement('span'); zBadge.className = 'gege-zero-badge gege-box';
              ipNode.style.display = 'flex'; ipNode.style.justifyContent = 'space-between';
              zBadge.style.cssText = 'color: #999; font-size: 11.5px; font-family: system-ui, sans-serif; margin-right: 5px;';
                            ipNode.appendChild(zBadge);
              cache.zBadge = zBadge;
            }
            zBadge.textContent = ((cS.zUC || 0) + (cS.zDC || 0)) < 6 ? "" : `[0估] ${!cS.zEU ? '' : fSV(cS.zEU)}，${!cS.zED ? '' : fSV(cS.zED)}｜${cS.zUC || 0},${cS.zDC || 0}`;
          }
          let bx = cache.upBox ??= inf.querySelector('.gege-up-box');
          if (!bx || bx.querySelector('.t-row')) {
            if (bx) bx.remove();
            let oUB = dI.querySelector('.gege-up-box'); if (oUB) oUB.remove();
            bx = document.createElement('div'); bx.className = 'gege-up-box';
            bx.style.cssText = 'display:flex; align-items:center; width:95%; margin-top:0px; margin-bottom:2px;';
            bx.innerHTML = `<span class="v-vol" style="display:none;"></span><div class="zte-thin-bar" style="flex:1; margin:0;"><div class="zte-thin-bar-inner up"></div></div><span class="v-pct c-up" style="font-size:11.5px; font-weight:bold; font-family:system-ui, sans-serif; width:40px; text-align:right;"></span>`;
            inf.appendChild(bx);
            cache.upBox = bx;
          }
          const p = hqU * inv_boardUp;
                              (cache.upVol ??= bx.querySelector('.v-vol')).textContent = fV(cS.intUp);
          (cache.upPct ??= bx.querySelector('.v-pct')).textContent = p.toFixed(1) + '%';
          (cache.upBar ??= bx.querySelector('.zte-thin-bar-inner')).style.width = Math.min(p, 100) + '%';

          let dBx = cache.dBox ??= inf.querySelector('.gege-down-box');
          if (!dBx || dBx.querySelector('.t-row')) {
            if (dBx) dBx.remove();
            dBx = document.createElement('div'); dBx.className = 'gege-down-box';
            dBx.style.cssText = 'display:flex; align-items:center; width:95%; margin-top:6px; margin-bottom:2px;';
            dBx.innerHTML = `<span class="v-vol" style="display:none;"></span><div class="zte-thin-bar" style="flex:1; margin:0;"><div class="zte-thin-bar-inner down"></div></div><span class="v-pct c-down" style="font-size:11.5px; font-weight:bold; font-family:system-ui, sans-serif; width:40px; text-align:right;"></span>`;
            inf.appendChild(dBx);
            cache.dBox = dBx;
          }
          const dp = cS.intDn * inv_LDn;
          (cache.dBoxVol ??= dBx.querySelector('.v-vol')).textContent = fV(cS.intDn);
                    (cache.dBoxPct ??= dBx.querySelector('.v-pct')).textContent = dp.toFixed(1) + '%';
          (cache.dBoxBar ??= dBx.querySelector('.zte-thin-bar-inner')).style.width = Math.min(dp, 100) + '%';
        }
        
        const sp = cache.speed ??= it.querySelector('.speed');
        if (sp) {
          let enh = cache.enh ??= sp.querySelector('.zte-enhance-speed');
          if (!enh) {
            sp.querySelectorAll('.connect-up, .connect-down').forEach(n => { n.style.display = 'none'; });
            enh = document.createElement('div'); enh.className = 'zte-enhance-speed';
            enh.innerHTML = `<div class="zte-bar-wrap zte-bar-up"><span class="v-val" style="white-space: nowrap; flex-shrink: 0;"></span><span class="v-spark" style="font-family: monospace; letter-spacing: -1.5px; font-size: 11px; margin: 0 8px; opacity: 0.65; white-space: pre; flex: 1; overflow: hidden; text-align: right;"></span><span class="v-pct" style="white-space: nowrap; flex-shrink: 0;"></span></div><div class="zte-bar-wrap zte-bar-down"><span class="v-val" style="white-space: nowrap; flex-shrink: 0;"></span><span class="v-spark" style="font-family: monospace; letter-spacing: -1.5px; font-size: 11px; margin: 0 8px; opacity: 0.65; white-space: pre; flex: 1; overflow: hidden; text-align: right;"></span><span class="v-pct" style="white-space: nowrap; flex-shrink: 0;"></span></div>`;
            sp.appendChild(enh);
            cache.enh = enh;
          }
          let pu = cC.upRate * inv_sU,
              pd = cC.dnRate * inv_sD,
              bU = cache.bU ??= enh.querySelector('.zte-bar-up'),
              bD = cache.bD ??= enh.querySelector('.zte-bar-down');
          
          let clU = (S.aWu * 0.1) || 0; if (clU < 512000) clU = 512000;
          let clD = (S.aWd * 0.125) || 0;
          for (let i = 0; i < 128; i++) { if (cS.hU[i] > clU) clU = cS.hU[i]; if (cS.hD[i] > clD) clD = cS.hD[i]; }
          (cache.bUSpk ??= bU.querySelector('.v-spark')).textContent = getSpark(cS.hU, cS.hIdx, clU);
          (cache.bDSpk ??= bD.querySelector('.v-spark')).textContent = getSpark(cS.hD, cS.hIdx, clD);

          bU.style.setProperty('--p-up', Math.min(pu, 100) + '%');
          (cache.bUVal ??= bU.querySelector('.v-val')).textContent = `🔼 ${fBy(cC.upRate)}`;
          (cache.bUPct ??= bU.querySelector('.v-pct')).textContent = pu.toFixed(1) + '%';
          
          bD.style.setProperty('--p-down', Math.min(pd, 100) + '%');
          (cache.bDVal ??= bD.querySelector('.v-val')).textContent = `🔽 ${fBy(cC.dnRate)}`;
          (cache.bDPct ??= bD.querySelector('.v-pct')).textContent = pd.toFixed(1) + '%';
        }
      }
    });
  }
