import { store } from '../store.js';

// Local copy of bird data to ensure maximum stability for exhibition mode
const SHOWOFF_BIRDS = [
  { name: '紅耳鵯', img: './footage/encyclopedia/images/紅耳鵯.jpg' },
  { name: '原鴿', img: './footage/encyclopedia/images/原鴿.jpg' },
  { name: '珠頸斑鳩', img: './footage/encyclopedia/images/珠頸斑鳩.jpg' },
  { name: '鵲鴝', img: './footage/encyclopedia/images/鵲鴝.jpg' },
  { name: '普通翠鳥', img: './footage/encyclopedia/images/普通翠鳥.png' },
  { name: '噪鵑', img: './footage/encyclopedia/images/噪鵑.jpg' },
  { name: '樹麻雀', img: './footage/encyclopedia/images/樹麻雀.jpg' },
  { name: '灰斑鳩', img: './footage/encyclopedia/images/灰斑鳩.jpg' },
  { name: '洋燕', img: './footage/encyclopedia/images/洋燕.jpg' },
  { name: '牛背鷺', img: './footage/encyclopedia/images/牛背鷺.jpg' },
  { name: '綠背姬鶲', img: './footage/encyclopedia/images/綠背姬鶲.jpg' },
  { name: '黃眉柳鶯', img: './footage/encyclopedia/images/黃眉柳鶯.jpg' },
  { name: '黑臉琵鷺', img: './footage/encyclopedia/images/黑臉琵鷺.jpg' },
  { name: '黑領椋鳥', img: './footage/encyclopedia/images/黑領椋鳥.jpg' }
];

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
        display: flex; flex-direction: column; min-height: 100vh; overflow-x: hidden; overflow-y: auto;
        position: relative;
        /* Ensure it behaves correctly on very small laptop screens */
        min-height: 600px; 
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
        
        <header class="page-header" style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2vh; flex-shrink:0; width: 100%; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 1vh;">
          <div style="flex: 1;">
            <h1 class="page-title neon-title" style="font-size: clamp(2.2rem, 4vw, 4.5rem) !important; line-height:1; margin: 0;">Gu Gu Gu</h1>
            <p style="font-size: clamp(0.6rem, 0.8vw, 1rem); color:#94a3b8; letter-spacing: 2px; text-transform:uppercase; font-weight:700; margin: 0.5vh 0 0; opacity: 0.6; white-space: nowrap;">Master IDEEA Project Group 4 -- 24/7 Monitoring Smart Website</p>
          </div>
          <button id="dev-exit" class="btn-secondary btn-back" style="position: fixed; top: 1.5rem; right: 1.5rem; min-width: auto; height: auto; padding: 0.8rem 1.2rem; opacity: 0.3; font-size: 0.9rem;">← Exit</button>
        </header>

        <div id="main-grid" style="display:flex; gap:clamp(1rem, 3vw, 4rem); flex:1; min-height:0; align-items: stretch; margin-bottom: 2vh;">
          
          <!-- Left Content Area -->
          <div style="flex:1.4; display:flex; flex-direction:column; gap:clamp(1rem, 2vh, 3vh); min-width:0;">
            <!-- Video Panel -->
            <div class="glass-panel" style="flex:1; display:flex; flex-direction:column; padding:clamp(1rem, 1.5vw, 2.5rem); background:rgba(255,255,255,0.08); border:2px solid rgba(255,255,255,0.18); border-radius:30px; box-shadow: 0 25px 60px rgba(0,0,0,0.6); min-height:0;">
              <h2 style="font-size:clamp(1.2rem, 1.6vw, 2rem); margin-bottom:1rem; color:#4ade80; display:flex; align-items:center; gap:12px; flex-shrink:0; font-weight:800; text-shadow: 0 0 10px rgba(74, 222, 128, 0.3);">
                <span class="rec-dot"></span> 專案宣傳影片 LIVE
              </h2>
              <div style="width:100%; flex:1; background:#000; border-radius:20px; overflow:hidden; position:relative; border:1px solid rgba(255,255,255,0.15);">
                  <video id="leaderboard-video" style="width:100%; height:100%; object-fit:cover;" autoplay loop muted playsinline>
                    <source src="./footage/previous_videos/video1.mp4" type="video/mp4" />
                  </video>
              </div>
            </div>
            
            <!-- Ticker Panel -->
            <div class="glass-panel" style="height: clamp(60px, 10vh, 100px); display:flex; align-items:center; overflow:hidden; background:rgba(74, 222, 128, 0.05); border-radius:25px; border:1px solid rgba(74,222,128,0.2); padding:0 2rem;">
              <div id="ticker" style="white-space:nowrap; font-size:clamp(1rem, 1.2vw, 1.5rem); color:#fbbf24; font-weight:800; animation:scrollLeft 25s linear infinite;">
                ⚡ 本地生態監測中 &nbsp;&nbsp;|&nbsp;&nbsp; 🌲 校園目前的鳥類活動頻率：高 &nbsp;&nbsp;|&nbsp;&nbsp; 🕊️ 感謝參與投票！ &nbsp;&nbsp;|&nbsp;&nbsp; ⛅ 天氣：晴 &nbsp;&nbsp;|&nbsp;&nbsp;
              </div>
            </div>
          </div>

          <!-- Right Content Area -->
          <div style="flex:1; display:flex; flex-direction:column; gap:clamp(1rem, 2vh, 3vh); min-width:0;">
            <!-- Leaderboard Panel -->
            <div class="glass-panel" style="flex:1; display:flex; flex-direction:column; padding:clamp(1rem, 1.5vw, 2.5rem); background:rgba(255,255,255,0.08); border:2px solid rgba(255,255,255,0.18); border-radius:30px; min-height:0; box-shadow: 0 25px 60px rgba(0,0,0,0.6);">
              <h2 style="font-size:clamp(1.2rem, 1.6vw, 2rem); color:#3b82f6; display:flex; align-items:center; gap:12px; margin-bottom:1rem; flex-shrink:0; font-weight:800;">
                <span style="font-size:1.8rem; animation:rotate 15s linear infinite;">🏆</span> 即時人氣榜 (TOP 3)
              </h2>
              <div id="lb-container" style="flex:1; display:flex; flex-direction:column; pointer-events:none;">
                <!-- Bird bars injected here -->
              </div>
            </div>

            <!-- QR & Mascot Bottom Area -->
            <div style="height: clamp(150px, 30vh, 300px); display:flex; gap:2vw; align-items: stretch; min-height:0; flex-shrink:0;">
              <div class="glass-panel" style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:8px; background:rgba(255,255,255,0.08); border-radius:30px; border:2px solid rgba(255,255,255,0.18); box-shadow:0 25px 60px rgba(0,0,0,0.6);">
                <div style="width:18vh; height:18vh; max-width:160px; max-height:160px; background:white; padding:10px; border-radius:20px; display:flex; align-items:center; justify-content:center; border: 5px solid #4ade80;">
                  <img src="./gugugu_qrcode.png" style="width:100%; height:100%; object-fit:contain;" />
                </div>
                <span style="font-size:clamp(0.9rem, 1.1vw, 1.2rem); font-weight:900; color:#4ade80; letter-spacing:2px; text-shadow: 0 0 10px rgba(74, 222, 128, 0.4);">掃碼投票 SCAN TO VOTE</span>
              </div>
              <div class="glass-panel" style="flex:1.2; position:relative; display:flex; justify-content:center; align-items:flex-end; background:rgba(255,255,255,0.08); border-radius:30px; border:2px solid rgba(255,255,255,0.18); overflow:visible; box-shadow:0 25px 60px rgba(0,0,0,0.6);">
                <div id="exhibit-mascot-bubble" style="position:absolute; top:-30px; left:50%; transform: translateX(-50%) scale(0.8); background:white; color:#111; padding:10px 20px; border-radius:30px; font-weight:900; font-size:1rem; opacity:0; transition:all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); white-space:nowrap; z-index:10; box-shadow: 0 15px 45px rgba(0,0,0,0.4); border: 3px solid #4ade80; min-width: 180px; text-align: center;">
                  投票中... Gu!
                </div>
                <img src="./removedbg_gugugu.png" id="exhibit-mascot-img" style="height:90%; filter:drop-shadow(0 20px 40px rgba(0,0,0,0.5)); cursor:pointer; animation:mascotSway 5s ease-in-out infinite; transform-origin: bottom center;" />
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
  
  let votingData = SHOWOFF_BIRDS.map(b => ({
    bird: b.name,
    votes: 0,
    img: b.img
  }));
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
            <div style="text-align: right; background: rgba(0,0,0,0.6); padding: 10px 25px; border-radius: 25px; border: 2px solid rgba(255,255,255,0.15); box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
              <div style="color:${theme.main}; font-size: clamp(1.8rem, 2.8vw, 3.2rem); font-weight: 950; line-height: 1; text-shadow: 0 0 10px ${theme.shadow};">${item.votes}</div>
              <small style="font-size:0.8rem; color:#4ade80; font-weight:900; opacity:1; letter-spacing: 2px;">VOTES</small>
            </div>
          </div>

          <!-- Bottom Bar Full Width within row padding -->
          <div style="width:100%; height:18px; background:rgba(0,0,0,0.4); border-radius:10px; overflow:hidden; border:2px solid rgba(255,255,255,0.1); box-shadow: inset 0 2px 8px rgba(0,0,0,0.8);">
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
    bubble.style.transform = 'translateX(-50%) scale(1) translateY(0)';
    setTimeout(() => {
      if (bubble && bubble.textContent === text) {
        bubble.style.opacity = '0';
        bubble.style.transform = 'translateX(-50%) scale(0.8) translateY(20px)';
      }
    }, 6000);
  };

  const autoLines = [
    "歡迎來到 Gu Gu Gu 展位！✨",
    "快拿起手機，掃碼投下你神聖的一票！🕊️",
    "你知道嗎？校園裡其實有很多隱藏的鳥類明星哦！",
    "我是展覽限定版的 Gu Gu，大家多多指教！🌿",
    "看！影片裡正拍到精彩的畫面呢！🎬",
    "目前第一名競爭非常激烈呀！Gu! 🔥"
  ];
  const triggerAutoLine = () => {
    const line = autoLines[Math.floor(Math.random() * autoLines.length)];
    triggerMascotNews(line);
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
  const autoSpeakInterval = setInterval(triggerAutoLine, 25000);

  const cleanup = () => {
    clearInterval(pollInterval);
    clearInterval(autoSpeakInterval);
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
