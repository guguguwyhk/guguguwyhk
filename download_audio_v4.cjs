const { execSync } = require('child_process');
const path = require('path');

const birds = [
    ['紅耳鵯', 'Pycnonotus jocosus type:song'],
    ['原鴿', 'FIXED:960691'], // Browser found this one is perfect "Gu Gu Gu"
    ['珠頸斑鳩', 'Spilopelia chinensis type:song'],
    ['鵲鴝', 'Copsychus saularis type:song'],
    ['普通翠鳥', 'Alcedo atthis type:call'],
    ['噪鵑', 'Eudynamys scolopaceus type:song'],
    ['樹麻雀', 'Passer montanus type:call'],
    ['灰斑鳩', 'Streptopelia decaocto type:song'],
    ['洋燕', 'Hirundo tahitica type:call'],
    ['牛背鷺', 'Bubulcus ibis type:call'],
    ['綠背姬鶲', 'Ficedula elisae type:song'],
    ['黃眉柳鶯', 'Phylloscopus inornatus type:song'],
    ['黑臉琵鷺', 'Platalea minor type:call'],
    ['黑領椋鳥', 'Gracupica nigricollis type:song']
];

const outDir = 'c:\\\\Users\\\\astin\\\\Downloads\\\\gugugu\\\\public\\\\footage\\\\encyclopedia\\\\audio';

for (const [nameZh, queryStr] of birds) {
    try {
        console.log(`Processing ${nameZh}...`);
        let dlUrl = '';
        
        if (queryStr.startsWith('FIXED:')) {
            const xcId = queryStr.split(':')[1];
            console.log(`Using fixed ID ${xcId} for ${nameZh}`);
            const individualHtml = execSync(`curl.exe -s "https://xeno-canto.org/${xcId}"`).toString();
            const mp3Match = individualHtml.match(/data-xc-filepath=['"]([^'"]+\.mp3)['"]/i);
            if (mp3Match) dlUrl = mp3Match[1];
        } else {
            const query = queryStr.replace(/ /g, '+');
            const url = `https://xeno-canto.org/explore?query=${query}+q:A`;
            let html = execSync(`curl.exe -sL "${url}"`).toString();
            
            let match = html.match(/<audio[^>]*src=['"](https:\/\/xeno-canto\.org\/sounds\/uploaded\/[^'"]+\.mp3)['"]/i);
            if (!match) {
                const url2 = `https://xeno-canto.org/explore?query=${query}`;
                html = execSync(`curl.exe -sL "${url2}"`).toString();
                match = html.match(/<audio[^>]*src=['"](https:\/\/xeno-canto\.org\/sounds\/uploaded\/[^'"]+\.mp3)['"]/i);
            }
            
            if (match) {
                dlUrl = match[1];
            } else {
                // Try catalog link
                const xcMatch = html.match(/\/(\d+)/); // Match first numeric link in results
                if (xcMatch && xcMatch[1]) {
                    const xcId = xcMatch[1];
                    console.log(`Found catalog link ${xcId}. Fetching individual page...`);
                    const individualHtml = execSync(`curl.exe -s "https://xeno-canto.org/${xcId}"`).toString();
                    const mp3Match = individualHtml.match(/data-xc-filepath=['"]([^'"]+\.mp3)['"]/i);
                    if (mp3Match) dlUrl = mp3Match[1];
                }
            }
        }

        if (dlUrl) {
            const destPath = path.join(outDir, `${nameZh}.mp3`);
            console.log(`Downloading from ${dlUrl}`);
            execSync(`curl.exe -sL -o "${destPath}" "${dlUrl}"`);
            console.log(`Saved ${nameZh}.mp3`);
        } else {
            console.log(`Failed to find MP3 for ${nameZh}`);
            if (nameZh === '鵲鴝') {
                console.log('Using Wikipedia fallback for 鵲鴝...');
                const wikiUrl = "https://upload.wikimedia.org/wikipedia/commons/transcoded/c/cc/Magpie_robin.ogg/Magpie_robin.ogg.mp3";
                const destPath = path.join(outDir, `${nameZh}.mp3`);
                execSync(`curl.exe -sL -o "${destPath}" "${wikiUrl}"`);
                console.log('Saved 鵲鴝.mp3 from Wikipedia');
            }
        }
    } catch (e) {
        console.log(`Error on ${nameZh}: ${e.message}`);
    }
}
