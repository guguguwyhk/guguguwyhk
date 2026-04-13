import { router } from './src/router.js';
import { store } from './src/store.js';
import { MascotController } from './src/mascot.js';

// Setup Mascot
window.mascot = new MascotController();

// Initialize App Routing
function initApp() {
  const userName = store.getUserName();
  if (userName) {
    router.navigate('home');
  } else {
    router.navigate('login');
  }
}

// Global navigate function so buttons can call it easily if needed
window.navigate = (path) => {
  router.navigate(path);
};

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

// Global Language Toggle
import { applyTranslation } from './src/i18n.js';

const langBtn = document.getElementById('global-lang-btn');
langBtn.addEventListener('click', () => {
  const current = store.getLanguage();
  const nextLang = current === 'zh' ? 'en' : 'zh';
  store.setLanguage(nextLang);
  langBtn.querySelector('span').innerText = nextLang === 'zh' ? 'EN' : '中';
  applyTranslation(nextLang);
});

// Setup initial translation
const initialLang = store.getLanguage();
langBtn.querySelector('span').innerText = initialLang === 'zh' ? 'EN' : '中';
setTimeout(() => applyTranslation(initialLang, true), 100);

// Start
initApp();
