import { store } from '../store.js';

export function renderShowOff(container) {
  const originalPadding = container.style.padding;
  const originalOverflow = document.body.style.overflow;
  
  // Hide global overlay elements to avoid overlap in exhibition mode
  const langBtn = document.getElementById('global-lang-btn');
  const globalMascot = document.getElementById('mascot-widget');
  if (langBtn) langBtn.style.display = 'none';
  if (globalMascot) globalMascot.style.display = 'none';

  container.style.padding = '0';
  document.body.style.overflow = 'hidden';

  container.innerHTML = `
    <style>
      #showoff-main {
        width: 100vw; height: 100vh;
        background: radial-gradient(circle at center, #050b18 0%, #010409 100%);
        color: white; font-family: 'Outfit', sans-serif;
        display: flex; flex-direction: column; overflow: hidden;
        position: relative;
      }
      .neon-title { 
        background: linear-gradient(90deg, #4ade80, #3b82f6, #a855f7, #4ade80); 
        background-size: 200% auto; -webkit-background-clip: text; 
        -webkit-text-fill-color: transparent; animation: shine 12s linear infinite; 
        filter: drop-shadow(0 0 20px rgba(74, 222, 128, 0.4)); 
      }
      @keyframes shine { to { background-position: 200% center; } }
      @keyframes scrollLeft { from { transform: translateX(100%); } to { transform: translateX(-120%); } }
      @keyframes mascotSway { 0%, 100% { transform: rotate(-2deg) scale(1); } 50% { transform: rotate(2deg) scale(1.05) translateY(-5px); } }
      @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      .rec-dot { width: 12px; height: 12px; background: #ef4444; border-radius: 50%; box-shadow: 0 0 10px #ef4444; animation: blink 1.5s infinite; }
      @keyframes blink { 0%, 100% { opacity:1; } 50% { opacity:0.3; } }
      
      .chart-row { 
        display: flex; flex-direction: column; 
        opacity: 0; transform: translateX(-30px);
        animation: rowEntrance 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
      }
      @keyframes rowEntrance { to { opacity: 1; transform: translateX(0); } }
      
      .bar-fill { height: 100%; border-radius: 12px; transition: width 1.5s cubic-bezier(0.34, 1.56, 0.64, 1); position: relative; overflow: hidden; }
      .bar-fill::after { 
        content:""; position:absolute; top:0; left:-100%; width:100%; height:100%; 
        background:linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent); 
        animation: stream 2s infinite; 
      }
      @keyframes stream { 0% { left: -100%; } 100% { left: 100%; } }
      .bar-pulse { animation: barGrow 0.8s ease-out; }
      @keyframes barGrow { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); filter: brightness(1.5); } }

      /* Cool Animations */
      .floating-bird { animation: float 3s ease-in-out infinite; }
      @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
      
      .shimmer-text {
        background: linear-gradient(90deg, #fff, #4ade80, #3b82f6, #fff);
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shimmer 5s linear infinite;
      }
      @keyframes shimmer { to { background-position: 200% center; } }
      
      .mascot-jump { animation: mascotJump 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important; }
      @keyframes mascotJump {
        0%, 100% { transform: scale(1) translateY(0); }
        50% { transform: scale(1.1) translateY(-30px); }
      }
    </style>

    <div id="showoff-main" style="width:100vw; height:100vh; background:radial-gradient(circle at center, #050b18 0%, #010409 100%); color:white; font-family:'Outfit', sans-serif; display:flex; flex-direction:column; overflow:hidden; position:relative;">
      
      <div id="showoff-content" style="flex:1; display:flex; flex-direction:column; padding:2vh 5vw; z-index:1; min-height:0; justify-content: flex-start;">
        
        <header class="page-header" style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2vh; flex-shrink:0; width: 100%;">
          <h1 class="page-title neon-title" style="font-size: clamp(3rem, 5vw, 5rem) !important; line-height:1; margin: 0;">Gu Gu Gu 🌿</h1>
          <p style="font-size: clamp(0.8rem, 1.1vw, 1.1rem); color:#94a3b8; letter-spacing: 2px; text-transform:uppercase; font-weight:700; margin: 0; opacity: 0.8; white-space: nowrap;">Master IDEEA Project Group 4 -- 24/7 Monitoring Smart Website</p>
          <button id="dev-exit" class="btn-secondary btn-back" style="position: fixed; top: 20px; right: 25px; min-width: auto; opacity: 0.3;">← Exit</button>
        </header>

        <div id="main-grid" style="display:flex; gap:4vw; flex:1; min-height:0; align-items: stretch;">
          
          <div style="flex:1.4; display:flex; flex-direction:column; gap:3vh; min-width:0;">
            <div class="glass-panel" style="flex:1; display:flex; flex-direction:column; padding:2rem; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.1); border-radius:40px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); min-height:0;">
              <h2 style="font-size:1.8rem; margin-bottom:1.5rem; color:#4ade80; display:flex; align-items:center; gap:15px; flex-shrink:0; font-weight:800;">
                <span class="rec-dot"></span> 專案宣傳影片 LIVE
              </h2>
              <div style="width:100%; flex:1; background:#000; border-radius:30px; overflow:hidden; position:relative; border:1px solid rgba(255,255,255,0.15);">
                  <video id="leaderboard-video" style="width:100%; height:100%; border-radius:30px; object-fit:cover;" autoplay loop muted playsinline>
                    <source src="./footage/previous_videos/video1.mp4" type="video/mp4" />
                  </video>
              </div>
            </div>
            <div class="glass-panel" style="height:10vh; min-height:80px; display:flex; align-items:center; overflow:hidden; background:rgba(74, 222, 128, 0.05); border-radius:30px; border:1px solid rgba(74,222,128,0.2); padding:0 3rem;">
              <div id="ticker" style="white-space:nowrap; font-size:1.6rem; color:#fbbf24; font-weight:800; animation:scrollLeft 25s linear infinite;">
                ⚡ 本地生態監測中 &nbsp;&nbsp;|&nbsp;&nbsp; 🌲 校園目前的鳥類活動頻率：高 &nbsp;&nbsp;|&nbsp;&nbsp; 🕊️ 感謝參與投票！ &nbsp;&nbsp;|&nbsp;&nbsp; ⛅ 天氣：晴 &nbsp;&nbsp;|&nbsp;&nbsp;
              </div>
            </div>
          </div>

          <div style="flex:1; display:flex; flex-direction:column; gap:3vh; min-width:0;">
            <div class="glass-panel" style="flex:1; display:flex; flex-direction:column; padding:2rem; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.1); border-radius:40px; min-height:0; box-shadow: 0 20px 50px rgba(0,0,0,0.4);">
              <h2 style="font-size:1.8rem; color:#3b82f6; display:flex; align-items:center; gap:12px; margin-bottom:1rem; flex-shrink:0; font-weight:800;">
                <span style="font-size:2rem; animation:rotate 15s linear infinite;">🏆</span> 即時人氣榜 (TOP 3)
              </h2>
              <div id="lb-container" style="flex:1; display:flex; flex-direction:column; pointer-events:none;">
                <!-- Bird bars injected here -->
              </div>
            </div>

            <div style="height: 30vh; max-height: 300px; display:flex; gap:2vw; align-items: stretch; min-height:0; flex-shrink:0;">
              <div class="glass-panel" style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; background:rgba(255,255,255,0.03); border-radius:30px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 15px 40px rgba(0,0,0,0.4);">
                <div style="width:20vh; height:20vh; max-width:180px; max-height:180px; background:white; padding:12px; border-radius:25px; display:flex; align-items:center; justify-content:center; border: 5px solid #4ade80;">
                  <img src="./gugugu_qrcode.png" style="width:100%; height:100%; object-fit:contain;" />
                </div>
                <span style="font-size:1.1rem; font-weight:900; color:#4ade80; letter-spacing:1px;">掃碼投票</span>
              </div>
              <div class="glass-panel" style="flex:1.2; position:relative; display:flex; justify-content:center; align-items:flex-end; background:rgba(255,255,255,0.03); border-radius:30px; border:1px solid rgba(255,255,255,0.1); overflow:visible;">
                <div id="exhibit-mascot-bubble" style="position:absolute; top:-75px; right:50%; transform: translateX(50%) scale(0.8); background:white; color:#111; padding:10px 20px; border-radius:25px; font-weight:900; font-size:1rem; opacity:0; transition:all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); white-space:nowrap; z-index:10; box-shadow: 0 15px 45px rgba(0,0,0,0.5); border: 3px solid #4ade80; min-width: 150px; text-align: center;">
                  投票中... Gu!
                </div>
                <img src="./removedbg_gugugu.png" id="exhibit-mascot-img" style="height:28vh; max-height:280px; filter:drop-shadow(0 20px 40px rgba(0,0,0,0.5)); cursor:pointer; animation:mascotSway 5s ease-in-out infinite; transform-origin: bottom center;" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const scriptUrl = "https://script.google.com/macros/s/AKfycbwRknj4-6Lphd0sz-4rK-v-VhQ3X-PmKah55lFmaVpuPMe22eVZHqNNzlOvNiNUECeR/exec";
  const lbContainer = container.querySelector('#lb-container');
  const mascot = container.querySelector('#exhibit-mascot-img');
  const bubble = container.querySelector('#exhibit-mascot-bubble');
  
  let votingData = [
    { bird: '黑臉琵鷺', votes: 0, img: './footage/encyclopedia/images/黑臉琵鷺.jpg' },
    { bird: '紅耳鵯', votes: 0, img: './footage/encyclopedia/images/紅耳鵯.jpg' },
    { bird: '珠頸斑鳩', votes: 0, img: './footage/encyclopedia/images/珠頸斑鳩.jpg' }
  ];
  let lastProcessedVoteId = null;

  function renderLeaderboard(targetBird = null) {
    if (!lbContainer) return;
    const sorted = [...votingData].sort((a, b) => b.votes - a.votes).slice(0, 3);
    const maxVotes = Math.max(...sorted.map(b => b.votes)) || 1;

    lbContainer.style.display = 'flex';
    lbContainer.style.flexDirection = 'column';
    lbContainer.style.justifyContent = 'space-around';
    lbContainer.style.height = '100%';

    const colors = [
      { main: '#fbbf24', secondary: '#f59e0b', shadow: 'rgba(251, 191, 36, 0.4)' },
      { main: '#e2e8f0', secondary: '#94a3b8', shadow: 'rgba(226, 232, 240, 0.4)' },
      { main: '#cd7f32', secondary: '#b87333', shadow: 'rgba(205, 127, 50, 0.4)' }
    ];

    lbContainer.innerHTML = sorted.map((item, idx) => {
      const percentage = (item.votes / maxVotes) * 100;
      const isTarget = item.bird === targetBird;
      const birdImg = item.img || `./footage/encyclopedia/images/${item.bird}.jpg`;
      const theme = colors[idx] || colors[2];

      return `
        <div class="chart-row premium-row" style="animation-delay: ${idx * 0.2}s; flex: 1; display: flex; flex-direction: column; justify-content: center; min-height: 0;">
          <!-- Top Row Grid -->
          <div style="display:grid; grid-template-columns: clamp(50px, 5vw, 80px) clamp(80px, 8vw, 120px) 1fr clamp(100px, 10vw, 150px); align-items:center; margin-bottom:10px; width:100%;">
            
            <!-- Rank Column -->
            <div style="display:flex; justify-content:center;">
              <span style="color:${theme.main}; font-size: clamp(2.5rem, 3.8vw, 4.5rem); font-weight: 950; text-shadow: 0 0 15px ${theme.shadow}; line-height:1;">${idx+1}</span>
            </div>

            <!-- Image Column -->
            <div style="display:flex; justify-content:center;">
              <div style="width: clamp(65px, 6.5vw, 95px); height: clamp(65px, 6.5vw, 95px); border: 3px solid ${theme.main}; box-shadow: 0 0 25px ${theme.shadow}; border-radius: 22px; overflow:hidden;">
                <img src="${birdImg}" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            </div>

            <!-- Name Column -->
            <div style="padding-left: 10px;">
              <span class="shimmer-text" style="font-size: clamp(1.6rem, 2.2vw, 2.8rem); font-weight: 900; letter-spacing: 1px; white-space: nowrap;">${item.bird}</span>
            </div>

            <!-- Votes Column -->
            <div style="text-align: right; background: rgba(0,0,0,0.3); padding: 8px 20px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.05);">
              <div style="color:${theme.main}; font-size: clamp(1.8rem, 2.8vw, 3.2rem); font-weight: 950; line-height: 1;">${item.votes}</div>
              <small style="font-size:0.75rem; color:#4ade80; font-weight:800; opacity:0.8; letter-spacing: 2px;">VOTES</small>
            </div>
          </div>

          <!-- Bottom Bar Full Width within row padding -->
          <div style="width:100%; height:16px; background:rgba(255,255,255,0.03); border-radius:8px; overflow:hidden; border:1px solid rgba(255,255,255,0.1); box-shadow: inset 0 2px 8px rgba(0,0,0,0.5);">
            <div id="bar-${item.bird}" class="bar-fill ${isTarget ? 'bar-pulse' : ''}" style="width:${percentage}%; background: linear-gradient(90deg, ${theme.secondary}, ${theme.main}, ${theme.secondary}); background-size: 200% 100%;"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  const triggerMascotNews = (text) => {
    if (!bubble || !mascot) return;
    mascot.classList.remove('mascot-jump');
    void mascot.offsetWidth;
    mascot.classList.add('mascot-jump');
    bubble.textContent = text;
    bubble.style.opacity = '1';
    bubble.style.transform = 'translateX(50%) scale(1) translateY(0)';
    setTimeout(() => {
      if (bubble && bubble.textContent === text) {
        bubble.style.opacity = '0';
        bubble.style.transform = 'translateX(50%) scale(0.8) translateY(20px)';
      }
    }, 6000);
  };

  mascot.onclick = () => triggerMascotNews("我是展覽限定版的 Gu Gu！✨");

  async function fetchLiveResults() {
    try {
      const res = await fetch(`${scriptUrl}?cb=${Date.now()}&action=get`);
      if (res.ok) {
        const json = await res.json();
        const counts = json.results || {};
        const lastVote = json.lastVote;
        let changedBird = null;

        Object.keys(counts).forEach(birdName => {
          let b = votingData.find(v => v.bird === birdName);
          if (b) {
            if (counts[birdName] > b.votes) {
              b.votes = counts[birdName];
              changedBird = birdName;
            }
          }
        });

        if (lastVote && lastVote.id !== lastProcessedVoteId) {
          if (lastProcessedVoteId !== null) {
            triggerMascotNews(`${lastVote.user} 投給了 ${lastVote.bird}！Gu!`);
          }
          lastProcessedVoteId = lastVote.id;
        }
        renderLeaderboard(changedBird);
      }
    } catch (e) {
      console.log("Polling error:", e);
    }
  }

  renderLeaderboard();
  const pollInterval = setInterval(fetchLiveResults, 8000);

  const cleanup = () => {
    clearInterval(pollInterval);
    container.style.padding = originalPadding;
    document.body.style.overflow = originalOverflow;
    if (langBtn) langBtn.style.display = 'flex';
    if (globalMascot) globalMascot.style.display = 'flex';
  };

  document.getElementById('dev-exit').onclick = () => {
    cleanup();
    window.navigate('login');
  };

  return cleanup;
}
