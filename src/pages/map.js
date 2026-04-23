export function renderMap(container) {
  container.innerHTML = `
    <div class="page-container" style="display:flex; flex-direction:column; min-height: 100vh; overflow-x: hidden; overflow-y: auto; padding: 0;">
      <header class="page-header">
        <h1 class="page-title" data-i18n="card-map-title"></h1>
        <button id="back-btn" class="btn-secondary btn-back liquid-btn" data-i18n="back-home"></button>
      </header>

      <div class="map-layout" style="flex: 1; padding: 0; display: flex; overflow: hidden; position: relative; background: #050c08; min-height: clamp(400px, 70vh, 800px);">
        <!-- Loading Overlay -->
        <div id="map-loading" style="position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 50; background: rgba(5, 12, 8, 0.95); transition: opacity 0.5s ease;">
          <div class="loading-spinner" style="width: 60px; height: 60px; border: 4px solid rgba(134, 239, 172, 0.1); border-top-color: #86efac; border-radius: 50%; animation: spin 1s linear infinite;"></div>
          <h3 style="margin-top: 1.5rem; color: #86efac; letter-spacing: 1px;">正在部署生態地圖...</h3>
          <p style="color: var(--text-muted); margin-top: 0.5rem;">請稍候，數據同步中 Gu!</p>
        </div>

        <!-- Embedded Google Slides -->
        <iframe 
          id="slides-iframe"
          src="https://docs.google.com/presentation/d/1VSy2uOezuxn5Yt3TwVZJix5QXO6nm9RgnlIfarfubPE/embed?start=false&loop=false&delayms=3000&rm=minimal&slide=id.gc5ddde5fd9_2_124" 
          frameborder="0" 
          width="100%" 
          height="100%" 
          sandbox="allow-scripts allow-same-origin"
          allowfullscreen="true" 
          mozallowfullscreen="true" 
          webkitallowfullscreen="true"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; opacity: 0; transition: opacity 0.8s ease; pointer-events: auto;"
          tabindex="-1">
        </iframe>
      </div>
    </div>
  `;

  const backBtn = document.getElementById('back-btn');
  backBtn.addEventListener('click', () => {
    if (window.mascot && window.mascot.img) {
      window.mascot.img.src = './removedbg_gugugu.png';
    }
    window.navigate('home');
  });

  const iframe = document.getElementById('slides-iframe');
  const loader = document.getElementById('map-loading');
  const isEn = window.store && window.store.getLanguage() === 'en';
  
  if (window.mascot && window.mascot.img) {
    window.mascot.img.src = './gugugu_builder.png';
    const lang = (window.store && window.store.getLanguage()) || 'zh';
    const msg = (translations['map-loading-mascot'] && translations['map-loading-mascot'][lang]) || "Preparing map...";
    window.mascot.say(msg);
  }

  let loadFinished = false;
  const finishLoading = () => {
    if (loadFinished) return;
    loadFinished = true;
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.classList.add('hidden');
      iframe.style.opacity = '1';
      if (window.mascot && window.mascot.img) {
        window.mascot.img.src = './removedbg_gugugu.png';
        const lang = (window.store && window.store.getLanguage()) || 'zh';
        const msg = (translations['map-ready-mascot'] && translations['map-ready-mascot'][lang]) || "Map ready!";
        window.mascot.say(msg);
      }
    }, 300);
  };

  iframe.onload = finishLoading;
  setTimeout(finishLoading, 2500); // 增加少少延遲確保穩定

  // 禁止鍵盤導航
  const preventKbdNav = (e) => {
    const blocked = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space', 'PageUp', 'PageDown'];
    if (blocked.includes(e.code) || blocked.includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  
  window.addEventListener('keydown', preventKbdNav, true);
  
  // Prevent iframe from stealing focus to keep keyboard blocking effective
  const focusInterval = setInterval(() => {
    if (document.activeElement === iframe) {
      iframe.blur();
      window.focus();
    }
  }, 100);

  return () => {
    loadFinished = true;
    window.removeEventListener('keydown', preventKbdNav, true);
    clearInterval(focusInterval);
  };
}
