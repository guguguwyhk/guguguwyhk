import { store } from '../store.js';
import { translations } from '../i18n.js';

export function renderLogin(container) {
  // Only hide mascot if we don't want it floating randomly, but the login design asks for it integrated.
  // We'll hide the global floating mascot here to use the big design one, or just keep it.
  const t = (key, data = {}) => {
    const curLang = (window.store && window.store.getLanguage()) || 'zh';
    let msg = (translations[key] && translations[key][curLang]) || key;
    for (const k in data) msg = msg.replace(`{${k}}`, data[k]);
    return msg;
  };
  window.mascot.hide();

  container.innerHTML = `
    <div class="login-wrapper" style="display:flex; justify-content:center; align-items:center; min-height:100vh; min-height:100dvh; padding: clamp(1rem, 5vw, 2rem);">
      <div class="glass-panel fade-in" style="padding: clamp(1.2rem, 5vw, 3rem); text-align: center; max-width: min(90vw, 540px); width: 100%; position: relative; box-shadow: 0 40px 80px rgba(0,0,0,0.8), 0 0 20px rgba(134, 239, 172, 0.05); border: 1.5px solid rgba(134, 239, 172, 0.25); background: rgba(5, 15, 10, 0.92); display: flex; flex-direction: column; align-items: center; border-radius: 35px; overflow: hidden;">
        <img src="./removedbg_gugugu.png" alt="Gu Gu Gu" style="width: clamp(120px, 25vw, 240px); filter: drop-shadow(0 10px 20px rgba(0,0,0,0.4)); margin-bottom: 1.2rem; animation: mascotBounce 3s infinite ease-in-out;" />
        <h1 style="font-size: clamp(2.8rem, 10vw, 4.5rem); margin-bottom: 0.2rem; color:#22c55e; font-weight: 900; letter-spacing: -2px; text-shadow: 0 5px 20px rgba(34,197,94,0.4); line-height: 1;">Gu Gu Gu</h1>
        <h2 style="font-size: clamp(0.9rem, 3.5vw, 1.4rem); font-weight:600; color:#94a3b8; margin-bottom: 2rem; letter-spacing: 0.5px;" data-i18n="login-welcome">華仁鳥屋監察及生態網站</h2>
        
        <form id="login-form" style="width: 100%; max-width: 460px;">
          <input type="text" id="username" class="glass-input" placeholder="請輸入你的名字/暱稱" data-i18n-placeholder="login-enter-name" style="margin-bottom: 1.2rem; padding: 20px 24px; font-size: 1.2rem; width: 100%; box-sizing: border-box; border-radius: 18px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.03);" autocomplete="off" />
          <button type="submit" class="btn-primary" style="width: 100%; padding: 20px; margin-bottom: 1rem; font-size: 1.5rem; border:none; border-radius:100px; cursor:pointer; background: linear-gradient(135deg, #22c55e, #16a34a); box-shadow: 0 10px 20px rgba(34,197,94,0.4); font-weight:800;" data-i18n="login-start">開始探索校園 🌿</button>
        </form>
        
        <button id="skip-btn" class="btn-secondary" style="width: 100%; max-width: 460px; padding: 16px; border:none; font-size: 1.1rem; border-radius:100px; cursor:pointer; background: rgba(0, 0, 0, 0.5); color:#cbd5e1; border: 1px solid rgba(255,255,255,0.08); font-weight:600;" data-i18n="login-skip">略過</button>
      </div>
    </div>
  `;



  const BAD_WORDS = [
    // Political / Sensitive
    'xijinping', '習近平', '習總', 'xijiping', 'xijingping', '習大大', '毛澤東', 'maozedong', '64', '六四', 'tiananmen', '天安門',
    'hitler', 'stalin', 'putin', 'trump', 'biden', 'kimjongun',
    // English Foul Language / Slurs
    'fuck', 'fcck', 'fuk', 'fck', 'shit', 'sh1t', 'asshole', 'bitch', 'cunt', 'dick', 'pussy', 'bastard', 'slut', 'whore',
    'nigger', 'nigga', 'niger', 'nigeria', 'nigg', 'chink', 'retard', 'faggot', 'fag', 'gay', 'lesbian', 'porn', 'sex',
    'motherfucker', 'cock', 'wanker', 'prick', 'bollocks', 'tosser',
    // Chinese / Cantonese Foul Language
    'dllm', 'on9', 'pkhs', 'on79', 'pk', '仆街', '屌', '屄', '肏', '操你', '操妳', '幹你', '靠北', '三小', '王八蛋',
    '賤人', '狗屎', '混蛋', '死全家', '冚家鏟', '傻逼', '煞筆', 'sb', '撚', '柒', '鳩', '戇撚鳩', '含撚', '啜核',
    '腦殘', '廢青', '支那', '港獨', '台獨', '死開', '去死', '痴線', '黐線', '頂你', '頂你個肺'
  ];

  const form = document.getElementById('login-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const rawName = document.getElementById('username').value.trim();
    
    // Developer Secret Door
    if (rawName === "justinisblacknigga") {
      window.navigate('showoff');
      return;
    }

    if (rawName) {
      if (rawName.length < 2) {
        window.mascot.show();
        window.mascot.say(t('login-name-short'), 4000);
        return;
      }
      if (rawName.length > 15) {
        window.mascot.show();
        window.mascot.say(t('login-name-long'), 4000);
        return;
      }

      // EXTREME NORMALIZATION: remove spaces, symbols, and common leetspeak
      const normalized = rawName.toLowerCase()
        .replace(/0/g, 'o').replace(/1/g, 'i').replace(/3/g, 'e').replace(/4/g, 'a').replace(/5/g, 's').replace(/7/g, 't').replace(/8/g, 'b')
        .replace(/[^a-z0-9\u4e00-\u9fa5]/g, '');

      const hasBadWord = BAD_WORDS.some(word => {
        const target = word.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]/g, '');
        return normalized.includes(target);
      });
      
      if (hasBadWord) {
        window.mascot.show();
        window.mascot.say(t('login-name-forbidden'), 6000);
        document.getElementById('username').value = '';
        return;
      }

      store.setUserName(rawName);
      window.mascot.show();
      window.mascot.say(t('login-welcome-name', { name: rawName }), 5000);
      sessionStorage.setItem('show_vote_modal', 'true');
      window.navigate('home');
    }
  });

  const skipBtn = document.getElementById('skip-btn');
  skipBtn.addEventListener('click', () => {
    store.setUserName('探險家');
    window.mascot.show();
    window.mascot.say(t('login-welcome-guest'), 5000);
    sessionStorage.setItem('show_vote_modal', 'true');
    window.navigate('home');
  });
}
