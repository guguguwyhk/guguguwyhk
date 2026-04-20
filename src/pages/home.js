import { store } from '../store.js';
import { translations, applyTranslation } from '../i18n.js';

const HIGHLIGHTS_ZH = [
  "紅耳鵯最喜歡在校園的榕樹上聚集！",
  "黑臉琵鷺是瀕危物種，偶爾能在香港的濕地見到。",
  "如果幸運的話，你可以在操場邊看到珠頸斑鳩吃蟲子。",
  "華仁的生態池裡有多種水生植物，吸引了許多鳥類停駐。",
  "樹麻雀最喜歡在草叢中跳躍找尋種子。",
  "有些鳥類會記住曾經餵過牠們的人喔！"
];

const HIGHLIGHTS_EN = [
  "Light-vented Bulbuls love gathering on the banyan trees in our campus!",
  "The Black-faced Spoonbill is an endangered species, occasionally spotted in Hong Kong wetlands.",
  "If you're lucky, you can spot a Spotted Dove eating insects by the football pitch!",
  "The campus eco-pond supports diverse aquatic plants, attracting many bird species.",
  "Tree Sparrows love hopping through shrubs to find seeds.",
  "Some birds can actually remember the humans who have fed them!"
];

export function renderHome(container) {
  window.mascot.show();

  const lang = store.getLanguage();
  const facts = lang === 'en' ? HIGHLIGHTS_EN : HIGHLIGHTS_ZH;
  const factIndex = Math.floor(Math.random() * 6) + 1;
  const name = store.getUserName() || '探險家';

  container.innerHTML = `
    <div class="page-container">
    <header class="page-header" style="flex-direction: row; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-bottom: 0.8rem;">
      <div style="display:flex; align-items:center; gap: 1rem; flex-wrap: wrap;">
        <h1 class="page-title" data-i18n="home-title" style="font-size: 1.5rem;">Gu Gu Gu 🌿</h1>
        <span style="background:var(--primary-color); color:black; padding:4px 10px; border-radius:10px; font-size: 0.75rem; font-weight:900; letter-spacing:1px; box-shadow:0 4px 15px rgba(134,239,172,0.3); white-space: nowrap;">24/7 MONITORING</span>
      </div>
    </header>

    <h2 id="home-greeting" style="margin-bottom:0.8rem; font-weight:600; font-size: 1.25rem; opacity: 0.9;"></h2>

    <!-- Daily Highlight (Responsive with Visible Image) -->
    <div class="glass-panel daily-highlight" style="padding: 1.2rem 1.8rem; display: flex; align-items: center; border-radius: 25px; margin-bottom: 1.5rem; gap: 1.5rem; overflow: hidden;">
      <div style="flex:1; min-width: 0;">
        <h3 id="daily-title" style="color:#86efac; margin-bottom:0.4rem; font-size: 1.15rem;" data-i18n="daily-highlight">✨ 每日鳥事</h3>
        <p id="daily-fact" data-fact-index="${factIndex}" style="font-size: 1.05rem; line-height:1.4; color:rgba(255,255,255,0.95); word-wrap: break-word; font-weight: 500;"></p>
      </div>
      <!-- Desktop/Mobile Image -->
      <img src="./footage/about_us/birdhouse2.jpeg" class="daily-img-responsive" style="width: 220px; height: 140px; object-fit: cover; border-radius: 15px; border: 1px solid rgba(255,255,255,0.1); flex-shrink: 0; box-shadow: 0 8px 20px rgba(0,0,0,0.3);" onerror="this.style.display='none'" />
    </div>

    <style>
      @media (max-width: 768px) {
        .daily-highlight { padding: 1.2rem !important; gap: 1rem !important; }
        .daily-img-responsive { width: 100px !important; height: 75px !important; border-radius: 10px !important; }
        #daily-title { font-size: 1.05rem !important; }
        #daily-fact { font-size: 0.95rem !important; }
      }
    </style>

    <!-- Grid Nav (Compact Cards for visibility) -->
    <div class="nav-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
      <div class="glass-card nav-card liquid-btn" data-target="stream" style="padding: 1.5rem 1.2rem; cursor:pointer; text-align:center;">
        <div style="font-size: 2.2rem; margin-bottom:0.5rem;">🎥</div>
        <h3 data-i18n="card-stream-title" style="font-size: 1.2rem; color:#86efac; font-weight: 800;">直播鳥屋</h3>
        <p data-i18n="card-stream-desc" style="color:var(--text-muted); font-size: 0.85rem; margin-top:0.3rem; line-height: 1.3;">實時觀察生態狀態</p>
      </div>
      
      <div class="glass-card nav-card liquid-btn" data-target="encyclopedia" style="padding: 1.5rem 1.2rem; cursor:pointer; text-align:center;">
        <div style="font-size: 2.2rem; margin-bottom:0.5rem;">📖</div>
        <h3 data-i18n="card-ency-title" style="font-size: 1.2rem; color:#86efac; font-weight: 800;">華仁鳥類百科</h3>
        <p data-i18n="card-ency-desc" style="color:var(--text-muted); font-size: 0.85rem; margin-top:0.3rem; line-height: 1.3;">探索校園野生動物</p>
      </div>
      
      <div class="glass-card nav-card liquid-btn" data-target="map" style="padding: 1.5rem 1.2rem; cursor:pointer; text-align:center;">
        <div style="font-size: 2.2rem; margin-bottom:0.5rem;">🗺️</div>
        <h3 data-i18n="card-map-title" style="font-size: 1.2rem; color:#86efac; font-weight: 800;">華仁生態地圖</h3>
        <p data-i18n="card-map-desc" style="color:var(--text-muted); font-size: 0.85rem; margin-top:0.3rem; line-height: 1.3;">校園互動探索</p>
      </div>

      <div class="glass-card nav-card liquid-btn" data-target="game" style="padding: 1.5rem 1.2rem; cursor:pointer; text-align:center;">
        <div style="font-size: 2.2rem; margin-bottom:0.5rem;">🎮</div>
        <h3 data-i18n="card-game-title" style="font-size: 1.2rem; color:#86efac; font-weight: 800;">守護者挑戰</h3>
        <p data-i18n="card-game-desc" style="color:var(--text-muted); font-size: 0.85rem; margin-top:0.3rem; line-height: 1.3;">邊玩邊學鳥類知識</p>
      </div>

      <div class="glass-card nav-card liquid-btn" data-target="about" style="padding: 1.5rem 1.2rem; cursor:pointer; text-align:center;">
        <div style="font-size: 2.2rem; margin-bottom:0.5rem;">👥</div>
        <h3 data-i18n="card-about-title" style="font-size: 1.2rem; color:#86efac; font-weight: 800;">關於我們</h3>
        <p data-i18n="card-about-desc" style="color:var(--text-muted); font-size: 0.85rem; margin-top:0.3rem; line-height: 1.3;">The IDEEA Team</p>
      </div>
    </div>

    <!-- Footer -->
    <footer style="margin-top:auto; padding:4rem 0 10rem; border-top:1px solid var(--glass-border); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
      <div>
        <p style="font-size:0.95rem; font-weight:bold;">IDEEA Project 3K Group 4</p>
        <p style="font-size:0.85rem; color:var(--text-muted);">Astin Lam, Brayden Chan, Cyrus Chan, Justin Lau</p>
      </div>
      <div style="display:flex; gap:1.5rem; align-items:center;">
        <a href="https://www.instagram.com/gugugu_wyhk/" target="_blank" id="ig-link" style="text-decoration:none; font-weight:bold; font-size:1.1rem; display:flex; align-items:center; gap:8px; color:#fb923c; filter: drop-shadow(0 0 8px rgba(251,146,60,0.7)); transition: filter 0.2s;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          @gugugu_wyhk
        </a>
        <button id="logout-btn" class="btn-secondary liquid-btn" style="background:rgba(255,0,0,0.1); border-color:rgba(255,0,0,0.2); color:#f87171; font-size:0.85rem; padding:6px 14px;" data-i18n="logout">登出帳號</button>
      </div>
    </footer>
    </div>
  `;

  const greetingEl = document.getElementById('home-greeting');
  if (greetingEl) {
    greetingEl.textContent = lang === 'en'
      ? `Hello, ${name}! Ready to explore today?`
      : `哈囉，${name}！準備好今天的探索了嗎？`;
  }

  const factEl = document.getElementById('daily-fact');
  if (factEl && factEl.dataset.factIndex) {
    const key = `fact-${factEl.dataset.factIndex}`;
    if (translations[key] && translations[key][lang]) {
      factEl.textContent = translations[key][lang];
    }
  }

  container.querySelectorAll('.nav-card').forEach(card => {
    card.addEventListener('click', () => window.navigate(card.dataset.target));
  });

  const logoutBtn = container.querySelector('#logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      store.setUserName(null);
      window.navigate('login');
      window.mascot.say("期待你的下次探索！Gu Gu!");
    });
  }

  setTimeout(() => applyTranslation(lang, true), 0);

  if (sessionStorage.getItem('show_vote_modal') === 'true') {
    setTimeout(() => {
      try {
        renderVoteModal(container);
        sessionStorage.removeItem('show_vote_modal');
      } catch (err) {
        console.error("Modal Render Fail:", err);
      }
    }, 800);
  }

  return () => {
    document.querySelectorAll('.centered-modal-overlay').forEach(m => {
      if (m.id !== 'bird-modal') m.remove();
    });
  };
}

function renderVoteModal(container) {
  const modal = document.createElement('div');
  modal.className = 'centered-modal-overlay';
  modal.style.zIndex = '9998';
  modal.style.opacity = '0';
  modal.style.transition = 'opacity 0.4s ease';

  const modalContent = document.createElement('div');
  modalContent.className = 'centered-modal-content glass-panel animate-poll-in';
  modalContent.style.cssText = `
    max-width: 1000px;
    position: relative;
    border: 2px solid #4ade80;
    box-shadow: 0 0 60px rgba(74, 222, 128, 0.2);
    background: rgba(5, 10, 5, 0.98);
    max-height: 90vh;
    overflow-y: auto;
  `;

  const lang = (window.store && window.store.getLanguage()) || 'zh';
  const t = (key) => (translations[key] && translations[key][lang]) || key;
  const birdT = (key) => (translations[key] && translations[key][lang]) || 'Bird';
  const scriptUrl = "https://script.google.com/macros/s/AKfycbwRknj4-6Lphd0sz-4rK-v-VhQ3X-PmKah55lFmaVpuPMe22eVZHqNNzlOvNiNUECeR/exec";

  const pollBirds = [
    { name: '黑臉琵鷺', key: 'bird-spoonbill', img: './footage/encyclopedia/images/黑臉琵鷺.jpg' },
    { name: '紅耳鵯', key: 'bird-bulbul', img: './footage/encyclopedia/images/紅耳鵯.jpg' },
    { name: '珠頸斑鳩', key: 'bird-dove-spotted', img: './footage/encyclopedia/images/珠頸斑鳩.jpg' },
    { name: '灰斑鳩', key: 'bird-dove-collared', img: './footage/encyclopedia/images/灰斑鳩.jpg' },
    { name: '樹麻雀', key: 'bird-sparrow', img: './footage/encyclopedia/images/樹麻雀.jpg' },
    { name: '牛背鷺', key: 'bird-egret', img: './footage/encyclopedia/images/牛背鷺.jpg' },
    { name: '鵲鴝', key: 'bird-magpie', img: './footage/encyclopedia/images/鵲鴝.jpg' },
    { name: '普通翠鳥', key: 'bird-kingfisher', img: './footage/encyclopedia/images/普通翠鳥.png' },
    { name: '綠背姬鶲', key: 'bird-flycatcher', img: './footage/encyclopedia/images/綠背姬鶲.jpg' },
    { name: '黃眉柳鶯', key: 'bird-warbler', img: './footage/encyclopedia/images/黃眉柳鶯.jpg' },
    { name: '洋燕', key: 'bird-swallow', img: './footage/encyclopedia/images/洋燕.jpg' },
    { name: '原鴿', key: 'bird-pigeon', img: './footage/encyclopedia/images/原鴿.jpg' },
    { name: '黑領椋鳥', key: 'bird-starling', img: './footage/encyclopedia/images/黑領椋鳥.jpg' },
    { name: '噪鵑', key: 'bird-koel', img: './footage/encyclopedia/images/噪鵑.jpg' }
  ];

  const renderInitialState = () => {
    modalContent.innerHTML = `
      <div style="text-align:center; padding-top: 3.5rem; padding-bottom: 2.5rem;">
        <div style="background:#4ade80; color:#000; display:inline-block; padding:8px 30px; border-radius:50px; font-weight:900; margin-bottom:1.5rem; letter-spacing:3px; font-size:0.85rem; text-transform:uppercase;">CAMPUS LIVE POLL</div>
        <h2 style="color:#4ade80; font-size:clamp(2.5rem, 5vw, 3.2rem); font-weight:950; margin:0 0 10px; font-family:'Outfit';">${t('vote-manual')}</h2>
        <p style="color:#94a3b8; font-size:1.3rem; max-width:600px; margin:0 auto 2.5rem;">${t('vote-subtitle')}</p>
        <button id="close-vote" style="position:absolute; top:20px; right:20px; background:rgba(255,255,255,0.05); border:none; color:#fff; font-size:2.5rem; width:60px; height:60px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.3s ease;">&times;</button>
      </div>
      <div class="poll-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:2rem; padding:10px;">
        ${pollBirds.map((b, idx) => `
          <div class="poll-card" data-bird="${b.name}" style="background:rgba(255,255,255,0.03); border:1.5px solid rgba(255,255,255,0.08); border-radius:24px; overflow:hidden; position:relative; cursor:pointer; transition:all 0.4s ease; animation: fadeInUp 0.5s ease backwards; animation-delay:${idx * 0.05}s;">
            <div style="width:100%; aspect-ratio:1/1; overflow:hidden;">
              <img src="${b.img}" style="width:100%; height:100%; object-fit:cover; transition:transform 0.5s ease;" onerror="this.src='./removedbg_gugugu.png'" />
            </div>
            <div style="padding:15px; background:linear-gradient(to top, rgba(0,0,0,0.9), transparent); position:absolute; inset:0; display:flex; align-items:flex-end; justify-content:center;">
              <span style="color:#fff; font-weight:900; text-align:center; font-size:1.1rem;">${birdT(b.key)}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    modalContent.querySelectorAll('.poll-card').forEach(card => {
      card.onclick = () => castVote(card.dataset.bird);
      card.onmouseenter = () => { card.style.borderColor = '#4ade80'; card.querySelector('img').style.transform = 'scale(1.1)'; };
      card.onmouseleave = () => { card.style.borderColor = 'rgba(255,255,255,0.08)'; card.querySelector('img').style.transform = 'scale(1)'; };
    });

    modalContent.querySelector('#close-vote').onclick = () => {
      modal.style.opacity = '0';
      setTimeout(() => modal.remove(), 400);
    };
  };

  const castVote = async (bird) => {
    if (window.mascot) window.mascot.say(`Excellent! ${bird} is amazing! Gu!`);
    modalContent.innerHTML = `<div style="text-align:center; padding:6rem 0;"><div class="loading-spinner"></div><h3 style="margin-top:2rem; color:#4ade80; letter-spacing:2px;">SYNCING DATA...</h3></div>`;
    try {
      const finalUrl = `${scriptUrl}?bird=${encodeURIComponent(bird)}&user=${encodeURIComponent(store.getUserName() || 'Guest')}&timestamp=${new Date().toISOString()}`;
      await fetch(finalUrl, { mode: 'no-cors' });
      setTimeout(() => renderResults(), 1000);
    } catch (e) {
      renderResults();
    }
  };

  const renderResults = async (retries = 3) => {
    modalContent.innerHTML = `<div style="text-align:center; padding:6rem 0;"><div class="loading-spinner"></div><h3 style="margin-top:2rem; color:#4ade80; letter-spacing:2px;">CALCULATING VOTES...</h3></div>`;
    try {
      const res = await fetch(`${scriptUrl}?action=get&cb=${Date.now()}`);
      const json = await res.json();
      const counts = json.results || {};
      const sorted = pollBirds.map(b => ({ ...b, votes: parseInt(counts[b.name] || 0) })).sort((a,b) => b.votes - a.votes);
      const total = sorted.reduce((s,b) => s+b.votes, 0);

      modalContent.innerHTML = `
        <div style="text-align:center; margin-bottom:2.5rem;">
          <h2 style="color:#4ade80; font-size:2.8rem; font-weight:950; font-family:'Outfit';">${t('poll-live-rank')}</h2>
          <p style="color:#94a3b8; font-size:1.2rem;">${total} EXPLORERS JOINED THE VOTE</p>
        </div>
        <div style="max-width:700px; margin:0 auto; display:flex; flex-direction:column; gap:1.2rem; padding: 0 1rem;">
          ${sorted.slice(0, 5).map((b, idx) => `
            <div class="result-row" style="animation: fadeInUp 0.4s ease backwards; animation-delay:${idx * 0.1}s;">
              <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-weight:800; font-size:1.15rem;">
                <span>#${idx + 1} ${b.name}</span>
                <span style="color:#4ade80;">${b.votes} VOTES</span>
              </div>
              <div style="height:12px; background:rgba(255,255,255,0.05); border-radius:6px; overflow:hidden; border:1px solid rgba(255,255,255,0.1);">
                <div style="width:0; height:100%; background:linear-gradient(90deg, #3b82f6, #4ade80); transition: width 1.5s cubic-bezier(0.19, 1, 0.22, 1); transition-delay:0.3s;" id="bar-${idx}"></div>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="text-align:center; margin-top:4rem;">
          <button class="btn-primary liquid-btn" id="finish-vote" style="padding:15px 50px; border-radius:50px; font-size:1.2rem;">ENTER CAMPUS ✨</button>
        </div>
      `;
      setTimeout(() => {
        sorted.slice(0, 5).forEach((b, idx) => {
          const bar = document.getElementById(`bar-${idx}`);
          if (bar) bar.style.width = (sorted[0].votes > 0 ? (b.votes / sorted[0].votes * 100) : 0) + '%';
        });
      }, 150);
      document.getElementById('finish-vote').onclick = () => { modal.style.opacity = '0'; setTimeout(() => modal.remove(), 450); };
    } catch (e) {
      if (retries > 0) setTimeout(() => renderResults(retries - 1), 1500);
      else {
        modalContent.innerHTML = `<div style="text-align:center; padding:4rem;"><p style="color:#f87171; font-size:1.3rem;">Connection Error, but your vote is counts!</p><button class="btn-primary" style="margin-top:2rem;" onclick="this.closest('.centered-modal-overlay').remove()">CONTINUE ✨</button></div>`;
      }
    }
  };

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  requestAnimationFrame(() => {
    modal.style.opacity = '1';
    renderInitialState();
  });
}
