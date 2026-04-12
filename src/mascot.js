export class MascotController {
  constructor() {
    this.widget = document.getElementById('mascot-widget');
    this.img = document.getElementById('mascot-img');
    this.bubble = document.getElementById('mascot-bubble');
    
    this.idleTimer = null;
    this.pokes = [
      "今天天氣真好！Gu Gu! 🌿",
      "你有在我們的直播看到小鳥嗎？🎥",
      "快去百科找找我的同伴！📖",
      "我最喜歡吃校園裡的果實啦！🍒",
      "投票給你最喜歡的小鳥吧！🗳️",
      "Gu Gu! 歡迎來到華仁生態門戶！",
      "試試守護者挑戰遊戲！🎮",
      "記得 Follow 我們的 IG @gugugu_wyhk！",
    ];
    this.attentionMessages = [
      "Gu Gu! 有人在嗎？快來探索校園的鳥類！👀",
      "這裡有很多酷炫的小鳥等待你發現喔！🌿",
      "想玩玩看守護者挑戰遊戲嗎？🎮",
      "別忘了點擊右下角切換語言喔！🌎",
      "Hey! Don't leave me alone! Come and explore! 🐦",
      "Gu Gu! 看看那邊，最近有好多黑臉琵鷺過境！",
      "你有在直播中看到什麼嗎？🎥",
    ];

    this.init();
  }

  init() {
    this.img.addEventListener('click', () => {
      this.clickPop();
      this.say(this.pokes[Math.floor(Math.random() * this.pokes.length)]);
      this.resetIdle();
    });

    const resetEvents = ['mousemove', 'keydown', 'mousedown', 'touchstart', 'scroll', 'click'];
    resetEvents.forEach(evt => {
      document.addEventListener(evt, () => this.resetIdle(), { passive: true });
    });
    
    this.resetIdle();
  }

  resetIdle() {
    if (this.idleTimer) clearTimeout(this.idleTimer);
    this.idleTimer = setTimeout(() => {
      // Choose a random attention message
      const msg = this.attentionMessages[Math.floor(Math.random() * this.attentionMessages.length)];
      this.say(msg, 6000);
      
      // Auto-restart idle loop after saying it (so it keeps nagging if still idle)
      this.resetIdle();
    }, 85000); // 85 Seconds as requested
  }

  say(msg, duration = 5000) {
    this.bubble.textContent = msg;
    this.bubble.classList.remove('hidden', 'bubble-pop');
    void this.bubble.offsetWidth; // Force Reflow
    this.bubble.classList.add('bubble-pop');
    this.bounce(); 
    
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
