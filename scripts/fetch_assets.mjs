import fs from 'fs';
import path from 'path';
import https from 'https';

const birds = [
  { name: "黑臉琵鷺", sci: "Platalea minor" },
  { name: "紅耳鵯", sci: "Pycnonotus sinensis" },
  { name: "珠頸斑鳩", sci: "Spilopelia chinensis" }, // Note: Docs said Streptopelia decaocto, but typical Wah Yan is Spilopelia chinensis. I will use the doc's "Eurasian collared dove" Streptopelia decaocto for query if needed, but let's query the provided sci name
  { name: "灰斑鳩", sci: "Streptopelia decaocto" },
  { name: "樹麻雀", sci: "Passer montanus" },
  { name: "牛背鷺", sci: "Bubulcus ibis" },
  { name: "鵲鴝", sci: "Copsychus saularis" },
  { name: "普通翠鳥", sci: "Alcedo atthis" },
  { name: "綠背姬鶲", sci: "Ficedula elisae" },
  { name: "黃眉柳鶯", sci: "Phylloscopus inornatus" },
  { name: "洋燕", sci: "Hirundo tahitica" },
  { name: "原鴿", sci: "Columba livia" },
  { name: "黑領椋鳥", sci: "Gracupica nigricollis" },
  { name: "噪鵑", sci: "Eudynamys scolopaceus" }
];

const publicDir = path.join(process.cwd(), 'public', 'footage', 'encyclopedia');
const audioDir = path.join(publicDir, 'audio');
const imgDir = path.join(publicDir, 'images');

if (!fs.existsSync(audioDir)) fs.mkdirSync(audioDir, { recursive: true });
if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', err => { fs.unlink(dest, ()=>{}); reject(err); });
  });
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'GuGuGu-App/1.0 (test@example.com)' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchJson(res.headers.location).then(resolve).catch(reject);
      }
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(body)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

async function processBirds() {
  for (let bird of birds) {
    console.log(`Processing ${bird.name} (${bird.sci})...`);
    
    // 1. Fetch Image from Wikimedia Commons
    try {
      const wikiRes = await fetchJson(`https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(bird.sci)}&gsrlimit=1&prop=imageinfo&iiprop=url&format=json`);
      if (wikiRes.query && wikiRes.query.pages) {
        const pages = wikiRes.query.pages;
        const pageId = Object.keys(pages)[0];
        if (pages[pageId].imageinfo && pages[pageId].imageinfo.length > 0) {
          const imgUrl = pages[pageId].imageinfo[0].url;
          await download(imgUrl, path.join(imgDir, `${bird.name}.jpg`));
          console.log(` ✅ Image downloaded for ${bird.name}`);
        }
      } else {
        console.log(` ⚠️ No image found for ${bird.name} on Commons.`);
      }
    } catch (e) {
      console.log(` ❌ Error fetching image for ${bird.name}:`, e.message);
    }

    // 2. Fetch Audio from Xeno-canto
    try {
      const xcUrl = `https://xeno-canto.org/api/2/recordings?query=${encodeURIComponent(bird.sci)}`;
      const xcRes = await fetchJson(xcUrl);
      if (xcRes.recordings && xcRes.recordings.length > 0) {
        const audioUrl = xcRes.recordings[0].file;
        if (audioUrl) {
          await download(audioUrl, path.join(audioDir, `${bird.name}.mp3`));
          console.log(` ✅ Audio downloaded for ${bird.name}`);
        }
      } else {
        console.log(` ⚠️ No audio ${xcUrl}`);
      }
    } catch (e) {
      console.log(` ❌ Error fetching audio for ${bird.name}:`, e.message);
    }
  }
}

processBirds().then(() => console.log('Done!')).catch(console.error);
