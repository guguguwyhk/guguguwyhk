import { store } from './store.js';

export const translations = {
  // =================== Navigation ===================
  'nav-about':        { zh: '了解我們',        en: 'About Us' },
  'nav-stream':       { zh: '直播鳥屋',        en: 'Live Birdhouse' },
  'nav-encyclopedia': { zh: '校園鳥類百科',    en: 'Encyclopedia' },
  'nav-map':          { zh: '生態地圖導覽',    en: 'Eco Map' },
  'nav-game':         { zh: '守護者挑戰',      en: 'Guardian Challenge' },
  'nav-showoff':      { zh: '展覽模式',        en: 'Exhibition Mode' },
  'back-home':        { zh: '← 返回主頁',      en: '← Back Home' },
  'logout':           { zh: '登出帳號',        en: 'Logout' },

  // =================== Home Page ===================
  'home-title':       { zh: 'Gu Gu Gu 🌿',    en: 'Gu Gu Gu 🌿' },
  'daily-highlight':  { zh: '✨ 每日鳥事',     en: '✨ Daily Highlight' },
  'card-stream-title':{ zh: '直播鳥屋',        en: 'Live Birdhouse' },
  'card-stream-desc': { zh: '實時觀察生態狀態', en: 'Real-time ecosystem feed' },
  'card-ency-title':  { zh: '華仁鳥類百科',    en: 'Bird Encyclopedia' },
  'card-ency-desc':   { zh: '探索校園野生動物', en: 'Discover campus wildlife' },
  'card-map-title':   { zh: '華仁生態地圖',    en: 'WYC Eco Map' },
  'card-map-desc':    { zh: '校園互動探索',    en: 'Campus explore' },
  'card-game-title':  { zh: '守護者挑戰',      en: 'Guardian Challenge' },
  'card-game-desc':   { zh: '雀仔食蟲小遊戲',  en: 'Bird flight mini-game' },
  'card-about-title': { zh: '關於我們',        en: 'About Us' },
  'card-about-desc':  { zh: 'The IDEEA Team', en: 'The IDEEA Team' },

  // =================== Voting Modal ===================
  'vote-manual':      { zh: '心水鳥類投票 🗳️', en: 'Favourite Bird Vote 🗳️' },
  'vote-subtitle':    { zh: '選出你今天最想在校園見到的鳥類！', en: 'Which bird do you hope to see today?' },
  'vote-sync':        { zh: '你的投票將即時同步至校園數據中心', en: 'Your vote syncs to the campus data center' },

  // =================== Encyclopedia ===================
  'ency-title':       { zh: '校園鳥類百科 📖',  en: 'Campus Encyclopedia 📖' },
  'ency-search-placeholder': { zh: '搜尋鳥類...',  en: 'Search for birds...' },
  'ency-sort-default':{ zh: '預設排序',          en: 'Default' },
  'ency-sort-size':   { zh: '按體型',             en: 'By Size' },
  'ency-sort-prob':   { zh: '按出沒機率',         en: 'By Probability' },
  'learn-more':       { zh: '🌿 深入了解',        en: '🌿 Learn More' },
  'similar-birds':    { zh: '🔍 你看到的可能也是...', en: '🔍 You might also see...' },
  'eco-data':         { zh: '📊 生態數據',        en: '📊 Ecology Data' },
  'stat-size':        { zh: '體型',               en: 'Size' },
  'stat-rate':        { zh: '出沒機率',           en: 'Probability' },
  'stat-rarity':      { zh: '稀有度',             en: 'Rarity' },
  'btn-voice':        { zh: '🎵 聆聽叫聲',        en: '🎵 Bird Call' },
  'btn-tts':          { zh: '🔊 語音朗讀',        en: '🔊 Read Aloud' },

  // =================== Stream Page ===================
  'stream-live-tab':  { zh: '🔴 即時影像',        en: '🔴 Live Feed' },
  'stream-history-tab':{ zh: '⏪ 歷史回放',       en: '⏪ History' },
  'stream-offline':   { zh: '觀測站離線中',        en: 'Observatory Offline' },
  'stream-offline-desc':{ zh: '攝影機維修中，請查看歷史片段。', en: 'Camera in maintenance. See history.' },
  'env-condition':    { zh: '校園環境',            en: 'Campus Conditions' },
  'local-time':       { zh: '本地時間',            en: 'Local Time' },
  'cond-good':        { zh: '良好',                en: 'Good' },
  'clip-feeding':     { zh: '進食片段 1',          en: 'Feeding Clip 1' },
  'clip-snapshot':    { zh: '鳥屋快照',            en: 'Birdhouse Snapshot' },

  // =================== Game Page ===================
  'nav-game':         { zh: '守護者挑戰',          en: 'Guardian Challenge' },
  'game-start-title': { zh: 'GUARDIAN FLIGHT',     en: 'GUARDIAN FLIGHT' },
  'game-start-desc':  { zh: '守護校園！飛行躲避石柱，收集果實，擊退入侵的烏鴉！', en: 'Protect the campus! Fly past pillars, collect fruits, repel crow invaders!' },
  'game-start-btn':   { zh: 'START GAME',          en: 'START GAME' },
  'game-score':       { zh: 'SCORE',               en: 'SCORE' },
  'game-lives':       { zh: 'LIVES',               en: 'LIVES' },
  'game-level':       { zh: 'LEVEL',               en: 'LEVEL' },
  'game-failed':      { zh: 'MISSION FAILED',      en: 'MISSION FAILED' },
  'game-try-again':   { zh: 'TRY AGAIN',           en: 'TRY AGAIN' },

  // =================== Login ===================
  'login-welcome':    { zh: '華仁校園生態門戶',    en: 'Campus Eco Portal' },
  'login-enter-name': { zh: '請輸入你的名字/暱稱', en: 'Enter your name / nickname' },
  'login-start':      { zh: '開始探索校園 🌿',     en: 'Start Exploring 🌿' },
  'login-skip':       { zh: '略過',                en: 'Skip' },
  'showoff-subtitle': { zh: '展覽數據互動中心 EXHIBITION HUB', en: 'EXHIBITION INTERACTIVE DATA HUB' },
};

export function applyTranslation(lang, silent = false) {
  // Flash animation
  const app = document.getElementById('app');
  const modal = document.getElementById('bird-modal');
  const isModalOpen = modal && !modal.classList.contains('hidden');
  
  if (app && !silent && !isModalOpen) {
    app.classList.remove('lang-switch-anim');
    void app.offsetWidth;
    app.classList.add('lang-switch-anim');
  }

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][lang]) {
      const val = translations[key][lang];
      if (val.includes('<br>')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });
  
  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[key] && translations[key][lang]) {
      el.placeholder = translations[key][lang];
    }
  });

  // Lang toggle button label
  const langBtn = document.getElementById('global-lang-btn');
  if (langBtn) {
    const spanEl = langBtn.querySelector('span');
    if (spanEl) spanEl.innerText = lang === 'zh' ? 'EN' : '中';
  }

  // Update home greeting if showing
  const greetingEl = document.getElementById('home-greeting');
  if (greetingEl) {
    const name = store.getUserName() || '探險家';
    greetingEl.textContent = lang === 'en'
      ? `Hello, ${name}! Ready to explore today?`
      : `哈囉，${name}！準備好今天的探索了嗎？`;
  }

  // Update Bird Modal Details if open
  if (modal && !modal.classList.contains('hidden') && window.refreshBirdModal) {
    window.refreshBirdModal();
  }

  // Mascot confirms switch
  if (window.mascot && !silent) {
    window.mascot.say(lang === 'en' ? 'Language: English 🇬🇧' : '已切換至繁體中文 🇭🇰', 2500);
  }
}
