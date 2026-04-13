export const BIRDS = [
  { 
    id: '1', 
    name: '紅耳鵯', 
    enName: 'Red-whiskered Bulbul', 
    img: './footage/encyclopedia/images/紅耳鵯.jpg', 
    audio: './footage/encyclopedia/audio/紅耳鵯.mp3', 
    stats: { size: 20, prob: 95, activity: 80, rare: 5 }, 
    details: '校園中最常見的常客！最具標誌性的是牠們頭上的黑色高聳冠羽，以及眼後那一小抹鮮豔的紅色。叫聲響亮清脆，經常成群在樹梢活動，尤其喜歡果實和花蜜。',
    enDetails: 'The most common visitor on campus! Most iconic are their tall black crests and the bright red patch behind their eyes. They have a loud, cheerful call and are often seen in groups around tree tops, especially favoring fruits and nectar.',
    similar: '白頭鵯（頭頂白色，無紅色耳羽）、基丁氏馬島鵑。',
    enSimilar: 'White-vented Bulbul (white head, no red ear patch).',
    similarIds: ['12', '14']
  },
  { 
    id: '2', 
    name: '原鴿', 
    enName: 'Rock Dove', 
    img: './footage/encyclopedia/images/原鴿.jpg', 
    audio: './footage/encyclopedia/audio/原鴿.mp3', 
    stats: { size: 33, prob: 99, activity: 60, rare: 1 }, 
    details: '這就是我們 Gu Gu Gu 名稱的精神領袖！廣泛適應城市環境，羽色雖然多變（有灰色、棕色、純白），但頸部多帶有閃亮的綠紫色金屬光澤。牠們是典型的留鳥，常見於校園建築物邊緣。',
    enDetails: 'The mascot species for our "Gu Gu Gu" name! Highly adapted to urban life, their plumage varies (grey, brown, white), but typically features iridescent green and purple on the neck. They are year-round residents often seen on campus building ledges.',
    similar: '珠頸斑鳩（頸部有珍珠狀斑點）、灰斑鳩。',
    enSimilar: 'Spotted Dove (checkered pattern on neck), Collared Dove.',
    similarIds: ['8', '10']
  },
  { 
    id: '3', 
    name: '珠頸斑鳩', 
    enName: 'Spotted Dove', 
    img: './footage/encyclopedia/images/珠頸斑鳩.jpg', 
    audio: './footage/encyclopedia/audio/珠頸斑鳩.mp3', 
    stats: { size: 30, prob: 98, activity: 40, rare: 5 }, 
    details: '頸部後方有一圈佈滿白色珍珠狀斑點的黑色羽毛，這是牠們名字的由來。飛行方式平穩，常在草地上漫步覓食。鳴叫聲低沉溫婉，給人一種寧靜的感覺。',
    enDetails: 'Named for the collar of white-spotted black feathers on the back of its neck. They fly in a steady manner and are often found foraging on grass. Their cooing call is low and gentle, bringing a sense of peace.',
    similar: '原鴿（體型稍大，頸部有金屬光澤）、灰斑鳩。',
    enSimilar: 'Rock Dove (slightly larger with metallic neck sheen), Collared Dove.',
    similarIds: ['2', '10']
  },
  { 
    id: '4', 
    name: '鵲鴝', 
    enName: 'Oriental Magpie-robin', 
    img: './footage/encyclopedia/images/鵲鴝.jpg', 
    audio: './footage/encyclopedia/audio/鵲鴝.mp3', 
    stats: { size: 23, prob: 85, activity: 90, rare: 15 }, 
    details: '校園裡的「歌唱明星」。雄鳥黑白分明，常站在高處翹起尾巴高聲鳴囀。牠們領域意識極強，不時會在地面跳躍尋找昆蟲。是校園內最受歡迎的鳥類之一。',
    enDetails: 'The "Singing Star" of the campus. Males are sharply black and white, often seen singing from high perches with their tails cocked. Very territorial, they frequently hop on the ground searching for insects.',
    similar: '黑領椋鳥（頸部有黑色領圈）、噪鵑。',
    enSimilar: 'Black-collared Starling (black collar on neck), Asian Koel.',
    similarIds: ['14', '6']
  },
  { 
    id: '5', 
    name: '普通翠鳥', 
    enName: 'Common Kingfisher', 
    img: './footage/encyclopedia/images/普通翠鳥.jpg', 
    audio: './footage/encyclopedia/audio/普通翠鳥.mp3', 
    stats: { size: 17, prob: 30, activity: 20, rare: 75 }, 
    details: '華麗的捕魚高手。全身佈滿閃亮的藍綠色羽毛，腹部為棕橘色。牠們常靜靜停在水邊的細枝上，一旦發現獵物便如箭般衝入水中。在校園的小噴池或水池邊偶爾能見到。',
    enDetails: 'A brilliant fishing master. Covered in shimmering turquoise feathers with a chestnut belly. They often sit motionless on branches over water, diving like an arrow once they spot prey. Occasionally seen near campus pond areas.',
    similar: '白胸翡翠、藍翡翠（體型稍大）。',
    enSimilar: 'Other Kingfisher species (larger size).',
    similarIds: ['11']
  },
  { 
    id: '6', 
    name: '噪鵑', 
    enName: 'Asian Koel', 
    img: './footage/encyclopedia/images/噪鵑.jpg', 
    audio: './footage/encyclopedia/audio/噪鵑.mp3', 
    stats: { size: 43, prob: 60, activity: 40, rare: 40 }, 
    details: '最具神秘感的鳥類之一。雄鳥全身漆黑，雙眼呈血紅色；雌鳥則佈滿褐色斑點。牠們的叫聲「古喔、古喔」極具穿透力，常在春夏季節的清晨響徹校園。',
    enDetails: 'One of the most mysterious birds on campus. Males are iridescent black with blood-red eyes; females are speckled with brown. Their "ko-el, ko-el" call is highly penetrating, often heard on spring mornings.',
    similar: '黑領椋鳥、鵲鴝（體型小得多）。',
    enSimilar: 'Black-collared Starling, Oriental Magpie-robin (much smaller).',
    similarIds: ['14', '4']
  },
  { 
    id: '7', 
    name: '樹麻雀', 
    enName: 'Eurasian Tree Sparrow', 
    img: './footage/encyclopedia/images/樹麻雀.jpg', 
    audio: './footage/encyclopedia/audio/樹麻雀.mp3', 
    stats: { size: 14, prob: 99, activity: 85, rare: 2 }, 
    details: '校園中最平凡也最熱鬧的身影。特徵是臉頰中心有一個明顯的黑色斑。牠們極富好奇心，常成群在花圃、球場附近尋找食物碎屑。',
    enDetails: 'The most humble yet busiest bird on campus. Distinguished by the black patch in the center of its cheek. Sociable and curious, they are often found in groups searching for crumbs near fields and gardens.',
    similar: '紅耳鵯（有冠羽）、洋燕。',
    enSimilar: 'Bulbuls (with crests), Swallows.',
    similarIds: ['1', '9']
  },
  { 
    id: '8', 
    name: '灰斑鳩', 
    enName: 'Eurasian Collared-dove', 
    img: './footage/encyclopedia/images/灰斑鳩.jpg', 
    audio: './footage/encyclopedia/audio/灰斑鳩.mp3', 
    stats: { size: 31, prob: 55, activity: 40, rare: 45 }, 
    details: '全身呈現均勻的淡粉褐灰色，後頸有一道細窄的黑色半環（領圈）。與珠頸斑鳩相比，牠們的體色更為簡潔流暢，鳴叫聲也更有韻律。',
    enDetails: 'Evenly pale pinkish-grey plumage with a thin black half-collar on the back of its neck. Sleeker in appearance than the Spotted Dove, with a rhythmic, pulsing cooing call.',
    similar: '珠頸斑鳩（頸部有大量白點）、原鴿。',
    enSimilar: 'Spotted Dove (heavy white spots on neck), Rock Dove.',
    similarIds: ['3', '2']
  },
  { 
    id: '9', 
    name: '洋燕', 
    enName: 'Pacific Swallow', 
    img: './footage/encyclopedia/images/洋燕.jpg', 
    audio: './footage/encyclopedia/audio/洋燕.mp3', 
    stats: { size: 13, prob: 70, activity: 95, rare: 25 }, 
    details: '飛行大師。翅膀細長尖銳，喉部為暗紅色。常在球場上空快速飛翔捕食飛蟲。牠們與家燕相似，但尾羽沒有長長的尖端，體態更為精悍。',
    enDetails: 'A master of flight with slender, pointed wings and a dull red throat. Often seen darting over open fields hunting aerial insects. Similar to the Barn Swallow but with shorter, less forked tail streamers.',
    similar: '樹麻雀（體型相近但飛行動作不同）、家燕。',
    enSimilar: 'Tree Sparrow, Barn Swallow.',
    similarIds: ['7', '1']
  },
  { 
    id: '10', 
    name: '牛背鷺', 
    enName: 'Cattle Egret', 
    img: './footage/encyclopedia/images/牛背鷺.jpg', 
    audio: './footage/encyclopedia/audio/牛背鷺.mp3', 
    stats: { size: 50, prob: 45, activity: 30, rare: 55 }, 
    details: '全身潔白，但在繁殖季節頭部、頸部和背部會長出橘黃色的羽毛，這是其名字由來。牠們不常捕魚，反而喜歡在草地跟隨動物或除草機捕捉昆蟲。',
    enDetails: 'Pure white plumage, though develops orange-yellow feathers on head and neck during breeding season. Unlike other egrets, they prefer hunting insects in grasslands rather than fishing in water.',
    similar: '小白鷺（體型更大，腳趾黃色）、大白鷺。',
    enSimilar: 'Little Egret (larger, yellow feet), Great Egret.',
    similarIds: ['13']
  },
  { 
    id: '11', 
    name: '綠背姬鶲', 
    enName: 'Green-backed Flycatcher', 
    img: './footage/encyclopedia/images/綠背姬鶲.jpg', 
    audio: './footage/encyclopedia/audio/綠背姬鶲.mp3', 
    stats: { size: 13, prob: 20, activity: 60, rare: 85 }, 
    details: '十分精緻珍稀的小鳥。雄鳥背部翠綠，喉部至腹部為鮮豔的鮮黃色，眼後有明顯的白色眉線。是過境期校園林間最亮眼的驚喜之一。',
    enDetails: 'A delicate and rare visitor. Males have a vibrant green back and a bright yellow underside with a distinct white eyebrow stripe. One of the many colorful surprises found on campus during migration seasons.',
    similar: '黃眉柳鶯（顏色較暗淡）、綠繡眼。',
    enSimilar: 'Yellow-browed Warbler (duller colors), White-eye.',
    similarIds: ['12']
  },
  { 
    id: '12', 
    name: '黃眉柳鶯', 
    enName: 'Yellow-browed Warbler', 
    img: './footage/encyclopedia/images/黃眉柳鶯.jpg', 
    audio: './footage/encyclopedia/audio/黃眉柳鶯.mp3', 
    stats: { size: 10, prob: 50, activity: 90, rare: 65 }, 
    details: '體型極小的「樹間精靈」。全身橄欖綠色，最明顯的是那一對鮮黃色的眉線和兩道淺色的翼帶。牠們非常活潑，在樹葉間快速跳動捕捉蚜蟲，叫聲尖銳婉轉。',
    enDetails: 'A tiny "woodland elf". Olive-green overall with two distinct pale wing bars and strong yellow eyebrows. Very active, hopping through leaves to catch insects with a thin, repeated call.',
    similar: '綠背姬鶲（黃色更鮮豔）、其它柳鶯。',
    enSimilar: 'Green-backed Flycatcher (vibrant yellow), other Leaf Warblers.',
    similarIds: ['11']
  },
  { 
    id: '13', 
    name: '黑臉琵鷺', 
    enName: 'Black-faced Spoonbill', 
    img: './footage/encyclopedia/images/黑臉琵鷺.jpg', 
    audio: './footage/encyclopedia/audio/黑臉琵鷺.mp3', 
    stats: { size: 75, prob: 10, activity: 20, rare: 98 }, 
    details: '極為珍稀的國際級保護鳥類！全身潔白，擁有最具特色的長琵琶狀黑嘴和黑色臉部。如果校園附近濕地出現牠的身影，那將是生態保育工作的一大肯定。',
    enDetails: 'A globally endangered species! Pure white plumage with a unique black spoon-shaped bill and black face. Their presence near campus wetland areas would be a significant milestone for local conservation efforts.',
    similar: '牛背鷺（體型小得多）、白鷺。',
    enSimilar: 'Cattle Egret (much smaller), Great Egret.',
    similarIds: ['10']
  },
  { 
    id: '14', 
    name: '黑領椋鳥', 
    enName: 'Black-collared Starling', 
    img: './footage/encyclopedia/images/黑領椋鳥.jpg', 
    audio: './footage/encyclopedia/audio/黑領椋鳥.mp3', 
    stats: { size: 28, prob: 80, activity: 65, rare: 20 }, 
    details: '這種椋鳥頸部有一道極為明顯的寬大黑色領圈，如戴著項鍊一般。叫聲響亮、複雜且帶有金屬質感，常能模仿其他鳥類的聲音。牠們集群活動，適應力極強。',
    enDetails: 'This starling has a very distinct wide black collar that looks like a necklace. Their calls are loud, complex, and metallic, often mimicking other birds. Sociable and highly adaptable.',
    similar: '鵲鴝（體型較小）、原鴿。',
    enSimilar: 'Oriental Magpie-robin (smaller), Rock Dove.',
    similarIds: ['4', '2']
  }
];

export function renderEncyclopedia(container) {
  let filtered = [...BIRDS];
  let currentBirdIndex = -1;

  container.innerHTML = `
    <div class="page-container">
      <header class="page-header">
        <h1 class="page-title" data-i18n="ency-title">校園鳥類百科 📖</h1>
        <button class="btn-secondary btn-back" id="back-btn" data-i18n="back-home">⬅ 返回主頁</button>
      </header>

      <div class="glass-panel" style="margin-bottom:2.5rem; display:flex; gap:1.5rem; flex-wrap:wrap; align-items:center; padding:1.5rem;">
        <input type="text" id="search-input" class="glass-input" data-i18n-placeholder="ency-search-placeholder" placeholder="搜尋鳥類 Name Search..." style="flex:1; min-width:300px; font-size:1.2rem; padding:18px;">
        <select id="sort-select" class="glass-input" style="width:250px; font-size:1.2rem; padding:18px;">
          <option value="default" data-i18n="ency-sort-default">預設排序 Default</option>
          <option value="size" data-i18n="ency-sort-size">按體型 Size</option>
          <option value="prob" data-i18n="ency-sort-prob">按機率 Probability</option>
        </select>
      </div>

      <div id="birds-grid" class="grid-responsive" style="display:grid; grid-template-columns: repeat(4, 1fr); gap:1.5rem;"></div>
    </div>

    <style>
      .stat-row { display:flex; align-items:center; gap:1.5rem; font-size:1.1rem; }
      .stat-row span:first-child { width:140px; color:#94a3b8; font-weight:600; }
      .stat-bar-bg { flex:1; height:16px; background:rgba(255,255,255,0.08); border-radius:8px; overflow:hidden; }
      .stat-bar { height:100%; border-radius:8px; transition: width 0.8s cubic-bezier(0.165, 0.84, 0.44, 1); }
      .stat-val { width:70px; text-align:right; font-weight:900; color:#fff; }
      
      .bird-card { border-radius:24px; overflow:hidden; cursor:pointer; background:rgba(255,255,255,0.04); border:1px solid var(--glass-border); transition:all 0.35s ease; position:relative; }
      .bird-card::after { content:"查看詳情 View Details"; position:absolute; bottom:0; left:0; width:100%; padding:15px; background:var(--primary-color); color:white; text-align:center; transform:translateY(100%); transition:transform 0.3s; font-weight:bold; }
      .bird-card:hover { border-color:var(--primary-color); transform:translateY(-12px) scale(1.02); box-shadow: 0 15px 30px rgba(0,0,0,0.5); }
      .bird-card:hover::after { transform:translateY(0); }
      .bird-card img { width:100%; height:260px; object-fit:cover; transition: transform 0.5s; }
      .bird-card:hover img { transform: scale(1.1); }
      .bird-card-info { padding:2rem; text-align:center; }
    </style>
  `;

  const renderGrid = () => {
    const grid = document.getElementById('birds-grid');
    grid.innerHTML = filtered.map((b, i) => `
      <div class="bird-card" onclick="window.openBirdModal(${i})">
        <img src="${b.img}" onerror="this.src='/favicon.svg';this.style.opacity='0.3';" />
        <div class="bird-card-info">
          <h3 style="margin:0; font-size:1.4rem; color:#86efac;">${b.name}</h3>
          <p style="margin:0.4rem 0 0; font-size:1rem; opacity:0.6; font-style:italic;">${b.enName}</p>
        </div>
      </div>
    `).join('');
  };

  renderGrid();

  document.getElementById('search-input').oninput = (e) => {
    const q = e.target.value.toLowerCase();
    filtered = BIRDS.filter(b => b.name.includes(q) || b.enName.toLowerCase().includes(q));
    renderGrid();
  };

  document.getElementById('sort-select').onchange = (e) => {
    const val = e.target.value;
    if (val === 'size') filtered.sort((a,b) => b.stats.size - a.stats.size);
    else if (val === 'prob') filtered.sort((a,b) => b.stats.prob - a.stats.prob);
    else filtered = [...BIRDS];
    renderGrid();
  };

  document.getElementById('back-btn').onclick = () => window.navigate('home');

  if (!window.audioPlayer) window.audioPlayer = new Audio();
  const audioPlayer = window.audioPlayer;

  window.openBirdModal = (index, silent = false) => {
    if (index < 0 || index >= filtered.length) return;
    currentBirdIndex = index;
    window.currentBirdIndex = index; // Expose globally for i18n
    const bird = filtered[currentBirdIndex];
    const isEn = (localStorage.getItem('gugugu_lang') || 'zh') === 'en';

    document.getElementById('modal-img').src = bird.img;
    document.getElementById('modal-name').innerText = bird.name;
    document.getElementById('modal-enName').innerText = bird.enName;
    document.getElementById('modal-details').innerText = isEn ? bird.enDetails : bird.details;

    const similarContainer = document.getElementById('modal-similar-icons');
    similarContainer.innerHTML = '';
    if (bird.similarIds) {
      bird.similarIds.forEach(sid => {
        const sBird = BIRDS.find(b => b.id === sid);
        if (sBird) {
          const icon = document.createElement('div');
          icon.style.cssText = `cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:6px; transition:transform 0.2s;`;
          icon.innerHTML = `
            <img src="${sBird.img}" style="width:55px; height:55px; border-radius:50%; object-fit:cover; border:2px solid rgba(134,239,172,0.3);" />
            <span style="font-size:0.75rem; color:#86efac; font-weight:600;">${isEn ? (sBird.enName.split(' ').pop()) : sBird.name}</span>
          `;
          icon.onclick = () => {
             const newIdx = filtered.findIndex(b => b.id === sid);
             window.openBirdModal(newIdx !== -1 ? newIdx : BIRDS.findIndex(b => b.id === sid));
          };
          icon.onmouseover = () => icon.style.transform = 'scale(1.1)';
          icon.onmouseout = () => icon.style.transform = 'scale(1)';
          similarContainer.appendChild(icon);
        }
      });
    }

    const updateBar = (id, val, max=100) => {
      const el = document.getElementById('bar-' + id);
      const label = document.getElementById('label-' + id);
      if (!silent) el.style.width = '0%';
      setTimeout(() => { el.style.width = (val/max*100) + '%'; }, silent ? 0 : 100);
      label.innerText = (id === 'size' ? val + 'cm' : val + '%');
    };

    updateBar('size', bird.stats.size, 100);
    updateBar('prob', bird.stats.prob);
    updateBar('rare', bird.stats.rare);

    document.getElementById('btn-play-audio').onclick = () => {
       if (!bird.audio) { window.mascot.say('此鳥類暫無音檔'); return; }
       audioPlayer.src = bird.audio;
       audioPlayer.play();
    };

    document.getElementById('btn-read-aloud').onclick = () => {
       if ('speechSynthesis' in window) {
         window.speechSynthesis.cancel();
         const utter = new SpeechSynthesisUtterance(`${bird.name}。${bird.details}`);
         utter.lang = 'zh-HK';
         window.speechSynthesis.speak(utter);
       }
    };

    const modal = document.getElementById('bird-modal');
    modal.classList.remove('hidden');
    
    const modalInner = modal.querySelector('.centered-modal-content');
    if (modalInner && !silent) {
      modalInner.classList.remove('modal-pop-anim');
      void modalInner.offsetWidth;
      modalInner.classList.add('modal-pop-anim');
    }
    
    // Ensure labels and other content in modal are translated silently
    import('../i18n.js').then(m => m.applyTranslation(localStorage.getItem('gugugu_lang') || 'zh', true));
  };

  window.refreshBirdModal = () => {
    if (window.currentBirdIndex !== undefined && window.currentBirdIndex !== -1) {
      window.openBirdModal(window.currentBirdIndex, true);
    }
  };

  document.getElementById('prev-bird-btn').onclick = () => {
    const idx = (currentBirdIndex > 0) ? currentBirdIndex - 1 : filtered.length - 1;
    window.openBirdModal(idx);
  };
  document.getElementById('next-bird-btn').onclick = () => {
    const idx = (currentBirdIndex < filtered.length - 1) ? currentBirdIndex + 1 : 0;
    window.openBirdModal(idx);
  };
  document.getElementById('close-modal').onclick = () => {
    document.getElementById('bird-modal').classList.add('hidden');
    audioPlayer.pause();
  };
}
