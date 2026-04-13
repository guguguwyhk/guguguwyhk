import { store } from '../store.js';

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
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  const name = store.getUserName() || '探險家';

  container.innerHTML = `
    <div class="page-container">
    <header class="page-header">
      <div style="display:flex; align-items:center; gap:1.5rem;">
        <h1 class="page-title" data-i18n="home-title">Gu Gu Gu 🌿</h1>
        <span style="background:var(--primary-color); color:black; padding:6px 14px; border-radius:14px; font-size:0.85rem; font-weight:900; letter-spacing:1px; box-shadow:0 4px 15px rgba(134,239,172,0.3);">24/7 MONITORING</span>
      </div>
    </header>

    <h2 id="home-greeting" style="margin-bottom:1.5rem; font-weight:600; font-size: 1.8rem;"></h2>

    <!-- Daily Highlight -->
    <div class="glass-panel daily-highlight" style="padding:2rem; margin-bottom:2.5rem; display:flex; gap:1.5rem; align-items:center;">
      <div style="flex:1; min-width: 0;">
        <h3 id="daily-title" style="color:#86efac; margin-bottom:0.5rem; font-size: 1.5rem;" data-i18n="daily-highlight">✨ 每日鳥事</h3>
        <p id="daily-fact" style="font-size:1.2rem; line-height:1.6; word-wrap: break-word;">${randomFact}</p>
      </div>
      <img src="./footage/about_us/birdhouse2.jpeg" class="daily-img" style="width: 180px; height: 120px; flex-shrink:0; object-fit:cover; border-radius:16px; box-shadow:0 4px 15px rgba(0,0,0,0.3);" onerror="this.style.display='none'" />
    </div>

    <!-- Grid Nav -->
    <div class="nav-grid" style="display:grid; margin-bottom:3rem;">
      <div class="glass-card nav-card liquid-btn" data-target="stream" style="padding:2rem; cursor:pointer; text-align:center;">
        <div style="font-size:3rem; margin-bottom:1rem;">🎥</div>
        <h3 data-i18n="card-stream-title" style="font-size: 1.5rem; color:#86efac;">直播鳥屋</h3>
        <p data-i18n="card-stream-desc" style="color:var(--text-muted); font-size:1rem; margin-top:0.5rem;">實時觀察生態狀態</p>
      </div>
      
      <div class="glass-card nav-card liquid-btn" data-target="encyclopedia" style="padding:2rem; cursor:pointer; text-align:center;">
        <div style="font-size:3rem; margin-bottom:1rem;">📖</div>
        <h3 data-i18n="card-ency-title" style="font-size: 1.5rem; color:#86efac;">華仁鳥類百科</h3>
        <p data-i18n="card-ency-desc" style="color:var(--text-muted); font-size:1rem; margin-top:0.5rem;">探索校園野生動物</p>
      </div>

      <div class="glass-card nav-card liquid-btn" data-target="map" style="padding:2rem; cursor:pointer; text-align:center;">
        <div style="font-size:3rem; margin-bottom:1rem;">🗺️</div>
        <h3 data-i18n="card-map-title" style="font-size: 1.5rem; color:#86efac;">華仁生態地圖</h3>
        <p data-i18n="card-map-desc" style="color:var(--text-muted); font-size:1rem; margin-top:0.5rem;">校園互動探索</p>
      </div>

      <div class="glass-card nav-card liquid-btn" data-target="game" style="padding:2rem; cursor:pointer; text-align:center;">
        <div style="font-size:3rem; margin-bottom:1rem;">🎮</div>
        <h3 data-i18n="card-game-title" style="font-size: 1.5rem; color:#86efac;">守護者挑戰</h3>
        <p data-i18n="card-game-desc" style="color:var(--text-muted); font-size:1rem; margin-top:0.5rem;">雀仔食蟲小遊戲</p>
      </div>

      <div class="glass-card nav-card liquid-btn" data-target="about" style="padding:2rem; cursor:pointer; text-align:center;">
        <div style="font-size:3rem; margin-bottom:1rem;">👥</div>
        <h3 data-i18n="card-about-title" style="font-size: 1.5rem; color:#86efac;">關於我們</h3>
        <p data-i18n="card-about-desc" style="color:var(--text-muted); font-size:1rem; margin-top:0.5rem;">The IDEEA Team</p>
      </div>
    </div>

    <!-- Footer -->
    <footer style="margin-top:auto; padding:2rem 0 8rem; border-top:1px solid var(--glass-border); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
      <div>
        <p style="font-size:1rem; font-weight:bold;">IDEEA Project 3K Group 4</p>
        <p style="font-size:0.9rem; color:var(--text-muted);">Astin Lam, Brayden Chan, Cyrus Chan, Justin Lau</p>
      </div>
      <div style="display:flex; gap:1.5rem; align-items:center;">
        <a href="https://www.instagram.com/gugugu_wyhk/" target="_blank" id="ig-link" style="text-decoration:none; font-weight:bold; font-size:1.1rem; display:flex; align-items:center; gap:8px; color:#fb923c; filter: drop-shadow(0 0 8px rgba(251,146,60,0.7)); transition: filter 0.2s;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          @gugugu_wyhk
        </a>
        <button id="logout-btn" class="btn-secondary liquid-btn" style="background:rgba(255,0,0,0.1); border-color:rgba(255,0,0,0.2); color:#f87171; font-size:0.9rem; padding:8px 16px;" data-i18n="logout">登出帳號</button>
      </div>
    </footer>
    </div>
  `;

  // Set greeting
  const greetingEl = document.getElementById('home-greeting');
  if (greetingEl) {
    greetingEl.textContent = lang === 'en'
      ? `Hello, ${name}! Ready to explore today?`
      : `哈囉，${name}！準備好今天的探索了嗎？`;
  }

  // Event Listeners
  const cards = container.querySelectorAll('.nav-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      window.navigate(card.dataset.target);
    });
  });

  const logoutBtn = container.querySelector('#logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      store.setUserName(null);
      window.navigate('login');
      window.mascot.say("期待你的下次探索！Gu Gu!");
    });
  }

  // Show vote modal after login
  if (sessionStorage.getItem('show_vote_modal') === 'true') {
    sessionStorage.removeItem('show_vote_modal');
    setTimeout(() => renderVoteModal(container), 800);
  }
}

function renderVoteModal(container) {
  const modal = document.createElement('div');
  modal.className = 'centered-modal-overlay';
  modal.style.zIndex = '9998';
  modal.style.opacity = '0';
  modal.style.transition = 'opacity 0.5s ease';

  const modalContent = document.createElement('div');
  modalContent.className = 'centered-modal-content glass-panel animate-poll-in';
  modalContent.style.cssText = `
    width: 95%;
    max-width: 1000px;
    padding: 3rem;
    position: relative;
    border: 2px solid #86efac;
    box-shadow: 0 0 60px rgba(134, 239, 172, 0.2);
    background: rgba(5, 15, 10, 0.95);
    max-height: 90vh;
    overflow-y: auto;
  `;

  const lang = store.getLanguage();
  const scriptUrl = "https://script.google.com/macros/s/AKfycbwRknj4-6Lphd0sz-4rK-v-VhQ3X-PmKah55lFmaVpuPMe22eVZHqNNzlOvNiNUECeR/exec";

  const pollBirds = [
    { name: '黑臉琵鷺', img: './footage/encyclopedia/images/黑臉琵鷺.jpg' },
    { name: '紅耳鵯', img: './footage/encyclopedia/images/紅耳鵯.jpg' },
    { name: '珠頸斑鳩', img: './footage/encyclopedia/images/珠頸斑鳩.jpg' },
    { name: '灰斑鳩', img: './footage/encyclopedia/images/灰斑鳩.jpg' },
    { name: '樹麻雀', img: './footage/encyclopedia/images/樹麻雀.jpg' },
    { name: '牛背鷺', img: './footage/encyclopedia/images/牛背鷺.jpg' },
    { name: '鵲鴝', img: './footage/encyclopedia/images/鵲鴝.jpg' },
    { name: '普通翠鳥', img: './footage/encyclopedia/images/普通翠鳥.jpg' },
    { name: '綠背姬鶲', img: './footage/encyclopedia/images/綠背姬鶲.jpg' },
    { name: '黃眉柳鶯', img: './footage/encyclopedia/images/黃眉柳鶯.jpg' },
    { name: '洋燕', img: './footage/encyclopedia/images/洋燕.jpg' },
    { name: '原鴿', img: './footage/encyclopedia/images/原鴿.jpg' },
    { name: '黑領椋鳥', img: './footage/encyclopedia/images/黑領椋鳥.jpg' },
    { name: '噪鵑', img: './footage/encyclopedia/images/噪鵑.jpg' }
  ];

  const renderInitialState = () => {
    modalContent.innerHTML = `
      <div style="text-align:center; margin-bottom:2.5rem;">
        <div style="background:var(--primary-color); color:black; display:inline-block; padding:6px 20px; border-radius:30px; font-size:0.8rem; font-weight:900; margin-bottom:1rem; letter-spacing:2px;">CAMPUS LIVE POLL</div>
        <h2 style="font-size:3rem; color:#86efac; margin-bottom:0.5rem;" data-i18n="vote-manual">${lang === 'en' ? 'Favourite Bird Vote 🗳️' : '心水鳥類投票 🗳️'}</h2>
        <p style="font-size:1.2rem; color:var(--text-muted);" data-i18n="vote-subtitle">${lang === 'en' ? 'Select the bird you hope to see on campus today!' : '選出你今天最想在校園見到的鳥類！'}</p>
        <button id="close-vote" style="position:absolute; top:20px; right:20px; background:rgba(255,255,255,0.05); border:none; color:white; font-size:2rem; cursor:pointer; width:50px; height:50px; border-radius:50%;">&times;</button>
      </div>

      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap:1.2rem; margin-bottom:2rem;">
        ${pollBirds.map(b => `
          <div class="poll-card" data-bird="${b.name}">
            <img src="${b.img}" loading="lazy" />
            <div class="poll-card-overlay">
              <span style="font-weight:900; font-size:1rem; text-shadow:0 2px 4px rgba(0,0,0,0.8);">${b.name}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    modalContent.querySelectorAll('.poll-card').forEach(card => {
      card.onclick = () => castVote(card.dataset.bird);
    });

    modalContent.querySelector('#close-vote').onclick = () => {
      modal.style.opacity = '0';
      setTimeout(() => modal.remove(), 400);
    };
  };

  const castVote = async (bird) => {
    window.mascot.say(`選得好！${bird} 真的很可愛！Gu!`);
    modalContent.innerHTML = `<div style="text-align:center; padding:5rem 0;"><div class="loading-spinner"></div><h3 style="margin-top:2rem;">同步數據中... Syncing Data...</h3></div>`;

    try {
      const finalUrl = `${scriptUrl}?bird=${encodeURIComponent(bird)}&user=${encodeURIComponent(store.getUserName() || 'Guest')}&timestamp=${encodeURIComponent(new Date().toISOString())}`;
      await fetch(finalUrl, { mode: 'no-cors' });
      // Minor delay to let Google Sheets process before fetching results
      setTimeout(() => renderResults(), 1200);
    } catch (e) {
      console.error("Voting submission failed:", e);
      renderResults();
    }
  };

  const renderResults = async () => {
    window.mascot.say("投票成功！我們一起來看看人氣排名吧！Gu Gu!");
    modalContent.innerHTML = `<div style="text-align:center;"><h3 style="color:#86efac;">載入排行榜中...</h3></div>`;

    try {
      const res = await fetch(`${scriptUrl}?action=get&cb=${Date.now()}`);
      if (!res.ok) throw new Error("Fetch failed");
      const json = await res.json();
      const counts = json.results || {};

      const sorted = pollBirds.map(b => ({
        ...b,
        votes: parseInt(counts[b.name] || 0)
      })).sort((a, b) => b.votes - a.votes);

      const total = sorted.reduce((sum, b) => sum + b.votes, 0);

      modalContent.innerHTML = `
        <div style="text-align:center; margin-bottom:2rem;">
          <h2 style="font-size:2.5rem; color:#86efac;">📊 即時投票排行</h2>
          <p style="color:var(--text-muted);">目前共有 ${total} 位探險家參與投票</p>
        </div>
        
        <div style="max-width:800px; margin:0 auto; display:flex; flex-direction:column; gap:1.5rem;">
          ${sorted.slice(0, 6).map((b, idx) => `
            <div>
              <div style="display:flex; justify-content:space-between; margin-bottom:5px; font-weight:800;">
                <span>${idx + 1}. ${b.name}</span>
                <span style="color:#86efac;">${b.votes} 票</span>
              </div>
              <div class="chart-bar-container">
                <div class="chart-bar-fill" style="width: ${(b.votes / sorted[0].votes * 100)}%"></div>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="text-align:center; margin-top:3rem;">
          <button class="btn-primary" id="finish-vote" style="padding:15px 40px; font-size:1.2rem;">進入門戶探索 ✨</button>
        </div>
      `;

      modalContent.querySelector('#finish-vote').onclick = () => {
        modal.style.opacity = '0';
        setTimeout(() => modal.remove(), 400);
      };
    } catch (e) {
      modalContent.innerHTML = `<div style="text-align:center;"><p>無法載入即時榜單，但你的投票已記錄！</p><button class="btn-primary" id="err-close">關閉</button></div>`;
      modalContent.querySelector('#err-close').onclick = () => modal.remove();
    }
  };

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  requestAnimationFrame(() => {
    modal.style.opacity = '1';
    renderInitialState();
  });
}
