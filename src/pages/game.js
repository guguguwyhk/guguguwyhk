export function renderGame(container) {
  if (window.mascot) window.mascot.show();

  const state = {
    birdY: 0, birdVelocity: 0, score: 0, lives: 3, level: 1,
    isGameActive: false, isWaitingToBegin: false, animationFrame: null,
    obstacles: [], enemies: [], particles: [], stars: [],
    frameCount: 0, shake: 0, lastTime: 0, lastGapY: 0
  };

  container.innerHTML = `
    <div class="page-container" style="padding: 10px;">
    <header class="page-header" style="margin-bottom: 1.2rem;">
      <h1 class="page-title" data-i18n="nav-game" style="font-size: clamp(1.6rem, 5vw, 2.5rem); text-align: left; margin-left:10px;">羽翼守護大冒險</h1>
      <button class="btn-secondary btn-back liquid-btn" id="back-btn" data-i18n="back-home" style="position: absolute; top: 15px; right: 20px; padding: 0.5rem 1rem; border-radius: 12px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); font-size: 0.9rem;">← 返回主頁</button>
    </header>

    <div style="display:flex; flex-direction:column; align-items:center; width:100%; position:relative;">
      <div id="game-container" style="position:relative; width:100%; max-width:1100px; aspect-ratio: 16/9; border:2.2px solid #4ade80; border-radius:28px; overflow:hidden; box-shadow: 0 0 60px rgba(74,222,128,0.22), 0 25px 50px rgba(0,0,0,0.65); background:#020b06;">
        <canvas id="gameCanvas" style="width:100%; height:100%; display:block;"></canvas>
        <div id="iris-transition" style="position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(2, 10, 5, 1); clip-path: circle(0% at 50% 50%); pointer-events:none; z-index:200; transition: clip-path 0.7s cubic-bezier(0.65, 0, 0.35, 1);"></div>

        <div id="game-ui" style="position:absolute; top:18px; left:18px; pointer-events:none; z-index:10; max-width: calc(100% - 36px);">
          <div style="background:rgba(0,0,0,0.7); backdrop-filter:blur(15px); padding:8px 22px; border-radius:14px; border:1.2px solid rgba(74,222,128,0.4); display:flex; align-items:center; gap: clamp(1rem, 3vw, 2rem); box-shadow:0 8px 25px rgba(0,0,0,0.5);">
            <div style="font-size:clamp(0.85rem, 2vw, 1.15rem); color:#4ade80; font-weight:800; white-space:nowrap;">SCORE <span id="score-val" style="color:#fff; margin-left:6px; font-weight:900;">0</span></div>
            <div style="font-size:clamp(0.85rem, 2vw, 1.15rem); color:#f87171; font-weight:800; white-space:nowrap; display:flex; align-items:center;">LIVES <span id="life-val" style="margin-left:6px; letter-spacing:3px;">❤️❤️❤️</span></div>
            <div style="font-size:clamp(0.85rem, 2vw, 1.15rem); color:#fbbf24; font-weight:800; white-space:nowrap;">LEVEL <span id="level-val" style="color:#fff; margin-left:6px; font-weight:900;">1</span></div>
          </div>
        </div>
        
        <div id="start-overlay" style="position:absolute; top:0; left:0; width:100%; height:100%; background:linear-gradient(135deg, rgba(0,10,5,0.96) 0%, rgba(0,25,12,0.99) 100%); backdrop-filter: blur(25px); display:flex; flex-direction:column; justify-content:center; align-items:center; z-index:100; text-align:center; padding:1.5rem; transition: opacity 0.5s ease;">
           <div id="overlay-mascot-box" style="margin-bottom:0.8rem; animation:mascotBounce 2s ease infinite;">
             <img src="./removedbg_gugugu.png" style="width:clamp(80px, 15vw, 105px); filter: drop-shadow(0 0 30px rgba(74,222,128,0.6));" />
           </div>
           <h2 id="overlay-title" style="color:#4ade80; font-size: clamp(2rem, 8vw, 3.5rem); margin-bottom: 0.4rem; text-shadow: 0 0 35px rgba(74,222,128,0.5); font-weight: 900;">羽翼守護大冒險</h2>
           <p id="overlay-desc" style="color:#94a3b8; margin-bottom:1.5rem; font-size:clamp(0.9rem, 2.5vw, 1.1rem); max-width: 500px; line-height: 1.6;">化身守護者，躲避障礙與烏鴉，守護華仁校園！</p>
           
           <div id="rules-box" style="display:flex; gap:10px; flex-wrap:wrap; justify-content:center; margin-bottom:2.2rem;">
             <div class="game-rule" style="background:rgba(74,222,128,0.1); border:1px solid rgba(74,222,128,0.3); padding:8px 14px; border-radius:12px; color:#fff; font-size:0.85rem;">🖱️ Click: Fly Up</div>
             <div class="game-rule" style="background:rgba(251,191,36,0.1); border:1px solid rgba(251,191,36,0.3); padding:8px 14px; border-radius:12px; color:#fbbf24; font-size:0.85rem;">✨ Catch: +10pts</div>
             <div class="game-rule" style="background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.3); padding:8px 14px; border-radius:12px; color:#f87171; font-size:0.85rem;">🐦‍⬛ Crows: -1 Life</div>
           </div>
           <button id="start-btn" class="btn-primary liquid-btn" style="padding:1rem 3.5rem; font-size: clamp(1.2rem, 4vw, 1.5rem); border-radius:100px; box-shadow: 0 0 40px rgba(74, 222, 128, 0.4); font-weight:800; border:none;">START GAME</button>
        </div>
      </div>
    </div>
    </div>
  `;

  document.getElementById('back-btn').onclick = () => {
    state.isGameActive = false; if (state.animationFrame) cancelAnimationFrame(state.animationFrame); window.navigate('home');
  };

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const startOverlay = document.getElementById('start-overlay');
  const irisLayer = document.getElementById('iris-transition');
  const scoreEl = document.getElementById('score-val');
  const lifeEl = document.getElementById('life-val');
  const levelEl = document.getElementById('level-val');
  const startBtn = document.getElementById('start-btn');
  const birdImg = new Image(); birdImg.src = './removedbg_gugugu.png';

  function resizeCanvas() {
    if (!canvas) return; const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width; canvas.height = rect.height;
  }
  window.addEventListener('resize', resizeCanvas); resizeCanvas();

  function spawnStars() {
    state.stars = [];
    for (let i = 0; i < 70; i++) state.stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 1.5, speed: Math.random() * 0.7 + 0.1, alpha: Math.random() * 0.6 + 0.2 });
  }

  function startGame() {
    irisLayer.style.clipPath = 'circle(150% at 50% 50%)';
    setTimeout(() => {
      state.score = 0; state.lives = 3; state.level = 1; state.frameCount = 0;
      state.birdY = canvas.height * 0.45; state.birdVelocity = 0;
      state.obstacles = []; state.enemies = []; state.particles = []; state.lastGapY = canvas.height / 2;
      if (scoreEl) scoreEl.innerText = 0; if (lifeEl) lifeEl.innerText = '❤️❤️❤️'; if (levelEl) levelEl.innerText = 1;
      startOverlay.classList.add('hidden'); irisLayer.style.clipPath = 'circle(0% at 50% 50%)';
      spawnStars(); state.isGameActive = false; state.isWaitingToBegin = true;
      if (state.animationFrame) cancelAnimationFrame(state.animationFrame);
      state.lastTime = performance.now(); loop();
    }, 600); 
  }

  function drawPillar(o) {
    const isTop = o.type === 'top'; const pW = 58;
    const h = isTop ? o.y2 : canvas.height - o.y1; const y = isTop ? 0 : o.y1;
    const grad = ctx.createLinearGradient(o.x, 0, o.x + pW, 0);
    grad.addColorStop(0, '#0a1e0f'); grad.addColorStop(0.5, '#166534'); grad.addColorStop(1, '#050f0a');
    ctx.fillStyle = grad; ctx.beginPath();
    if (isTop) ctx.roundRect(o.x, y, pW, h, [0, 0, 15, 15]); else ctx.roundRect(o.x, y, pW, h, [15, 15, 0, 0]);
    ctx.fill(); ctx.strokeStyle = '#4ade80'; ctx.lineWidth = 1.6; ctx.stroke();
    const capY = isTop ? h-18 : y; ctx.fillStyle = 'rgba(74,222,128,0.7)'; ctx.beginPath(); ctx.roundRect(o.x-6, capY, pW+12, 18, 10); ctx.fill();
  }

  function drawCrow(x, y, wing, size) {
    ctx.save(); ctx.translate(x, y); const flap = Math.sin(wing) * (size * 0.6);
    ctx.fillStyle = '#1e1e2e'; ctx.beginPath(); ctx.ellipse(0, 0, size * 0.7, size * 0.5, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#27273d'; ctx.beginPath(); ctx.ellipse(-size * 0.2, flap * 0.3, size * 0.6, Math.abs(flap) * 0.6 + 5, -0.3, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#ef4444'; ctx.beginPath(); ctx.arc(size * 0.4, -size * 0.1, 4, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#6b7280'; ctx.beginPath(); ctx.moveTo(size * 0.6, -2); ctx.lineTo(size * 0.6 + 14, 0); ctx.lineTo(size * 0.6, 6); ctx.fill();
    ctx.restore();
  }

  function loop(time) {
    if (!state.isWaitingToBegin && !state.isGameActive) return;
    const dt = time ? Math.min(2.0, (time - (state.lastTime || time)) / 16.6) : 1; state.lastTime = time;
    
    // LEVEL REQUIREMENTS: 100, 200, 300, etc.
    if (state.isGameActive) { 
      state.level = 1 + Math.floor(state.score / 100); 
      if (levelEl) levelEl.innerText = state.level; 
    }

    const scrollSpeed = (4.2 + (state.level >= 2 ? (state.level-1) * 1.4 : 0)) * dt;
    const grav = (0.38 + (state.level >= 2 ? 0.1 : 0)) * dt;

    ctx.fillStyle = '#020b06'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    state.stars.forEach(s => { s.x -= s.speed * 0.5 * dt; if (s.x < -10) s.x = canvas.width + 10; ctx.globalAlpha = s.alpha; ctx.fillStyle = '#a3e635'; ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill(); }); ctx.globalAlpha = 1;

    if (state.isGameActive) { state.birdVelocity += grav; state.birdY += state.birdVelocity * dt; }

    ctx.save(); if (state.shake > 0) { ctx.translate((Math.random()-0.5)*state.shake, (Math.random()-0.5)*state.shake); state.shake -= 1 * dt; }
    ctx.translate(canvas.width * 0.15, state.birdY);
    ctx.rotate(state.isGameActive ? Math.min(0.7, Math.max(-0.7, state.birdVelocity * 0.08)) : 0);
    if (birdImg.complete) {
      const h = 75; const a = birdImg.naturalWidth / birdImg.naturalHeight;
      if (state.isGameActive) { ctx.shadowColor = '#4ade80'; ctx.shadowBlur = 25 + Math.sin(state.frameCount * 0.1) * 10; }
      ctx.drawImage(birdImg, -(h*a)/2, -h/2, h*a, h);
    } ctx.restore();

    if (state.isGameActive) {
      const spawnInterval = Math.max(80, 115 - state.level * 6);
      if (state.frameCount % spawnInterval === 0) {
        const gap = Math.max(200, 280 - state.level * 8); 
        let targetY = Math.max(100, Math.min(canvas.height - gap - 100, state.lastGapY + (Math.random()-0.5) * 350));
        state.lastGapY = targetY;
        state.obstacles.push({ x: canvas.width, y1: 0, y2: targetY, type: 'top' });
        state.obstacles.push({ x: canvas.width, y1: targetY + gap, y2: canvas.height, type: 'bottom' });
      }
      if (state.frameCount % 90 === 45) state.obstacles.push({ x: canvas.width, y: Math.random() * (canvas.height - 240) + 120, type: 'food' });
      
      const enemyRate = Math.max(100, 220 - state.level * 25);
      if (state.frameCount % enemyRate === 0) {
        state.enemies.push({ x: canvas.width + 100, y: Math.random() * (canvas.height - 200) + 100, vy: (Math.random() - 0.5) * 5, wing: 0, size: 30 });
        if (state.level >= 3) { setTimeout(() => { if(state.isGameActive) state.enemies.push({ x: canvas.width + 160, y: Math.random() * (canvas.height - 200) + 100, vy: (Math.random() - 0.5) * 7.5, wing: 0, size: 26 }); }, 450); }
      }
    }

    const bx = canvas.width * 0.15;
    for (let i = state.obstacles.length - 1; i >= 0; i--) {
      let o = state.obstacles[i]; if (state.isGameActive) o.x -= scrollSpeed;
      if (o.type === 'food') {
        const pulse = 0.7 + 0.3 * Math.sin(state.frameCount * 0.15); ctx.fillStyle = '#fbbf24'; ctx.beginPath(); ctx.arc(o.x, o.y, 18*pulse, 0, Math.PI*2); ctx.fill();
        if (state.isGameActive && Math.hypot(o.x - bx, o.y - state.birdY) < 48) { state.score += 10; if(scoreEl) scoreEl.innerText = state.score; state.obstacles.splice(i, 1); }
      } else {
        drawPillar(o);
        if (state.isGameActive) {
          const pW = 58; const h = o.type === 'top' ? o.y2 : canvas.height - o.y1; const y = o.type === 'top' ? 0 : o.y1;
          if (bx + 25 > o.x && bx - 25 < o.x + pW && state.birdY + 25 > y && state.birdY - 25 < y + h) {
             state.lives--; state.shake = 22; state.obstacles.splice(i, 1); if (lifeEl) lifeEl.innerText = state.lives > 0 ? '❤️'.repeat(state.lives) : '💔'; if (state.lives <= 0) { gameOver(); return; }
          }
        }
      }
      if (o.x < -120) state.obstacles.splice(i, 1);
    }

    for (let i = state.enemies.length - 1; i >= 0; i--) {
       let e = state.enemies[i]; if (state.isGameActive) { e.x -= (scrollSpeed * 1.35); e.y += e.vy * dt; e.wing += 0.3 * dt; if (e.y < 50 || e.y > canvas.height - 50) e.vy *= -1; }
       drawCrow(e.x, e.y, e.wing, e.size);
       if (state.isGameActive && Math.hypot(e.x - bx, e.y - state.birdY) < (e.size * 0.8 + 20)) {
         state.lives--; state.shake = 30; state.enemies.splice(i, 1); if (lifeEl) lifeEl.innerText = state.lives > 0 ? '❤️'.repeat(state.lives) : '💔'; if (state.lives <= 0) { gameOver(); return; }
       }
       if (e.x < -150) state.enemies.splice(i, 1);
    }

    if (state.isWaitingToBegin) {
      ctx.fillStyle = '#fff'; ctx.font = '900 clamp(3.5rem, 12vw, 5.5rem) "Outfit", sans-serif'; ctx.textAlign = 'center'; ctx.fillText('READY?', canvas.width/2, canvas.height/2-10);
      ctx.font = '800 clamp(1.4rem, 5vw, 2.2rem) "Inter", sans-serif'; ctx.fillStyle = '#4ade80'; ctx.fillText('CLICK TO START!', canvas.width/2, canvas.height/2 + 65);
    }
    if (state.isGameActive && (state.birdY > canvas.height + 60 || state.birdY < -60)) { gameOver(); return; }
    state.frameCount++; state.animationFrame = requestAnimationFrame(loop);
  }

  function gameOver() {
    state.isGameActive = false; if (state.animationFrame) cancelAnimationFrame(state.animationFrame);
    if (window.mascot) window.mascot.say(`Gu Gu! 獲得了 ${state.score} 分！不要氣餒！`);
    setTimeout(() => {
      startOverlay.classList.remove('hidden'); startOverlay.style.opacity = '1';
      startOverlay.querySelector('#overlay-title').innerText = 'MISSION FAILED';
      startOverlay.querySelector('#overlay-title').style.color = '#f87171';
      startOverlay.querySelector('#overlay-desc').innerHTML = `
        <div style="font-size: clamp(1.1rem, 3.5vw, 1.4rem); color: #fff; margin-bottom: 0.8rem; font-weight:700;">Final score: <span style="color:#fbbf24; font-size:clamp(2.2rem, 7vw, 2.8rem); font-weight:900;">${state.score}</span></div>
        <div style="font-size: clamp(1.2rem, 4vw, 1.6rem); color: #86efac; font-weight:800; margin-top:0.4rem; padding: 0 10px;">Gu Gu! 獲得了 ${state.score} 分！不要氣餒！</div>
      `;
      startOverlay.querySelector('#start-btn').innerText = 'RESTART GAME ↩';
      startOverlay.querySelector('#start-btn').style.padding = '1rem 4rem';
      startOverlay.querySelector('#start-btn').style.fontSize = 'clamp(1.1rem, 3.5vw, 1.4rem)';
    }, 500);
  }

  const jump = () => { if (state.isWaitingToBegin) { state.isWaitingToBegin = false; state.isGameActive = true; } state.birdVelocity = -8.5; };
  canvas.addEventListener('mousedown', (e) => { e.preventDefault(); jump(); });
  canvas.addEventListener('touchstart', (e) => { e.preventDefault(); jump(); }, { passive: false });
  window.addEventListener('keydown', (e) => { if (e.code === 'Space') { e.preventDefault(); jump(); } });
  document.getElementById('start-btn').onclick = startGame;

  return () => { state.isGameActive = false; if (state.animationFrame) cancelAnimationFrame(state.animationFrame); window.removeEventListener('resize', resizeCanvas); };
}
