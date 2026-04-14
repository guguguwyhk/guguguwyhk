import { router } from './src/router.js';
import { store } from './src/store.js';
import { MascotController } from './src/mascot.js';
import { applyTranslation } from './src/i18n.js';

// Setup Mascot
window.mascot = new MascotController();

// Global navigate function
window.navigate = (path) => router.navigate(path);

// Global Language Toggle
const langBtn = document.getElementById('global-lang-btn');
if (langBtn) {
  langBtn.addEventListener('click', () => {
    const current = store.getLanguage();
    const nextLang = current === 'zh' ? 'en' : 'zh';
    store.setLanguage(nextLang);
    applyTranslation(nextLang);
  });
}

// Global click handler to close bird-modal when clicking outside
document.addEventListener('click', (e) => {
  const modal = document.getElementById('bird-modal');
  if (modal && !modal.classList.contains('hidden')) {
    if (e.target === modal) {
      modal.classList.add('hidden');
      if (window.audioPlayer) window.audioPlayer.pause();
    }
  }
});

// Setup Initial App State
function initApp() {
  const userName = store.getUserName();
  const initialPath = userName ? 'home' : 'login';
  
  // URL sync
  const urlParams = new URLSearchParams(window.location.search);
  const target = urlParams.get('page') || initialPath;
  
  router.navigate(target, false); 
  applyTranslation(store.getLanguage(), true);
}

// Browser Back/Forward support
window.addEventListener('popstate', (e) => {
  if (e.state && e.state.page) router.navigate(e.state.page, false);
});

// Let's go
document.addEventListener('DOMContentLoaded', initApp);
