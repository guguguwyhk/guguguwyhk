import { applyTranslation } from './i18n.js';
import { store } from './store.js';
import { renderLogin } from './pages/login.js';
import { renderHome } from './pages/home.js';
import { renderEncyclopedia } from './pages/encyclopedia.js';
import { renderStream } from './pages/stream.js';
import { renderMap } from './pages/map.js';
import { renderGame } from './pages/game.js';
import { renderAbout } from './pages/about.js';

export const router = {
  get appContainer() { return document.getElementById('app'); },
  currentPath: null,
  currentCleanup: null,
  
  navigate(path, push = true) {
    if (this.currentPath === path) return;
    
    // Call cleanup for previous page
    if (this.currentCleanup && typeof this.currentCleanup === 'function') {
      try { this.currentCleanup(); } catch(e) { console.error('Cleanup error:', e); }
      this.currentCleanup = null;
    }

    this.currentPath = path;
    
    if (push) {
      const url = new URL(window.location);
      url.searchParams.set('page', path);
      window.history.pushState({ page: path }, '', url);
    }

    // Safety: Close any open global modals when navigating
    const modal = document.getElementById('bird-modal');
    if (modal) modal.classList.add('hidden');
    
    // Safety: Stop any active Bird call audio
    this.stopAllAudio();

    if (this.appContainer.innerHTML !== '') {
      this.appContainer.className = 'page page-exit-active';
      setTimeout(() => {
        this.currentCleanup = this._renderPage(path);
      }, 300);
    } else {
      this.currentCleanup = this._renderPage(path);
    }
  },

  _renderPage(path) {
    // Clear and reset state
    this.appContainer.innerHTML = ''; 
    this.appContainer.className = 'page page-transition-enter';
    
    const finalize = () => {
      applyTranslation(store.getLanguage(), true);
    };

    let cleanup = null;
    switch(path) {
      case 'login':
        cleanup = renderLogin(this.appContainer);
        finalize();
        break;
      case 'home':
        cleanup = renderHome(this.appContainer);
        finalize();
        break;
      case 'encyclopedia':
        cleanup = renderEncyclopedia(this.appContainer);
        finalize();
        break;
      case 'stream':
        cleanup = renderStream(this.appContainer);
        finalize();
        break;
      case 'map':
        cleanup = renderMap(this.appContainer);
        finalize();
        break;
      case 'game':
        cleanup = renderGame(this.appContainer);
        finalize();
        break;
      case 'about':
        cleanup = renderAbout(this.appContainer);
        finalize();
        break;
      case 'showoff':
        // Handle dynamic import case
        import('./pages/showoff.js').then(module => {
          this.currentCleanup = module.renderShowOff(this.appContainer);
          finalize();
        });
        break;
      default:
        cleanup = renderLogin(this.appContainer);
        finalize();
    }
    return cleanup;
  },

  stopAllAudio() {
    try {
      if (window.audioPlayer) {
        window.audioPlayer.pause();
        window.audioPlayer.currentTime = 0;
      }
      const audios = document.querySelectorAll('audio');
      audios.forEach(a => a.pause());
    } catch(e) {}
  }
};
