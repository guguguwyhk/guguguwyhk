import{t as e}from"./store-ByPxTzqk.js";var t=Object.defineProperty,n=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var r=n({applyTranslation:()=>a,translations:()=>i}),i={"nav-about":{zh:`了解我們`,en:`About Us`},"nav-stream":{zh:`直播鳥屋`,en:`Live Birdhouse`},"nav-encyclopedia":{zh:`校園鳥類百科`,en:`Encyclopedia`},"nav-map":{zh:`生態地圖導覽`,en:`Eco Map`},"nav-game":{zh:`守護者挑戰`,en:`Guardian Challenge`},"nav-showoff":{zh:`展覽模式`,en:`Exhibition Mode`},"back-home":{zh:`← 返回主頁`,en:`← Back Home`},logout:{zh:`登出帳號`,en:`Logout`},"home-title":{zh:`Gu Gu Gu 🌿`,en:`Gu Gu Gu 🌿`},"daily-highlight":{zh:`✨ 每日鳥事`,en:`✨ Daily Highlight`},"card-stream-title":{zh:`直播鳥屋`,en:`Live Birdhouse`},"card-stream-desc":{zh:`實時觀察生態狀態`,en:`Real-time ecosystem feed`},"card-ency-title":{zh:`華仁鳥類百科`,en:`Bird Encyclopedia`},"card-ency-desc":{zh:`探索校園野生動物`,en:`Discover campus wildlife`},"card-map-title":{zh:`華仁生態地圖`,en:`WYC Eco Map`},"card-map-desc":{zh:`校園互動探索`,en:`Campus explore`},"card-game-title":{zh:`守護者挑戰`,en:`Guardian Challenge`},"card-game-desc":{zh:`雀仔食蟲小遊戲`,en:`Bird flight mini-game`},"card-about-title":{zh:`關於我們`,en:`About Us`},"card-about-desc":{zh:`The IDEEA Team`,en:`The IDEEA Team`},"vote-manual":{zh:`心水鳥類投票 🗳️`,en:`Favourite Bird Vote 🗳️`},"vote-subtitle":{zh:`選出你今天最想在校園見到的鳥類！`,en:`Which bird do you hope to see today?`},"vote-sync":{zh:`你的投票將即時同步至校園數據中心`,en:`Your vote syncs to the campus data center`},"ency-title":{zh:`校園鳥類百科 📖`,en:`Campus Encyclopedia 📖`},"ency-search-placeholder":{zh:`搜尋鳥類...`,en:`Search for birds...`},"ency-sort-default":{zh:`預設排序`,en:`Default`},"ency-sort-size":{zh:`按體型`,en:`By Size`},"ency-sort-prob":{zh:`按出沒機率`,en:`By Probability`},"learn-more":{zh:`🌿 深入了解`,en:`🌿 Learn More`},"similar-birds":{zh:`🔍 你看到的可能也是...`,en:`🔍 You might also see...`},"eco-data":{zh:`📊 生態數據`,en:`📊 Ecology Data`},"stat-size":{zh:`體型`,en:`Size`},"stat-rate":{zh:`出沒機率`,en:`Probability`},"stat-rarity":{zh:`稀有度`,en:`Rarity`},"btn-voice":{zh:`🎵 聆聽叫聲`,en:`🎵 Bird Call`},"btn-tts":{zh:`🔊 語音朗讀`,en:`🔊 Read Aloud`},"stream-live-tab":{zh:`🔴 即時影像`,en:`🔴 Live Feed`},"stream-history-tab":{zh:`⏪ 歷史回放`,en:`⏪ History`},"stream-offline":{zh:`觀測站離線中`,en:`Observatory Offline`},"stream-offline-desc":{zh:`攝影機維修中，請查看歷史片段。`,en:`Camera in maintenance. See history.`},"env-condition":{zh:`校園環境`,en:`Campus Conditions`},"local-time":{zh:`本地時間`,en:`Local Time`},"cond-good":{zh:`良好`,en:`Good`},"clip-feeding":{zh:`進食片段 1`,en:`Feeding Clip 1`},"clip-snapshot":{zh:`鳥屋快照`,en:`Birdhouse Snapshot`},"nav-game":{zh:`守護者挑戰`,en:`Guardian Challenge`},"game-start-title":{zh:`GUARDIAN FLIGHT`,en:`GUARDIAN FLIGHT`},"game-start-desc":{zh:`守護校園！飛行躲避石柱，收集果實，擊退入侵的烏鴉！`,en:`Protect the campus! Fly past pillars, collect fruits, repel crow invaders!`},"game-start-btn":{zh:`START GAME`,en:`START GAME`},"game-score":{zh:`SCORE`,en:`SCORE`},"game-lives":{zh:`LIVES`,en:`LIVES`},"game-level":{zh:`LEVEL`,en:`LEVEL`},"game-failed":{zh:`MISSION FAILED`,en:`MISSION FAILED`},"game-try-again":{zh:`TRY AGAIN`,en:`TRY AGAIN`},"login-welcome":{zh:`華仁校園生態門戶`,en:`Campus Eco Portal`},"login-enter-name":{zh:`請輸入你的名字/暱稱`,en:`Enter your name / nickname`},"login-start":{zh:`開始探索校園 🌿`,en:`Start Exploring 🌿`},"login-skip":{zh:`略過`,en:`Skip`},"showoff-subtitle":{zh:`展覽數據互動中心 EXHIBITION HUB`,en:`EXHIBITION INTERACTIVE DATA HUB`}};function a(t,n=!1){let r=document.getElementById(`app`),a=document.getElementById(`bird-modal`),o=a&&!a.classList.contains(`hidden`);r&&!n&&!o&&(r.classList.remove(`lang-switch-anim`),r.offsetWidth,r.classList.add(`lang-switch-anim`)),document.querySelectorAll(`[data-i18n]`).forEach(e=>{let n=e.getAttribute(`data-i18n`);if(i[n]&&i[n][t]){let r=i[n][t];r.includes(`<br>`)?e.innerHTML=r:e.textContent=r}}),document.querySelectorAll(`[data-i18n-placeholder]`).forEach(e=>{let n=e.getAttribute(`data-i18n-placeholder`);i[n]&&i[n][t]&&(e.placeholder=i[n][t])});let s=document.getElementById(`global-lang-btn`);if(s){let e=s.querySelector(`span`);e&&(e.innerText=t===`zh`?`EN`:`中`)}let c=document.getElementById(`home-greeting`);if(c){let n=e.getUserName()||`探險家`;c.textContent=t===`en`?`Hello, ${n}! Ready to explore today?`:`哈囉，${n}！準備好今天的探索了嗎？`}a&&!a.classList.contains(`hidden`)&&window.refreshBirdModal&&window.refreshBirdModal(),window.mascot&&!n&&window.mascot.say(t===`en`?`Language: English 🇬🇧`:`已切換至繁體中文 🇭🇰`,2500)}function o(t){window.mascot.hide(),t.innerHTML=`
    <div class="login-wrapper" style="display:flex; justify-content:center; align-items:center; height:100vh;">
      <div class="glass-panel fade-in" style="padding: 4rem; text-align: center; max-width: 650px; width: 100%; position: relative;">
        <img src="/removedbg_gugugu.png" alt="Gu Gu Gu" style="width: 220px; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.3)); margin-bottom: 1.5rem; animation: mascotBounce 2s infinite ease-in-out;" />
        <h1 style="font-size: 3rem; margin-bottom: 0.5rem; color:var(--primary-color);">Gu Gu Gu</h1>
        <h2 style="font-size: 1.5rem; font-weight:500; color:var(--text-muted); margin-bottom: 2.5rem;">Campus Ecology Portal</h2>
        
        <form id="login-form">
          <input type="text" id="username" class="glass-input" placeholder="請輸入你的名字/暱稱" data-i18n-placeholder="login-enter-name" style="margin-bottom: 2rem; padding: 20px; font-size: 1.2rem;" autocomplete="off" />
          <button type="submit" class="btn-primary" style="width: 100%; padding: 18px; margin-bottom: 1rem; font-size: 1.4rem;">開始探索校園 🌿</button>
        </form>
        
        <button id="skip-btn" class="btn-secondary" style="width: 100%; padding: 16px; border:none; font-size: 1.2rem;">略過</button>
      </div>
    </div>
  `,document.getElementById(`login-form`).addEventListener(`submit`,t=>{t.preventDefault();let n=document.getElementById(`username`).value.trim();if(n===`justinisblacknigga`){x.navigate(`showoff`);return}n&&(e.setUserName(n),window.mascot.show(),window.mascot.say(`Gu Gu Gu! 歡迎你，${n}！`,5e3),sessionStorage.setItem(`show_vote_modal`,`true`),x.navigate(`home`))}),document.getElementById(`skip-btn`).addEventListener(`click`,()=>{e.setUserName(`探險家`),window.mascot.show(),window.mascot.say(`歡迎你，探險家！`,5e3),sessionStorage.setItem(`show_vote_modal`,`true`),x.navigate(`home`)})}var s=[`紅耳鵯最喜歡在校園的榕樹上聚集！`,`黑臉琵鷺是瀕危物種，偶爾能在香港的濕地見到。`,`如果幸運的話，你可以在操場邊看到珠頸斑鳩吃蟲子。`,`華仁的生態池裡有多種水生植物，吸引了許多鳥類停駐。`,`樹麻雀最喜歡在草叢中跳躍找尋種子。`,`有些鳥類會記住曾經餵過牠們的人喔！`],c=[`Light-vented Bulbuls love gathering on the banyan trees in our campus!`,`The Black-faced Spoonbill is an endangered species, occasionally spotted in Hong Kong wetlands.`,`If you're lucky, you can spot a Spotted Dove eating insects by the football pitch!`,`The campus eco-pond supports diverse aquatic plants, attracting many bird species.`,`Tree Sparrows love hopping through shrubs to find seeds.`,`Some birds can actually remember the humans who have fed them!`];function l(t){window.mascot.show();let n=e.getLanguage(),r=n===`en`?c:s,i=r[Math.floor(Math.random()*r.length)],a=e.getUserName()||`探險家`;t.innerHTML=`
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
        <p id="daily-fact" style="font-size:1.2rem; line-height:1.6; word-wrap: break-word;">${i}</p>
      </div>
      <img src="/footage/about_us/birdhouse2.jpeg" class="daily-img" style="width: 180px; height: 120px; flex-shrink:0; object-fit:cover; border-radius:16px; box-shadow:0 4px 15px rgba(0,0,0,0.3);" onerror="this.style.display='none'" />
    </div>

    <!-- Grid Nav -->
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:2rem; margin-bottom:3rem;">
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
  `;let o=document.getElementById(`home-greeting`);o&&(o.textContent=n===`en`?`Hello, ${a}! Ready to explore today?`:`哈囉，${a}！準備好今天的探索了嗎？`),t.querySelectorAll(`.nav-card`).forEach(e=>{e.addEventListener(`click`,()=>{window.navigate(e.dataset.target)})});let l=t.querySelector(`#logout-btn`);l&&l.addEventListener(`click`,()=>{e.setUserName(null),window.navigate(`login`),window.mascot.say(`期待你的下次探索！Gu Gu!`)}),sessionStorage.getItem(`show_vote_modal`)===`true`&&(sessionStorage.removeItem(`show_vote_modal`),setTimeout(()=>u(t),800))}function u(t){let n=document.createElement(`div`);n.className=`centered-modal-overlay`,n.style.zIndex=`9998`,n.style.opacity=`0`,n.style.transition=`opacity 0.5s ease`;let r=document.createElement(`div`);r.className=`centered-modal-content glass-panel animate-poll-in`,r.style.cssText=`
    width: 95%;
    max-width: 1000px;
    padding: 3rem;
    position: relative;
    border: 2px solid #86efac;
    box-shadow: 0 0 60px rgba(134, 239, 172, 0.2);
    background: rgba(5, 15, 10, 0.95);
    max-height: 90vh;
    overflow-y: auto;
  `;let i=e.getLanguage(),a=`https://script.google.com/macros/s/AKfycbwRknj4-6Lphd0sz-4rK-v-VhQ3X-PmKah55lFmaVpuPMe22eVZHqNNzlOvNiNUECeR/exec`,o=[{name:`黑臉琵鷺`,img:`/footage/encyclopedia/images/黑臉琵鷺.jpg`},{name:`紅耳鵯`,img:`/footage/encyclopedia/images/紅耳鵯.jpg`},{name:`珠頸斑鳩`,img:`/footage/encyclopedia/images/珠頸斑鳩.jpg`},{name:`灰斑鳩`,img:`/footage/encyclopedia/images/灰斑鳩.jpg`},{name:`樹麻雀`,img:`/footage/encyclopedia/images/樹麻雀.jpg`},{name:`牛背鷺`,img:`/footage/encyclopedia/images/牛背鷺.jpg`},{name:`鵲鴝`,img:`/footage/encyclopedia/images/鵲鴝.jpg`},{name:`普通翠鳥`,img:`/footage/encyclopedia/images/普通翠鳥.jpg`},{name:`綠背姬鶲`,img:`/footage/encyclopedia/images/綠背姬鶲.jpg`},{name:`黃眉柳鶯`,img:`/footage/encyclopedia/images/黃眉柳鶯.jpg`},{name:`洋燕`,img:`/footage/encyclopedia/images/洋燕.jpg`},{name:`原鴿`,img:`/footage/encyclopedia/images/原鴿.jpg`},{name:`黑領椋鳥`,img:`/footage/encyclopedia/images/黑領椋鳥.jpg`},{name:`噪鵑`,img:`/footage/encyclopedia/images/噪鵑.jpg`}],s=()=>{r.innerHTML=`
      <div style="text-align:center; margin-bottom:2.5rem;">
        <div style="background:var(--primary-color); color:black; display:inline-block; padding:6px 20px; border-radius:30px; font-size:0.8rem; font-weight:900; margin-bottom:1rem; letter-spacing:2px;">CAMPUS LIVE POLL</div>
        <h2 style="font-size:3rem; color:#86efac; margin-bottom:0.5rem;" data-i18n="vote-manual">${i===`en`?`Favourite Bird Vote 🗳️`:`心水鳥類投票 🗳️`}</h2>
        <p style="font-size:1.2rem; color:var(--text-muted);" data-i18n="vote-subtitle">${i===`en`?`Select the bird you hope to see on campus today!`:`選出你今天最想在校園見到的鳥類！`}</p>
        <button id="close-vote" style="position:absolute; top:20px; right:20px; background:rgba(255,255,255,0.05); border:none; color:white; font-size:2rem; cursor:pointer; width:50px; height:50px; border-radius:50%;">&times;</button>
      </div>

      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap:1.2rem; margin-bottom:2rem;">
        ${o.map(e=>`
          <div class="poll-card" data-bird="${e.name}">
            <img src="${e.img}" loading="lazy" />
            <div class="poll-card-overlay">
              <span style="font-weight:900; font-size:1rem; text-shadow:0 2px 4px rgba(0,0,0,0.8);">${e.name}</span>
            </div>
          </div>
        `).join(``)}
      </div>
    `,r.querySelectorAll(`.poll-card`).forEach(e=>{e.onclick=()=>c(e.dataset.bird)}),r.querySelector(`#close-vote`).onclick=()=>{n.style.opacity=`0`,setTimeout(()=>n.remove(),400)}},c=async t=>{window.mascot.say(`選得好！${t} 真的很可愛！Gu!`),r.innerHTML=`<div style="text-align:center; padding:5rem 0;"><div class="loading-spinner"></div><h3 style="margin-top:2rem;">同步數據中... Syncing Data...</h3></div>`;try{let n=`${a}?bird=${encodeURIComponent(t)}&user=${encodeURIComponent(e.getUserName()||`Guest`)}&timestamp=${encodeURIComponent(new Date().toISOString())}`;await fetch(n,{mode:`no-cors`}),setTimeout(()=>l(),1200)}catch(e){console.error(`Voting submission failed:`,e),l()}},l=async()=>{window.mascot.say(`投票成功！我們一起來看看人氣排名吧！Gu Gu!`),r.innerHTML=`<div style="text-align:center;"><h3 style="color:#86efac;">載入排行榜中...</h3></div>`;try{let e=await fetch(`${a}?action=get&cb=${Date.now()}`);if(!e.ok)throw Error(`Fetch failed`);let t=(await e.json()).results||{},i=o.map(e=>({...e,votes:parseInt(t[e.name]||0)})).sort((e,t)=>t.votes-e.votes);r.innerHTML=`
        <div style="text-align:center; margin-bottom:2rem;">
          <h2 style="font-size:2.5rem; color:#86efac;">📊 即時投票排行</h2>
          <p style="color:var(--text-muted);">目前共有 ${i.reduce((e,t)=>e+t.votes,0)} 位探險家參與投票</p>
        </div>
        
        <div style="max-width:800px; margin:0 auto; display:flex; flex-direction:column; gap:1.5rem;">
          ${i.slice(0,6).map((e,t)=>`
            <div>
              <div style="display:flex; justify-content:space-between; margin-bottom:5px; font-weight:800;">
                <span>${t+1}. ${e.name}</span>
                <span style="color:#86efac;">${e.votes} 票</span>
              </div>
              <div class="chart-bar-container">
                <div class="chart-bar-fill" style="width: ${e.votes/i[0].votes*100}%"></div>
              </div>
            </div>
          `).join(``)}
        </div>

        <div style="text-align:center; margin-top:3rem;">
          <button class="btn-primary" id="finish-vote" style="padding:15px 40px; font-size:1.2rem;">進入門戶探索 ✨</button>
        </div>
      `,r.querySelector(`#finish-vote`).onclick=()=>{n.style.opacity=`0`,setTimeout(()=>n.remove(),400)}}catch{r.innerHTML=`<div style="text-align:center;"><p>無法載入即時榜單，但你的投票已記錄！</p><button class="btn-primary" id="err-close">關閉</button></div>`,r.querySelector(`#err-close`).onclick=()=>n.remove()}};n.appendChild(r),document.body.appendChild(n),requestAnimationFrame(()=>{n.style.opacity=`1`,s()})}var d=`modulepreload`,f=function(e){return`/guguguwyhk/`+e},p={},m=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=f(t,n),t in p)return;p[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:d,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},h=[{id:`1`,name:`紅耳鵯`,enName:`Red-whiskered Bulbul`,img:`/footage/encyclopedia/images/紅耳鵯.jpg`,audio:`/footage/encyclopedia/audio/紅耳鵯.mp3`,stats:{size:20,prob:95,activity:80,rare:5},details:`校園中最常見的常客！最具標誌性的是牠們頭上的黑色高聳冠羽，以及眼後那一小抹鮮豔的紅色。叫聲響亮清脆，經常成群在樹梢活動，尤其喜歡果實和花蜜。`,enDetails:`The most common visitor on campus! Most iconic are their tall black crests and the bright red patch behind their eyes. They have a loud, cheerful call and are often seen in groups around tree tops, especially favoring fruits and nectar.`,similar:`白頭鵯（頭頂白色，無紅色耳羽）、基丁氏馬島鵑。`,enSimilar:`White-vented Bulbul (white head, no red ear patch).`,similarIds:[`12`,`14`]},{id:`2`,name:`原鴿`,enName:`Rock Dove`,img:`/footage/encyclopedia/images/原鴿.jpg`,audio:`/footage/encyclopedia/audio/原鴿.mp3`,stats:{size:33,prob:99,activity:60,rare:1},details:`這就是我們 Gu Gu Gu 名稱的精神領袖！廣泛適應城市環境，羽色雖然多變（有灰色、棕色、純白），但頸部多帶有閃亮的綠紫色金屬光澤。牠們是典型的留鳥，常見於校園建築物邊緣。`,enDetails:`The mascot species for our "Gu Gu Gu" name! Highly adapted to urban life, their plumage varies (grey, brown, white), but typically features iridescent green and purple on the neck. They are year-round residents often seen on campus building ledges.`,similar:`珠頸斑鳩（頸部有珍珠狀斑點）、灰斑鳩。`,enSimilar:`Spotted Dove (checkered pattern on neck), Collared Dove.`,similarIds:[`8`,`10`]},{id:`3`,name:`珠頸斑鳩`,enName:`Spotted Dove`,img:`/footage/encyclopedia/images/珠頸斑鳩.jpg`,audio:`/footage/encyclopedia/audio/珠頸斑鳩.mp3`,stats:{size:30,prob:98,activity:40,rare:5},details:`頸部後方有一圈佈滿白色珍珠狀斑點的黑色羽毛，這是牠們名字的由來。飛行方式平穩，常在草地上漫步覓食。鳴叫聲低沉溫婉，給人一種寧靜的感覺。`,enDetails:`Named for the collar of white-spotted black feathers on the back of its neck. They fly in a steady manner and are often found foraging on grass. Their cooing call is low and gentle, bringing a sense of peace.`,similar:`原鴿（體型稍大，頸部有金屬光澤）、灰斑鳩。`,enSimilar:`Rock Dove (slightly larger with metallic neck sheen), Collared Dove.`,similarIds:[`2`,`10`]},{id:`4`,name:`鵲鴝`,enName:`Oriental Magpie-robin`,img:`/footage/encyclopedia/images/鵲鴝.jpg`,audio:`/footage/encyclopedia/audio/鵲鴝.mp3`,stats:{size:23,prob:85,activity:90,rare:15},details:`校園裡的「歌唱明星」。雄鳥黑白分明，常站在高處翹起尾巴高聲鳴囀。牠們領域意識極強，不時會在地面跳躍尋找昆蟲。是校園內最受歡迎的鳥類之一。`,enDetails:`The "Singing Star" of the campus. Males are sharply black and white, often seen singing from high perches with their tails cocked. Very territorial, they frequently hop on the ground searching for insects.`,similar:`黑領椋鳥（頸部有黑色領圈）、噪鵑。`,enSimilar:`Black-collared Starling (black collar on neck), Asian Koel.`,similarIds:[`14`,`6`]},{id:`5`,name:`普通翠鳥`,enName:`Common Kingfisher`,img:`/footage/encyclopedia/images/普通翠鳥.jpg`,audio:`/footage/encyclopedia/audio/普通翠鳥.mp3`,stats:{size:17,prob:30,activity:20,rare:75},details:`華麗的捕魚高手。全身佈滿閃亮的藍綠色羽毛，腹部為棕橘色。牠們常靜靜停在水邊的細枝上，一旦發現獵物便如箭般衝入水中。在校園的小噴池或水池邊偶爾能見到。`,enDetails:`A brilliant fishing master. Covered in shimmering turquoise feathers with a chestnut belly. They often sit motionless on branches over water, diving like an arrow once they spot prey. Occasionally seen near campus pond areas.`,similar:`白胸翡翠、藍翡翠（體型稍大）。`,enSimilar:`Other Kingfisher species (larger size).`,similarIds:[`11`]},{id:`6`,name:`噪鵑`,enName:`Asian Koel`,img:`/footage/encyclopedia/images/噪鵑.jpg`,audio:`/footage/encyclopedia/audio/噪鵑.mp3`,stats:{size:43,prob:60,activity:40,rare:40},details:`最具神秘感的鳥類之一。雄鳥全身漆黑，雙眼呈血紅色；雌鳥則佈滿褐色斑點。牠們的叫聲「古喔、古喔」極具穿透力，常在春夏季節的清晨響徹校園。`,enDetails:`One of the most mysterious birds on campus. Males are iridescent black with blood-red eyes; females are speckled with brown. Their "ko-el, ko-el" call is highly penetrating, often heard on spring mornings.`,similar:`黑領椋鳥、鵲鴝（體型小得多）。`,enSimilar:`Black-collared Starling, Oriental Magpie-robin (much smaller).`,similarIds:[`14`,`4`]},{id:`7`,name:`樹麻雀`,enName:`Eurasian Tree Sparrow`,img:`/footage/encyclopedia/images/樹麻雀.jpg`,audio:`/footage/encyclopedia/audio/樹麻雀.mp3`,stats:{size:14,prob:99,activity:85,rare:2},details:`校園中最平凡也最熱鬧的身影。特徵是臉頰中心有一個明顯的黑色斑。牠們極富好奇心，常成群在花圃、球場附近尋找食物碎屑。`,enDetails:`The most humble yet busiest bird on campus. Distinguished by the black patch in the center of its cheek. Sociable and curious, they are often found in groups searching for crumbs near fields and gardens.`,similar:`紅耳鵯（有冠羽）、洋燕。`,enSimilar:`Bulbuls (with crests), Swallows.`,similarIds:[`1`,`9`]},{id:`8`,name:`灰斑鳩`,enName:`Eurasian Collared-dove`,img:`/footage/encyclopedia/images/灰斑鳩.jpg`,audio:`/footage/encyclopedia/audio/灰斑鳩.mp3`,stats:{size:31,prob:55,activity:40,rare:45},details:`全身呈現均勻的淡粉褐灰色，後頸有一道細窄的黑色半環（領圈）。與珠頸斑鳩相比，牠們的體色更為簡潔流暢，鳴叫聲也更有韻律。`,enDetails:`Evenly pale pinkish-grey plumage with a thin black half-collar on the back of its neck. Sleeker in appearance than the Spotted Dove, with a rhythmic, pulsing cooing call.`,similar:`珠頸斑鳩（頸部有大量白點）、原鴿。`,enSimilar:`Spotted Dove (heavy white spots on neck), Rock Dove.`,similarIds:[`3`,`2`]},{id:`9`,name:`洋燕`,enName:`Pacific Swallow`,img:`/footage/encyclopedia/images/洋燕.jpg`,audio:`/footage/encyclopedia/audio/洋燕.mp3`,stats:{size:13,prob:70,activity:95,rare:25},details:`飛行大師。翅膀細長尖銳，喉部為暗紅色。常在球場上空快速飛翔捕食飛蟲。牠們與家燕相似，但尾羽沒有長長的尖端，體態更為精悍。`,enDetails:`A master of flight with slender, pointed wings and a dull red throat. Often seen darting over open fields hunting aerial insects. Similar to the Barn Swallow but with shorter, less forked tail streamers.`,similar:`樹麻雀（體型相近但飛行動作不同）、家燕。`,enSimilar:`Tree Sparrow, Barn Swallow.`,similarIds:[`7`,`1`]},{id:`10`,name:`牛背鷺`,enName:`Cattle Egret`,img:`/footage/encyclopedia/images/牛背鷺.jpg`,audio:`/footage/encyclopedia/audio/牛背鷺.mp3`,stats:{size:50,prob:45,activity:30,rare:55},details:`全身潔白，但在繁殖季節頭部、頸部和背部會長出橘黃色的羽毛，這是其名字由來。牠們不常捕魚，反而喜歡在草地跟隨動物或除草機捕捉昆蟲。`,enDetails:`Pure white plumage, though develops orange-yellow feathers on head and neck during breeding season. Unlike other egrets, they prefer hunting insects in grasslands rather than fishing in water.`,similar:`小白鷺（體型更大，腳趾黃色）、大白鷺。`,enSimilar:`Little Egret (larger, yellow feet), Great Egret.`,similarIds:[`13`]},{id:`11`,name:`綠背姬鶲`,enName:`Green-backed Flycatcher`,img:`/footage/encyclopedia/images/綠背姬鶲.jpg`,audio:`/footage/encyclopedia/audio/綠背姬鶲.mp3`,stats:{size:13,prob:20,activity:60,rare:85},details:`十分精緻珍稀的小鳥。雄鳥背部翠綠，喉部至腹部為鮮豔的鮮黃色，眼後有明顯的白色眉線。是過境期校園林間最亮眼的驚喜之一。`,enDetails:`A delicate and rare visitor. Males have a vibrant green back and a bright yellow underside with a distinct white eyebrow stripe. One of the many colorful surprises found on campus during migration seasons.`,similar:`黃眉柳鶯（顏色較暗淡）、綠繡眼。`,enSimilar:`Yellow-browed Warbler (duller colors), White-eye.`,similarIds:[`12`]},{id:`12`,name:`黃眉柳鶯`,enName:`Yellow-browed Warbler`,img:`/footage/encyclopedia/images/黃眉柳鶯.jpg`,audio:`/footage/encyclopedia/audio/黃眉柳鶯.mp3`,stats:{size:10,prob:50,activity:90,rare:65},details:`體型極小的「樹間精靈」。全身橄欖綠色，最明顯的是那一對鮮黃色的眉線和兩道淺色的翼帶。牠們非常活潑，在樹葉間快速跳動捕捉蚜蟲，叫聲尖銳婉轉。`,enDetails:`A tiny "woodland elf". Olive-green overall with two distinct pale wing bars and strong yellow eyebrows. Very active, hopping through leaves to catch insects with a thin, repeated call.`,similar:`綠背姬鶲（黃色更鮮豔）、其它柳鶯。`,enSimilar:`Green-backed Flycatcher (vibrant yellow), other Leaf Warblers.`,similarIds:[`11`]},{id:`13`,name:`黑臉琵鷺`,enName:`Black-faced Spoonbill`,img:`/footage/encyclopedia/images/黑臉琵鷺.jpg`,audio:`/footage/encyclopedia/audio/黑臉琵鷺.mp3`,stats:{size:75,prob:10,activity:20,rare:98},details:`極為珍稀的國際級保護鳥類！全身潔白，擁有最具特色的長琵琶狀黑嘴和黑色臉部。如果校園附近濕地出現牠的身影，那將是生態保育工作的一大肯定。`,enDetails:`A globally endangered species! Pure white plumage with a unique black spoon-shaped bill and black face. Their presence near campus wetland areas would be a significant milestone for local conservation efforts.`,similar:`牛背鷺（體型小得多）、白鷺。`,enSimilar:`Cattle Egret (much smaller), Great Egret.`,similarIds:[`10`]},{id:`14`,name:`黑領椋鳥`,enName:`Black-collared Starling`,img:`/footage/encyclopedia/images/黑領椋鳥.jpg`,audio:`/footage/encyclopedia/audio/黑領椋鳥.mp3`,stats:{size:28,prob:80,activity:65,rare:20},details:`這種椋鳥頸部有一道極為明顯的寬大黑色領圈，如戴著項鍊一般。叫聲響亮、複雜且帶有金屬質感，常能模仿其他鳥類的聲音。牠們集群活動，適應力極強。`,enDetails:`This starling has a very distinct wide black collar that looks like a necklace. Their calls are loud, complex, and metallic, often mimicking other birds. Sociable and highly adaptable.`,similar:`鵲鴝（體型較小）、原鴿。`,enSimilar:`Oriental Magpie-robin (smaller), Rock Dove.`,similarIds:[`4`,`2`]}];function g(e){let t=[...h],n=-1;e.innerHTML=`
    <div class="page-container">
      <header class="page-header">
        <h1 class="page-title" data-i18n="ency-title">校園鳥類百科 📖</h1>
        <button class="btn-secondary btn-back" id="back-btn" data-i18n="back-home">⬅ 返回主頁</button>
      </header>

      <div class="glass-panel" style="margin-bottom:2.5rem; display:flex; gap:1.5rem; flex-wrap:wrap; align-items:center; padding:1.5rem;">
        <input type="text" id="search-input" class="glass-input" data-i18n-placeholder="ency-search-placeholder" placeholder="搜尋鳥類 Name Search..." style="flex:1; min-width:300px; font-size:1.2rem; padding:18px;">
        <select id="sort-select" class="glass-input" style="width:250px; font-size:1.2rem; padding:18px;">
          <option value="default" data-i18n="ency-sort-default">預設排序 Default</option>
          <option value="size" data-i18n="ency-sort-size">按體型 Size</option>
          <option value="prob" data-i18n="ency-sort-prob">按機率 Probability</option>
        </select>
      </div>

      <div id="birds-grid" class="grid-responsive" style="display:grid; grid-template-columns: repeat(4, 1fr); gap:1.5rem;"></div>
    </div>

    <style>
      .stat-row { display:flex; align-items:center; gap:1.5rem; font-size:1.1rem; }
      .stat-row span:first-child { width:140px; color:#94a3b8; font-weight:600; }
      .stat-bar-bg { flex:1; height:16px; background:rgba(255,255,255,0.08); border-radius:8px; overflow:hidden; }
      .stat-bar { height:100%; border-radius:8px; transition: width 0.8s cubic-bezier(0.165, 0.84, 0.44, 1); }
      .stat-val { width:70px; text-align:right; font-weight:900; color:#fff; }
      
      .bird-card { border-radius:24px; overflow:hidden; cursor:pointer; background:rgba(255,255,255,0.04); border:1px solid var(--glass-border); transition:all 0.35s ease; position:relative; }
      .bird-card::after { content:"查看詳情 View Details"; position:absolute; bottom:0; left:0; width:100%; padding:15px; background:var(--primary-color); color:white; text-align:center; transform:translateY(100%); transition:transform 0.3s; font-weight:bold; }
      .bird-card:hover { border-color:var(--primary-color); transform:translateY(-12px) scale(1.02); box-shadow: 0 15px 30px rgba(0,0,0,0.5); }
      .bird-card:hover::after { transform:translateY(0); }
      .bird-card img { width:100%; height:260px; object-fit:cover; transition: transform 0.5s; }
      .bird-card:hover img { transform: scale(1.1); }
      .bird-card-info { padding:2rem; text-align:center; }
    </style>
  `;let i=()=>{let e=document.getElementById(`birds-grid`);e.innerHTML=t.map((e,t)=>`
      <div class="bird-card" onclick="window.openBirdModal(${t})">
        <img src="${e.img}" onerror="this.src='/favicon.svg';this.style.opacity='0.3';" />
        <div class="bird-card-info">
          <h3 style="margin:0; font-size:1.4rem; color:#86efac;">${e.name}</h3>
          <p style="margin:0.4rem 0 0; font-size:1rem; opacity:0.6; font-style:italic;">${e.enName}</p>
        </div>
      </div>
    `).join(``)};i(),document.getElementById(`search-input`).oninput=e=>{let n=e.target.value.toLowerCase();t=h.filter(e=>e.name.includes(n)||e.enName.toLowerCase().includes(n)),i()},document.getElementById(`sort-select`).onchange=e=>{let n=e.target.value;n===`size`?t.sort((e,t)=>t.stats.size-e.stats.size):n===`prob`?t.sort((e,t)=>t.stats.prob-e.stats.prob):t=[...h],i()},document.getElementById(`back-btn`).onclick=()=>window.navigate(`home`),window.audioPlayer||(window.audioPlayer=new Audio);let a=window.audioPlayer;window.openBirdModal=(e,i=!1)=>{if(e<0||e>=t.length)return;n=e,window.currentBirdIndex=e;let o=t[n],s=(localStorage.getItem(`gugugu_lang`)||`zh`)===`en`;document.getElementById(`modal-img`).src=o.img,document.getElementById(`modal-name`).innerText=o.name,document.getElementById(`modal-enName`).innerText=o.enName,document.getElementById(`modal-details`).innerText=s?o.enDetails:o.details;let c=document.getElementById(`modal-similar-icons`);c.innerHTML=``,o.similarIds&&o.similarIds.forEach(e=>{let n=h.find(t=>t.id===e);if(n){let r=document.createElement(`div`);r.style.cssText=`cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:6px; transition:transform 0.2s;`,r.innerHTML=`
            <img src="${n.img}" style="width:55px; height:55px; border-radius:50%; object-fit:cover; border:2px solid rgba(134,239,172,0.3);" />
            <span style="font-size:0.75rem; color:#86efac; font-weight:600;">${s?n.enName.split(` `).pop():n.name}</span>
          `,r.onclick=()=>{let n=t.findIndex(t=>t.id===e);window.openBirdModal(n===-1?h.findIndex(t=>t.id===e):n)},r.onmouseover=()=>r.style.transform=`scale(1.1)`,r.onmouseout=()=>r.style.transform=`scale(1)`,c.appendChild(r)}});let l=(e,t,n=100)=>{let r=document.getElementById(`bar-`+e),a=document.getElementById(`label-`+e);i||(r.style.width=`0%`),setTimeout(()=>{r.style.width=t/n*100+`%`},i?0:100),a.innerText=e===`size`?t+`cm`:t+`%`};l(`size`,o.stats.size,100),l(`prob`,o.stats.prob),l(`rare`,o.stats.rare),document.getElementById(`btn-play-audio`).onclick=()=>{if(!o.audio){window.mascot.say(`此鳥類暫無音檔`);return}a.src=o.audio,a.play()},document.getElementById(`btn-read-aloud`).onclick=()=>{if(`speechSynthesis`in window){window.speechSynthesis.cancel();let e=new SpeechSynthesisUtterance(`${o.name}。${o.details}`);e.lang=`zh-HK`,window.speechSynthesis.speak(e)}};let u=document.getElementById(`bird-modal`);u.classList.remove(`hidden`);let d=u.querySelector(`.centered-modal-content`);d&&!i&&(d.classList.remove(`modal-pop-anim`),d.offsetWidth,d.classList.add(`modal-pop-anim`)),m(()=>Promise.resolve().then(()=>r).then(e=>e.applyTranslation(localStorage.getItem(`gugugu_lang`)||`zh`,!0)),void 0)},window.refreshBirdModal=()=>{window.currentBirdIndex!==void 0&&window.currentBirdIndex!==-1&&window.openBirdModal(window.currentBirdIndex,!0)},document.getElementById(`prev-bird-btn`).onclick=()=>{let e=n>0?n-1:t.length-1;window.openBirdModal(e)},document.getElementById(`next-bird-btn`).onclick=()=>{let e=n<t.length-1?n+1:0;window.openBirdModal(e)},document.getElementById(`close-modal`).onclick=()=>{document.getElementById(`bird-modal`).classList.add(`hidden`),a.pause()}}function _(e){let t=localStorage.getItem(`esp32_relay_url`)||`wss://gugugu-relay.onrender.com`;e.innerHTML=`
    <div class="page-container">
    <header class="page-header">
      <h1 class="page-title" data-i18n="nav-stream">直播鳥屋 🎥</h1>
      <button class="btn-secondary btn-back" id="back-btn" data-i18n="back-home">⬅ 返回主頁</button>
    </header>

    <!-- Stream URL Config -->
    <div class="glass-panel stream-config" style="margin-bottom:1.5rem; display:flex; align-items:center; gap:1rem; flex-wrap:wrap; padding:1rem 1.5rem;">
      <div class="stream-config-row" style="display:flex; align-items:center; gap:0.8rem; flex:1; min-width:280px;">
        <span class="stream-config-label" style="font-size:1.4rem;">☁️</span>
        <input type="text" id="stream-url-input" class="glass-input" 
               style="flex:1;"
               placeholder="雲端中繼站 WebSocket 網址 (例: wss://your-app.onrender.com)" 
               value="${t}" />
        <button class="btn-primary" id="connect-btn" data-i18n="stream-connect">連線</button>
      </div>
      <div id="connection-status" class="stream-status stream-status--offline">
        <span class="stream-status-dot"></span>
        <span class="stream-status-text" data-i18n="stream-not-connected">未連線</span>
      </div>
    </div>

    <!-- Tabs -->
    <div class="mobile-stack" style="display:flex; gap:1rem; margin-bottom:2rem; flex-wrap:wrap;">
      <button class="btn-primary" id="tab-live" style="flex:1;" data-i18n="stream-live-tab">🔴 雲端即時影像 (Live)</button>
      <button class="btn-secondary" id="tab-history" style="flex:1;" data-i18n="stream-history-tab">⏪ 歷史回放 (History)</button>
    </div>

    <!-- History Media Selector -->
    <div id="media-selector" style="display:none; gap:1rem; margin-bottom:1rem; flex-wrap:wrap;">
      <button class="btn-secondary history-media-btn" data-src="/footage/previous_videos/video1.mp4" data-type="video" data-i18n="clip-feeding">進食片段 1</button>
      <button class="btn-secondary history-media-btn" data-src="/footage/previous_videos/IMAG0002.jpg" data-type="image" data-i18n="clip-snapshot">鳥屋快照</button>
    </div>

    <div class="mobile-stack" style="display:flex; gap:1.5rem; flex-wrap:wrap;">
      <!-- Feed Area -->
      <div class="glass-panel" style="flex:3; min-width:300px; padding:1.2rem; background:rgba(0,0,0,0.3);">
        <div id="video-container" class="stream-viewport">

          <!-- === LIVE STATE: Idle === -->
          <div id="live-idle" style="text-align:center;">
            <img src="/removedbg_gugugu.png" style="width:80px; margin-bottom:1rem; opacity:0.6;" />
            <h3 style="color:#eee;">準備連接雲端中繼站</h3>
            <p style="color:#666; font-size:0.9rem;">輸入 WebSocket 網址，然後按「連線」</p>
          </div>

          <!-- === LIVE STATE: Connecting === -->
          <div id="live-connecting" class="hidden" style="text-align:center;">
            <div class="stream-spinner"></div>
            <h3 style="color:#eee; margin-top:1.5rem;" data-i18n="stream-connecting">連線中...</h3>
            <p style="color:#666; font-size:0.9rem;" id="connecting-detail"></p>
          </div>

          <!-- === LIVE STATE: Stream === -->
          <!-- We use an img tag for WebSocket frames as well -->
          <img id="live-stream-img" class="hidden" style="width:100%; height:100%; object-fit:contain;" />

          <!-- === LIVE STATE: Error === -->
          <div id="live-error" class="hidden" style="text-align:center;">
            <div style="font-size:3rem; margin-bottom:1rem;">⚠️</div>
            <h3 style="color:#f87171;" data-i18n="stream-error">連線失敗/斷線</h3>
            <p id="error-detail" style="color:#666; font-size:0.9rem; margin-bottom:1rem;"></p>
            <button class="btn-primary" id="retry-btn" data-i18n="stream-retry">手動重試</button>
          </div>

          <!-- === HISTORY STATE === -->
          <video id="history-video" class="hidden" style="width:100%; height:100%; object-fit:cover;" controls>
            <source src="/footage/previous_videos/video1.mp4" type="video/mp4" />
          </video>
          <img id="history-image" class="hidden" style="width:100%; height:100%; object-fit:contain;" />

          <!-- Fullscreen button -->
          <button id="fullscreen-btn" class="stream-fullscreen-btn hidden" title="全螢幕">⛶</button>
          
          <!-- LIVE badge -->
          <div id="live-badge" class="stream-live-badge hidden">
            <span class="stream-live-dot"></span>
            LIVE
          </div>
        </div>
      </div>

      <!-- Env Data -->
      <div style="flex:1; min-width:220px; display:flex; flex-direction:column; gap:1.5rem;">
        <div class="glass-panel" style="text-align:center; padding:1.5rem;">
          <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.5rem; text-transform:uppercase;" data-i18n="env-condition">校園環境</p>
          <div style="font-size:2.2rem; margin-bottom:0.2rem;">☁️ 25°C</div>
          <p style="font-weight:bold; color:var(--primary-color);" data-i18n="cond-good">良好 (Good)</p>
        </div>
        <div class="glass-panel" style="text-align:center; padding:1.5rem;">
          <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.5rem; text-transform:uppercase;" data-i18n="local-time">本地時間</p>
          <h4 id="live-time" style="font-size:1.5rem; font-family:'Outfit';">--:--:--</h4>
        </div>

        <!-- Stream Info Panel -->
        <div id="stream-info-panel" class="glass-panel hidden" style="padding:1.5rem;">
          <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.8rem; text-transform:uppercase;">📡 串流資訊</p>
          <div style="display:flex; flex-direction:column; gap:0.6rem; font-size:0.9rem;">
            <div><span style="color:#86efac;">來源：</span><span id="info-source" style="word-break:break-all;">-</span></div>
            <div><span style="color:#86efac;">連線數：</span><span id="info-viewers">?</span> 人</div>
            <div><span style="color:#86efac;">幀數：</span><span id="info-fps">0</span> FPS</div>
            <div><span style="color:#86efac;">已連線：</span><span id="info-uptime">-</span></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  `;let n=null,r=null,i=null,a=`live`,o=null,s=0,c=null,l={input:document.getElementById(`stream-url-input`),connectBtn:document.getElementById(`connect-btn`),retryBtn:document.getElementById(`retry-btn`),status:document.getElementById(`connection-status`),statusText:document.querySelector(`.stream-status-text`),liveIdle:document.getElementById(`live-idle`),liveConn:document.getElementById(`live-connecting`),liveImg:document.getElementById(`live-stream-img`),liveError:document.getElementById(`live-error`),errorDetail:document.getElementById(`error-detail`),connDetail:document.getElementById(`connecting-detail`),histVideo:document.getElementById(`history-video`),histImage:document.getElementById(`history-image`),fullscreen:document.getElementById(`fullscreen-btn`),liveBadge:document.getElementById(`live-badge`),infoPanel:document.getElementById(`stream-info-panel`),infoSource:document.getElementById(`info-source`),infoFps:document.getElementById(`info-fps`),infoUptime:document.getElementById(`info-uptime`),mediaSel:document.getElementById(`media-selector`)};function u(e){[l.liveIdle,l.liveConn,l.liveImg,l.liveError,l.histVideo,l.histImage].forEach(e=>e.classList.add(`hidden`)),e&&e.classList.remove(`hidden`)}function d(e){l.status.className=`stream-status stream-status--`+e;let t={offline:`未連線`,connecting:`連線中...`,online:`🟢 雲端已連線`,error:`連線失敗`};l.statusText.textContent=t[e]||``}function f(){let e=l.input.value.trim();if(!e){l.input.style.borderColor=`#f87171`,setTimeout(()=>l.input.style.borderColor=``,2e3);return}e.startsWith(`http://`)&&(e=e.replace(`http://`,`ws://`)),e.startsWith(`https://`)&&(e=e.replace(`https://`,`wss://`)),!e.startsWith(`ws://`)&&!e.startsWith(`wss://`)&&(e=`wss://`+e),localStorage.setItem(`esp32_relay_url`,e),n&&n.close(),u(l.liveConn),l.connDetail.textContent=e,d(`connecting`);try{n=new WebSocket(e),n.binaryType=`blob`}catch{p(`WebSocket 初始化失敗`);return}n.onopen=()=>{d(`online`),u(l.liveImg),l.fullscreen.classList.remove(`hidden`),l.liveBadge.classList.remove(`hidden`),l.infoPanel.classList.remove(`hidden`),l.infoSource.textContent=e.replace(`wss://`,``).replace(`ws://`,``),r=Date.now(),h(),_()},n.onmessage=e=>{a===`live`&&e.data instanceof Blob&&(s++,o&&URL.revokeObjectURL(o),o=URL.createObjectURL(e.data),l.liveImg.src=o)},n.onerror=e=>{console.error(`WebSocket Error:`,e)},n.onclose=()=>{p(`中繼站連線已中斷`)}}function p(e){n=null,d(`error`),u(l.liveError),l.errorDetail.textContent=e,l.fullscreen.classList.add(`hidden`),l.liveBadge.classList.add(`hidden`),g(),v()}function m(){n&&n.close(),o&&URL.revokeObjectURL(o),o=null,l.liveImg.src=``,g(),v()}function h(){g(),i=setInterval(()=>{if(!r)return;let e=Math.floor((Date.now()-r)/1e3),t=Math.floor(e/60),n=e%60;l.infoUptime.textContent=`${t}分${n.toString().padStart(2,`0`)}秒`},1e3)}function g(){clearInterval(i),i=null}function _(){v(),s=0,l.infoFps.textContent=`0`,c=setInterval(()=>{l.infoFps.textContent=s.toString(),s=0},1e3)}function v(){clearInterval(c),c=null}document.getElementById(`back-btn`).onclick=()=>{m(),window.navigate(`home`)};let y=()=>{let e=document.getElementById(`live-time`);e&&(e.textContent=new Date().toLocaleTimeString())};setInterval(y,1e3),y(),l.connectBtn.onclick=f,l.retryBtn&&(l.retryBtn.onclick=f),l.input.addEventListener(`keydown`,e=>{e.key===`Enter`&&f()}),document.getElementById(`tab-live`).onclick=()=>{a=`live`,document.getElementById(`tab-live`).className=`btn-primary`,document.getElementById(`tab-history`).className=`btn-secondary`,l.mediaSel.style.display=`none`,l.histVideo.classList.add(`hidden`),l.histImage.classList.add(`hidden`),l.histVideo.pause&&l.histVideo.pause(),n&&n.readyState===WebSocket.OPEN?(u(l.liveImg),l.fullscreen.classList.remove(`hidden`),l.liveBadge.classList.remove(`hidden`)):u(l.liveIdle)},document.getElementById(`tab-history`).onclick=()=>{a=`history`,document.getElementById(`tab-history`).className=`btn-primary`,document.getElementById(`tab-live`).className=`btn-secondary`,l.mediaSel.style.display=`flex`,l.fullscreen.classList.add(`hidden`),l.liveBadge.classList.add(`hidden`),u(null);let e=document.querySelector(`.history-media-btn`);e&&e.click()},document.querySelectorAll(`.history-media-btn`).forEach(e=>{e.onclick=e=>{let{src:t,type:n}=e.target.dataset,r=l.histVideo,i=l.histImage;n===`video`?(i.classList.add(`hidden`),r.classList.remove(`hidden`),r.src=t,r.play()):(r.classList.add(`hidden`),i.classList.remove(`hidden`),i.src=t)}}),l.fullscreen.onclick=()=>{let e=document.getElementById(`video-container`);e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()},t&&setTimeout(f,300)}function v(e){e.innerHTML=`
    <div class="page-container">
    <header class="page-header" style="position:relative; z-index:100;">
      <h1 class="page-title" data-i18n="card-map-title">華仁生態地圖 🗺️</h1>
      <button class="btn-secondary btn-back" id="back-btn" data-i18n="back-home">⬅ 返回主頁</button>
    </header>

    <div style="position:relative; width:100%; height:75vh; border-radius:24px; overflow:hidden; box-shadow:var(--glass-shadow); border:1px solid var(--glass-border);">
      
      <!-- Interactive Map Image -->
      <div id="map-container" style="width:100%; height:100%; overflow:auto; position:relative; background:#8cdba9;">
        <!-- Placeholder map image, normally using zoom/pan library, but CSS works for mockup -->
        <img src="/footage/wy_map/plan_view_of_wy.png" style="min-width:1200px; height:auto; display:block;" />
        
        <!-- Hotspots numbers overlay -->
        <a href="https://docs.google.com/presentation/d/1VSy2uOezuxn5Yt3TwVZJix5QXO6nm9RgnlIfarfubPE/edit?slide=id.gc5ddde5fd9_2_147" target="_blank" class="hotspot" style="top: 35%; left: 42%;" data-bird="草叢" data-loc="第一檢查點" data-desc="點擊查看簡報詳情">1</a>
        <a href="https://docs.google.com/presentation/d/1VSy2uOezuxn5Yt3TwVZJix5QXO6nm9RgnlIfarfubPE/edit?slide=id.gc5ddde5fd9_2_147" target="_blank" class="hotspot" style="top: 60%; left: 25%;" data-bird="大樹" data-loc="第二檢查點" data-desc="點擊查看簡報詳情">2</a>
        <a href="https://docs.google.com/presentation/d/1VSy2uOezuxn5Yt3TwVZJix5QXO6nm9RgnlIfarfubPE/edit?slide=id.gc5ddde5fd9_2_147" target="_blank" class="hotspot" style="top: 70%; left: 75%;" data-bird="水池" data-loc="第三檢查點" data-desc="點擊查看簡報詳情">3</a>
        
        <!-- ESP32-CAM Special Pin -->
        <div class="hotspot cam-pin" style="top: 45%; left: 55%; background:var(--danger-color); color:white;" data-bird="攝影機" data-loc="鳥屋觀測站" data-desc="24小時實時直播點！">
          📹
        </div>
      </div>

      <!-- Left Panel (Explorer Guide) -->
      <div class="glass-panel" style="position:absolute; top:20px; left:20px; width:320px; padding:1.5rem; z-index:5; background:rgba(255,255,255,0.85); backdrop-filter:blur(10px);">
        <h3 style="margin-bottom:1rem; color:var(--primary-color);">🗺️ 地圖導覽指南</h3>
        <p style="font-size:1rem; line-height:1.6; margin-bottom:1rem;">拖拉地圖並點擊數字光點，即可開啟對應的 <strong>生態介紹簡報</strong>，探索華仁校園各處的鳥類生態！紅色圖示為鳥屋實時攝影機位置。</p>
        
        <!-- Target popup content -->
        <div id="hotspot-info" class="hidden" style="background:var(--primary-color); padding:1rem; border-radius:12px; color:white;">
           <h4 id="h-loc" style="margin-bottom:0.5rem; font-size:1.2rem;"></h4>
           <p id="h-desc" style="font-size:1rem; margin-bottom:0.5rem;"></p>
           <strong id="h-bird" style="display:block; padding:8px; background:rgba(255,255,255,0.2); border-radius:8px; text-align:center;"></strong>
        </div>
      </div>
    </div>
    
    <style>
      .hotspot {
        position:absolute; width:60px; height:60px; background:white; border:4px solid var(--primary-color);
        border-radius:50%; cursor:pointer; transform:translate(-50%, -50%);
        box-shadow: 0 4px 15px rgba(0,0,0,0.5);
        display:flex; justify-content:center; align-items:center;
        font-size:1.8rem; font-weight:900; color:var(--primary-color);
        text-decoration:none;
        transition: transform 0.2s, background 0.2s;
      }
      .hotspot:hover {
        transform:translate(-50%, -50%) scale(1.2);
        background:var(--primary-color);
        color:white;
        z-index:100;
      }
      .cam-pin {
        width: 70px; height: 70px; border:4px solid white; animation: pulseCam 1.5s infinite; font-size:2rem;
      }
      @keyframes pulseCam {
        0% { box-shadow: 0 0 0 0 rgba(186, 26, 26, 0.7); }
        70% { box-shadow: 0 0 0 25px rgba(186, 26, 26, 0); }
        100% { box-shadow: 0 0 0 0 rgba(186, 26, 26, 0); }
      }
    </style>
  `,document.getElementById(`back-btn`).addEventListener(`click`,()=>window.navigate(`home`));let t=document.getElementById(`hotspot-info`),n=document.getElementById(`h-loc`),r=document.getElementById(`h-desc`),i=document.getElementById(`h-bird`);document.querySelectorAll(`.hotspot`).forEach(e=>{e.addEventListener(`click`,e=>{t.classList.remove(`hidden`),t.classList.add(`fade-in`),n.textContent=`📍 ${e.target.dataset.loc}`,r.textContent=e.target.dataset.desc,i.textContent=e.target.dataset.bird===`攝影機`?`查看直播`:`最常出現：${e.target.dataset.bird}`,window.mascot.bounce(),e.target.dataset.bird===`攝影機`?window.mascot.say(`這裡是我的專屬休息站鳥屋！`):window.mascot.say(`嘿！這裡可是${e.target.dataset.bird}最喜歡聚會的地方喔！`)});let a=document.getElementById(`map-container`);a.scrollLeft=200})}function y(e){window.store&&window.store.getLanguage(),e.innerHTML=`
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
  `,document.getElementById(`back-btn`).onclick=()=>window.navigate(`home`);let t=document.getElementById(`gameCanvas`),n=t.getContext(`2d`),r=document.getElementById(`start-overlay`),i=document.getElementById(`score-val`),a=document.getElementById(`life-val`),o=document.getElementById(`level-val`);function s(){let e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}window.addEventListener(`resize`,s),s();let c=new Image;c.src=`/removedbg_gugugu.png`;let l,u,d,f,p,m,h=[],g=[],_=[],v=0,y=[],b=1;function x(){y=[];for(let e=0;e<60;e++)y.push({x:Math.random()*t.width,y:Math.random()*t.height,r:Math.random()*1.5+.5,speed:Math.random()*.8+.2,alpha:Math.random()*.5+.2})}function S(){p=!0,d=0,f=3,b=1,l=t.height/2,u=0,h=[],g=[],_=[],v=0,i.innerText=0,a.innerText=`❤️❤️❤️`,o.innerText=1,r.classList.add(`hidden`),x(),w()}function C(e,t,n){for(let r=0;r<8;r++)_.push({x:e,y:t,color:n,vx:(Math.random()-.5)*5,vy:(Math.random()-.5)*5,life:1,radius:Math.random()*6+2})}function w(){if(!p)return;b=1+Math.floor(d/100),o&&(o.innerText=b);let e=3.5+b*.5+d*.01,r=n.createLinearGradient(0,0,0,t.height);r.addColorStop(0,`#020b06`),r.addColorStop(.5,`#041a0c`),r.addColorStop(1,`#061208`),n.fillStyle=r,n.fillRect(0,0,t.width,t.height),y.forEach(e=>{e.x-=e.speed*.5,e.x<0&&(e.x=t.width),n.beginPath(),n.globalAlpha=e.alpha,n.fillStyle=`#a3e635`,n.arc(e.x,e.y,e.r,0,Math.PI*2),n.fill()}),n.globalAlpha=1,n.fillStyle=`rgba(34,197,94,0.15)`,n.fillRect(0,t.height-4,t.width,4),u+=.32,l+=u,n.save(),n.translate(t.width*.15,l);let s=Math.min(Math.PI/5,Math.max(-Math.PI/5,u*.08));n.rotate(s),n.shadowColor=`#4ade80`,n.shadowBlur=20,c.complete&&c.naturalWidth>0?n.drawImage(c,-35,-35,70,70):(n.fillStyle=`#4ade80`,n.beginPath(),n.arc(0,0,22,0,Math.PI*2),n.fill()),n.shadowBlur=0,n.restore();let x=Math.max(60,100-b*5);if(v%x===0){let e=Math.max(180,280-b*10),n=Math.random()*(t.height-e-80)+40;h.push({x:t.width,y1:0,y2:n,type:`top`}),h.push({x:t.width,y1:n+e,y2:t.height,type:`bottom`})}v%80==40&&h.push({x:t.width,y:Math.random()*(t.height-100)+50,type:`food`});let S=Math.max(90,200-b*15);v%S===0&&v>0&&g.push({x:t.width+40,y:Math.random()*(t.height-100)+50,vy:(Math.random()-.5)*3,wing:0,size:28+Math.random()*15});for(let r=h.length-1;r>=0;r--){let o=h[r];if(o.x-=e,o.type===`food`){let e=.7+.3*Math.sin(v*.15),a=n.createRadialGradient(o.x,o.y,0,o.x,o.y,20*e);a.addColorStop(0,`#fde68a`),a.addColorStop(.5,`#f59e0b`),a.addColorStop(1,`rgba(245,158,11,0)`),n.fillStyle=a,n.beginPath(),n.arc(o.x,o.y,22*e,0,Math.PI*2),n.fill(),n.fillStyle=`#fbbf24`,n.beginPath(),n.arc(o.x,o.y,8,0,Math.PI*2),n.fill();let s=t.width*.15;if(Math.abs(o.x-s)<38&&Math.abs(l-o.y)<38){d+=10,i.innerText=d,C(o.x,o.y,`#fbbf24`),h.splice(r,1);continue}}else if(o.type===`top`||o.type===`bottom`){let e=n.createLinearGradient(o.x,0,o.x+52,0);e.addColorStop(0,`rgba(15,30,20,0.95)`),e.addColorStop(.5,`rgba(22,101,52,0.8)`),e.addColorStop(1,`rgba(10,20,15,0.95)`),n.fillStyle=e;let i=o.y2-o.y1;n.beginPath(),o.type===`top`?n.roundRect(o.x,o.y1,52,i,[0,0,12,12]):n.roundRect(o.x,o.y1,52,i,[12,12,0,0]),n.fill(),n.strokeStyle=`rgba(74,222,128,0.4)`,n.lineWidth=1.5,n.stroke(),n.shadowColor=`#22c55e`,n.shadowBlur=8,n.stroke(),n.shadowBlur=0;let s=o.type===`top`?o.y2-16:o.y1;n.fillStyle=`rgba(34,197,94,0.7)`,n.beginPath(),o.type,n.roundRect(o.x-4,s,60,16,8),n.fill();let c=t.width*.15;if(l+25>o.y1&&l-25<o.y2&&c+25>o.x&&c-25<o.x+52&&(f--,a.innerText=f>0?`❤️`.repeat(f):`💔`,C(c,l,`#f87171`),h.splice(r,1),t.style.transform=`translate(${(Math.random()-.5)*12}px, ${(Math.random()-.5)*12}px)`,setTimeout(()=>t.style.transform=`none`,120),f<=0)){T();return}}o.x<-80&&h.splice(r,1)}for(let r=g.length-1;r>=0;r--){let i=g[r];i.x-=e*1.4,i.y+=i.vy,i.wing=(i.wing+.25)%(Math.PI*2),(i.y<30||i.y>t.height-30)&&(i.vy*=-1),n.save(),n.translate(i.x,i.y),n.fillStyle=`#1e1e2e`,n.beginPath(),n.ellipse(0,0,i.size*.6,i.size*.4,0,0,Math.PI*2),n.fill(),n.fillStyle=`#27273d`;let o=Math.sin(i.wing)*15;n.beginPath(),n.ellipse(-i.size*.2,o*.3,i.size*.5,Math.abs(o)*.5+5,-.3,0,Math.PI*2),n.fill(),n.fillStyle=`#ef4444`,n.beginPath(),n.arc(i.size*.35,-5,4,0,Math.PI*2),n.fill(),n.fillStyle=`#6b7280`,n.beginPath(),n.moveTo(i.size*.55,-2),n.lineTo(i.size*.55+12,0),n.lineTo(i.size*.55,5),n.fill(),n.restore();let s=t.width*.15;if(Math.abs(i.x-s)<i.size*.8&&Math.abs(i.y-l)<i.size*.7){if(f--,a.innerText=f>0?`❤️`.repeat(f):`💔`,C(i.x,i.y,`#ef4444`),g.splice(r,1),t.style.transform=`translate(${(Math.random()-.5)*12}px, ${(Math.random()-.5)*12}px)`,setTimeout(()=>t.style.transform=`none`,120),f<=0){T();return}continue}i.x<-80&&g.splice(r,1)}for(let e=_.length-1;e>=0;e--){let t=_[e];if(t.x+=t.vx,t.y+=t.vy,t.life-=.04,t.life<=0){_.splice(e,1);continue}n.globalAlpha=t.life,n.fillStyle=t.color,n.beginPath(),n.arc(t.x,t.y,t.radius*t.life,0,Math.PI*2),n.fill(),n.globalAlpha=1}if(l>t.height+20||l<-20){f=0,a.innerText=`💔`,T();return}v++,m=requestAnimationFrame(w)}function T(){p=!1,cancelAnimationFrame(m),setTimeout(()=>{r.classList.remove(`hidden`);let e=r.querySelector(`#overlay-title`),t=r.querySelector(`#overlay-desc`),n=r.querySelector(`#start-btn`);e.removeAttribute(`data-i18n`),e.innerText=`MISSION FAILED`,e.style.color=`#f87171`,e.style.textShadow=`0 0 30px rgba(248,113,113,0.6)`,t.removeAttribute(`data-i18n`),t.innerHTML=`Your final score: <strong style="color:#fbbf24; font-size:1.5em;">${d}</strong><br><span style="font-size:0.9rem; color:#94a3b8;">Level reached: ${b}</span>`,n.removeAttribute(`data-i18n`),n.innerText=`TRY AGAIN ↩`,window.mascot.say(`Gu Gu! 獲得了 ${d} 分！不要氣餒！`)},500)}let E=()=>{p&&(u=-8)};t.addEventListener(`mousedown`,E),t.addEventListener(`touchstart`,e=>{e.preventDefault(),E()},{passive:!1}),window.addEventListener(`keydown`,e=>{e.code===`Space`&&p&&(e.preventDefault(),E())}),document.getElementById(`start-btn`).onclick=S}function b(e){window.mascot.show(),window.mascot.say(`我們是 IDEEA 團隊，很高興認識你！`),e.innerHTML=`
    <div class="page-container fade-in">
      
      <header class="page-header">
        <h1 class="page-title" data-i18n="nav-about">About Us</h1>
        <button class="btn-secondary btn-back liquid-btn" onclick="window.navigate('home')">⬅ 返回主頁</button>
      </header>

      <!-- Hero Visual -->
      <div class="glass-panel" style="overflow:hidden; margin-bottom:2.5rem;">
        <img src="/footage/about_us/birdhouse_3.jpeg" style="width:100%; height:300px; object-fit:cover; filter:brightness(0.7);" onerror="this.style.display='none'" />
        <div style="padding:2rem; background:rgba(0,0,0,0.5); border-top:1px solid var(--glass-border);">
           <h2 style="margin:0; font-size:1.8rem;">We are group 4 from 3K</h2>
           <p style="opacity:0.8; margin-top:0.5rem;">IDEEA Project — Wah Yan College, Hong Kong</p>
        </div>
      </div>
      
      <div class="grid-responsive" style="display:grid; grid-template-columns: 1.5fr 1fr; gap:2rem;">
        
        <!-- Left: Q&A -->
        <div class="glass-panel" style="padding: 2.5rem;">
          <div style="display: flex; flex-direction: column; gap: 2.2rem;">
            
            <div>
              <h3 style="font-size: 1.3rem; color: #fbbf24; margin-bottom: 0.7rem; border-left:4px solid #fbbf24; padding-left:14px;">What leads you to make this project?</h3>
              <p style="font-size: 1.1rem; line-height: 1.7; color:#e2e8f0;">We observed that our schoolmates have less attraction to nature. So, we wanted to make some things to let our schoolmates pay more attention to the natural ecology of our campus.</p>
            </div>
            
            <div>
              <h3 style="font-size: 1.3rem; color: #fbbf24; margin-bottom: 0.7rem; border-left:4px solid #fbbf24; padding-left:14px;">Why did you choose to make a bird house?</h3>
              <p style="font-size: 1.1rem; line-height: 1.7; color:#e2e8f0;">We found that students have relatively little information about birds. So, we made a bird house and a camera that connects to the internet so that students can be informed about birds easily.</p>
            </div>

            <div>
              <h3 style="font-size: 1.3rem; color: #fbbf24; margin-bottom: 0.7rem; border-left:4px solid #fbbf24; padding-left:14px;">Introduce your product</h3>
              <p style="font-size: 1.1rem; line-height: 1.7; color:#e2e8f0;">We made a bird house for the birds resting. We also put a camera inside. This camera is connected to our website, you can watch the live video of the bird house and get any information about birds in it.</p>
              <p style="font-size: 1.1rem; line-height: 1.7; margin-top: 1rem; color: #86efac;">You can follow our IG <strong>@gugugu_wyhk</strong>, we will update our newest information in it.</p>
            </div>

            <div>
              <h3 style="font-size: 1.3rem; color: #fbbf24; margin-bottom: 0.7rem; border-left:4px solid #fbbf24; padding-left:14px;">How did it start?</h3>
              <p style="font-size: 1.1rem; line-height: 1.7; color:#e2e8f0;">We started at the start of this school year, and it's a part of our IDEEA Project.</p>
            </div>

            <div>
              <h3 style="font-size: 1.3rem; color: #fbbf24; margin-bottom: 0.7rem; border-left:4px solid #fbbf24; padding-left:14px;">What is our team?</h3>
              <p style="font-size: 1.1rem; line-height: 1.7; color:#e2e8f0;">Our team is formed to protect the ecosystem of birds and inform students about birds in our campus.</p>
            </div>

            <div>
              <h3 style="font-size: 1.3rem; color: #fbbf24; margin-bottom: 0.7rem; border-left:4px solid #fbbf24; padding-left:14px;">Why Gu Gu Gu?</h3>
              <p style="font-size: 1.1rem; line-height: 1.7; color:#e2e8f0;">The word "GU GU GU" is a nickname from Pigeon. So we used it as our name.</p>
            </div>

            <div>
              <h3 style="font-size: 1.3rem; color: #fbbf24; margin-bottom: 0.7rem; border-left:4px solid #fbbf24; padding-left:14px;">Why do we choose birds?</h3>
              <p style="font-size: 1.1rem; line-height: 1.7; color:#e2e8f0;">It is because birds are less attractive animals when students think about our campus.</p>
            </div>

            <div>
              <h3 style="font-size: 1.3rem; color: #fbbf24; margin-bottom: 0.7rem; border-left:4px solid #fbbf24; padding-left:14px;">What is the most difficult part of the project?</h3>
              <p style="font-size: 1.1rem; line-height: 1.7; color:#e2e8f0;">How can we put a camera inside the bird house which can connect to the internet and transfer live video.</p>
            </div>

            <div>
              <h3 style="font-size: 1.3rem; color: #fbbf24; margin-bottom: 0.7rem; border-left:4px solid #fbbf24; padding-left:14px;">Why we use that design for the mascot</h3>
              <p style="font-size: 1.1rem; line-height: 1.7; color:#e2e8f0;">It refers to our group name "Gu Gu Gu" which comes from Pigeon, and have a Wah Yan tie on it.</p>
            </div>
          </div>
        </div>

        <!-- Right: Visuals & Links -->
        <div style="display:flex; flex-direction:column; gap:2rem;">
          <div class="glass-panel" style="padding:2rem; text-align:center;">
              <h3 style="margin-bottom:1.2rem; font-size:1.1rem;">Follow us for updates!</h3>
              <a href="https://www.instagram.com/gugugu_wyhk/" target="_blank" class="ig-glow" style="display:inline-flex; align-items:center; gap:10px; color:white; text-decoration:none; background:linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); padding:12px 20px; border-radius:12px; font-weight:bold; font-size:1rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                @gugugu_wyhk
              </a>
           </div>

           <div class="glass-panel" style="padding:1rem; overflow:hidden; border-radius:24px;">
              <img src="/footage/about_us/birdhouse1.jpeg" style="width:100%; height:180px; object-fit:cover; border-radius:16px; margin-bottom:0.8rem;" onerror="this.style.display='none'" />
              <img src="/footage/about_us/birdhouse4.jpeg" style="width:100%; height:180px; object-fit:cover; border-radius:16px;" onerror="this.style.display='none'" />
           </div>

           <div class="glass-panel" style="padding:1.5rem; text-align:center;">
              <p style="font-size:1rem; font-weight:bold; color:#86efac;">IDEEA Project 3K Group 4</p>
              <p style="font-size:0.9rem; color:var(--text-muted); margin-top:0.5rem;">Astin Lam · Brayden Chan · Cyrus Chan · Justin Lau</p>
           </div>
        </div>

      </div>
    </div>
  `}var x={appContainer:document.getElementById(`app`),currentPath:null,navigate(e){this.currentPath=e;let t=document.getElementById(`bird-modal`);t&&t.classList.add(`hidden`),window.audioPlayer&&window.audioPlayer.pause(),this.appContainer.innerHTML===``?this._renderPage(e):(this.appContainer.className=`page page-exit-active`,setTimeout(()=>{this._renderPage(e)},300))},refresh(){this.currentPath&&this._renderPage(this.currentPath)},_renderPage(t){this.appContainer.innerHTML=``,this.appContainer.className=`page page-enter-active`;let n=()=>{a(e.getLanguage(),!0)};switch(t){case`login`:o(this.appContainer),n();break;case`home`:l(this.appContainer),n();break;case`encyclopedia`:g(this.appContainer),n();break;case`stream`:_(this.appContainer),n();break;case`map`:v(this.appContainer),n();break;case`game`:y(this.appContainer),n();break;case`about`:b(this.appContainer),n();break;case`showoff`:m(()=>import(`./showoff-DnV792GV.js`).then(e=>{e.renderShowOff(this.appContainer),n()}),[]);break;default:o(this.appContainer),n()}}};window.mascot=new class{constructor(){this.widget=document.getElementById(`mascot-widget`),this.img=document.getElementById(`mascot-img`),this.bubble=document.getElementById(`mascot-bubble`),this.idleTimer=null,this.pokes=[`今天天氣真好！Gu Gu! 🌿`,`你有在我們的直播看到小鳥嗎？🎥`,`快去百科找找我的同伴！📖`,`我最喜歡吃校園裡的果實啦！🍒`,`投票給你最喜歡的小鳥吧！🗳️`,`Gu Gu! 歡迎來到華仁生態門戶！`,`試試守護者挑戰遊戲！🎮`,`記得 Follow 我們的 IG @gugugu_wyhk！`],this.attentionMessages=[`Gu Gu! 有人在嗎？快來探索校園的鳥類！👀`,`這裡有很多酷炫的小鳥等待你發現喔！🌿`,`想玩玩看守護者挑戰遊戲嗎？🎮`,`別忘了點擊右下角切換語言喔！🌎`,`Hey! Don't leave me alone! Come and explore! 🐦`,`Gu Gu! 看看那邊，最近有好多黑臉琵鷺過境！`,`你有在直播中看到什麼嗎？🎥`],this.init()}init(){this.img.addEventListener(`click`,()=>{this.clickPop(),this.say(this.pokes[Math.floor(Math.random()*this.pokes.length)]),this.resetIdle()}),[`mousemove`,`keydown`,`mousedown`,`touchstart`,`scroll`,`click`].forEach(e=>{document.addEventListener(e,()=>this.resetIdle(),{passive:!0})}),this.resetIdle()}resetIdle(){this.idleTimer&&clearTimeout(this.idleTimer),this.idleTimer=setTimeout(()=>{let e=this.attentionMessages[Math.floor(Math.random()*this.attentionMessages.length)];this.say(e,6e3),this.resetIdle()},85e3)}say(e,t=5e3){this.bubble.textContent=e,this.bubble.classList.remove(`hidden`,`bubble-pop`),this.bubble.offsetWidth,this.bubble.classList.add(`bubble-pop`),this.bounce(),this.bubbleTimer&&clearTimeout(this.bubbleTimer),this.bubbleTimer=setTimeout(()=>{this.bubble.classList.add(`hidden`),this.bubble.classList.remove(`bubble-pop`)},t)}bounce(){this.img.classList.remove(`mascot-anim-bounce`),this.img.offsetWidth,this.img.classList.add(`mascot-anim-bounce`)}clickPop(){this.img.classList.remove(`mascot-click-pop`,`mascot-anim-bounce`),this.img.offsetWidth,this.img.classList.add(`mascot-click-pop`),setTimeout(()=>{this.img.classList.remove(`mascot-click-pop`)},600)}hide(){this.widget.classList.add(`hidden`)}show(){this.widget.classList.remove(`hidden`),this.bounce()}};function S(){e.getUserName()?x.navigate(`home`):x.navigate(`login`)}window.navigate=e=>{x.navigate(e)};var C=document.getElementById(`global-lang-btn`);C.addEventListener(`click`,()=>{let t=e.getLanguage()===`zh`?`en`:`zh`;e.setLanguage(t),C.querySelector(`span`).innerText=t===`zh`?`EN`:`中`,a(t)});var w=e.getLanguage();C.querySelector(`span`).innerText=w===`zh`?`EN`:`中`,setTimeout(()=>a(w,!0),100),S();