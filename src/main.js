import { router } from './router.js';
import { store } from './store.js';
import { MascotController } from './mascot.js';
import { applyTranslation } from './i18n.js';

// Setup Store globally
window.store = store;

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
    
    // If modal is open, refresh its content to reflect the new language immediately
    if (window.gugugu_bird_modal && !document.getElementById('bird-modal').classList.contains('hidden')) {
      window.gugugu_bird_modal.refreshI18n();
    }
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

// Global Bird Modal Controller (Permanent Solution)
window.gugugu_bird_modal = {
  list: [],
  currentIndex: -1,
  
  open(birdId, list = []) {
    const modal = document.getElementById('bird-modal');
    if (!modal) return;
    
    // Stop any currently playing bird audio or speech before switching
    if (window.audioPlayer) {
      window.audioPlayer.pause();
      window.audioPlayer.currentTime = 0;
    }
    window.speechSynthesis.cancel();
    
    const isUpdating = !modal.classList.contains('hidden');
    
    // Update state
    if (list && list.length > 0) this.list = list;
    this.currentIndex = this.list.findIndex(b => b.id === birdId);
    
    const bird = this.list[this.currentIndex] || this.list[0];
    if (!bird) return;
    
    // Fill content
    this._fillData(bird);
    
    // Show modal
    modal.classList.remove('hidden');
    
    // Only fire pop animation if it was hidden (prevents flashing when switching birds)
    const content = modal.querySelector('.centered-modal-content');
    if (content && !isUpdating) {
      content.classList.remove('modal-pop-anim');
      void content.offsetWidth;
      content.classList.add('modal-pop-anim');
    }
  },

  _fillData(bird) {
    const isEn = store.getLanguage() === 'en';
    
    document.getElementById('modal-img').src = bird.img;
    document.getElementById('modal-img').onerror = function() { this.src = './removedbg_gugugu.png'; };
    document.getElementById('modal-name').innerText = bird.name;
    document.getElementById('modal-enName').innerText = bird.enName;
    document.getElementById('modal-details').innerText = isEn ? bird.enDetails : bird.details;
    
    const updateBar = (id, val, max=100) => {
      const el = document.getElementById('bar-' + id);
      const label = document.getElementById('label-' + id);
      if (el) el.style.width = (val/max*100) + '%';
      if (label) label.innerText = (id === 'size' ? val + 'cm' : val + '%');
    };
    updateBar('size', bird.stats.size, 100);
    updateBar('prob', bird.stats.prob);
    updateBar('rare', bird.stats.rare);
    
    const sContainer = document.getElementById('modal-similar-icons');
    if (sContainer) {
      sContainer.innerHTML = '';
      if (bird.similarIds) {
        bird.similarIds.forEach(sid => {
          const sBird = this.list.find(b => b.id === sid);
          if (sBird) {
            const icon = document.createElement('div');
            icon.style.cssText = `cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:6px; transition: opacity 0.2s;`;
            icon.innerHTML = `
              <img src="${sBird.img}" style="width:50px; height:50px; border-radius:50%; object-fit:cover; border:2px solid #86efac;" />
              <span style="font-size:0.7rem; color:#86efac;">${isEn ? sBird.enName.split(' ')[0] : sBird.name}</span>
            `;
            icon.onclick = (e) => { e.stopPropagation(); this.open(sid); };
            sContainer.appendChild(icon);
          }
        });
      }
    }
    
    document.getElementById('btn-play-audio').onclick = (e) => {
      e.stopPropagation();
      if (!bird.audio) return window.mascot.say(isEn ? 'Audio coming soon! Gu!' : '語音製作中，敬請期待！Gu!');
      
      console.log(`[Audio] Attempting to play: ${bird.audio}`);
      if (!window.audioPlayer) window.audioPlayer = new Audio();
      window.audioPlayer.src = bird.audio;
      window.audioPlayer.play().catch(err => {
        console.error(`[Audio Error] Failed to play ${bird.audio}:`, err);
        window.mascot.say(isEn ? 'Oops! This bird is shy today (Audio missing).' : '哎呀！這隻小鳥今天比較害羞 (音檔缺失)。');
      });
    };
    
    document.getElementById('btn-read-aloud').onclick = (e) => {
      e.stopPropagation();
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(isEn ? bird.enDetails : bird.details);
      utter.lang = isEn ? 'en-GB' : 'zh-HK';
      window.speechSynthesis.speak(utter);
    };
    
    applyTranslation(store.getLanguage(), true);
  },

  refreshI18n() {
    const bird = this.list[this.currentIndex];
    if (bird) this._fillData(bird);
  },
  
  close() {
    const modal = document.getElementById('bird-modal');
    if (modal) modal.classList.add('hidden');
    if (window.audioPlayer) window.audioPlayer.pause();
    window.speechSynthesis.cancel();
  },
  
  nav(dir) {
    if (this.list.length === 0) return;
    this.currentIndex = (this.currentIndex + dir + this.list.length) % this.list.length;
    this.open(this.list[this.currentIndex].id);
  }
};

// Global Bindings for UI
document.getElementById('close-modal').onclick = () => window.gugugu_bird_modal.close();
document.getElementById('prev-bird-btn').onclick = (e) => { e.stopPropagation(); window.gugugu_bird_modal.nav(-1); };
document.getElementById('next-bird-btn').onclick = (e) => { e.stopPropagation(); window.gugugu_bird_modal.nav(1); };

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
initApp();
