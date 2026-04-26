import { store } from '../store.js';
import { translations } from '../i18n.js';

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

  const t = (key, data = {}) => {
    const curLang = (window.store && window.store.getLanguage()) || 'zh';
    let msg = (translations[key] && translations[key][curLang]) || key;
    for (const k in data) msg = msg.replace(`{${k}}`, data[k]);
    return msg;
  };
  const lang = store.getLanguage();

  container.innerHTML = `
    <style>
      #showoff-main {
        width: 100%; height: 100vh; height: 100dvh;
        background: radial-gradient(circle at center, #050b18 0%, #010409 100%);
        color: white; font-family: 'Outfit', sans-serif;
        display: flex; flex-direction: column; overflow-x: hidden; overflow-y: auto;
        position: relative;
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

      /* Responsive Overrides for ShowOff Page */
      @media (max-width: 950px) {
        #showoff-main { overflow-y: auto !important; height: auto !important; min-height: 100dvh !important; }
        #showoff-content { height: auto !important; min-height: 100% !important; padding: 2rem 1.5rem !important; }
        .showoff-grid-container { flex-direction: column !important; height: auto !important; gap: 2rem !important; }
        #bottom-area { height: auto !important; flex-direction: column !important; gap: 1.5rem !important; }
        #bottom-area .glass-panel { padding: 2rem !important; }
        #leaderboard-video { min-height: 250px; }
        #lb-container { min-height: 400px; gap: 1.5rem !important; }
        #dev-exit { opacity: 1 !important; background: var(--secondary-color) !important; border-color: rgba(255,255,255,0.3) !important; }
      }
    </style>

    <div id="showoff-main" style="width:100%; height:100vh; height: 100dvh; background:radial-gradient(circle at center, #050b18 0%, #010409 100%); color:white; font-family:'Outfit', sans-serif; display:flex; flex-direction:column; overflow-x:hidden; overflow-y:auto; position:relative;">
      
      <div id="showoff-content" style="flex:1; display:flex; flex-direction:column; padding: clamp(1rem, 3vh, 5vh) clamp(1rem, 5vw, 8vw); z-index:1; min-height:0; justify-content: flex-start;">
        
        <header class="page-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2vh; flex-shrink:0; width: 100%; border-bottom: 1px solid rgba(255,255,255,0.1); padding: 1vh 0; position: relative;">
          <div style="flex: 1; min-width: 0;">
            <h1 class="page-title neon-title" style="font-size: clamp(2.2rem, 5vw, 4.5rem) !important; line-height:1; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Gu Gu Gu</h1>
            <p style="font-size: clamp(0.6rem, 0.9vw, 1rem); color:#94a3b8; letter-spacing: 2px; text-transform:uppercase; font-weight:700; margin: 0.5vh 0 0; opacity: 0.6; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">IDEEA Project 3K Group 4 -- ${t('login-welcome')}</p>
          </div>
          <button id="dev-exit" class="btn-secondary btn-back liquid-btn" style="position: relative; top: auto; right: auto; min-width: auto; height: auto; padding: 0.6rem 1.2rem; opacity: 0.6; font-size: 0.9rem; margin-left: 1rem; flex-shrink: 0;">${t('showoff-exit')}</button>
        </header>

        <div id="main-grid" class="showoff-grid-container" style="display:flex; gap:clamp(1rem, 3vw, 4rem); flex:1; min-height:0; align-items: stretch; margin-bottom: 2vh;">
          
          <!-- Left Content Area (Video) - Large impact 16:9 -->
          <div style="flex:2.2; display:flex; flex-direction:column; gap:clamp(1rem, 2vh, 3vh); min-width:0;">
            <!-- Video Panel -->
            <div class="glass-panel" style="flex:1; display:flex; flex-direction:column; padding:clamp(1rem, 1.5vw, 2.5rem); background:rgba(255,255,255,0.08); border:2px solid rgba(255,255,255,0.18); border-radius:30px; box-shadow: 0 25px 60px rgba(0,0,0,0.6); min-height:0;">
              <h2 style="font-size:clamp(1.2rem, 1.6vw, 2rem); margin-bottom:1rem; color:#4ade80; display:flex; align-items:center; gap:8px; flex-shrink:0; font-weight:800; text-shadow: 0 0 10px rgba(74, 222, 128, 0.3); transform: translateX(-4px);">
                <span class="rec-dot"></span> Gu Gu Gu 宣傳影片 LIVE
              </h2>
              <div style="width:100%; flex:1; background:#000; border-radius:20px; overflow:hidden; position:relative; border:1px solid rgba(255,255,255,0.15);">
                  <video id="leaderboard-video" style="width:100%; height:100%; object-fit:contain; background:#000;" autoplay loop playsinline>
                    <source src="./footage/showoff/gugugu_motionad.mp4" type="video/mp4" />
                  </video>
              </div>
            </div>
            
            <!-- Ticker Panel -->
            <div class="glass-panel" style="height: clamp(60px, 10vh, 100px); display:flex; align-items:center; overflow:hidden; background:rgba(74, 222, 128, 0.05); border-radius:25px; border:1px solid rgba(74,222,128,0.2); padding:0 2rem;">
              <div id="ticker" style="white-space:nowrap; font-size:clamp(1rem, 1.2vw, 1.5rem); color:#fbbf24; font-weight:800; animation:scrollLeft 25s linear infinite;">
                ${t('showoff-ticker-1')} &nbsp;&nbsp;|&nbsp;&nbsp; ${t('showoff-ticker-2')} &nbsp;&nbsp;|&nbsp;&nbsp; ${t('showoff-ticker-3')} &nbsp;&nbsp;|&nbsp;&nbsp; ${t('showoff-ticker-4')} &nbsp;&nbsp;|&nbsp;&nbsp;
              </div>
            </div>
          </div>

          <!-- Right Content Area - Larger to fix clipping -->
          <div style="flex:1.3; display:flex; flex-direction:column; gap:clamp(1rem, 2vh, 3vh); min-width:0;">
            <!-- Leaderboard Panel -->
            <div class="glass-panel" style="flex:1; display:flex; flex-direction:column; padding:clamp(1rem, 1.8vw, 2.8rem); background:rgba(255,255,255,0.08); border:2px solid rgba(255,255,255,0.18); border-radius:30px; min-height:0; box-shadow: 0 25px 60px rgba(0,0,0,0.6);">
              <h2 style="font-size:clamp(1.2rem, 1.6vw, 2rem); color:#3b82f6; display:flex; align-items:center; gap:12px; margin-bottom:1rem; flex-shrink:0; font-weight:800;">
                <span style="font-size:1.8rem; animation:rotate 15s linear infinite;">🏆</span> ${t('showoff-rank-title')}
              </h2>
              <div id="lb-container" style="flex:1; display:flex; flex-direction:column; justify-content: space-between; min-height:0; overflow:hidden; padding: 1vh 0;">
                <!-- Bird bars injected here -->
              </div>
            </div>

            <!-- QR & Mascot Bottom Area -->
            <div id="bottom-area" style="height: clamp(150px, 30vh, 300px); display:flex; gap:2vw; align-items: stretch; min-height:0; flex-shrink:0;">
              <div class="glass-panel" style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:8px; background:rgba(255,255,255,0.08); border-radius:30px; border:2px solid rgba(255,255,255,0.18); box-shadow:0 25px 60px rgba(0,0,0,0.6);">
                <div style="width:15vh; height:15vh; max-width:130px; max-height:130px; background:white; padding:8px; border-radius:18px; display:flex; align-items:center; justify-content:center; border: 4px solid #4ade80;">
                  <img src="./gugugu_qrcode.png" style="width:100%; height:100%; object-fit:contain;" />
                </div>
                <span style="font-size:clamp(0.9rem, 1.1vw, 1.2rem); font-weight:900; color:#4ade80; letter-spacing:2px; text-shadow: 0 0 10px rgba(74, 222, 128, 0.4); text-align: center; line-height: 1.4; padding: 0 10px;">${t('showoff-scan-vote')}</span>
              </div>
              <div class="glass-panel" style="flex:1.2; position:relative; display:flex; justify-content:center; align-items:flex-end; background:rgba(255,255,255,0.08); border-radius:30px; border:2px solid rgba(255,255,255,0.18); overflow:visible; box-shadow:0 25px 60px rgba(0,0,0,0.6); padding-top: 60px;">
                <div id="exhibit-mascot-bubble" style="position:absolute; top:10px; left:50%; transform: translateX(-50%) scale(0.8); background:white; color:#111; padding:10px 20px; border-radius:30px; font-weight:900; font-size:1rem; opacity:0; transition:all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); white-space:nowrap; z-index:10; box-shadow: 0 15px 45px rgba(0,0,0,0.4); border: 3px solid #4ade80; min-width: 180px; text-align: center;">
                  投票中... Gu!
                </div>
                <img src="./removedbg_gugugu.png" id="exhibit-mascot-img" style="height:115%; filter:drop-shadow(0 20px 40px rgba(0,0,0,0.5)); cursor:pointer; animation:mascotSway 5s ease-in-out infinite; transform-origin: bottom center; position: relative; bottom: -10px;" />
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
    lbContainer.style.justifyContent = 'space-between';
    lbContainer.style.height = '100%';
    lbContainer.style.gap = '1.5vh';

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
        <div class="chart-row premium-row" style="animation-delay: ${idx * 0.2}s; flex: 1; display: flex; flex-direction: column; justify-content: center; min-height: 0; padding: 0.5vh 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
          <!-- Main Info Grid -->
          <div style="display:grid; grid-template-columns: 45px 80px 1fr 100px; align-items:center; width:100%; gap: 10px;">
            
            <!-- Rank Column -->
            <div style="display:flex; justify-content:center;">
              <span style="color:${theme.main}; font-size: clamp(2rem, 3.5vw, 4rem); font-weight: 950; text-shadow: 0 0 15px ${theme.shadow}; line-height:1;">${idx+1}</span>
            </div>

            <!-- Image Column -->
            <div style="display:flex; justify-content:center;">
              <div style="width: 75px; height: 75px; border: 3px solid ${theme.main}; box-shadow: 0 0 20px ${theme.shadow}; border-radius: 20px; overflow:hidden; background: rgba(0,0,0,0.5);">
                <img src="${birdImg}" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            </div>

            <!-- Name and Bar Column -->
            <div style="display: flex; flex-direction: column; gap: 4px; overflow: visible; justify-content: center; min-width: 0; flex: 1;">
              <span class="shimmer-text" style="font-size: clamp(1.4rem, 2.2vw, 2.6rem); font-weight: 900; letter-spacing: 0px; white-space: nowrap; overflow: visible; text-overflow: clip;">${item.bird}</span>
              <!-- Integrated Progress Bar -->
              <div style="width:100%; height:12px; background:rgba(0,0,0,0.5); border-radius:10px; overflow:hidden; border:1px solid rgba(255,255,255,0.15); box-shadow: inset 0 2px 5px rgba(0,0,0,0.5); position: relative;">
                <div id="bar-${item.bird}" class="bar-fill ${isTarget ? 'bar-pulse' : ''}" style="width:${percentage}%; background: linear-gradient(90deg, ${theme.secondary}, ${theme.main}, ${theme.secondary}); background-size: 200% 100%; box-shadow: 0 0 15px ${theme.shadow};"></div>
              </div>
            </div>

            <!-- Votes Column -->
            <div style="text-align: right; background: rgba(0,0,0,0.7); padding: 6px 12px; border-radius: 18px; border: 2px solid rgba(255,255,255,0.15); box-shadow: 0 4px 15px rgba(0,0,0,0.4); min-width: 90px; margin-right: 5px;">
              <div style="color:${theme.main}; font-size: clamp(1.8rem, 2.8vw, 3.2rem); font-weight: 950; line-height: 1; text-shadow: 0 0 10px ${theme.shadow};">${item.votes}</div>
              <small style="font-size:0.75rem; color:#4ade80; font-weight:900; opacity:1; letter-spacing: 1px;">VOTES</small>
            </div>
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
    t('showoff-mascot-1'),
    t('showoff-mascot-2'),
    t('showoff-mascot-3'),
    t('showoff-mascot-4'),
    t('showoff-mascot-5'),
    t('showoff-mascot-6')
  ];
  const triggerAutoLine = () => {
    const line = autoLines[Math.floor(Math.random() * autoLines.length)];
    triggerMascotNews(line);
  };

  mascot.onclick = () => triggerMascotNews(t('showoff-mascot-4'));

  async function fetchLiveResults() {
    try {
      const res = await fetch(`${scriptUrl}?cb=${Date.now()}&action=get`);
      if (res.ok) {
        const json = await res.json();
        const counts = json.results || {};
        const lastVote = json.lastVote;
        let changedBird = null;
        let voteIncreased = false;

        Object.keys(counts).forEach(birdName => {
          let b = votingData.find(v => v.bird === birdName);
          if (b) {
            if (counts[birdName] > b.votes) {
              b.votes = counts[birdName];
              changedBird = birdName;
              voteIncreased = true;
            }
          }
        });

        if (lastVote && lastVote.id !== lastProcessedVoteId) {
          if (lastProcessedVoteId !== null) {
            const msg = t('showoff-live-msg', { name: lastVote.user, bird: lastVote.bird });
            triggerMascotNews(msg);
          }
          lastProcessedVoteId = lastVote.id;
        } else if (voteIncreased && lastProcessedVoteId !== null) {
          // Fallback if lastVote details aren't ready but count increased
          triggerMascotNews("有人投票了！Gu! ✨");
        }
        renderLeaderboard(changedBird);
      }
    } catch (e) {
      console.log("Polling error:", e);
    }
  }

  const video = container.querySelector('#leaderboard-video');
  const unmuteVideo = () => {
    if (video) {
      video.muted = false;
      video.play().catch(e => console.log("Audio play blocked", e));
    }
  };

  // Modern browsers require interaction to play unmuted audio.
  // We'll unmute on the first click anywhere in the container.
  container.addEventListener('click', unmuteVideo, { once: true });

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
