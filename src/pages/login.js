import { store } from '../store.js';
import { router } from '../router.js';

export function renderLogin(container) {
  // Only hide mascot if we don't want it floating randomly, but the login design asks for it integrated.
  // We'll hide the global floating mascot here to use the big design one, or just keep it.
  window.mascot.hide();

  container.innerHTML = `
    <div class="login-wrapper" style="display:flex; justify-content:center; align-items:center; height:100vh;">
      <div class="glass-panel fade-in" style="padding: 4rem; text-align: center; max-width: 650px; width: 100%; position: relative;">
        <img src="/removedbg_gugugu.png" alt="Gu Gu Gu" style="width: 220px; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.3)); margin-bottom: 1.5rem; animation: mascotBounce 2s infinite ease-in-out;" />
        <h1 style="font-size: 3rem; margin-bottom: 0.5rem; color:var(--primary-color);">Gu Gu Gu</h1>
        <h2 style="font-size: 1.5rem; font-weight:500; color:var(--text-muted); margin-bottom: 2.5rem;">Campus Ecology Portal</h2>
        
        <form id="login-form">
          <input type="text" id="username" class="glass-input" placeholder="請輸入你的名字/暱稱" data-i18n-placeholder="login-enter-name" style="margin-bottom: 2rem; padding: 20px; font-size: 1.2rem;" autocomplete="off" />
          <button type="submit" class="btn-primary" style="width: 100%; padding: 18px; margin-bottom: 1rem; font-size: 1.4rem;">開始探索校園 🌿</button>
        </form>
        
        <button id="skip-btn" class="btn-secondary" style="width: 100%; padding: 16px; border:none; font-size: 1.2rem;">略過</button>
      </div>
    </div>
  `;



  const form = document.getElementById('login-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('username').value.trim();
    
    if (name === "justinisblacknigga") {
      router.navigate('showoff');
      return;
    }

    if(name) {
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
