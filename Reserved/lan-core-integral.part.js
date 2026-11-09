if (!S.lLT) S.lLT = lanNow;
        else if (cSU !== S.lInstU || cSD !== S.lInstD) {
          const lDt = lanNow - S.lLT;
          if (S.lInstU > 0) S.lTotUp += (S.lInstU + cSU) * lDt * 0.0005; else if (cSU > 0) S.lTotUp += cSU * 0.5 * CONFIG.lanRefreshInterval;
          if (S.lInstD > 0) S.lTotDn += (S.lInstD + cSD) * lDt * 0.0005; else if (cSD > 0) S.lTotDn += cSD * 0.5 * CONFIG.lanRefreshInterval;
          S.lLT = lanNow;
        }
        S.lInstU = cSU; S.lInstD = cSD;
