      function 记总速率图(u, d) {
        u = u || 0; d = d || 0;
        let i = S.总图点数 & 8191;
        S.总上行图[i] = u; S.总下行图[i] = d; S.总图点数++;
        if (u > S.wMaxU) S.wMaxU = u; if (d > S.wMaxD) S.wMaxD = d;
        if (u > 0 && u < S.wMinU) S.wMinU = u; if (d > 0 && d < S.wMinD) S.wMinD = d;
      }
      function 初始化总速率图(bd) {
        let box = bd.querySelector('#gege-speed-chart');
        if (box) return box;
        box = document.createElement('div'); box.id = 'gege-speed-chart';
        box.innerHTML = '<canvas></canvas><div class="gege-chart-head"><b data-gc="meta"></b><span data-gc="range"></span></div><div class="gege-chart-foot"><span class="gc-up" data-gc="up"></span><span class="gc-down" data-gc="down"></span><span class="gc-extra" data-gc="extra"></span></div><div class="gege-chart-resize" title="缩放"></div>';
        bd.appendChild(box);
        let bw = bd.clientWidth || 1800, isMobileChart = window.matchMedia?.('(max-width:768px)').matches, w = isMobileChart ? Math.max(1, bw - 220) : Math.max(320, Math.min(650, bw * .30));
        box.style.left = (isMobileChart ? 210 : Math.max(520, bw * .52)) + 'px'; box.style.top = '2px'; box.style.width = w + 'px'; box.style.height = (isMobileChart ? 96 : 112) + 'px';
        const 起手 = (e, 模式) => { e.preventDefault(); S.图表拖 = { 模式, x: e.clientX, y: e.clientY, l: box.offsetLeft, t: box.offsetTop, w: box.offsetWidth, h: box.offsetHeight }; box.setPointerCapture?.(e.pointerId); };
        box.addEventListener('pointerdown', e => { if (!e.target.classList.contains('gege-chart-resize')) 起手(e, '拖'); });
        box.querySelector('.gege-chart-resize').addEventListener('pointerdown', e => 起手(e, '缩'));
        box.addEventListener('pointermove', e => {
          let g = S.图表拖; if (!g) return;
          if (g.模式 === '拖') { box.style.left = (g.l + e.clientX - g.x) + 'px'; box.style.top = (g.t + e.clientY - g.y) + 'px'; }
          else { box.style.width = Math.max(260, g.w + e.clientX - g.x) + 'px'; box.style.height = Math.max(88, g.h + e.clientY - g.y) + 'px'; }
          if (!S.图表待画) { S.图表待画 = 1; requestAnimationFrame(() => { S.图表待画 = 0; 画总速率图(bd); }); }
        });
        box.addEventListener('pointerup', () => S.图表拖 = null); box.addEventListener('pointercancel', () => S.图表拖 = null); box.addEventListener('lostpointercapture', () => S.图表拖 = null);
        return box;
      }
      function 画总速率图(bd) {
        let box = 初始化总速率图(bd), cv = box.querySelector('canvas'), W = box.clientWidth | 0, H = box.clientHeight | 0, R = window.devicePixelRatio || 1;
        if (W < 40 || H < 40) return;
        if (cv.width !== (W * R | 0) || cv.height !== (H * R | 0)) { cv.width = W * R | 0; cv.height = H * R | 0; cv.style.width = '100%'; cv.style.height = '100%'; }
        let x = cv.getContext('2d'); x.setTransform(R,0,0,R,0,0); x.clearRect(0,0,W,H);
        let l = 34, r = 8, t = 20, b = 25, gw = W - l - r, gh = H - t - b, n = Math.min(S.总图点数, 8000), st = S.总图点数 - n, ym = 1, su = 0, sd = 0;
        for (let k = 0; k < n; k++) { let j = (st + k) & 8191, u = S.总上行图[j], d = S.总下行图[j]; if (u > ym) ym = u; if (d > ym) ym = d; su += u; sd += d; }
        x.fillStyle = 'rgba(255,255,255,.58)'; x.strokeStyle = 'rgba(0,89,250,.88)'; x.lineWidth = 1.5; x.beginPath(); x.roundRect ? x.roundRect(.5,.5,W-1,H-1,8) : x.rect(.5,.5,W-1,H-1); x.fill(); x.stroke();
        x.setLineDash([4,4]); x.strokeStyle = 'rgba(0,89,250,.45)'; x.lineWidth = 1;
        for (let i = 5; i--; ) { let y = t + gh * i / 4; x.beginPath(); x.moveTo(l,y); x.lineTo(W-r,y); x.stroke(); }
        for (let i = 7; i--; ) { let xx = l + gw * i / 6; x.beginPath(); x.moveTo(xx,t); x.lineTo(xx,H-b); x.stroke(); }
        x.setLineDash([]);
        let li = (S.总图点数 - 1) & 8191, au = n ? (n === 8000 ? su * .000125 : su / n) : 0, ad = n ? (n === 8000 ? sd * .000125 : sd / n) : 0;
        (box._gcMeta ??= box.querySelector('[data-gc="meta"]')).textContent = `采样:${window.gegeBActivated ? CONFIG.wanRefreshInterval : 3}s  点:${S.总图点数}`;
        let rg = box._gcRange ??= box.querySelector('[data-gc="range"]'), rs = `峰↑${fBy(S.wMaxU)} ↓${fBy(S.wMaxD)}  谷↑${S.wMinU < Infinity ? fBy(S.wMinU) : '--'} ↓${S.wMinD < Infinity ? fBy(S.wMinD) : '--'}`; rg.textContent = rs; rg.title = rs;
        (box._gcUp ??= box.querySelector('[data-gc="up"]')).textContent = `发 ${n ? fBy(S.总上行图[li]) : fBy(0)}`;
        (box._gcDown ??= box.querySelector('[data-gc="down"]')).textContent = `收 ${n ? fBy(S.总下行图[li]) : fBy(0)}`;
        (box._gcExtra ??= box.querySelector('[data-gc="extra"]')).textContent = `均↑${fBy(au)} ↓${fBy(ad)}`;
        const 画线 = (arr, col) => {
          if (!n) return;
          x.strokeStyle = col; x.lineWidth = 2.4; x.beginPath();
          let bins = Math.max(1, Math.min(n, gw | 0)), first = !0;
          if (bins === n) {
            for (let k = 0; k < n; k++) { let xx = l + (n > 1 ? gw * k / (n - 1) : gw), yy = H - b - (arr[(st + k) & 8191] / ym) * gh; first ? (x.moveTo(xx, yy), first = !1) : x.lineTo(xx, yy); }
          } else {
            for (let q = 0; q < bins; q++) {
              let a = q * n / bins | 0, z = (q + 1) * n / bins | 0, mn = Infinity, mx = -Infinity, mi = a, ma = a; if (z <= a) z = a + 1;
              for (let k = a; k < z; k++) { let v = arr[(st + k) & 8191]; if (v < mn) { mn = v; mi = k; } if (v > mx) { mx = v; ma = k; } }
              if (mi <= ma) { let xx = l + (n > 1 ? gw * mi / (n - 1) : gw), yy = H - b - (mn / ym) * gh; first ? (x.moveTo(xx, yy), first = !1) : x.lineTo(xx, yy); if (ma !== mi) { xx = l + gw * ma / (n - 1); yy = H - b - (mx / ym) * gh; x.lineTo(xx, yy); } }
              else { let xx = l + gw * ma / (n - 1), yy = H - b - (mx / ym) * gh; first ? (x.moveTo(xx, yy), first = !1) : x.lineTo(xx, yy); xx = l + gw * mi / (n - 1); yy = H - b - (mn / ym) * gh; x.lineTo(xx, yy); }
            }
          }
          x.stroke();
        };
        画线(S.总上行图, '#ff1b00'); 画线(S.总下行图, '#006400');
      }
