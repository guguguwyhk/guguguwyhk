function e(e){let t=e.style.padding,n=document.body.style.overflow,r=document.getElementById(`global-lang-btn`),i=document.getElementById(`mascot-widget`);r&&(r.style.display=`none`),i&&(i.style.display=`none`),e.style.padding=`0`,document.body.style.overflow=`hidden`,e.innerHTML=`
    <style>
      #showoff-wrapper {
        width: 100vw; height: 100vh;
        background: radial-gradient(circle at center, #050b18 0%, #010409 100%);
        color: white; font-family: 'Outfit', sans-serif;
        display: flex; flex-direction: column; overflow: hidden;
        position: relative;
      }
      .exhibit-h1 { font-size: 5rem; font-weight: 900; margin: 0; background: linear-gradient(45deg, #4ade80, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      .exhibit-panel { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 40px; padding: 2rem; }
      #live-notification { 
        position: fixed; top: 120px; right: 40px; 
        background: var(--primary-color); color: black; 
        padding: 1.5rem 3rem; border-radius: 100px;
        font-size: 2rem; font-weight: 900; opacity: 0; transform: translateX(50px);
        transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        z-index: 1000; box-shadow: 0 10px 40px rgba(74, 222, 128, 0.4);
      }
      .show-notif { opacity: 1 !important; transform: translateX(0) !important; }
    </style>
    <div id="showoff-main" style="width:100vw; height:100vh; background:radial-gradient(circle at center, #050b18 0%, #010409 100%); color:white; font-family:'Outfit', sans-serif; display:flex; flex-direction:column; overflow:hidden; position:relative;">
      
      <!-- Particles and decorative background -->
      <div style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:0; pointer-events:none; opacity:0.3;">
        <div style="position:absolute; bottom:0; left:0; width:100%; height:60%; background:linear-gradient(to top, rgba(74, 222, 128, 0.1), transparent); filter:blur(100px);"></div>
        <div id="bg-glow" style="position:absolute; top:40%; left:50%; transform:translate(-50%, -50%); width:800px; height:800px; background:radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%); filter:blur(50px);"></div>
      </div>

      <!-- Controls -->

      <!-- Status Indicator -->
      <div id="conn-status" style="position:fixed; bottom:20px; left:20px; z-index:100; font-size:0.8rem; color:#4ade80; display:flex; align-items:center; gap:8px; opacity:0.6;">
        <span style="width:8px; height:8px; background:#4ade80; border-radius:50%; display:inline-block; box-shadow:0 0 10px #4ade80;"></span>
        數據連線中 (LIVE)
      </div>

      <!-- Main Content Layout -->
      <div style="flex:1; display:flex; flex-direction:column; padding:2vh 4vw; z-index:1; min-height:0;">
        
        <header class="page-header" style="padding-top: 5vh; margin-bottom: 3vh; flex-shrink:0;">
          <div style="display:flex; flex-direction:column; align-items:flex-start;">
            <h1 class="page-title neon-title" style="font-size:clamp(4rem, 10vh, 7rem) !important; line-height:1; margin-bottom: 0.5rem;">Gu Gu Gu 🌿</h1>
            <p style="font-size:clamp(1rem, 2vh, 1.4rem); color:#94a3b8; letter-spacing:4px; text-transform:uppercase; margin-top:0.4rem; opacity:0.8;">Master IDEEA Project Group 4-- 24/7 Monitoring Smart Website</p>
          </div>
          <button id="dev-exit" class="btn-secondary btn-back" style="padding:12px 24px; font-size:1.1rem;">← 退出 Exit</button>
        </header>

        <div style="display:flex; gap:3vw; flex:1; min-height:0; margin-bottom:1vh;">
          
          <!-- Left: Video Panel -->
          <div style="flex:1.5; display:flex; flex-direction:column; gap:1.5vh; min-width:0;">
            <div class="glass-panel" style="flex:1; display:flex; flex-direction:column; padding:1.5rem; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.1); border-radius:40px; box-shadow: 0 10px 40px rgba(0,0,0,0.4); min-height:0;">
              <h2 style="font-size:1.5rem; margin-bottom:1.5rem; color:#4ade80; display:flex; align-items:center; gap:12px; flex-shrink:0; font-weight:700;">
                <span class="rec-dot"></span> 專案宣傳影片
              </h2>
              <div style="width:100%; flex:1; background:#000; border-radius:25px; overflow:hidden; position:relative; min-height:0; border:1px solid rgba(255,255,255,0.1);">
                <video id="promo-video" loop autoplay muted style="width:100%; height:100%; object-fit:cover;">
                  <source src="/footage/previous_videos/video1.mp4" type="video/mp4" />
                </video>
                <div style="position:absolute; bottom:20px; left:20px; background:rgba(0,0,0,0.6); padding:8px 15px; border-radius:10px; font-size:0.9rem; font-weight:bold; backdrop-filter:blur(5px); transition: all 0.3s ease; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">Auto-Loop Active</div>
              </div>
            </div>

            <!-- Ticker -->
            <div class="glass-panel" style="height:7vh; min-height:50px; display:flex; align-items:center; overflow:hidden; background:rgba(74, 222, 128, 0.05); border-radius:25px; border:1px solid rgba(74,222,128,0.2); padding:0 2rem;">
              <div id="ticker" style="white-space:nowrap; font-size:1.4rem; color:#fbbf24; font-weight:800; animation:scrollLeft 20s linear infinite;">
                ⚡ 本地生態監測中 &nbsp;&nbsp;|&nbsp;&nbsp; 🌲 校園目前的鳥類活動頻率：高 &nbsp;&nbsp;|&nbsp;&nbsp; 🕊️ 感謝參與投票！ &nbsp;&nbsp;|&nbsp;&nbsp; 🌡️ 濕度：65% &nbsp;&nbsp;|&nbsp;&nbsp;
              </div>
            </div>
          </div>

          <!-- Right: Leaderboard & Mascot -->
          <div style="flex:1; display:flex; flex-direction:column; gap:2vh; min-width:0;">
            
            <div class="glass-panel" style="flex:1.8; display:flex; flex-direction:column; padding:2rem; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.1); border-radius:40px; min-height:0;">
              <h2 style="font-size:1.6rem; color:#3b82f6; display:flex; align-items:center; gap:15px; margin-bottom:2rem; flex-shrink:0; font-weight:800;">
                <span style="font-size:2rem; animation:rotate 10s linear infinite;">🏆</span> 即時人氣榜
              </h2>
              
              <div id="lb-container" style="flex:1; display:flex; flex-direction:column; gap:1.2rem; overflow:hidden; padding-right:0; margin-bottom:1rem; pointer-events:none;">
                <!-- Bird bars injected here - interaction disabled -->
              </div>

              <div id="live-notif" style="height:40px; margin-top:1rem; text-align:center; font-weight:900; color:#4ade80; font-size:1.2rem; opacity:0; transition:all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); flex-shrink:0;">
                🚀 收到新投票！
              </div>
            </div>

            <!-- Bottom UI Area -->
            <div style="flex:1; display:flex; justify-content:space-between; align-items:flex-end; min-height:0;">
              <!-- Mini QR Zone -->
              <div class="glass-panel" style="width:140px; height:180px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; background:rgba(255,255,255,0.05); border-radius:30px; box-shadow:0 10px 30px rgba(0,0,0,0.3); flex-shrink:0;">
                <div style="width:100px; height:100px; background:white; padding:8px; border-radius:15px; display:flex; align-items:center; justify-content:center;">
                  <svg viewBox="0 0 100 100" style="width:100%; height:100%; fill:#111;">
                    <path d="M0 0h30v10h10V0h30v30h-10v10h10v30h-10v10h10v30H70v-10h-10v10H30v-10h-10v10H0V70h10V60H0V30h10V0H0zm10 10v10h10V10H10zm50 0v10h10V10H60zM10 60v10h10V60H10zm50 20v10h10V80H60z" />
                    <rect x="40" y="40" width="20" height="20" />
                  </svg>
                </div>
                <span style="font-size:0.8rem; font-weight:900; color:#4ade80; text-align:center;">手機掃碼投票</span>
              </div>

              <!-- Mascot area scaled for PC - Unique IDs and adjusted padding -->
              <div style="position:relative; flex:1; display:flex; justify-content:flex-end; align-items:flex-end; padding-right: 40px;">
                <div id="exhibit-mascot-bubble" style="position:absolute; bottom:220px; right:80px; background:white; color:#111; padding:12px 20px; border-radius:20px; font-weight:900; font-size:1.1rem; opacity:0; transform:scale(0.8) translateY(20px); transition:all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); white-space:nowrap; z-index:10; box-shadow: 0 10px 40px rgba(0,0,0,0.4); border: 2px solid #4ade80;">
                  投票中... Gu!
                </div>
                <img src="/removedbg_gugugu.png" id="exhibit-mascot-img" style="height:clamp(200px, 30vh, 320px); filter:drop-shadow(0 15px 30px rgba(0,0,0,0.5)); cursor:pointer; animation:mascotSway 5s ease-in-out infinite; transform-origin: bottom center;" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <style>
      .neon-title { background: linear-gradient(90deg, #4ade80, #3b82f6, #a855f7, #4ade80); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shine 12s linear infinite; filter: drop-shadow(0 0 20px rgba(74, 222, 128, 0.4)); }
      @keyframes shine { to { background-position: 200% center; } }
      @keyframes scrollLeft { from { transform: translateX(100%); } to { transform: translateX(-120%); } }
      @keyframes mascotSway { 0%, 100% { transform: rotate(-2deg) scale(1); } 50% { transform: rotate(2deg) scale(1.05) translateY(-5px); } }
      @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      .rec-dot { width: 12px; height: 12px; background: #ef4444; border-radius: 50%; box-shadow: 0 0 10px #ef4444; animation: blink 1.5s infinite; }
      @keyframes blink { 0%, 100% { opacity:1; } 50% { opacity:0.3; } }
      
      .chart-row { 
        display: flex; flex-direction: column; gap: 0.5rem; 
        opacity: 0; transform: translateX(-30px);
        animation: rowEntrance 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
      }
      @keyframes rowEntrance {
        to { opacity: 1; transform: translateX(0); }
      }
      .bar-fill { height: 18px; background: linear-gradient(90deg, #3b82f6, #4ade80); border-radius: 10px; transition: width 1.5s cubic-bezier(0.34, 1.56, 0.64, 1); position: relative; overflow: hidden; box-shadow: 0 0 15px rgba(74, 222, 128, 0.2); }
      .bar-fill::after { content:""; position:absolute; top:0; left:-100%; width:100%; height:100%; background:linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); animation: stream 2s infinite; }
      @keyframes stream { 0% { left: -100%; } 100% { left: 100%; } }
      .bar-pulse { animation: barGrow 0.6s ease-out; }
      @keyframes barGrow { 0%, 100% { transform: scale(1); filter: brightness(1); } 50% { transform: scale(1.02); filter: brightness(1.3); } }
      
      .bird-thumb { width: 44px; height: 44px; border-radius: 50%; border: 2px solid #4ade80; object-fit: cover; }
    </style>
  `;let a=e.querySelector(`#lb-container`),o=e.querySelector(`#live-notif`),s=e.querySelector(`#exhibit-mascot-img`),c=e.querySelector(`#exhibit-mascot-bubble`),l=[{bird:`黑臉琵鷺`,votes:0,img:`/footage/encyclopedia/images/黑臉琵鷺.jpg`},{bird:`紅耳鵯`,votes:0,img:`/footage/encyclopedia/images/紅耳鵯.jpg`},{bird:`珠頸斑鳩`,votes:0,img:`/footage/encyclopedia/images/珠頸斑鳩.jpg`},{bird:`樹麻雀`,votes:0,img:`/footage/encyclopedia/images/樹麻雀.jpg`},{bird:`噪鵑`,votes:0,img:`/footage/encyclopedia/images/噪鵑.jpg`}],u=null;function d(e=null){if(!a)return;let t=[...l].sort((e,t)=>t.votes-e.votes).slice(0,6),n=Math.max(...t.map(e=>e.votes))||1;a.innerHTML=t.map((t,r)=>{let i=t.votes/n*100,a=t.bird===e,o=t.img||`/footage/encyclopedia/images/${t.bird}.jpg`;return`
        <div class="chart-row" style="animation-delay: ${r*.1}s">
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:1.1rem; font-weight:800; color:#f8fafc; margin-bottom:4px;">
            <div style="display:flex; align-items:center; gap:12px;">
              <span style="color:#4ade80; width:20px;">${r+1}</span>
              <img src="${o}" class="bird-thumb" onerror="this.src='/removedbg_gugugu.png'">
              <span>${t.bird}</span>
            </div>
            <span style="color:#4ade80; font-size:1.4rem;">${t.votes} <small style="font-size:0.8rem; opacity:0.6;">票</small></span>
          </div>
          <div style="width:100%; height:18px; background:rgba(255,255,255,0.05); border-radius:10px; overflow:hidden; border:1px solid rgba(255,255,255,0.05);">
            <div id="bar-${t.bird}" class="bar-fill ${a?`bar-pulse`:``}" style="width:${i}%;"></div>
          </div>
        </div>
      `}).join(``)}let f=e=>{c&&(c.textContent=e,c.style.opacity=`1`,c.style.transform=`scale(1) translateY(0)`,setTimeout(()=>{c&&c.textContent===e&&(c.style.opacity=`0`,c.style.transform=`scale(0.8) translateY(20px)`)},5e3))};s.onclick=()=>f(`我是展覽限定版的 Gu Gu！✨`);let p=!1;async function m(){if(!p){p=!0;try{let e=await fetch(`https://script.google.com/macros/s/AKfycbwRknj4-6Lphd0sz-4rK-v-VhQ3X-PmKah55lFmaVpuPMe22eVZHqNNzlOvNiNUECeR/exec?cb=${Date.now()}&action=get`);if(e.ok){let t=await e.json(),n=t.results||{},r=t.lastVote,i=null;Object.keys(n).forEach(e=>{let t=l.find(t=>t.bird===e);t?n[e]>t.votes&&(t.votes=n[e],i=e):(l.push({bird:e,votes:n[e]}),i=e)}),r&&r.id!==u&&(u!==null&&(f(`${r.user} 剛剛投給了 ${r.bird}！Gu!`),o.textContent=`⚡ 實時更新：${r.user} 投票成功！`,o.style.opacity=`1`,setTimeout(()=>o.style.opacity=`0`,3e3)),u=r.id),d(i)}}catch(e){console.log(`Polling error:`,e)}finally{p=!1}}}d();let h=setInterval(m,8e3),g=()=>{clearInterval(h),e.style.padding=t,document.body.style.overflow=n,r&&(r.style.display=`flex`),i&&(i.style.display=`flex`)};document.getElementById(`dev-exit`).onclick=()=>{g(),window.navigate(`login`)},window.addEventListener(`popstate`,g,{once:!0})}export{e as renderShowOff};