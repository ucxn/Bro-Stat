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