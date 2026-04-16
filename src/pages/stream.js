export function renderStream(container) {
  // 這裡預設將會是你部署到 Render 後的 URL
  const savedUrl = localStorage.getItem('esp32_relay_url') || 'wss://gugugu-relay.onrender.com';

  container.innerHTML = `
    <div class="page-container">
    <header class="page-header">
      <h1 class="page-title" data-i18n="nav-stream">直播鳥屋 🎥</h1>
      <button class="btn-secondary btn-back" id="back-btn" data-i18n="back-home">⬅ 返回主頁</button>
    </header>

    <div class="glass-panel stream-config" style="display:none;">
      <input type="text" id="stream-url-input" value="${savedUrl}" />
      <button id="connect-btn">連線</button>
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
      <button class="btn-secondary history-media-btn" data-src="./footage/previous_videos/video1.mp4" data-type="video" data-i18n="clip-feeding">進食片段 1</button>
      <button class="btn-secondary history-media-btn" data-src="./footage/previous_videos/IMAG0002.jpg" data-type="image" data-i18n="clip-snapshot">鳥屋快照</button>
    </div>

    <div class="mobile-stack" style="display:flex; gap:1.5rem; flex-wrap:wrap;">
      <!-- Feed Area -->
      <div class="glass-panel" style="flex:3; min-width:280px; padding:1rem; background:rgba(0,0,0,0.3);">
        <div id="video-container" class="stream-viewport">

          <!-- === LIVE STATE: Idle === -->
          <div id="live-idle" style="text-align:center;">
            <img src="./removedbg_gugugu.png" style="width:clamp(60px, 15vw, 80px); margin-bottom:1rem; opacity:0.6;" />
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
            <img src="./gugugu_builder.png" style="width:clamp(120px, 40vw, 180px); margin-bottom:1.5rem; filter: drop-shadow(0 0 20px rgba(0,0,0,0.5));" />
            <h3 style="color:#f87171;" data-i18n="stream-error">中繼站正在忙碌或休眠中...</h3>
            <p id="error-detail" style="color:#666; font-size:1rem; margin-bottom:1.5rem;">請嘗試重新整理網頁 (Reload) 喚醒伺服器</p>
            <button class="btn-primary" id="retry-btn" onclick="window.location.reload();">重新整理網頁 Reload</button>
          </div>

          <!-- === HISTORY STATE === -->
          <video id="history-video" class="hidden" style="width:100%; height:100%; object-fit:cover;" controls>
            <source src="./footage/previous_videos/video1.mp4" type="video/mp4" />
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
      <div style="flex:1; min-width:200px; display:flex; flex-direction:column; gap:1rem;">
        <div class="glass-panel" style="text-align:center; padding:1.2rem;">
          <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.5rem; text-transform:uppercase;" data-i18n="env-condition">校園環境</p>
          <div style="font-size:1.8rem; margin-bottom:0.2rem;">☁️ 25°C</div>
          <p style="font-weight:bold; color:var(--primary-color);" data-i18n="cond-good">良好 (Good)</p>
        </div>
        <div class="glass-panel" style="text-align:center; padding:1.2rem;">
          <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.5rem; text-transform:uppercase;" data-i18n="local-time">本地時間</p>
          <h4 id="live-time" style="font-size:1.4rem; font-family:'Outfit';">--:--:--</h4>
        </div>

        <!-- Stream Info Panel -->
        <div id="stream-info-panel" class="glass-panel hidden" style="padding:1.2rem;">
          <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.8rem; text-transform:uppercase;">📡 串流資訊</p>
          <div style="display:flex; flex-direction:column; gap:0.5rem; font-size:0.85rem;">
            <div><span style="color:#86efac;">來源：</span><span id="info-source" style="word-break:break-all;">-</span></div>
            <div><span style="color:#86efac;">連線數：</span><span id="info-viewers">?</span> 人</div>
            <div><span style="color:#86efac;">幀數：</span><span id="info-fps">0</span> FPS</div>
            <div><span style="color:#86efac;">已連線：</span><span id="info-uptime">-</span></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  `;

  // ============================================================
  //  State & DOM refs
  // ============================================================
  let ws = null;
  let connectTime = null;
  let uptimeInterval = null;
  let currentTab = 'live'; 
  let lastObjectURL = null;

  // FPS calculating
  let framesThisSecond = 0;
  let fpsInterval = null;

  const els = {
    input:      document.getElementById('stream-url-input'),
    connectBtn: document.getElementById('connect-btn'),
    retryBtn:   document.getElementById('retry-btn'),
    status:     document.getElementById('connection-status'),
    statusText: document.querySelector('.stream-status-text'),
    liveIdle:   document.getElementById('live-idle'),
    liveConn:   document.getElementById('live-connecting'),
    liveImg:    document.getElementById('live-stream-img'),
    liveError:  document.getElementById('live-error'),
    errorDetail:document.getElementById('error-detail'),
    connDetail: document.getElementById('connecting-detail'),
    histVideo:  document.getElementById('history-video'),
    histImage:  document.getElementById('history-image'),
    fullscreen: document.getElementById('fullscreen-btn'),
    liveBadge:  document.getElementById('live-badge'),
    infoPanel:  document.getElementById('stream-info-panel'),
    infoSource: document.getElementById('info-source'),
    infoFps:    document.getElementById('info-fps'),
    infoUptime: document.getElementById('info-uptime'),
    mediaSel:   document.getElementById('media-selector'),
  };

  // ============================================================
  //  Helpers
  // ============================================================
  function showOnly(el) {
    [els.liveIdle, els.liveConn, els.liveImg, els.liveError, els.histVideo, els.histImage].forEach(e => e.classList.add('hidden'));
    if (el) el.classList.remove('hidden');
  }

  function setStatus(state) {
    els.status.className = 'stream-status stream-status--' + state;
    const labels = { offline: '未連線', connecting: '連線中...', online: '🟢 雲端已連線', error: '連線失敗' };
    els.statusText.textContent = labels[state] || '';
  }

  // ============================================================
  //  WebSocket Connection
  // ============================================================
  function connectWebSocket() {
    let url = els.input.value.trim();
    if (!url) {
      els.input.style.borderColor = '#f87171';
      setTimeout(() => els.input.style.borderColor = '', 2000);
      return;
    }

    // Auto-fix URL scheme
    if (url.startsWith('http://')) url = url.replace('http://', 'ws://');
    if (url.startsWith('https://')) url = url.replace('https://', 'wss://');
    if (!url.startsWith('ws://') && !url.startsWith('wss://')) {
      url = 'wss://' + url; // Default to secure websocket 
    }

    localStorage.setItem('esp32_relay_url', url);

    if (ws) {
      ws.close();
    }

    showOnly(els.liveConn);
    els.connDetail.textContent = url;
    setStatus('connecting');

    try {
      ws = new WebSocket(url);
      ws.binaryType = 'blob'; // We expect binary JPEG blobs
    } catch (e) {
      handleWsError("WebSocket 初始化失敗");
      return;
    }

    ws.onopen = () => {
      setStatus('online');
      showOnly(els.liveImg);
      els.fullscreen.classList.remove('hidden');
      els.liveBadge.classList.remove('hidden');
      els.infoPanel.classList.remove('hidden');
      els.infoSource.textContent = url.replace('wss://', '').replace('ws://', '');
      
      connectTime = Date.now();
      startUptimeCounter();
      startFpsCounter();
    };

    ws.onmessage = (event) => {
      if (currentTab !== 'live') return;

      // Check if data is a Blob (Image) or String (JSON count)
      if (event.data instanceof Blob) {
        framesThisSecond++;
        if (lastObjectURL) URL.revokeObjectURL(lastObjectURL);
        lastObjectURL = URL.createObjectURL(event.data);
        els.liveImg.src = lastObjectURL;
      } 
      else if (typeof event.data === 'string') {
        try {
          const msg = JSON.parse(event.data);
          if (msg.type === 'viewer_count') {
            document.getElementById('info-viewers').textContent = msg.count;
          }
        } catch (e) { /* Ignore non-JSON strings */ }
      }
    };

    ws.onerror = (err) => {
      console.error("WebSocket Error:", err);
      // Let onclose handle UI
    };

    ws.onclose = () => {
      handleWsError('中繼站連線已中斷');
    };
  }

  function handleWsError(msg) {
    ws = null;
    setStatus('error');
    showOnly(els.liveError);
    els.errorDetail.textContent = msg;
    els.fullscreen.classList.add('hidden');
    els.liveBadge.classList.add('hidden');
    stopUptimeCounter();
    stopFpsCounter();
  }

  function disconnect() {
    if (ws) ws.close();
    if (lastObjectURL) URL.revokeObjectURL(lastObjectURL);
    lastObjectURL = null;
    els.liveImg.src = '';
    stopUptimeCounter();
    stopFpsCounter();
  }

  // ============================================================
  //  Metrics
  // ============================================================
  function startUptimeCounter() {
    stopUptimeCounter();
    uptimeInterval = setInterval(() => {
      if (!connectTime) return;
      const diff = Math.floor((Date.now() - connectTime) / 1000);
      const m = Math.floor(diff / 60);
      const s = diff % 60;
      els.infoUptime.textContent = `${m}分${s.toString().padStart(2, '0')}秒`;
    }, 1000);
  }

  function stopUptimeCounter() {
    clearInterval(uptimeInterval);
    uptimeInterval = null;
  }

  function startFpsCounter() {
    stopFpsCounter();
    framesThisSecond = 0;
    els.infoFps.textContent = '0';
    fpsInterval = setInterval(() => {
      els.infoFps.textContent = framesThisSecond.toString();
      framesThisSecond = 0;
    }, 1000);
  }

  function stopFpsCounter() {
    clearInterval(fpsInterval);
    fpsInterval = null;
  }

  // ============================================================
  //  Event listeners
  // ============================================================
  document.getElementById('back-btn').onclick = () => {
    disconnect();
    window.navigate('home');
  };

  const updateClock = () => {
    const el = document.getElementById('live-time');
    if (el) el.textContent = new Date().toLocaleTimeString();
  };
  const clockInterval = setInterval(updateClock, 1000);
  updateClock();

  els.connectBtn.onclick = connectWebSocket;
  if (els.retryBtn) els.retryBtn.onclick = connectWebSocket;

  els.input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') connectWebSocket();
  });

  // Tab switching
  document.getElementById('tab-live').onclick = () => {
    currentTab = 'live';
    document.getElementById('tab-live').className = 'btn-primary';
    document.getElementById('tab-history').className = 'btn-secondary';
    els.mediaSel.style.display = 'none';

    els.histVideo.classList.add('hidden');
    els.histImage.classList.add('hidden');
    els.histVideo.pause && els.histVideo.pause();

    if (ws && ws.readyState === WebSocket.OPEN) {
      showOnly(els.liveImg);
      els.fullscreen.classList.remove('hidden');
      els.liveBadge.classList.remove('hidden');
    } else {
      showOnly(els.liveIdle);
    }
  };

  document.getElementById('tab-history').onclick = () => {
    currentTab = 'history';
    document.getElementById('tab-history').className = 'btn-primary';
    document.getElementById('tab-live').className = 'btn-secondary';
    els.mediaSel.style.display = 'flex';
    els.fullscreen.classList.add('hidden');
    els.liveBadge.classList.add('hidden');

    showOnly(null); // hide live states

    const firstMedia = document.querySelector('.history-media-btn');
    if (firstMedia) firstMedia.click();
  };

  document.querySelectorAll('.history-media-btn').forEach(btn => {
    btn.onclick = (e) => {
      const { src, type } = e.target.dataset;
      const v = els.histVideo;
      const i = els.histImage;
      if (type === 'video') {
        i.classList.add('hidden'); v.classList.remove('hidden');
        v.src = src; v.play();
      } else {
        v.classList.add('hidden'); i.classList.remove('hidden');
        i.src = src;
      }
    };
  });

  els.fullscreen.onclick = () => {
    const viewport = document.getElementById('video-container');
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      if (viewport.requestFullscreen) { viewport.requestFullscreen(); } 
      else if (viewport.webkitRequestFullscreen) { viewport.webkitRequestFullscreen(); }
      els.fullscreen.textContent = '✕'; // Exit icon
    } else {
      if (document.exitFullscreen) { document.exitFullscreen(); }
      else if (document.webkitExitFullscreen) { document.webkitExitFullscreen(); }
      els.fullscreen.textContent = '⛶'; // Fullscreen icon
    }
  };

  // Listen for ESC key or browser-native exit
  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      els.fullscreen.textContent = '⛶';
    }
  });
  document.addEventListener('webkitfullscreenchange', () => {
    if (!document.webkitFullscreenElement) {
      els.fullscreen.textContent = '⛶';
    }
  });

  if (savedUrl) {
    setTimeout(connectWebSocket, 300);
  }

  // Returning cleanup for the router
  return () => {
    disconnect();
    clearInterval(clockInterval);
    stopUptimeCounter();
    stopFpsCounter();
    if (els.histVideo) els.histVideo.pause();
  };
}
