const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  // 1. Home Page
  await page.goto('http://localhost:5173/guguguwyhk/?page=home');
  await page.waitForTimeout(2000);
  const homeCards = await page.$$('.feature-card');
  if (homeCards.length > 0) {
    const box = await homeCards[0].boundingBox();
    console.log('Home "直播鳥屋" card:', box ? { x: box.x + box.width / 2, y: box.y + box.height / 2 } : 'Not found');
  } else {
    console.log('Home cards not found. Elements:');
    // try to find by text
    const el = await page.getByText('直播鳥屋');
    if (el) {
      const box = await el.boundingBox();
      console.log('Home "直播鳥屋" text:', box ? { x: box.x + box.width / 2, y: box.y + box.height / 2 } : 'No box');
    }
  }

  // 2. Encyclopedia
  await page.goto('http://localhost:5173/guguguwyhk/?page=encyclopedia');
  await page.waitForTimeout(2000);
  const sparrow = await page.getByText('樹麻雀');
  if (sparrow) {
    const box = await sparrow.boundingBox();
    console.log('Encyclopedia "樹麻雀":', box ? { x: box.x + box.width / 2, y: box.y + box.height / 2 } : 'No box');
  }

  // 3. Map
  await page.goto('http://localhost:5173/guguguwyhk/?page=map');
  await page.waitForTimeout(2000);
  const mapLink = await page.getByText('01 魚池生趣');
  if (mapLink) {
    const box = await mapLink.boundingBox();
    console.log('Map "01 魚池生趣":', box ? { x: box.x + box.width / 2, y: box.y + box.height / 2 } : 'No box');
  }

  await browser.close();
})();
