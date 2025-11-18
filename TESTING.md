# Testing Guide - Betway Focus Timer

## Quick Start

The app is running at **http://localhost:8080**

Open the app in your browser and follow the testing checklist below.

---

## 🧪 Feature Testing Checklist

### ⏱️ Timer Functionality

**Basic Controls:**
- [ ] Click **Start** button - timer begins counting down from 25:00
- [ ] Click **Pause** button - timer stops
- [ ] Click **Start** again - timer resumes from where it stopped
- [ ] Click **Reset** button - timer resets to 25:00 and stops
- [ ] Click **Skip** button - advances to next phase (short break)

**Keyboard Shortcuts:**
- [ ] Press **Space** - toggles pause/resume
- [ ] Press **R** - resets timer
- [ ] Press **S** - skips to next phase
- [ ] Shortcuts work when NOT focused on input fields
- [ ] Shortcuts don't trigger when typing in settings

**Timer Accuracy:**
- [ ] Timer counts down correctly (1 second per second)
- [ ] Timer continues when browser tab is inactive/hidden
- [ ] Timer display shows MM:SS format (e.g., 25:00, 04:59, 00:01)
- [ ] Percentage display updates in real-time
- [ ] Circular progress ring animates smoothly

---

### 🔄 Pomodoro Cycle Logic

**Phase Transitions:**
- [ ] Complete focus session (25 min) → automatically switches to short break (5 min)
- [ ] Complete short break → automatically switches to focus
- [ ] Complete 4 focus sessions → switches to long break (15 min)
- [ ] Complete long break → resets to session 1 and focus phase

**Session Counter:**
- [ ] Shows "Session 1 of 4" initially
- [ ] Increments after each focus session (1→2→3→4)
- [ ] Resets to 1 after long break
- [ ] Updates correctly when changing "Sessions Until Long Break" setting

**Phase Indicators:**
- [ ] Focus Time - green badge and green progress ring
- [ ] Short Break - blue badge
- [ ] Long Break - purple badge
- [ ] Badge colors match theme

---

### 📊 Progress Tracking

**Today's Progress:**
- [ ] Starts at 0 completed sessions
- [ ] Increments by 1 after each completed focus session
- [ ] Does NOT increment for breaks
- [ ] Progress bar fills proportionally to goal (default 15 sessions)
- [ ] Percentage displays correctly (e.g., 12/15 = 80%)
- [ ] Goal can be changed in settings

**Streak Tracking:**
- [ ] Starts at 0 days
- [ ] Increments to 1 day after first completed session
- [ ] Only counts once per day (multiple sessions = 1 day)
- [ ] Streak visualization shows filled green boxes
- [ ] Shows up to 7 days in visualization
- [ ] Personal best updates when streak exceeds previous record
- [ ] Streak continues if you complete sessions on consecutive days
- [ ] Streak resets if you skip a day

---

### 📈 Quick Stats

**Accumulating Totals:**
- [ ] **Focus Time** - increases by focus duration after each completed focus session
- [ ] **Break Time** - increases after completed short/long breaks
- [ ] **Long Breaks** - counter increments after each long break
- [ ] All stats display in hours and minutes format (e.g., "6h 15m")
- [ ] Stats persist across sessions

---

### ⚙️ Settings

**Timer Durations:**
- [ ] Change Focus Duration (1-60 min) - timer resets if currently in focus phase
- [ ] Change Short Break (1-30 min) - applies to next short break
- [ ] Change Long Break (1-60 min) - applies to next long break
- [ ] Change Sessions Until Long Break (2-10) - session counter updates

**Settings Persistence:**
- [ ] Change all settings
- [ ] Refresh page
- [ ] All settings remain as configured

---

### 🎨 Theme Selector

**Theme Switching:**
- [ ] Click **green** bubble - progress ring turns green, selected border appears
- [ ] Click **blue** bubble - progress ring turns blue
- [ ] Click **purple** bubble - progress ring turns purple
- [ ] Click **red** bubble - progress ring turns red
- [ ] Click **yellow** bubble - progress ring turns yellow
- [ ] Selected theme has white border, others are transparent
- [ ] Theme persists after page refresh

---

### 🚀 Quick Actions

**Action Buttons:**
- [ ] **Start New Session** - resets to focus phase, session 1, and starts timer
- [ ] **Take a Break** - switches to short break and starts timer
- [ ] **View Analytics** - shows "coming soon" alert (placeholder)

---

### 💾 Data Persistence (localStorage)

**State Preservation:**
1. Start a timer and let it run for 30 seconds
2. Refresh the page
   - [ ] Timer continues from where it left off
   - [ ] Running state is paused (doesn't auto-resume)

3. Complete 3 sessions, change settings, switch theme
4. Refresh the page
   - [ ] Completed sessions count preserved
   - [ ] All settings preserved
   - [ ] Theme selection preserved
   - [ ] Stats preserved

5. Close browser completely, reopen
   - [ ] All data still preserved

---

### 📱 PWA Features

**Service Worker:**
1. Open DevTools → Application → Service Workers
   - [ ] Service worker shows as "activated and running"
   - [ ] Console shows "Service Worker registered" message

2. Check Cache Storage (DevTools → Application → Cache Storage)
   - [ ] Cache named "betway-focus-timer-v1" exists
   - [ ] Contains all files: HTML, CSS, JS, fonts, icons

**Offline Functionality:**
1. Load app with internet connected
2. Open DevTools → Network tab
3. Check "Offline" checkbox
4. Refresh the page
   - [ ] App loads completely offline
   - [ ] All features work (timer, settings, stats)
   - [ ] No network errors in console

**Installation:**
- [ ] Browser shows "Install" button/prompt (Chrome/Edge)
- [ ] Can install app to desktop/home screen
- [ ] Installed app runs in standalone window
- [ ] App icon appears correctly

---

### 🌐 Network Verification

**No External Dependencies:**
1. Open DevTools → Network tab
2. Refresh page with cache disabled
3. Verify ALL resources load locally:
   - [ ] ✅ index.html
   - [ ] ✅ script.js
   - [ ] ✅ css/tailwind.css
   - [ ] ✅ css/inter-font.css
   - [ ] ✅ css/fontawesome.css
   - [ ] ✅ fonts/Inter-*.woff2 (4 files)
   - [ ] ✅ fonts/fa-*.woff2 (2 files)
   - [ ] ✅ icons/icon-*.png (2 files)
   - [ ] ✅ manifest.json

4. Verify NO requests to external CDNs:
   - [ ] ❌ cdn.tailwindcss.com
   - [ ] ❌ cdnjs.cloudflare.com
   - [ ] ❌ fonts.googleapis.com
   - [ ] ❌ Any other external domain

---

### 🎯 UI/UX Testing

**Visual Elements:**
- [ ] Neon glow effect visible on timer and buttons
- [ ] Timer animation pulses smoothly
- [ ] Progress ring rotates from top (12 o'clock position)
- [ ] All icons display correctly (FontAwesome)
- [ ] Inter font loads and displays properly

**Interactions:**
- [ ] All buttons have hover effects (scale/color change)
- [ ] Input fields highlight on focus (green border)
- [ ] Smooth transitions between states
- [ ] No layout shifts or jumps

**Responsiveness:**
- [ ] Resize browser window - layout adapts
- [ ] Test on mobile viewport (DevTools device mode)
- [ ] Timer section stacks on small screens
- [ ] All elements remain accessible and readable

---

### 🔄 Daily Reset Testing

**Midnight Reset:**
1. Complete several sessions today
2. Note completed sessions count
3. Change system date to tomorrow
4. Refresh app
   - [ ] Completed sessions resets to 0
   - [ ] Streak increments by 1 (if consecutive day)
   - [ ] All other stats remain intact

**Streak Break:**
1. Complete session today
2. Change system date to 3 days later
3. Refresh app
   - [ ] Streak resets to 0
   - [ ] Personal best remains unchanged

---

### 🐛 Edge Cases

**Boundary Testing:**
- [ ] Set focus duration to 1 minute - completes correctly
- [ ] Set focus duration to 60 minutes - displays correctly (60:00)
- [ ] Complete 20+ sessions in one day - UI handles large numbers
- [ ] Build 15+ day streak - counter displays correctly
- [ ] Let timer reach 0:00 - transitions smoothly
- [ ] Pause at 0:01, wait, resume - continues correctly
- [ ] Skip during last second - handles gracefully
- [ ] Change settings while timer is running - applies correctly

**Rapid Actions:**
- [ ] Click Start/Pause rapidly - no errors
- [ ] Press Space repeatedly - toggles correctly
- [ ] Skip through multiple phases quickly - no state corruption
- [ ] Change theme rapidly - updates smoothly

---

### 🏆 Microsoft Store Readiness

**Compliance Checklist:**
- [ ] ✅ No external CDN dependencies
- [ ] ✅ All assets load locally
- [ ] ✅ Valid PWA manifest.json
- [ ] ✅ Functional service worker
- [ ] ✅ Icons in required sizes (192x192, 512x512)
- [ ] ✅ Works completely offline
- [ ] ✅ No console errors
- [ ] ✅ HTTPS ready (works on localhost)
- [ ] ✅ Standalone display mode configured

**PWABuilder Test:**
1. Visit https://www.pwabuilder.com/
2. Enter your deployed URL
3. Run PWA analysis
   - [ ] Manifest score: High
   - [ ] Service Worker score: High
   - [ ] Security score: High

---

### ⚡ Performance Testing

**Load Time:**
- [ ] Initial load < 2 seconds (with network)
- [ ] Cached load < 0.5 seconds (offline)
- [ ] No visible layout shifts

**Runtime Performance:**
- [ ] Timer runs for 30+ minutes - no slowdown
- [ ] No memory leaks (check DevTools Memory tab)
- [ ] Animations stay smooth at 60fps
- [ ] CPU usage remains low when idle

**Accuracy:**
- [ ] Start timer, compare with system clock after 5 minutes
- [ ] Difference should be < 2 seconds
- [ ] Timer continues accurately when tab is hidden

---

### 🔍 Console Checks

**No Errors:**
- [ ] Open DevTools Console
- [ ] Refresh page
- [ ] No red error messages
- [ ] No yellow warnings (except browserslist - can ignore)
- [ ] Service Worker registration message appears

---

## ✅ Success Criteria

The app passes testing if:

1. ✅ All timer functions work correctly
2. ✅ Pomodoro cycle logic is accurate
3. ✅ All data persists across sessions
4. ✅ Works completely offline
5. ✅ No external network requests
6. ✅ No console errors
7. ✅ PWA installable
8. ✅ Responsive on all screen sizes
9. ✅ All keyboard shortcuts function
10. ✅ Theme switching works

---

## 🚨 Known Issues / Limitations

- Analytics feature not yet implemented (placeholder button)
- No sound notifications (can be added later)
- No browser push notifications (can be added later)
- Streak visualization limited to 7 days display
- No data export/import functionality

---

## 📝 Bug Reporting

If you find any issues during testing:

1. Note the exact steps to reproduce
2. Check browser console for errors
3. Note browser version and OS
4. Document expected vs actual behavior
5. Take screenshots if relevant

---

## 🎉 Testing Complete

Once all checkboxes are marked, the app is ready for:
- Production deployment
- Microsoft Store submission
- User acceptance testing
- Public release

**Current Status:** ✅ Ready for Testing

**Test Date:** _____________

**Tested By:** _____________

**Result:** ☐ Pass  ☐ Fail  ☐ Pass with Notes

**Notes:**
_______________________________________________
_______________________________________________
_______________________________________________
