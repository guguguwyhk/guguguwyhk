import { store } from '../store.js';
import { router } from '../router.js';

export function renderLogin(container) {
  // Only hide mascot if we don't want it floating randomly, but the login design asks for it integrated.
  // We'll hide the global floating mascot here to use the big design one, or just keep it.
  window.mascot.hide();

  container.innerHTML = `
    <div class="login-wrapper" style="display:flex; justify-content:center; align-items:center; height:100vh; padding: 1rem;">
      <div class="glass-panel fade-in" style="padding: clamp(1.5rem, 5vw, 4rem); text-align: center; max-width: 650px; width: 100%; position: relative;">
        <img src="./removedbg_gugugu.png" alt="Gu Gu Gu" style="width: clamp(120px, 35vw, 220px); filter: drop-shadow(0 4px 10px rgba(0,0,0,0.3)); margin-bottom: 1.5rem; animation: mascotBounce 2s infinite ease-in-out;" />
        <h1 style="font-size: clamp(2rem, 10vw, 3rem); margin-bottom: 0.5rem; color:var(--primary-color);">Gu Gu Gu</h1>
        <h2 style="font-size: clamp(1.1rem, 5vw, 1.5rem); font-weight:500; color:var(--text-muted); margin-bottom: 2.5rem;" data-i18n="login-welcome">24/7 Monitoring Smart Website</h2>
        
        <form id="login-form">
          <input type="text" id="username" class="glass-input" placeholder="請輸入你的名字/暱稱" data-i18n-placeholder="login-enter-name" style="margin-bottom: 2rem; padding: 20px; font-size: 1.2rem;" autocomplete="off" />
          <button type="submit" class="btn-primary" style="width: 100%; padding: 18px; margin-bottom: 1rem; font-size: 1.4rem;">開始探索校園 🌿</button>
        </form>
        
        <button id="skip-btn" class="btn-secondary" style="width: 100%; padding: 16px; border:none; font-size: 1.2rem;">略過</button>
      </div>
    </div>
  `;



  const BAD_WORDS = [
    'fuck', 'shit', 'bitch', 'asshole', 'dick', 'pussy', 'nigga', 'nigger', 'bastard',
    '屌', '戇', '仆街', '鹹濕', '臭嗨', '收皮', '屌你', '死全家'
  ];

  const form = document.getElementById('login-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('username').value.trim();
    
    // Developer Secret Door
    if (name === "justinisblacknigga") {
      router.navigate('showoff');
      return;
    }

    if (name) {
      // Profanity Filter
      const hasBadWord = BAD_WORDS.some(word => name.toLowerCase().includes(word));
      if (hasBadWord) {
        window.mascot.show();
        window.mascot.say("哎呀！這個名字不太禮貌喔，換一個吧！Gu Gu!", 5000);
        document.getElementById('username').value = '';
        return;
      }

      store.setUserName(name);
      window.mascot.show();
      window.mascot.say(`Gu Gu Gu! 歡迎你，${name}！`, 5000);
      sessionStorage.setItem('show_vote_modal', 'true');
      router.navigate('home');
    }
  });

  const skipBtn = document.getElementById('skip-btn');
  skipBtn.addEventListener('click', () => {
    store.setUserName('探險家');
    window.mascot.show();
    window.mascot.say(`歡迎你，探險家！`, 5000);
    sessionStorage.setItem('show_vote_modal', 'true');
    router.navigate('home');
  });
}
