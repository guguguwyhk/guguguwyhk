export function renderMap(container) {
  container.innerHTML = `
    <div class="page-container">
    <header class="page-header" style="position:relative; z-index:100;">
      <h1 class="page-title" data-i18n="card-map-title">華仁生態地圖 🗺️</h1>
      <button class="btn-secondary btn-back" id="back-btn" data-i18n="back-home">⬅ 返回主頁</button>
    </header>

    <div class="map-layout">
      
      <!-- Left Panel (Explorer Guide) -->
      <div class="glass-panel map-info-panel">
        <h3 style="margin-bottom:1rem; color:var(--primary-color);">🗺️ 地圖導覽指南</h3>
        <p style="font-size:0.95rem; line-height:1.6; margin-bottom:1rem; color: #4b5563;">拖拉地圖並點擊數字光點，即可開啟對應的 <strong>生態介紹簡報</strong>，探索華仁校園各處的鳥類生態！紅色圖示為鳥屋實時攝影機位置。</p>
        
        <!-- Target popup content -->
        <div id="hotspot-info" class="hidden" style="background:var(--primary-color); padding:1rem; border-radius:12px; color:white;">
           <h4 id="h-loc" style="margin-bottom:0.5rem; font-size:1.2rem;"></h4>
           <p id="h-desc" style="font-size:1rem; margin-bottom:0.5rem;"></p>
           <strong id="h-bird" style="display:block; padding:8px; background:rgba(255,255,255,0.2); border-radius:8px; text-align:center;"></strong>
        </div>
      </div>

      <!-- Interactive Map Image -->
      <div id="map-container" class="map-interactive-area">
        <!-- Placeholder map image, normally using zoom/pan library, but CSS works for mockup -->
        <img src="./footage/wy_map/plan_view_of_wy.png" style="min-width:1200px; height:auto; display:block;" />
        
        <!-- Hotspots numbers overlay -->
        <a href="https://docs.google.com/presentation/d/1VSy2uOezuxn5Yt3TwVZJix5QXO6nm9RgnlIfarfubPE/edit?slide=id.gc5ddde5fd9_2_147" target="_blank" class="hotspot" style="top: 35%; left: 42%;" data-bird="草叢" data-loc="第一檢查點" data-desc="點擊查看簡報詳情">1</a>
        <a href="https://docs.google.com/presentation/d/1VSy2uOezuxn5Yt3TwVZJix5QXO6nm9RgnlIfarfubPE/edit?slide=id.gc5ddde5fd9_2_147" target="_blank" class="hotspot" style="top: 60%; left: 25%;" data-bird="大樹" data-loc="第二檢查點" data-desc="點擊查看簡報詳情">2</a>
        <a href="https://docs.google.com/presentation/d/1VSy2uOezuxn5Yt3TwVZJix5QXO6nm9RgnlIfarfubPE/edit?slide=id.gc5ddde5fd9_2_147" target="_blank" class="hotspot" style="top: 70%; left: 75%;" data-bird="水池" data-loc="第三檢查點" data-desc="點擊查看簡報詳情">3</a>
        
        <!-- ESP32-CAM Special Pin -->
        <div class="hotspot cam-pin" style="top: 45%; left: 55%; background:var(--danger-color); color:white;" data-bird="攝影機" data-loc="鳥屋觀測站" data-desc="24小時實時直播點！">
          📹
        </div>
      </div>

    </div>
    
    <style>
      .hotspot {
        position:absolute; 
        width: clamp(40px, 12vw, 60px); 
        height: clamp(40px, 12vw, 60px); 
        background:white; border:3px solid var(--primary-color);
        border-radius:50%; cursor:pointer; transform:translate(-50%, -50%);
        box-shadow: 0 4px 15px rgba(0,0,0,0.5);
        display:flex; justify-content:center; align-items:center;
        font-size: clamp(1.2rem, 5vw, 1.8rem); font-weight:900; color:var(--primary-color);
        text-decoration:none;
        transition: transform 0.2s, background 0.2s;
        z-index: 10;
      }
      .hotspot:hover {
        transform:translate(-50%, -50%) scale(1.1);
        background:var(--primary-color);
        color:white;
        z-index:100;
      }
      .cam-pin {
        width: clamp(45px, 15vw, 70px); 
        height: clamp(45px, 15vw, 70px); 
        border:4px solid white; animation: pulseCam 1.5s infinite; 
        font-size: clamp(1.4rem, 6vw, 2rem);
      }
      @keyframes pulseCam {
        0% { box-shadow: 0 0 0 0 rgba(186, 26, 26, 0.7); }
        70% { box-shadow: 0 0 0 20px rgba(186, 26, 26, 0); }
        100% { box-shadow: 0 0 0 0 rgba(186, 26, 26, 0); }
      }
      @media (max-width: 600px) {
        .hotspot { border-width: 2px; }
        .cam-pin { border-width: 2px; }
      }
    </style>
  `;

  document.getElementById('back-btn').addEventListener('click', () => window.navigate('home'));

  // Hotspot Integration
  const infoBox = document.getElementById('hotspot-info');
  const hLoc = document.getElementById('h-loc');
  const hDesc = document.getElementById('h-desc');
  const hBird = document.getElementById('h-bird');

  document.querySelectorAll('.hotspot').forEach(spot => {
    spot.addEventListener('click', (e) => {
      infoBox.classList.remove('hidden');
      infoBox.classList.add('fade-in');
      hLoc.textContent = `📍 ${e.target.dataset.loc}`;
      hDesc.textContent = e.target.dataset.desc;
      hBird.textContent = e.target.dataset.bird === '攝影機' ? '查看直播' : `最常出現：${e.target.dataset.bird}`;
      
      // Mascot Reaction
      window.mascot.bounce();
      if(e.target.dataset.bird !== '攝影機') {
        window.mascot.say(`嘿！這裡可是${e.target.dataset.bird}最喜歡聚會的地方喔！`);
      } else {
        window.mascot.say(`這裡是我的專屬休息站鳥屋！`);
      }
    });

    // Make map center on scroll a bit initially
    const map = document.getElementById('map-container');
    if (map) {
      setTimeout(() => { map.scrollLeft = 250; }, 100);
    }
  });

  return () => {
    // Basic cleanup
  };
}
