# Goal Description

Implement 12 specific tasks requested by the user, ranging from UI fixes and translation bugs to game mechanics and iframe sandboxing on the map page.

## User Review Required

- Please review the changes for the map page Google Slides iframe. I will use a `sandbox` attribute and focus-stealing to prevent keyboard usage and deep linking to the Google Slides app on mobile.

## Proposed Changes

### Game Page Updates (`src/pages/game.js`, `src/i18n.js`)
- Update the rule text to precisely "🖱️ Click: Fly Up".
- Add `data-i18n` attributes to the game rules `div`s so they translate dynamically.
- Refine the "Level Up" text to display specifically "Level X" and ensure the slow-motion effect functions correctly during level-ups.

### Bird Probabilities (`src/pages/encyclopedia.js`)
- Update Black-faced Spoonbill (黑臉琵鷺) Rarity to 95%.
- Update Cattle Egret (牛背鷺) Probability to 10%.

### Login Page UI (`src/pages/login.js`)
- Reduce padding and margins in `.glass-panel` and inputs to prevent the overlap of the "開始探索校園 🌿" and "略過" buttons on small mobile screens.
- Implement mascot translations by checking `store.getLanguage()` to prevent Chinese hardcoding.

### Map Page Constraints (`src/pages/map.js`)
- Add `sandbox="allow-scripts allow-same-origin"` to the Google Slides iframe to prevent it from launching the native app on mobile devices.
- Implement a focus-stealing script (`setInterval(..., 100)`) to forcibly remove focus from the iframe if it is clicked, preventing any keyboard events from advancing the slides while still allowing screen clicks.
- Translate mascot messages based on the current language.

### Live Birdhouse Fixes (`src/pages/stream.js`)
- Add `playsinline` and `webkit-playsinline` attributes to the History `<video>` element to prevent black screens/fullscreen glitches on iOS devices.

### General UI and Debugging (`src/style.css`, etc.)
- Review CSS properties to ensure smooth scaling and responsiveness across different devices.

## Verification Plan

### Automated Tests
- N/A

### Manual Verification
- Resize the browser window to mobile proportions and verify Login Page button alignment.
- Verify that clicking the "Live Birdhouse" History tab displays the video inline on mobile and does not result in a black screen.
- Verify Map page no longer responds to keyboard arrow keys, and clicking it does not trigger app opening behavior.
- Switch the language to English and test the Login flow and Map navigation to verify the mascot speaks English.
- Play the game to test the "Level X" text and slow-down effect.
