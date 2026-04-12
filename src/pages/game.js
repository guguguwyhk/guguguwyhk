export function renderGame(container) {
  const lang = (window.store && window.store.getLanguage()) || 'zh';
  container.innerHTML = `
    <div class="page-container">
    <header class="page-header">
      <h1 class="page-title" data-i18n="nav-game">守護者挑戰</h1>
      <button class="btn-secondary btn-back liquid-btn" id="back-btn" data-i18n="back-home">⬅ 返回主頁</button>
    </header>

    <div style="display:flex; flex-direction:column; align-items:center; gap:1.5rem; width: 100%;">
      <div id="game-container" style="position:relative; width:100%; max-width:1200px; border:2px solid #4ade80; border-radius:20px; overflow:hidden; box-shadow: 0 0 60px rgba(74,222,128,0.25), 0 20px 60px rgba(0,0,0,0.6);">
        
        <canvas id="gameCanvas" style="width:100%; height:75vh; display:block;"></canvas>
        
        <!-- HUD -->
        <div id="game-ui" style="position:absolute; top:16px; left:16px; pointer-events:none; font-family:var(--font-heading); background:rgba(0,0,0,0.55); backdrop-filter: blur(12px); padding:12px 20px; border-radius:14px; border:1px solid rgba(74,222,128,0.3); display:flex; gap: 2rem;">
          <div style="font-size:1.3rem; color:#4ade80; font-weight: 800;"><span data-i18n="game-score">SCORE</span> <span id="score-val" style="color:white; margin-left:8px;">0</span></div>
          <div style="font-size:1.3rem; color:#f87171; font-weight: 800;"><span data-i18n="game-lives">LIVES</span> <span id="life-val" style="letter-spacing: 4px; margin-left:8px;">❤️❤️❤️</span></div>
          <div style="font-size:1.3rem; color:#fbbf24; font-weight: 800;"><span data-i18n="game-level">LEVEL</span> <span id="level-val" style="color:white; margin-left:8px;">1</span></div>
        </div>

        <!-- Start/End Overlay -->
        <div id="start-overlay" style="position:absolute; top:0; left:0; width:100%; height:100%; background:linear-gradient(135deg, rgba(0,10,5,0.85) 0%, rgba(0,20,10,0.9) 100%); backdrop-filter: blur(10px); display:flex; flex-direction:column; justify-content:center; align-items:center; z-index:100; text-align:center; padding:2rem;">
           <div style="margin-bottom:1.5rem; animation:mascotBounce 1.5s ease infinite;">
             <img src="/removedbg_gugugu.png" style="width:120px; filter: drop-shadow(0 0 20px rgba(74,222,128,0.6));" />
           </div>
           <h2 id="overlay-title" style="color:#4ade80; font-size: 2.8rem; margin-bottom: 0.8rem; text-shadow: 0 0 30px rgba(74,222,128,0.5);" data-i18n="game-start-title">GUARDIAN FLIGHT</h2>
           <p id="overlay-desc" style="color:#94a3b8; margin-bottom:2rem; font-size:1.1rem; max-width: 480px; line-height: 1.7;" data-i18n="game-start-desc">守護校園!飛行躲避石柱，收集果實，擊退入侵的烏鴉！</p>
           <div style="display:flex; gap:1rem; flex-wrap:wrap; justify-content:center; margin-bottom:2rem;">
             <div style="background:rgba(74,222,128,0.1); border:1px solid rgba(74,222,128,0.3); padding:10px 16px; border-radius:10px; font-size:0.9rem; color:#a3e635;">🖱️ Click / Space: Fly Up</div>
             <div style="background:rgba(251,191,36,0.1); border:1px solid rgba(251,191,36,0.3); padding:10px 16px; border-radius:10px; font-size:0.9rem; color:#fde68a;">✨ Catch fruits: +10pts</div>
             <div style="background:rgba(248,113,113,0.1); border:1px solid rgba(248,113,113,0.3); padding:10px 16px; border-radius:10px; font-size:0.9rem; color:#fca5a5;">🐦‍⬛ Avoid crows: -1 life</div>
           </div>
           <button id="start-btn" class="btn-primary liquid-btn" style="padding:1rem 3rem; font-size: 1.4rem; box-shadow: 0 0 30px rgba(46, 125, 50, 0.6); letter-spacing:2px;" data-i18n="game-start-btn">START GAME</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('back-btn').onclick = () => window.navigate('home');

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const startOverlay = document.getElementById('start-overlay');
  const scoreEl = document.getElementById('score-val');
  const lifeEl = document.getElementById('life-val');
  const levelEl = document.getElementById('level-val');

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Assets
  const birdImg = new Image(); birdImg.src = '/removedbg_gugugu.png';
  
  let birdY, birdVelocity, score, lives, isGameActive, animationFrame;
  let obstacles = [], enemies = [], particles = [];
  let frameCount = 0, bgStars = [];
  let level = 1;

  // Generate bg stars
  function generateStars() {
    bgStars = [];
    for (let i = 0; i < 60; i++) {
      bgStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.8 + 0.2,
        alpha: Math.random() * 0.5 + 0.2
      });
    }
  }

  function startGame() {
    isGameActive = true;
    score = 0; lives = 3; level = 1;
    birdY = canvas.height / 2;
    birdVelocity = 0;
    obstacles = []; enemies = []; particles = [];
    frameCount = 0;
    scoreEl.innerText = 0;
    lifeEl.innerText = '❤️❤️❤️';
    levelEl.innerText = 1;
    startOverlay.classList.add('hidden');
    generateStars();
    loop();
  }

  function spawnParticle(x, y, color) {
    for (let i = 0; i < 8; i++) {
      particles.push({
        x, y, color,
        vx: (Math.random() - 0.5) * 5,
        vy: (Math.random() - 0.5) * 5,
        life: 1, radius: Math.random() * 6 + 2
      });
    }
  }

  function loop() {
    if (!isGameActive) return;

    // Level progression
    level = 1 + Math.floor(score / 100);
    if (levelEl) levelEl.innerText = level;

    const speed = 3.5 + level * 0.5 + (score * 0.01);

    // === BACKGROUND ===
    // Sky gradient
    const skyGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    skyGrad.addColorStop(0, '#020b06');
    skyGrad.addColorStop(0.5, '#041a0c');
    skyGrad.addColorStop(1, '#061208');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Scrolling stars
    bgStars.forEach(s => {
      s.x -= s.speed * 0.5;
      if (s.x < 0) s.x = canvas.width;
      ctx.beginPath();
      ctx.globalAlpha = s.alpha;
      ctx.fillStyle = '#a3e635';
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    // Ground line
    ctx.fillStyle = 'rgba(34,197,94,0.15)';
    ctx.fillRect(0, canvas.height - 4, canvas.width, 4);

    // === PHYSICS ===
    birdVelocity += 0.32;
    birdY += birdVelocity;

    // === DRAW BIRD ===
    ctx.save();
    ctx.translate(canvas.width * 0.15, birdY);
    const rot = Math.min(Math.PI / 5, Math.max(-Math.PI / 5, birdVelocity * 0.08));
    ctx.rotate(rot);
    // Glow
    ctx.shadowColor = '#4ade80';
    ctx.shadowBlur = 20;
    if (birdImg.complete && birdImg.naturalWidth > 0) {
      ctx.drawImage(birdImg, -35, -35, 70, 70);
    } else {
      ctx.fillStyle = '#4ade80';
      ctx.beginPath(); ctx.arc(0, 0, 22, 0, Math.PI * 2); ctx.fill();
    }
    ctx.shadowBlur = 0;
    ctx.restore();

    // === SPAWN OBSTACLES ===
    const spawnInterval = Math.max(60, 100 - level * 5);
    if (frameCount % spawnInterval === 0) {
      // Pillar pair (top + bottom gap)
      const gapHeight = Math.max(180, 280 - level * 10);
      const gapY = Math.random() * (canvas.height - gapHeight - 80) + 40;
      // Top pillar
      obstacles.push({ x: canvas.width, y1: 0, y2: gapY, type: 'top' });
      // Bottom pillar
      obstacles.push({ x: canvas.width, y1: gapY + gapHeight, y2: canvas.height, type: 'bottom' });
    }

    // Spawn fruit
    if (frameCount % 80 === 40) {
      obstacles.push({
        x: canvas.width,
        y: Math.random() * (canvas.height - 100) + 50,
        type: 'food'
      });
    }

    // Spawn enemies (crows)
    const enemyInterval = Math.max(90, 200 - level * 15);
    if (frameCount % enemyInterval === 0 && frameCount > 0) {
      const side = Math.random() > 0.5;
      enemies.push({
        x: canvas.width + 40,
        y: Math.random() * (canvas.height - 100) + 50,
        vy: (Math.random() - 0.5) * 3,
        wing: 0,
        size: 28 + Math.random() * 15
      });
    }

    // === DRAW & PROCESS OBSTACLES ===
    for (let i = obstacles.length - 1; i >= 0; i--) {
      let p = obstacles[i];
      p.x -= speed;

      if (p.type === 'food') {
        // Glowing fruit
        const pulse = 0.7 + 0.3 * Math.sin(frameCount * 0.15);
        const gr = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 20 * pulse);
        gr.addColorStop(0, '#fde68a');
        gr.addColorStop(0.5, '#f59e0b');
        gr.addColorStop(1, 'rgba(245,158,11,0)');
        ctx.fillStyle = gr;
        ctx.beginPath(); ctx.arc(p.x, p.y, 22 * pulse, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath(); ctx.arc(p.x, p.y, 8, 0, Math.PI * 2); ctx.fill();

        // Collect
        const bx = canvas.width * 0.15;
        if (Math.abs(p.x - bx) < 38 && Math.abs(birdY - p.y) < 38) {
          score += 10;
          scoreEl.innerText = score;
          spawnParticle(p.x, p.y, '#fbbf24');
          obstacles.splice(i, 1);
          continue;
        }
      } else if (p.type === 'top' || p.type === 'bottom') {
        // Draw pillar
        const pillarGrad = ctx.createLinearGradient(p.x, 0, p.x + 52, 0);
        pillarGrad.addColorStop(0, 'rgba(15,30,20,0.95)');
        pillarGrad.addColorStop(0.5, 'rgba(22,101,52,0.8)');
        pillarGrad.addColorStop(1, 'rgba(10,20,15,0.95)');
        ctx.fillStyle = pillarGrad;
        
        const h = p.y2 - p.y1;
        ctx.beginPath();
        if (p.type === 'top') {
          ctx.roundRect(p.x, p.y1, 52, h, [0, 0, 12, 12]);
        } else {
          ctx.roundRect(p.x, p.y1, 52, h, [12, 12, 0, 0]);
        }
        ctx.fill();
        ctx.strokeStyle = 'rgba(74,222,128,0.4)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Edge glow
        ctx.shadowColor = '#22c55e';
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Cap
        const capY = p.type === 'top' ? p.y2 - 16 : p.y1;
        ctx.fillStyle = 'rgba(34,197,94,0.7)';
        ctx.beginPath();
        if (p.type === 'top') {
          ctx.roundRect(p.x - 4, capY, 60, 16, 8);
        } else {
          ctx.roundRect(p.x - 4, capY, 60, 16, 8);
        }
        ctx.fill();

        // Collision
        const bx = canvas.width * 0.15;
        const bHit = birdY + 25 > p.y1 && birdY - 25 < p.y2 && bx + 25 > p.x && bx - 25 < p.x + 52;
        if (bHit) {
          lives--;
          lifeEl.innerText = lives > 0 ? '❤️'.repeat(lives) : '💔';
          spawnParticle(bx, birdY, '#f87171');
          obstacles.splice(i, 1);
          canvas.style.transform = `translate(${(Math.random()-0.5)*12}px, ${(Math.random()-0.5)*12}px)`;
          setTimeout(() => canvas.style.transform = 'none', 120);
          if (lives <= 0) { gameOver(); return; }
        }
      }

      if (p.x < -80) obstacles.splice(i, 1);
    }

    // === DRAW ENEMIES (CROWS) ===
    for (let i = enemies.length - 1; i >= 0; i--) {
      let e = enemies[i];
      e.x -= speed * 1.4;
      e.y += e.vy;
      e.wing = (e.wing + 0.25) % (Math.PI * 2);

      if (e.y < 30 || e.y > canvas.height - 30) e.vy *= -1;

      // Draw crow
      ctx.save();
      ctx.translate(e.x, e.y);
      ctx.fillStyle = '#1e1e2e';
      // Body
      ctx.beginPath();
      ctx.ellipse(0, 0, e.size * 0.6, e.size * 0.4, 0, 0, Math.PI * 2);
      ctx.fill();
      // Wings
      ctx.fillStyle = '#27273d';
      const wFlap = Math.sin(e.wing) * 15;
      ctx.beginPath();
      ctx.ellipse(-e.size * 0.2, wFlap * 0.3, e.size * 0.5, Math.abs(wFlap) * 0.5 + 5, -0.3, 0, Math.PI * 2);
      ctx.fill();
      // Eye (red)
      ctx.fillStyle = '#ef4444';
      ctx.beginPath(); ctx.arc(e.size * 0.35, -5, 4, 0, Math.PI * 2); ctx.fill();
      // Beak
      ctx.fillStyle = '#6b7280';
      ctx.beginPath();
      ctx.moveTo(e.size * 0.55, -2);
      ctx.lineTo(e.size * 0.55 + 12, 0);
      ctx.lineTo(e.size * 0.55, 5);
      ctx.fill();
      ctx.restore();

      // Collision with player
      const bx = canvas.width * 0.15;
      if (Math.abs(e.x - bx) < e.size * 0.8 && Math.abs(e.y - birdY) < e.size * 0.7) {
        lives--;
        lifeEl.innerText = lives > 0 ? '❤️'.repeat(lives) : '💔';
        spawnParticle(e.x, e.y, '#ef4444');
        enemies.splice(i, 1);
        canvas.style.transform = `translate(${(Math.random()-0.5)*12}px, ${(Math.random()-0.5)*12}px)`;
        setTimeout(() => canvas.style.transform = 'none', 120);
        if (lives <= 0) { gameOver(); return; }
        continue;
      }

      if (e.x < -80) enemies.splice(i, 1);
    }

    // === PARTICLES ===
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx; p.y += p.vy;
      p.life -= 0.04;
      if (p.life <= 0) { particles.splice(i, 1); continue; }
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.radius * p.life, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 1;
    }

    // === BOUNDS CHECK ===
    if (birdY > canvas.height + 20 || birdY < -20) {
      lives = 0; lifeEl.innerText = '💔'; gameOver(); return;
    }

    frameCount++;
    animationFrame = requestAnimationFrame(loop);
  }

  function gameOver() {
    isGameActive = false;
    cancelAnimationFrame(animationFrame);
    setTimeout(() => {
      startOverlay.classList.remove('hidden');
      const titleEl = startOverlay.querySelector('#overlay-title');
      const descEl = startOverlay.querySelector('#overlay-desc');
      const btnEl = startOverlay.querySelector('#start-btn');
      titleEl.removeAttribute('data-i18n');
      titleEl.innerText = 'MISSION FAILED';
      titleEl.style.color = '#f87171';
      titleEl.style.textShadow = '0 0 30px rgba(248,113,113,0.6)';
      descEl.removeAttribute('data-i18n');
      descEl.innerHTML = `Your final score: <strong style="color:#fbbf24; font-size:1.5em;">${score}</strong><br><span style="font-size:0.9rem; color:#94a3b8;">Level reached: ${level}</span>`;
      btnEl.removeAttribute('data-i18n');
      btnEl.innerText = 'TRY AGAIN ↩';
      window.mascot.say(`Gu Gu! 獲得了 ${score} 分！不要氣餒！`);
    }, 500);
  }

  const jump = () => { if (isGameActive) birdVelocity = -8; };
  canvas.addEventListener('mousedown', jump);
  canvas.addEventListener('touchstart', (e) => { e.preventDefault(); jump(); }, { passive: false });
  window.addEventListener('keydown', (e) => { if (e.code === 'Space' && isGameActive) { e.preventDefault(); jump(); } });
  document.getElementById('start-btn').onclick = startGame;
}
