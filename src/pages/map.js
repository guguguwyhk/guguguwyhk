export function renderMap(container) {
  container.innerHTML = `
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
    map.scrollLeft = 200;
  });
}
