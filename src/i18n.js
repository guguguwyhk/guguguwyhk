import { store } from './store.js';

export const translations = {
  // =================== Navigation ===================
  'nav-about':        { zh: '了解我們',        en: 'About Us' },
  'nav-stream':       { zh: '直播鳥屋',        en: 'Live Birdhouse' },
  'nav-encyclopedia': { zh: '校園鳥類百科',    en: 'Encyclopedia' },
  'nav-map':          { zh: '華仁生態地圖',    en: 'WYC Eco Map' },
  'nav-game':         { zh: '羽翼守護大冒險',    en: 'Guardian Adventure' },
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
  'card-game-title':  { zh: '羽翼守護大冒險',    en: 'Guardian Adventure' },
  'card-game-desc':   { zh: '化身守護者，翱翔天空',  en: 'Fly high as a campus guardian' },
  'card-about-title': { zh: '關於我們',        en: 'About Us' },
  'card-about-desc':  { zh: 'The IDEEA Team', en: 'The IDEEA Team' },

  // =================== Voting Modal ===================
  'vote-manual':      { zh: '🗳️ 校園生態小投票', en: '🗳️ Campus Ecology Vote' },
  'vote-subtitle':    { zh: '你覺得校園中哪種鳥類最吸引你？你的選擇將幫助我們改進觀察計劃！', en: 'Which bird is the most attractive to you? Your choice helps our plan!' },
  'poll-live-rank':   { zh: '📊 即時投票排行',   en: '📊 Live Poll Results' },
  'poll-total-votes': { zh: '目前共有 {n} 位探險家參與投票', en: 'Currently {n} explorers voted' },
  'poll-vote-btn':    { zh: '投牠一票 ✨',      en: 'Vote for it ✨' },

  // =================== Encyclopedia ===================
  'ency-title':       { zh: '校園鳥類百科',  en: 'Campus Encyclopedia' },
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
  'clip-history':     { zh: '鳥屋片段',            en: 'Birdhouse Clips' },
  'clip-snapshot':    { zh: '鳥屋快照',            en: 'Birdhouse Snapshot' },

  // =================== Game Page ===================
  'nav-game':         { zh: '羽翼守護大冒險',          en: 'Guardian Adventure' },
  'game-start-title': { zh: 'WINGED GUARDIAN',     en: 'WINGED GUARDIAN' },
  'game-start-desc':  { zh: '化身校園守護者！在天空中飛翔、收集果實並巧妙避開礙物。', en: 'Become a guardian! Fly high, collect fruits, and dodge obstacles.' },
  'game-start-btn':   { zh: '開始遊戲',          en: 'START GAME' },
  'game-score':       { zh: '得分',               en: 'SCORE' },
  'game-lives':       { zh: '生命',               en: 'LIVES' },
  'game-level':       { zh: '等級',               en: 'LEVEL' },
  'game-lvl-2':       { zh: '速度提升！', en: 'Increase Speed' },
  'game-lvl-3':       { zh: '更快更密集！', en: 'Faster Obstacles!' },
  'game-lvl-max':     { zh: '最高難度！', en: 'Max Difficulty!' },
  'game-failed':      { zh: '任務失敗',          en: 'MISSION FAILED' },
  'game-try-again':   { zh: '再試一次',           en: 'RESTART GAME ↩' },
  'game-final-score': { zh: '你的最終得分：',      en: 'Your final score:' },
  'game-level-reached': { zh: '到達等級：',        en: 'Level reached:' },
  'game-cheer-msg':   { zh: 'Gu Gu! 獲得了 {score} 分！不要氣餒！', en: 'Gu Gu! Got {score} points! Keep it up!' },
  'game-rule-1':      { zh: '🖱️ 點擊 / 空白鍵：飛行', en: '🖱️ Click / Space: Fly Up' },
  'game-rule-2':      { zh: '✨ 捕捉: +10分',          en: '✨ Catch: +10pts' },
  'game-rule-3':      { zh: '🐦‍⬛ 烏鴉: -1 生命',       en: '🐦‍⬛ Crows: -1 Life' },
  'game-level-up':    { zh: '等級提升！ LEVEL UP',    en: 'LEVEL UP!' },
  'game-level-alert': { zh: '恭喜！等級已提升至 {level}', en: 'Congrats! Reached Level {level}' },

  // =================== Login ===================
  'login-welcome':    { zh: '24/7 實時監測智慧網站',    en: '24/7 Monitoring Smart Website' },
  'login-enter-name': { zh: '請輸入你的名字/暱稱', en: 'Enter your name / nickname' },
  'login-start':      { zh: '開始探索校園 🌿',     en: 'Start Exploring 🌿' },
  'login-skip':       { zh: '略過',                en: 'Skip' },
  'showoff-subtitle': { zh: '展覽數據互動中心 EXHIBITION HUB', en: 'EXHIBITION INTERACTIVE DATA HUB' },
  'login-bad-name':   { zh: '哎呀！這個名字不太禮貌喔，換一個吧！Gu Gu!', en: 'Oops! That name is not very polite, try another one! Gu Gu!' },
  'login-welcome-name': { zh: 'Gu Gu Gu! 歡迎你，{name}！', en: 'Gu Gu Gu! Welcome, {name}!' },
  'login-welcome-guest': { zh: '歡迎你，探險家！', en: 'Welcome, Explorer!' },
  'map-loading-mascot': { zh: '正在為你準備校園地圖！Gu Gu!', en: 'Preparing the campus map for you! Gu Gu!' },
  'map-ready-mascot': { zh: '這裡是華仁生態地圖！Gu!', en: 'Here is the WYC Eco Map! Gu!' },
  'vote-cast-mascot': { zh: '太棒了！{bird} 真的是個好選擇！Gu Gu!', en: 'Excellent! {bird} is an amazing choice! Gu Gu!' },
  'vote-syncing': { zh: '同步數據中...', en: 'SYNCING DATA...' },
  'vote-calculating': { zh: '正在計算票數...', en: 'CALCULATING VOTES...' },
  'vote-explorers-count': { zh: '位探險家參與了投票', en: 'EXPLORERS JOINED THE VOTE' },
  'showoff-live-msg': { zh: '剛剛收到！{name} 剛剛投票給了 {bird}！目前 {bird} 已經獲得 {count} 票！', en: 'News! {name} just voted for {bird}! Now {bird} has {count} votes!' },
  'stream-relay-disconnected': { zh: '中繼站連線已中斷', en: 'Relay server disconnected' },

  // =================== About Us ===================
  'about-hero-title': { zh: '我們是華仁 3K 第四組', en: 'We are group 4 from 3K' },
  'about-hero-sub':   { zh: 'IDEEA 項目 — 香港華仁書院', en: 'IDEEA Project — Wah Yan College, Hong Kong' },
  'about-q1': { zh: '是什麼觸發你們開展這個項目？', en: 'What leads you to make this project?' },
  'about-a1': { zh: '我們觀察到同學對大自然的興趣相對較少。因此，我們希望製作一些東西，讓同學多留意校園的自然生態。', en: 'We observed that our schoolmates have less attraction to nature. So, we wanted to let them pay more attention to campus ecology.' },
  'about-q2': { zh: '為什麼選擇製作鳥屋？', en: 'Why did you choose to make a bird house?' },
  'about-a2': { zh: '我們發現同學對鳥類的資訊掌握得相對較少。因此，我們製作了一個結合互聯網攝影機的鳥屋，讓大家能輕鬆獲取鳥類資訊。', en: 'We found that students have relatively little information about birds. A bird house with an IoT camera lets students stay informed easily.' },
  'about-q3': { zh: '介紹一下你們的產品', en: 'Introduce your product' },
  'about-a3': { zh: '我們製作了一個供鳥類休息的鳥屋，並在裡面裝設了攝影機。攝影機會連接到這個網站，你可以觀看直播並獲取相關資訊。', en: 'We made a bird house for resting, equipped with a camera connected to our website for live viewing and information.' },
  'about-ig-nag': { zh: '你可以追蹤我們的 IG @gugugu_wyhk 獲取最新消息', en: 'Follow our IG @gugugu_wyhk for the newest information.' },
  'about-q4': { zh: '這個項目何時開始？', en: 'How did it start?' },
  'about-a4': { zh: '我們自本學年初開始，這是我們 IDEEA 項目的一部分。', en: 'We started at the beginning of this school year as part of our IDEEA Project.' },
  'about-q5': { zh: '為什麼叫 Gu Gu Gu？', en: 'Why "Gu Gu Gu"?' },
  'about-a5': { zh: '「GU GU GU」是鴿子鳴叫聲的擬聲詞，我們覺得很有代表性，所以用了它作為名字。', en: 'The word "GU GU GU" is an onomatopoeia for pigeon cooing, which we used as our name.' },
  'about-q6': { zh: '最困難的部分是什麼？', en: 'The most difficult part?' },
  'about-a6': { zh: '最難的是如何在鳥屋內安裝能夠連接互聯網並傳輸實時影像的攝影機。', en: 'Implementing an IoT camera inside a bird house for live stream transfer was the biggest challenge.' },
  'about-follow': { zh: '追蹤我們以獲取更新！', en: 'Follow our updates!' },
  'about-team-title': { zh: 'IDEEA Project 3K 第四組', en: 'IDEEA Project 3K Group 4' },
  'about-team-names': { zh: '林澔廷 · 陳柏顥 · 陳躍霆 · 劉曜綸', en: 'Astin Lam · Brayden Chan · Cyrus Chan · Justin Lau' },

  // =================== Bird Names ===================
  'bird-spoonbill':   { zh: '黑臉琵鷺', en: 'Black-faced Spoonbill' },
  'bird-bulbul':      { zh: '紅耳鵯', en: 'Red-whiskered Bulbul' },
  'bird-dove-spotted':{ zh: '珠頸斑鳩', en: 'Spotted Dove' },
  'bird-dove-collared':{ zh: '灰斑鳩', en: 'Collared Dove' },
  'bird-sparrow':     { zh: '樹麻雀', en: 'Tree Sparrow' },
  'bird-egret':       { zh: '牛背鷺', en: 'Cattle Egret' },
  'bird-magpie':      { zh: '鵲鴝', en: 'Magpie Robin' },
  'bird-kingfisher':  { zh: '普通翠鳥', en: 'Common Kingfisher' },
  'bird-flycatcher':  { zh: '綠背姬鶲', en: 'Green-back Flycatcher' },
  'bird-warbler':     { zh: '黃眉柳鶯', en: 'Yellow-browed Warbler' },
  'bird-swallow':     { zh: '洋燕', en: 'Pacific Swallow' },
  'bird-pigeon':      { zh: '原鴿', en: 'Rock Pigeon' },
  'bird-starling':    { zh: '黑領椋鳥', en: 'Black-collared Starling' },
  'bird-koel':        { zh: '噪鵑', en: 'Asian Koel' },
  // =================== Daily Facts ===================
  'fact-1': { zh: '紅耳鵯最喜歡在校園的榕樹上聚集！', en: 'Light-vented Bulbuls love gathering on the banyan trees!' },
  'fact-2': { zh: '黑臉琵鷺是瀕危物種，偶爾能在香港的濕地見到。', en: 'The Black-faced Spoonbill is an endangered species seen in HK wetlands.' },
  'fact-3': { zh: '如果幸運的話，你可以在操場邊看到珠頸斑鳩吃蟲子。', en: 'If you\'re lucky, spot a Spotted Dove eating insects by the pitch!' },
  'fact-4': { zh: '華仁的生態池裡有多種水生植物，吸引了許多鳥類停駐。', en: 'The eco-pond supports diverse plants, attracting many birds.' },
  'fact-5': { zh: '樹麻雀最喜歡在草叢中跳躍找尋種子。', en: 'Tree Sparrows love hopping through shrubs to find seeds.' },
  'fact-6': { zh: '有些鳥類會記住曾經餵過牠們的人喔！', en: 'Some birds can actually remember the humans who have fed them!' },
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

  // Update Daily Fact
  const factEl = document.getElementById('daily-fact');
  if (factEl && factEl.dataset.factIndex) {
    const key = `fact-${factEl.dataset.factIndex}`;
    if (translations[key] && translations[key][lang]) {
      factEl.textContent = translations[key][lang];
    }
  }

  // Update Bird Modal Details if open (only for non-silent updates to prevent recursion)
  if (!silent && modal && !modal.classList.contains('hidden') && window.gugugu_bird_modal) {
    window.gugugu_bird_modal.refreshI18n();
  }

  // Mascot confirms switch
  if (window.mascot && !silent) {
    window.mascot.say(lang === 'en' ? 'Language: English 🇬🇧' : '已切換至繁體中文 🇭🇰', 2500);
  }
}
