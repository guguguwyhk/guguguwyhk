export function renderAbout(container) {
  window.mascot.show();
  
  container.innerHTML = `
    <div class="page-container fade-in">
      
      <header class="page-header">
        <h1 class="page-title" data-i18n="nav-about">About Us</h1>
        <button class="btn-secondary btn-back liquid-btn" onclick="window.navigate('home')" data-i18n="back-home">⬅ 返回主頁</button>
      </header>

      <!-- Hero Visual -->
      <div class="glass-panel" style="overflow:hidden; margin-bottom:2.5rem;">
        <img src="./footage/about_us/birdhouse3.jpeg" style="width:100%; height:300px; object-fit:cover; filter:brightness(0.7);" onerror="this.style.display='none'" />
        <div style="padding:2rem; background:rgba(0,0,0,0.5); border-top:1px solid var(--glass-border);">
           <h2 style="margin:0; font-size:clamp(1.2rem, 5vw, 1.8rem);" data-i18n="about-hero-title">We are group 4 from 3K</h2>
           <p style="opacity:0.8; margin-top:0.5rem;" data-i18n="about-hero-sub">IDEEA Project — Wah Yan College, Hong Kong</p>
        </div>
      </div>
      
      <div class="about-grid">
        
        <!-- Left: Q&A -->
        <div class="glass-panel" style="padding: clamp(1.5rem, 4vw, 2.5rem);">
          <div style="display: flex; flex-direction: column; gap: 2.2rem;">
            
            <div class="qa-block">
              <h3 class="qa-title" data-i18n="about-q1">What leads you to make this project?</h3>
              <p class="qa-text" data-i18n="about-a1">We observed that our schoolmates have less attraction to nature...</p>
            </div>
            
            <div class="qa-block">
              <h3 class="qa-title" data-i18n="about-q2">Why did you choose to make a bird house?</h3>
              <p class="qa-text" data-i18n="about-a2">We found that students have relatively little information about birds...</p>
            </div>

            <div class="qa-block">
              <h3 class="qa-title" data-i18n="about-q3">Introduce your product</h3>
              <p class="qa-text" data-i18n="about-a3">We made a bird house for the birds resting...</p>
              <p style="margin-top: 1rem; color: #86efac; font-weight:bold;" data-i18n="about-ig-nag">You can follow our IG @gugugu_wyhk...</p>
            </div>

            <div class="qa-block">
              <h3 class="qa-title" data-i18n="about-q4">How did it start?</h3>
              <p class="qa-text" data-i18n="about-a4">We started at the start of this school year...</p>
            </div>

            <div class="qa-block">
              <h3 class="qa-title" data-i18n="about-q5">Why Gu Gu Gu?</h3>
              <p class="qa-text" data-i18n="about-a5">The word "GU GU GU" is a nickname from Pigeon...</p>
            </div>

            <div class="qa-block">
              <h3 class="qa-title" data-i18n="about-q6">Difficult Part</h3>
              <p class="qa-text" data-i18n="about-a6">Implementing the IoT camera solution...</p>
            </div>
          </div>
        </div>

        <!-- Right: Visuals & Links -->
        <div style="display:flex; flex-direction:column; gap:2rem;">
          <div class="glass-panel" style="padding:2rem; text-align:center;">
              <h3 style="margin-bottom:1.2rem; font-size:1.1rem;" data-i18n="about-follow">Follow us!</h3>
              <a href="https://www.instagram.com/gugugu_wyhk/" target="_blank" class="ig-glow" style="display:inline-flex; align-items:center; gap:10px; color:white; text-decoration:none; background:linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); padding:12px 20px; border-radius:12px; font-weight:bold; font-size:1rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                @gugugu_wyhk
              </a>
           </div>

           <div class="glass-panel" style="padding:1rem; overflow:hidden; border-radius:24px;">
              <img src="./footage/about_us/birdhouse1.jpeg" style="width:100%; height:180px; object-fit:cover; border-radius:16px; margin-bottom:0.8rem;" onerror="this.style.display='none'" />
              <img src="./footage/about_us/birdhouse4.jpeg" style="width:100%; height:180px; object-fit:cover; border-radius:16px;" onerror="this.style.display='none'" />
           </div>

           <div class="glass-panel" style="padding:1.5rem; text-align:center;">
              <p style="font-size:1rem; font-weight:bold; color:#86efac;" data-i18n="about-team-title">IDEEA Project 3K Group 4</p>
              <p style="font-size:0.9rem; color:var(--text-muted); margin-top:0.5rem;" data-i18n="about-team-names">Astin Lam · Brayden Chan · Cyrus Chan · Justin Lau</p>
           </div>
        </div>

      </div>
    </div>

    <style>
      .qa-title { font-size: 1.3rem; color: #fbbf24; margin-bottom: 0.7rem; border-left:4px solid #fbbf24; padding-left:14px; }
      .qa-text { font-size: 1.1rem; line-height: 1.7; color:#e2e8f0; }
    </style>
  `;
}
