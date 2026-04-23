import { translations } from '../i18n.js';

export function renderGame(container) {
  if (window.mascot) window.mascot.show();
  
  const t = (key, data = {}) => {
    const curLang = (window.store && window.store.getLanguage()) || 'zh';
    let msg = (translations[key] && translations[key][curLang]) || key;
    for (const k in data) msg = msg.replace(`{${k}}`, data[k]);
    return msg;
  };

  const state = {
    birdY: 0, birdVelocity: 0, score: 0, lives: 3, level: 1,
    isGameActive: false, isWaitingToBegin: false, isDying: false, animationFrame: null,
    obstacles: [], enemies: [], particles: [], stars: [],
    frameCount: 0, shake: 0, lastTime: 0, lastGapY: 0,
    isTransitioning: false,
    levelUpFrames: 0, levelUpDesc: '', timeScale: 1.0
  };

  // --- Helper Functions (Declared before use) ---
  function spawnStars() {
    state.stars = [];
    const canvas = document.getElementById('gameCanvas');
    if (!canvas) return;
    for (let i = 0; i < 70; i++) {
      state.stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 1.5, speed: Math.random() * 0.7 + 0.1, alpha: Math.random() * 0.6 + 0.2 });
    }
  }

  function resizeCanvas() {
    const canvas = document.getElementById('gameCanvas');
    if (!canvas) return;
    const oldH = canvas.height || 0;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width; canvas.height = rect.height;
    if (oldH > 0 && Math.abs(oldH - canvas.height) > 10) {
      const ratio = state.birdY / oldH;
      state.birdY = canvas.height * ratio;
      spawnStars();
    }
  }

  function spawnExplosion(x, y, color) {
    for (let i = 0; i < 25; i++) {
      state.particles.push({ 
        x, y, 
        vx: (Math.random() - 0.5) * 15, 
        vy: (Math.random() - 0.5) * 15, 
        r: Math.random() * 4 + 2, 
        life: 1.0, 
        color: color || '#4ade80' 
      });
    }
  }

  function startGame() {
    if (state.isGameActive || state.isTransitioning) return;
    state.isTransitioning = true;
    const dissolveLayer = document.getElementById('dissolve-layer');
    const startOverlay = document.getElementById('start-overlay');
    if (dissolveLayer) dissolveLayer.style.opacity = '1';
    if (startOverlay) {
      startOverlay.style.opacity = '0';
      startOverlay.style.transform = 'scale(1.05)';
    }
    
    setTimeout(() => {
      const canvas = document.getElementById('gameCanvas');
      state.birdY = canvas ? canvas.height * 0.45 : 300;
      state.birdVelocity = 0; state.score = 0; state.lives = 3; state.level = 1;
      state.obstacles = []; state.enemies = []; state.particles = [];
      state.frameCount = 0; state.isWaitingToBegin = true;
      state.isGameActive = false; state.isDying = false;
      state.timeScale = 1.0; state.lastGapY = canvas ? canvas.height / 2 : 300;
      
      const scoreEl = document.getElementById('score-val');
      const lifeEl = document.getElementById('life-val');
      const levelEl = document.getElementById('level-val');
      
      if (scoreEl) scoreEl.innerText = '0';
      if (lifeEl) lifeEl.innerText = '❤️❤️❤️';
      if (levelEl) levelEl.innerText = '1';
      if (startOverlay) startOverlay.style.display = 'none';
      if (dissolveLayer) dissolveLayer.style.opacity = '0';
      state.isTransitioning = false;
      
      if (state.animationFrame) cancelAnimationFrame(state.animationFrame);
      state.lastTime = performance.now();
      loop();
    }, 400);
  }

  function triggerDeath() {
    state.isGameActive = false; 
    state.isDying = true;
    const canvas = document.getElementById('gameCanvas');
    spawnExplosion(canvas ? canvas.width * 0.15 : 100, state.birdY, '#f87171');
    setTimeout(() => gameOver(), 500);
  }

  function gameOver() {
    state.isDying = false; 
    if (state.animationFrame) cancelAnimationFrame(state.animationFrame);
    if (window.mascot) window.mascot.say(t('game-cheer-msg', { score: state.score }));
    
    const startOverlay = document.getElementById('start-overlay');
    if (!startOverlay) return;

    setTimeout(() => {
      startOverlay.style.display = 'flex'; 
      startOverlay.style.transition = 'none'; 
      startOverlay.style.opacity = '0'; 
      startOverlay.style.transform = 'scale(0.3)';
      
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            startOverlay.style.transition = 'all 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28)'; 
            startOverlay.style.opacity = '1'; 
            startOverlay.style.transform = 'scale(1)';
            
            const mascotBox = startOverlay.querySelector('#overlay-mascot-box'); 
            if (mascotBox) mascotBox.style.marginBottom = '0.8rem';
            const mascotImg = mascotBox ? mascotBox.querySelector('img') : null; 
            if (mascotImg) mascotImg.style.width = '160px'; 
            
            const title = startOverlay.querySelector('#overlay-title'); 
            if (title) {
              title.setAttribute('data-i18n', 'game-failed'); 
              title.innerText = t('game-failed'); 
              title.style.color = '#f87171'; 
              title.style.fontSize = 'clamp(2.5rem, 8vw, 3.8rem)';
            }
            
            const desc = startOverlay.querySelector('#overlay-desc');
            if (desc) desc.style.display = 'none';
            
            const scoreBox = startOverlay.querySelector('#score-display-box'); 
            if (scoreBox) {
              scoreBox.style.display = 'flex'; 
              scoreBox.querySelector('#score-result-val').innerText = state.score; 
              scoreBox.querySelector('#cheer-msg').innerText = t('game-cheer-msg', { score: state.score });
            }
            
            const rulesRow = startOverlay.querySelector('#rules-row'); 
            if (rulesRow) rulesRow.style.marginBottom = '0.8rem';
            
            const sBtn = startOverlay.querySelector('#start-btn'); 
            if (sBtn) {
              sBtn.setAttribute('data-i18n', 'game-try-again'); 
              sBtn.innerText = t('game-try-again'); 
              sBtn.style.padding = '0.6rem 2.4rem';
            }
          });
        });
      });
    }, 50);
  }

  function jump(e) {
    if (e && e.cancelable) e.preventDefault(); 
    const startOverlay = document.getElementById('start-overlay');
    if (!startOverlay || (startOverlay.style.display !== 'none' && !state.isWaitingToBegin)) return;
    if (state.isWaitingToBegin) { state.isWaitingToBegin = false; state.isGameActive = true; }
    state.birdVelocity = -8.5; 
  }

  function handleKeyDown(e) { 
    if (e.code === 'Space') { 
      e.preventDefault(); 
      jump(e); 
    } 
  }

  function drawPillar(ctx, canvas, o) {
    const isTop = o.type === 'top'; const pW = 65;
    const h = isTop ? o.y2 : canvas.height - o.y1; const y = isTop ? 0 : o.y1;
    const grad = ctx.createLinearGradient(o.x, 0, o.x + pW, 0);
    grad.addColorStop(0, '#0a1a0d'); grad.addColorStop(0.3, '#14532d'); grad.addColorStop(0.5, '#166534'); grad.addColorStop(0.7, '#14532d'); grad.addColorStop(1, '#05100a');
    ctx.fillStyle = grad; ctx.beginPath();
    if (isTop) ctx.roundRect(o.x, y, pW, h, [0, 0, 18, 18]); else ctx.roundRect(o.x, y, pW, h, [18, 18, 0, 0]);
    ctx.fill(); ctx.strokeStyle = 'rgba(74,222,128,0.4)'; ctx.lineWidth = 2; ctx.stroke();
    const capY = isTop ? h-24 : y; 
    const capGrad = ctx.createLinearGradient(o.x-10, 0, o.x+pW+10, 0);
    capGrad.addColorStop(0, '#065f46'); capGrad.addColorStop(0.5, '#10b981'); capGrad.addColorStop(1, '#064e3b');
    ctx.fillStyle = capGrad; ctx.beginPath(); ctx.roundRect(o.x-10, capY, pW+20, 24, 12); ctx.fill();
    ctx.strokeStyle = '#4ade80'; ctx.lineWidth = 2; ctx.stroke();
  }

  function drawCrow(ctx, x, y, wing, size) {
    ctx.save(); ctx.translate(x, y); const flap = Math.sin(wing) * (size * 0.6);
    ctx.shadowColor = '#ef4444'; ctx.shadowBlur = 18;
    ctx.fillStyle = '#1e1e2d'; ctx.beginPath(); ctx.ellipse(0, 0, size * 0.7, size * 0.5, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#26263f'; ctx.beginPath(); ctx.ellipse(size * 0.2, flap * 0.2, size * 0.6, Math.abs(flap) * 0.7 + 4, 0.4, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#ef4444'; ctx.beginPath(); ctx.arc(-size * 0.4, -size * 0.1, 4.5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#f59e0b'; ctx.beginPath(); ctx.moveTo(-size * 0.6, -2); ctx.lineTo(-size * 0.6 - 16, 1); ctx.lineTo(-size * 0.6, 5); ctx.fill();
    ctx.restore();
  }

  function loop(time) {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas ? canvas.getContext('2d') : null;
    if (!canvas || !ctx) {
      state.animationFrame = requestAnimationFrame(loop);
      return;
    }

    const dtRaw = time ? Math.min(2.0, (time - (state.lastTime || time)) / 16.6) : 1;
    state.lastTime = time || state.lastTime;
    
    if (state.levelUpFrames > 0) {
      if (state.levelUpFrames > 90) {
         state.timeScale = 0.25; 
      } else {
         state.timeScale += (1.0 - state.timeScale) * 0.05; 
      }
      state.levelUpFrames--;
    } else {
      state.timeScale = 1.0;
    }
    
    const dt = dtRaw * state.timeScale;

    ctx.fillStyle = '#020b06'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    state.stars.forEach(s => { s.x -= s.speed * 0.5 * dtRaw; if (s.x < -10) s.x = canvas.width + 10; ctx.globalAlpha = s.alpha; ctx.fillStyle = '#a3e635'; ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill(); }); ctx.globalAlpha = 1;

    if (state.isGameActive) {
      const prevLvl = state.level;
      state.level = 1 + Math.floor(state.score / 100); 
      
      if (state.level > prevLvl) {
        state.levelUpFrames = 150; 
        state.timeScale = 0.2;
        const lvlEl = document.getElementById('level-val'); 
        if (lvlEl) lvlEl.innerText = state.level;
        
        let descKey = "game-lvl-max";
        if (state.level === 2) descKey = "game-lvl-2";
        else if (state.level === 3) descKey = "game-lvl-3";
        state.levelUpDesc = t(descKey);

        if (window.mascot) {
          window.mascot.say(t('game-level-alert', { level: state.level }) + `! ${state.levelUpDesc} Gu Gu!`, 4000);
        }
      }
    }

    const scrollSpeed = (state.isDying ? 0 : (5.0 + (state.level >= 2 ? (state.level-1) * 1.6 : 0))) * dt;
    const grav = (0.38 + (state.level >= 2 ? 0.1 : 0)) * dt;

    if (state.isGameActive || state.isDying) { state.birdVelocity += grav; state.birdY += state.birdVelocity * dt; }
    
    const bx = canvas.width * 0.15;
    if (!state.isDying) {
      ctx.save(); if (state.shake > 0) { ctx.translate((Math.random()-0.5)*state.shake, (Math.random()-0.5)*state.shake); state.shake -= 1 * dtRaw; }
      ctx.translate(bx, state.birdY);
      ctx.rotate(state.isGameActive ? Math.min(0.7, Math.max(-0.7, state.birdVelocity * 0.08)) : 0);
      if (birdImg.complete) {
        const h = 85; const a = birdImg.naturalWidth / birdImg.naturalHeight;
        if (state.isGameActive) { ctx.shadowColor = '#4ade80'; ctx.shadowBlur = 30 + Math.sin(state.frameCount * 0.1) * 12; }
        ctx.drawImage(birdImg, -(h*a)/2, -h/2, h*a, h);
      } ctx.restore();
    } else {
      ctx.save(); ctx.translate(bx, state.birdY); ctx.rotate(state.frameCount * 0.15);
      if (birdImg.complete) {
        const h = 85; const a = birdImg.naturalWidth / birdImg.naturalHeight;
        ctx.globalAlpha = Math.max(0, 1 - (state.frameCount % 50) / 50);
        ctx.drawImage(birdImg, -(h*a)/2, -h/2, h*a, h);
      } ctx.restore();
    }

    for (let i = state.particles.length - 1; i >= 0; i--) {
      let p = state.particles[i]; p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 0.3 * dt; p.life -= 0.02 * dtRaw; 
      if (p.life <= 0) { state.particles.splice(i, 1); continue; }
      ctx.fillStyle = p.color; ctx.globalAlpha = p.life; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fill(); ctx.globalAlpha = 1;
    }

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
      const enemyRate = Math.max(80, 220 - state.level * 30);
      if (state.frameCount % enemyRate === 0) {
        state.enemies.push({ x: canvas.width + 100, y: Math.random() * (canvas.height - 200) + 100, vy: (Math.random() - 0.5) * 5, wing: 0, size: 30 });
        if (state.level >= 3) {
           const count = state.level >= 5 ? 3 : (state.level >= 4 ? 2 : 1);
           for(let i=0; i<count; i++) { 
             state.enemies.push({ x: canvas.width + 160 + (i*90), y: Math.random() * (canvas.height - 200) + 100, vy: (Math.random() - 0.5) * (7 + i), wing: 0, size: 26 - i }); 
           }
        }
      }
    }

    for (let i = state.obstacles.length - 1; i >= 0; i--) {
      let o = state.obstacles[i]; if (!state.isDying) o.x -= scrollSpeed;
      if (o.type === 'food') {
         const pulse = 0.7 + 0.3 * Math.sin(state.frameCount * 0.15); 
         ctx.save(); ctx.shadowColor = '#fbbf24'; ctx.shadowBlur = 10; ctx.fillStyle = '#fbbf24'; ctx.beginPath(); ctx.arc(o.x, o.y, 18*pulse, 0, Math.PI*2); ctx.fill(); ctx.restore();
         if (state.isGameActive && Math.hypot(o.x - bx, o.y - state.birdY) < 48) { 
           state.score += 10; const sEl = document.getElementById('score-val'); if(sEl) sEl.innerText = state.score; state.obstacles.splice(i, 1); 
         }
      } else {
        drawPillar(ctx, canvas, o);
        if (state.isGameActive) {
          const pW = 65; const h = o.type === 'top' ? o.y2 : canvas.height - o.y1; const y = o.type === 'top' ? 0 : o.y1;
          if (bx + 25 > o.x && bx - 25 < o.x + pW && state.birdY + 25 > y && state.birdY - 25 < y + h) {
             state.lives--; state.shake = 22; spawnExplosion(bx, state.birdY, '#f87171'); state.obstacles.splice(i, 1); 
             const lEl = document.getElementById('life-val'); if (lEl) lEl.innerText = state.lives > 0 ? '❤️'.repeat(state.lives) : '💔'; 
             if (state.lives <= 0) { triggerDeath(); return; }
          }
        }
      }
      if (o.x < -120) state.obstacles.splice(i, 1);
    }
    
    for (let i = state.enemies.length - 1; i >= 0; i--) {
       let e = state.enemies[i]; if (!state.isDying) { e.x -= (scrollSpeed * 1.35); e.y += e.vy * dt; e.wing += 0.3 * dtRaw; }
       drawCrow(ctx, e.x, e.y, e.wing, e.size);
       if (state.isGameActive && Math.hypot(e.x - bx, e.y - state.birdY) < (e.size * 0.8 + 20)) {
         state.lives--; state.shake = 30; spawnExplosion(bx, state.birdY, '#ef4444'); state.enemies.splice(i, 1); 
         const lEl = document.getElementById('life-val'); if (lEl) lEl.innerText = state.lives > 0 ? '❤️'.repeat(state.lives) : '💔'; 
         if (state.lives <= 0) { triggerDeath(); return; }
       }
       if (e.x < -150) state.enemies.splice(i, 1);
    }

    if (state.isWaitingToBegin) {
      const pulse = 1 + 0.05 * Math.sin(state.frameCount * 0.15);
      ctx.save(); ctx.translate(canvas.width/2, canvas.height/2); ctx.scale(pulse, pulse);
      ctx.fillStyle = '#fff'; 
      const readySize = Math.max(45, Math.min(canvas.width * 0.12, 100));
      ctx.font = `900 ${readySize}px "Outfit", sans-serif`; 
      ctx.textAlign = 'center'; ctx.fillText('READY?', 0, -10);
      
      const startSize = Math.max(20, Math.min(canvas.width * 0.045, 35));
      ctx.font = `800 ${startSize}px "Inter", sans-serif`; 
      ctx.fillStyle = '#4ade80'; ctx.fillText('CLICK TO START!', 0, 75);
      ctx.restore();
    }
    
    if (state.levelUpFrames > 0 && state.isGameActive) {
      const alpha = Math.min(1, state.levelUpFrames / 20);
      ctx.save(); 
      ctx.translate(canvas.width/2, canvas.height/3); 
      ctx.globalAlpha = alpha;
      ctx.textAlign = 'center'; 
      ctx.fillStyle = '#fbbf24'; 
      const lvlUpSize = Math.max(40, Math.min(canvas.width * 0.1, 90));
      ctx.font = `900 ${lvlUpSize}px "Outfit", sans-serif`; 
      ctx.fillText(t('game-level-up'), 0, 0); 
      
      ctx.fillStyle = '#fff';
      const descSize = Math.max(18, Math.min(canvas.width * 0.035, 30));
      ctx.font = `800 ${descSize}px "Inter", sans-serif`;
      ctx.fillText(state.levelUpDesc, 0, 40);
      ctx.restore();
    }

    if (state.isGameActive && (state.birdY > canvas.height + 60 || state.birdY < -60)) { triggerDeath(); return; }
    
    if (dt > 0 && state.isGameActive) {
        state.frameCount++; 
    } else if (!state.isGameActive) {
        state.frameCount++; 
    }
    
    state.animationFrame = requestAnimationFrame(loop);
  }

  container.innerHTML = `
    <style>
      #start-overlay { transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28); }
      
      /* Universal scaling for small devices */
      @media (max-width: 480px) {
        #game-container { height: 65vh !important; border-width: 2px !important; }
        #game-ui { top: 10px !important; left: 10px !important; }
        #game-ui > div { padding: 6px 12px !important; gap: 1rem !important; }
        #overlay-mascot-box img { width: 140px !important; }
      }

      @media (max-height: 750px) {
        #overlay-mascot-box img { width: 100px !important; }
        #overlay-mascot-box { margin-bottom: 0.5rem !important; }
        #overlay-title { font-size: clamp(1.5rem, 8vw, 2.8rem) !important; }
        #overlay-desc { font-size: 0.9rem !important; margin-bottom: 0.5rem !important; }
        #rules-row { margin-bottom: 0.5rem !important; gap: 6px !important; }
        #rules-row div { font-size: 0.75rem !important; padding: 4px 8px !important; }
        #start-btn { padding: 0.5rem 1.8rem !important; font-size: 1.1rem !important; }
        #start-overlay { padding: 10px !important; }
      }

      /* Ultra-compact for landscape phones or very small screens */
      @media (max-height: 500px) {
        #overlay-mascot-box { display: none !important; } 
        #game-container { height: 72vh !important; max-height: unset !important; }
        #rules-row { display: none !important; } /* Hide rules in landscape to save space */
        #overlay-title { font-size: 1.6rem !important; margin-bottom: 2px !important; }
        #overlay-desc { display: none !important; }
        #start-btn { padding: 0.5rem 2rem !important; font-size: 1.1rem !important; }
      }

      /* Adjusting header for mobile */
      @media (max-width: 600px) {
        .page-header { margin-bottom: 10px !important; }
        .page-title { font-size: 1.2rem !important; }
        .btn-back { padding: 6px 12px !important; font-size: 0.8rem !important; }
      }
    </style>

    <div class="page-container" style="padding: 10px; min-height: 100vh; display: flex; flex-direction: column; overflow-x: hidden; overflow-y: auto;">
      <header class="page-header" style="z-index: 200;">
        <h1 class="page-title" data-i18n="nav-game">${t('nav-game')}</h1>
        <button id="back-btn" class="btn-secondary btn-back liquid-btn" onclick="window.navigate('home')" data-i18n="back-home">${t('back-home')}</button>
      </header>

      <div style="display:flex; flex-direction:column; align-items:center; width:100%; flex-grow: 1; position:relative; justify-content: center; margin-top: 10px;">
        <div id="game-container" style="position:relative; width:100%; max-width:1250px; height: 75vh; max-height: 800px; border:3px solid #4ade80; border-radius:32px; overflow:hidden; box-shadow: 0 0 100px rgba(74,222,128,0.22), 0 35px 70px rgba(0,0,0,0.8); background:#020b06; cursor: pointer;">
          <canvas id="gameCanvas" style="width:100%; height:100%; display:block;"></canvas>
          <div id="dissolve-layer" style="position:absolute; inset:0; background:#020b06; z-index:50; opacity:0; pointer-events:none; transition: opacity 0.5s ease;"></div>

          <div id="game-ui" style="position:absolute; top:20px; left:20px; pointer-events:none; z-index:10; width: auto;">
            <div style="background:rgba(0,0,0,0.8); backdrop-filter:blur(25px); padding:8px 24px; border-radius:20px; border:1.8px solid rgba(74,222,128,0.4); display:flex; align-items:center; gap: clamp(1rem, 4vw, 2.8rem);">
              <div style="font-size:clamp(0.8rem, 2.5vw, 1.2rem); color:#4ade80; font-weight:900;"><span data-i18n="game-score">${t('game-score')}</span> <span id="score-val" style="color:#fff; margin-left:4px;">0</span></div>
              <div style="font-size:clamp(0.8rem, 2.5vw, 1.2rem); color:#f87171; font-weight:900; display:flex; align-items:center;"><span data-i18n="game-lives">${t('game-lives')}</span> <span id="life-val" style="margin-left:4px; letter-spacing:2px;">❤️❤️❤️</span></div>
              <div style="font-size:clamp(0.8rem, 2.5vw, 1.2rem); color:#fbbf24; font-weight:900;"><span data-i18n="game-level">${t('game-level')}</span> <span id="level-val" style="color:#fff; margin-left:4px;">1</span></div>
            </div>
          </div>
          
          <div id="start-overlay" style="position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,18,8,0.96); backdrop-filter: blur(40px); display:flex; flex-direction:column; justify-content:center; align-items:center; z-index:100; text-align:center; padding:1.5rem; transition: opacity 0.5s ease, transform 0.5s ease;">
             <div id="overlay-mascot-box" style="margin-bottom:1.8rem;"><img src="./removedbg_gugugu.png" style="width:200px; filter: drop-shadow(0 0 50px rgba(74, 222, 128, 0.4));" /></div>
             <div id="overlay-content" style="display:flex; flex-direction:column; gap:1.2rem; align-items:center; width:100%;">
               <h2 id="overlay-title" data-i18n="nav-game" style="color:#4ade80; font-size: clamp(3rem, 10vw, 4.8rem); margin:0; font-weight: 950; letter-spacing: -2px; line-height: 1.1;">${t('nav-game')}</h2>
               <div id="score-display-box" style="display:none; flex-direction:column; align-items:center; margin-bottom: 0.5rem;">
                 <div style="font-size: clamp(1.2rem, 4vw, 1.6rem); color: #fff; font-weight:700;"><span data-i18n="game-final-score">${t('game-final-score')}</span> <span id="score-result-val" style="color:#fbbf24; font-size:clamp(2.8rem, 8vw, 3.8rem); font-weight:950; margin-left:8px;">0</span></div>
                 <div id="cheer-msg" style="font-size: clamp(1.25rem, 5vw, 2.1rem); color:#86efac; font-weight:900; margin-top:0.8rem; max-width:550px; line-height:1.4;"></div>
               </div>
               <p id="overlay-desc" data-i18n="card-game-desc" style="color:#94a3b8; font-size:clamp(1rem, 3vw, 1.3rem); max-width: 550px; margin:0 0 1.2rem; font-weight: 500;">${t('card-game-desc')}</p>
               <div id="rules-row" style="display:flex; gap:12px; flex-wrap:wrap; justify-content:center; margin-bottom:1.5rem;">
                 <div data-i18n="game-rule-1" style="background:rgba(255,255,255,0.06); border:1.5px solid rgba(74,222,128,0.3); padding:8px 18px; border-radius:14px; color:#fff; font-size:0.9rem; font-weight:600;">${t('game-rule-1')}</div>
                 <div data-i18n="game-rule-2" style="background:rgba(255,255,255,0.06); border:1.5px solid rgba(251,191,36,0.3); padding:8px 18px; border-radius:14px; color:#fbbf24; font-size:0.9rem; font-weight:600;">${t('game-rule-2')}</div>
                 <div data-i18n="game-rule-3" style="background:rgba(255,255,255,0.06); border:1.5px solid rgba(239,68,68,0.3); padding:8px 18px; border-radius:14px; color:#f87171; font-size:0.9rem; font-weight:600;">${t('game-rule-3')}</div>
               </div>
               <button id="start-btn" data-i18n="game-start-btn" class="btn-primary liquid-btn" style="padding:0.9rem 3.5rem; font-size: clamp(1.3rem, 5vw, 2rem); border-radius:100px; box-shadow: 0 0 40px rgba(34, 197, 94, 0.4); font-weight:950; border:none; z-index:110; position:relative; touch-action: none; cursor: pointer;">${t('game-start-btn')}</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const birdImg = new Image(); birdImg.src = './removedbg_gugugu.png';
  const gameBox = document.getElementById('game-container');
  const startBtn = document.getElementById('start-btn');

  window.addEventListener('resize', resizeCanvas); 
  resizeCanvas();

  if (gameBox) {
    gameBox.addEventListener('mousedown', jump);
    gameBox.addEventListener('touchstart', jump, { passive: false });
  }
  window.addEventListener('keydown', handleKeyDown);

  const handleStart = (e) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    startGame();
  };
  
  if (startBtn) {
    startBtn.addEventListener('pointerdown', handleStart);
    startBtn.addEventListener('touchstart', handleStart, { passive: false });
    startBtn.onclick = (e) => { if (e && !e.defaultPrevented) handleStart(e); };
  }

  spawnStars(); 
  state.lastTime = performance.now(); 
  state.animationFrame = requestAnimationFrame(loop);

  return () => { 
    state.isGameActive = false; 
    if (state.animationFrame) cancelAnimationFrame(state.animationFrame); 
    window.removeEventListener('resize', resizeCanvas); 
    window.removeEventListener('keydown', handleKeyDown);
  };
}
