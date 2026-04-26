export class MascotController {
  constructor() {
    this.widget = document.getElementById('mascot-widget');
    this.img = document.getElementById('mascot-img');
    this.img.src = './removedbg_gugugu.png';
    this.bubble = document.getElementById('mascot-bubble');
    
    this.idleTimer = null;
    this.pokes = {
      zh: [
        "今天天氣真好！Gu Gu! 🌿", "你有在我們的直播看到小鳥嗎？🎥", "快去百科找找我的同伴！📖",
        "我最喜歡吃校園裡的果實啦！🍒", "投票給你最喜歡的小鳥吧！🗳️", "Gu Gu! 歡迎來到華仁鳥屋監察及生態網站！",
        "試試守護小鳥大挑戰！🎮", "記得 Follow 我們的 IG @gugugu_wyhk！",
      ],
      en: [
        "Nice weather today! Gu Gu! 🌿", "Have you seen birds in our live stream? 🎥", "Go find my friends in the Encyclopedia! 📖",
        "I love eating fruits on campus! 🍒", "Vote for your favorite bird! 🗳️", "Gu Gu! Welcome to Wah Yan Bird House Monitoring and Ecosystem Website!",
        "Try the Little Bird Guardian Challenge! 🎮", "Don't forget to follow our IG @gugugu_wyhk!",
      ]
    };
    this.attentionMessages = {
      zh: [
        "Gu Gu! 有人在嗎？快來探索校園的鳥類！👀", "這裡有很多酷炫的小鳥等待你發現喔！🌿",
        "想玩玩看守護小鳥大挑戰嗎？🎮", "別忘了點擊右下角切換語言喔！🌎",
        "Gu Gu! 看看那邊，最近有好多黑臉琵鷺過境！", "你有在直播中看到什麼嗎？🎥",
      ],
      en: [
        "Gu Gu! Anyone there? Come explore campus birds! 👀", "Many cool birds are waiting for you! 🌿",
        "Want to try the Little Bird Guardian Challenge? 🎮", "Don't forget to switch languages! 🌎",
        "Hey! Don't leave me alone! Come and explore! 🐦", "Gu Gu! Look over there, many spoonbills passing by!",
      ]
    };

    this.bubbleTimer = null;
    this.init();
  }

  init() {
    this.img.addEventListener('click', () => {
      const lang = (window.store && window.store.getLanguage()) || 'zh';
      const pool = this.pokes[lang] || this.pokes.zh;
      this.clickPop();
      this.say(pool[Math.floor(Math.random() * pool.length)]);
      this.resetIdle();
    });

    let lastReset = 0;
    const resetEvents = ['mousemove', 'keydown', 'mousedown', 'touchstart', 'scroll', 'click'];
    resetEvents.forEach(evt => {
      document.addEventListener(evt, () => {
        const now = Date.now();
        if (now - lastReset > 5000) { // Large throttle: every 5 seconds
          this.resetIdle();
          lastReset = now;
        }
      }, { passive: true });
    });
    
    this.resetIdle();
  }

  resetIdle() {
    if (this.idleTimer) clearTimeout(this.idleTimer);
    this.idleTimer = setTimeout(() => {
      const lang = (window.store && window.store.getLanguage()) || 'zh';
      const pool = this.attentionMessages[lang] || this.attentionMessages.zh;
      const msg = pool[Math.floor(Math.random() * pool.length)];
      this.say(msg, 6000);
      this.resetIdle();
    }, 85000); 
  }

  say(msg, duration = 5000) {
    this.bubble.textContent = msg;
    this.bubble.classList.remove('hidden', 'bubble-pop');
    void this.bubble.offsetWidth; // Force Reflow
    this.bubble.classList.add('bubble-pop');
    this.bounce(); 

    // Sound disabled as per user request
    
    if (this.bubbleTimer) clearTimeout(this.bubbleTimer);
    this.bubbleTimer = setTimeout(() => {
      this.bubble.classList.add('hidden');
      this.bubble.classList.remove('bubble-pop');
    }, duration);
  }

  bounce() {
    this.img.classList.remove('mascot-anim-bounce');
    void this.img.offsetWidth;
    this.img.classList.add('mascot-anim-bounce');
  }

  clickPop() {
    this.img.classList.remove('mascot-click-pop', 'mascot-anim-bounce');
    void this.img.offsetWidth;
    this.img.classList.add('mascot-click-pop');
    setTimeout(() => {
      this.img.classList.remove('mascot-click-pop');
    }, 600);
  }

  hide() {
    this.widget.classList.add('hidden');
  }

  show() {
    this.widget.classList.remove('hidden');
    this.bounce();
  }
}
