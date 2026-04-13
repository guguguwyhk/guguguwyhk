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
  appContainer: document.getElementById('app'),
  currentPath: null,
  
  navigate(path) {
    this.currentPath = path;
    
    // Safety: Close any open global modals when navigating
    const modal = document.getElementById('bird-modal');
    if (modal) modal.classList.add('hidden');
    
    // Safety: Stop any active Bird call audio
    try {
      if (window.audioPlayer && window.audioPlayer.src) {
        window.audioPlayer.pause();
      }
    } catch(e) {}

    if (this.appContainer.innerHTML !== '') {
      this.appContainer.className = 'page page-exit-active';
      setTimeout(() => {
        this._renderPage(path);
      }, 300);
    } else {
      this._renderPage(path);
    }
  },

  refresh() {
    if (this.currentPath) {
      this._renderPage(this.currentPath);
    }
  },

  _renderPage(path) {
    // simple routing
    this.appContainer.innerHTML = ''; // clear current
    this.appContainer.className = 'page page-enter-active';
    
    const finalize = () => {
      applyTranslation(store.getLanguage(), true);
    };

    switch(path) {
      case 'login':
        renderLogin(this.appContainer);
        finalize();
        break;
      case 'home':
        renderHome(this.appContainer);
        finalize();
        break;
      case 'encyclopedia':
        renderEncyclopedia(this.appContainer);
        finalize();
        break;
      case 'stream':
        renderStream(this.appContainer);
        finalize();
        break;
      case 'map':
        renderMap(this.appContainer);
        finalize();
        break;
      case 'game':
        renderGame(this.appContainer);
        finalize();
        break;
      case 'about':
        renderAbout(this.appContainer);
        finalize();
        break;
      case 'showoff':
        import('./pages/showoff.js').then(module => {
          module.renderShowOff(this.appContainer);
          finalize();
        });
        break;
      default:
        renderLogin(this.appContainer);
        finalize();
    }
  }
};
