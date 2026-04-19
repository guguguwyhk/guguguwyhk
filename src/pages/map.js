export function renderMap(container) {
  container.innerHTML = `
    <div class="page-container" style="display:flex; flex-direction:column; height: 100vh; overflow: hidden; padding: 0;">
      <header class="page-header" style="position:relative; z-index:100; padding: 1rem 2rem; flex-shrink: 0;">
        <h1 class="page-title" data-i18n="card-map-title">華仁生態地圖 🗺️</h1>
        <button class="btn-secondary btn-back" id="back-btn" data-i18n="back-home">⬅ 返回主頁</button>
      </header>

      <div class="map-layout" style="flex: 1; padding: 0; display: flex; overflow: hidden; position: relative; background: #050c08;">
        <!-- Loading Overlay -->
        <div id="map-loading" style="position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 50; background: rgba(5, 12, 8, 0.95); transition: opacity 0.5s ease;">
          <div class="loading-spinner" style="width: 60px; height: 60px; border: 4px solid rgba(134, 239, 172, 0.1); border-top-color: #86efac; border-radius: 50%; animation: spin 1s linear infinite;"></div>
          <h3 style="margin-top: 1.5rem; color: #86efac; letter-spacing: 1px;">正在部署生態地圖...</h3>
          <p style="color: var(--text-muted); margin-top: 0.5rem;">請稍候，數據同步中 Gu!</p>
        </div>

        <!-- Embedded Google Slides Presentation -->
        <!-- We use pointer-events: none to prevent mobile app redirects and PC arrow key navigation -->
        <iframe 
          id="slides-iframe"
          src="https://docs.google.com/presentation/d/1VSy2uOezuxn5Yt3TwVZJix5QXO6nm9RgnlIfarfubPE/embed?start=false&loop=false&delayms=3000&rm=minimal&slide=id.gc5ddde5fd9_2_124" 
          frameborder="0" 
          width="100%" 
          height="100%" 
          allowfullscreen="true" 
          mozallowfullscreen="true" 
          webkitallowfullscreen="true"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; opacity: 0; transition: opacity 0.8s ease; pointer-events: none; user-select: none;">
        </iframe>
        
        <!-- Optional: A clear overlay to catch clicks if needed, though pointer-events:none on iframe is usually enough -->
        <div style="position: absolute; inset: 0; z-index: 10;"></div>
      </div>
    </div>
  `;

  document.getElementById('back-btn').addEventListener('click', () => {
    // Revert mascot image if it hasn't reverted yet
    if (window.mascot && window.mascot.img) {
      window.mascot.img.src = './removedbg_gugugu.png';
    }
    window.navigate('home');
  });

  const iframe = document.getElementById('slides-iframe');
  const loader = document.getElementById('map-loading');
  
  // Custom Mascot State: Builder
  if (window.mascot && window.mascot.img) {
    window.mascot.img.src = './gugugu_builder.png';
    window.mascot.say("正在為你準備校園地圖！Gu Gu!");
  }

  // SNAPPY LOAD LOGIC: 
  // 1. Hide as soon as iframe triggers onload
  // 2. BUT also force-hide after 1.5s if it's taking too long (Google Slides can be slow)
  let loadFinished = false;
  const finishLoading = () => {
    if (loadFinished) return;
    loadFinished = true;
    
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.classList.add('hidden');
      iframe.style.opacity = '1';
      
      // Revert mascot and say welcome
      if (window.mascot && window.mascot.img) {
        window.mascot.img.src = './removedbg_gugugu.png';
        window.mascot.say("這裡是華仁生態地圖！Gu!");
      }
    }, 300); // Snappier 300ms instead of 500ms
  };

  iframe.onload = finishLoading;
  
  // Hard timeout: 1.5 seconds max wait
  setTimeout(finishLoading, 1500);

  return () => {
    loadFinished = true; // prevent late triggers after navigation
  };
}

