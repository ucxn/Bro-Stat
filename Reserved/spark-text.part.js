const SPRK = [' ', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
      function getSpark(ringArr, headIdx, maxVal) {
        let s = "", k = 7 / maxVal;
        for (let i = 64; i--; ) {
          let v = ringArr[(headIdx - i) & 127];
          s += SPRK[v < 4 ? 0 : Math.min(7, Math.max(1, (v * k) | 0))];
        }
        return s;
      }
