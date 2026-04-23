const { execSync } = require('child_process');
const path = require('path');

const birds = [
    ['紅耳鵯', 'Pycnonotus jocosus song'],
    ['原鴿', 'Columba livia cooing'],
    ['珠頸斑鳩', 'Spilopelia chinensis song'],
    ['鵲鴝', 'Copsychus saularis song'],
    ['普通翠鳥', 'Alcedo atthis call'],
    ['噪鵑', 'Eudynamys scolopaceus song'],
    ['樹麻雀', 'Passer montanus call'],
    ['灰斑鳩', 'Streptopelia decaocto song'],
    ['洋燕', 'Hirundo tahitica call'],
    ['牛背鷺', 'Bubulcus ibis call'],
    ['綠背姬鶲', 'Ficedula elisae song'],
    ['黃眉柳鶯', 'Phylloscopus inornatus song'],
    ['黑臉琵鷺', 'Platalea minor call'],
    ['黑領椋鳥', 'Gracupica nigricollis song']
];

const outDir = 'c:\\\\Users\\\\astin\\\\Downloads\\\\gugugu\\\\public\\\\footage\\\\encyclopedia\\\\audio';

for (const [nameZh, sciName] of birds) {
    try {
        console.log(`Processing ${nameZh}...`);
        const query = sciName.replace(/ /g, '+');
        const url = `https://xeno-canto.org/explore?query=${query}+q:A`;
        let html = execSync(`curl.exe -s "${url}"`).toString();
        
        let match = html.match(/<audio[^>]*src=['"](https:\/\/xeno-canto\.org\/sounds\/uploaded\/[^'"]+\.mp3)['"]/i);
        
        if (!match) {
            console.log(`No direct mp3 in search for ${nameZh}, trying without q:A...`);
            const url2 = `https://xeno-canto.org/explore?query=${query}`;
            html = execSync(`curl.exe -s "${url2}"`).toString();
            match = html.match(/<audio[^>]*src=['"](https:\/\/xeno-canto\.org\/sounds\/uploaded\/[^'"]+\.mp3)['"]/i);
        }

        if (match && match[1]) {
            const dlUrl = match[1];
            const destPath = path.join(outDir, `${nameZh}.mp3`);
            console.log(`Downloading from ${dlUrl}`);
            execSync(`curl.exe -sL -o "${destPath}" "${dlUrl}"`);
            console.log(`Saved ${nameZh}.mp3`);
        } else {
            console.log(`Still no mp3 found in search for ${nameZh}. Checking for catalog links...`);
            // Try to find /XCXXXXXX links
            const xcMatch = html.match(/\/(XC\d+)/);
            if (xcMatch && xcMatch[1]) {
                const xcId = xcMatch[1].replace('XC', '');
                console.log(`Found catalog link ${xcMatch[1]}. Fetching individual page...`);
                const individualHtml = execSync(`curl.exe -s "https://xeno-canto.org/${xcId}"`).toString();
                const mp3Match = individualHtml.match(/data-xc-filepath=['"]([^'"]+\.mp3)['"]/i);
                if (mp3Match && mp3Match[1]) {
                    const dlUrl = mp3Match[1];
                    const destPath = path.join(outDir, `${nameZh}.mp3`);
                    console.log(`Downloading from ${dlUrl}`);
                    execSync(`curl.exe -sL -o "${destPath}" "${dlUrl}"`);
                    console.log(`Saved ${nameZh}.mp3`);
                } else {
                     console.log(`Failed to find MP3 for ${nameZh} on individual page.`);
                }
            } else {
                console.log(`No catalog link found for ${nameZh}`);
            }
        }
    } catch (e) {
        console.log(`Error on ${nameZh}: ${e.message}`);
    }
}
