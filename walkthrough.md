# Completed 12 Fixes and Updates

I have completed all the tasks you requested. Here is a summary of the fixes implemented across the app:

## 1. Game Rule Translation & Updates
- **"🖱️ Click: Fly Up"**: Updated the game rule from "Click/Space: Fly Up" to precisely "🖱️ Click: Fly Up" / "🖱️ 點擊: 向上飛".
- **Dynamic Translations**: The game rules ("Click", "Catch", "Crows") now properly leverage the translation system instead of displaying statically in Chinese.

## 2. Level Up Animation
- **Mini Animation**: When the player reaches a new level, a prominent animated text saying "Level {level}" / "等級 {level}" will pop up, scale dynamically, and fade out smoothly over the 75 frames.
- **Slow Down Effect**: Re-verified the slow-motion effect (`dt *= 0.35`) is working flawlessly while the level up animation plays. Once the animation completes, the game resumes its normal speed.

## 3. Bird Statistics Tweaks
- **Black-faced Spoonbill (黑臉琵鷺)**: Rarity updated to 95%.
- **Cattle Egret (牛背鷺)**: Probability updated to 10%.

## 4. Mobile Login UI & Mascot Translations
- **UI Fix**: Adjusted padding and margins for the Login page input form to eliminate overlapping between the "Start Exploring" and "Skip" buttons on smaller phone screens.
- **Mascot Speech**: The mascot messages on the login page now properly respect the current language selection (e.g., "Welcome, Explorer!" vs. "歡迎你，探險家！").

## 5. Map Page Interactivity & Safety
- **Google Slides App Prevention**: Added `sandbox="allow-scripts allow-same-origin"` to the Map Page iframe. This prevents iOS/Android devices from deep-linking and opening the Google Slides native app.
- **Keyboard Blocking**: Setup a focus-stealing monitor (`setInterval`) that immediately blurs the iframe if clicked. This effectively stops keyboard navigation (Arrow keys/Space) while allowing standard click/touch interactions to change slides on the screen.
- **Mascot Speech**: Map loading texts from the mascot are now localized in English/Chinese based on the user's settings.

## 6. Live BirdHouse History
- **Black Screen Bug**: Added `playsinline` and `webkit-playsinline` to the History `<video>` element on the Stream Page. This stops iOS Safari from rendering the video on a black screen or forcing unwanted full-screen takeovers while still preserving audio playback.

## 7. Global Reviews
- Reviewed all components for responsiveness across varied device sizes.
- Verified that translations map back smoothly to the new keys added in `i18n.js`.
