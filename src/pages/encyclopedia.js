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
    img: './footage/encyclopedia/images/普通翠鳥.png', 
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
    stats: { size: 50, prob: 10, activity: 30, rare: 95 }, 
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
    stats: { size: 75, prob: 1, activity: 20, rare: 95 }, 
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
      <h1 class="page-title" data-i18n="ency-title"></h1>
      <button id="back-btn" class="btn-secondary btn-back liquid-btn" onclick="window.navigate('home')" data-i18n="back-home"></button>
    </header>

      <div class="glass-panel" style="margin-bottom:var(--space-unit); display:flex; gap:1rem; flex-wrap:wrap; align-items:stretch; padding:1.2rem; position:relative;">
        <div style="flex:2; position:relative; min-width:260px;">
          <input type="text" id="search-input" class="glass-input" data-i18n-placeholder="ency-search-placeholder" placeholder="搜尋鳥類 Name Search..." style="width:100%; font-size:clamp(1rem, 1.1vw, 1.2rem); padding:15px; border-radius:15px;">
          <div id="search-suggestions" class="glass-panel hidden" style="position:absolute; top:calc(100% + 10px); left:0; width:100%; z-index:100; padding:10px; border-radius:15px; box-shadow:0 10px 40px rgba(0,0,0,0.5); max-height:400px; overflow-y:auto; border:2px solid #86efac; backdrop-filter:blur(25px);">
          </div>
        </div>
        <select id="sort-select" class="glass-input" style="flex:1; min-width:180px; font-size:clamp(1rem, 1.1vw, 1.2rem); padding:15px; border-radius:15px; height: auto;">
          <option value="default" data-i18n="ency-sort-default">預設排序 Default</option>
          <option value="size" data-i18n="ency-sort-size">按體型 Size</option>
          <option value="prob" data-i18n="ency-sort-prob">按機率 Probability</option>
        </select>
      </div>

      <div id="birds-grid" class="grid-responsive"></div>
    </div>

    <style>
      .stat-row span:first-child { width: clamp(80px, 20vw, 140px); color:#94a3b8; font-weight:600; font-size: 0.9rem; }
      .stat-bar-bg { flex:1; height:16px; background:rgba(255,255,255,0.08); border-radius:8px; overflow:hidden; }
      .stat-bar { height:100%; border-radius:8px; transition: width 0.8s cubic-bezier(0.165, 0.84, 0.44, 1); }
      .bird-card-info { 
        padding: 1.2rem 1rem; 
        text-align: center; 
        background: #000000; /* Solid black for high contrast */
        width: 100%;
        position: relative;
        z-index: 5;
      }
      
      @media (max-width: 768px) {
        .bird-card-info {
           background: #000000 !important;
           padding: 0.8rem 0.5rem !important;
        }
      }
      
      .bird-card img { width:100%; height:280px; object-fit:cover; transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1); display:block; }
      .bird-card:hover img { transform: scale(1.1); }

      .bird-card::after { 
        content: "查看詳情 View Details"; 
        position: absolute; 
        bottom: 0; 
        left: 0; 
        width: 100%; 
        padding: 14px; 
        background: var(--primary-color); 
        color: white; 
        text-align: center; 
        transform: translateY(100%); 
        transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1); 
        font-weight: 800; 
        font-size: 0.9rem; 
        z-index: 10;
        letter-spacing: 1px;
      }
      .bird-card:hover::after { transform: translateY(0); }
      .bird-card:hover { border-color: #4ade80; box-shadow: 0 25px 50px rgba(0,0,0,0.7); transform: translateY(-10px); }
    </style>
  `;

  const renderGrid = () => {
    const grid = document.getElementById('birds-grid');
    if (!grid) return;
    
    grid.innerHTML = filtered.map(b => `
      <div class="bird-card" onclick="window.gugugu_bird_modal.open('${b.id}', window.gugugu_app_birds)">
        <img src="${b.img}" loading="lazy" />
        <div class="bird-card-info">
          <h3 style="margin:0; font-size:1.4rem; color:#86efac;">${b.name}</h3>
          <p style="margin:0.4rem 0 0; font-size:1.1rem; opacity:0.6; font-style:italic;">${b.enName}</p>
        </div>
      </div>
    `).join('');
  };

  window.gugugu_app_birds = filtered;

  renderGrid();

  document.getElementById('search-input').oninput = (e) => {
    const q = e.target.value.toLowerCase();
    const suggestions = document.getElementById('search-suggestions');
    
    if (q.length < 1) {
      suggestions.classList.add('hidden');
    } else {
      const matched = BIRDS.filter(b => b.name.includes(q) || b.enName.toLowerCase().includes(q)).slice(0, 5);
      if (matched.length > 0) {
        suggestions.classList.remove('hidden');
        suggestions.innerHTML = matched.map(b => `
          <div class="suggestion-item" data-id="${b.id}" style="display:flex; align-items:center; gap:12px; padding:10px; cursor:pointer; border-bottom:1px solid rgba(255,255,255,0.05); transition: background 0.2s;">
            <img src="${b.img}" style="width:45px; height:45px; border-radius:8px; object-fit:cover;">
            <div>
              <div style="font-weight:bold; color:#86efac;">${b.name}</div>
              <div style="font-size:0.8rem; opacity:0.6;">${b.enName}</div>
            </div>
          </div>
        `).join('');
        
        suggestions.querySelectorAll('.suggestion-item').forEach(item => {
          item.onclick = () => {
            const sid = item.dataset.id;
            window.gugugu_bird_modal.open(sid, BIRDS);
            suggestions.classList.add('hidden');
            document.getElementById('search-input').value = '';
          };
        });
      } else {
        suggestions.classList.add('hidden');
      }
    }

    filtered = BIRDS.filter(b => b.name.includes(q) || b.enName.toLowerCase().includes(q));
    window.gugugu_app_birds = filtered;
    renderGrid();
  };

  const gridClickOutside = (e) => {
    const s = document.getElementById('search-suggestions');
    if (s && !s.contains(e.target) && e.target.id !== 'search-input') {
      s.classList.add('hidden');
    }
  };
  
  document.addEventListener('click', gridClickOutside);

  document.getElementById('sort-select').onchange = (e) => {
    const val = e.target.value;
    if (val === 'size') filtered.sort((a,b) => b.stats.size - a.stats.size);
    else if (val === 'prob') filtered.sort((a,b) => b.stats.prob - a.stats.prob);
    else filtered = [...BIRDS];
    window.gugugu_app_birds = filtered;
    renderGrid();
  };

  document.getElementById('back-btn').onclick = () => window.navigate('home');

  return () => {
    document.removeEventListener('click', gridClickOutside);
  };
}
