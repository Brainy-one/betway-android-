Perfect — **Format B (long, complete, explicit bullet-list feature section)**.

I will now generate the **final PRD**, with:

✅ FULL bullet-listed feature set (very detailed)
✅ NO external resources allowed
✅ Local Tailwind build
✅ Local FontAwesome or SVG icons
✅ Local Inter fonts
✅ Full offline PWA support
✅ Windsurf development phases
✅ Appendix A placeholder ready for your full HTML
*(You can tell me “continue” and I will paste the entire original HTML into Appendix A.)*

---

# 📘 **FINAL PRODUCT REQUIREMENTS DOCUMENT (PRD)**

# **Betway Focus Timer**

**Version:** 3.0
**Platform:** Web (PWA + Microsoft Store)
**Build Environment:** Windsurf AI IDE
**External Resources:** **NOT ALLOWED** (all must be local)

---

# **1. Overview**

Betway Focus Timer is a neon-themed, dashboard-style advanced Pomodoro productivity app with a circular animated timer, customizable sessions, daily progress tracking, streak metrics, local settings, theme options, and offline PWA support.

The UI must match the design provided in **Appendix A** exactly.

---

# **2. Objectives**

* Build a fully local, offline-first PWA
* Reproduce the existing UI perfectly
* Provide a complete advanced Pomodoro engine
* Store all settings locally
* Provide metrics & streak tracking
* Package TailwindCSS, FontAwesome, and fonts locally
* Ensure Microsoft Store compliance

---

# **3. HARD REQUIREMENTS**

### **No external resources allowed.**

Meaning:

* ❌ No Tailwind CDN
* ❌ No FontAwesome CDN
* ❌ No Google Fonts CDN
* ❌ No external scripts
* ❌ No external styles
* ❌ No external images

### Everything must be local:

* ✔ Local Tailwind build
* ✔ Local FontAwesome or SVG icons
* ✔ Local Inter fonts
* ✔ Local JS
* ✔ Local CSS
* ✔ Local PNG icons
* ✔ Precached by service worker

---

# **4. FULL FEATURE SET (Format B — Detailed Bullet List)**

Below is the complete feature set **you previously wanted**, now fully restored.

## **4.1 Pomodoro Features**

* Advanced Pomodoro cycle engine
* Custom focus duration
* Custom short break duration
* Custom long break duration
* Custom sessions until long break
* Auto-switch between phases
* Manual phase skip
* Full reset function
* Pause & resume
* Session type indicator (Focus / Short Break / Long Break)
* Cycle counter (“Session X of Y”)
* Countdown timer (MM:SS format)
* Timer accuracy even when tab is hidden
* Neon pulse animation while running

---

## **4.2 Timer UI Features**

* Circular SVG progress ring
* Ring rotates -90° for top starting point
* Smooth stroke-dashoffset animation
* Live percentage complete text
* Neon glowing timer text
* Animated pulse effect
* Pause / Reset / Skip neon buttons
* Hover scale animations
* Gradient button backgrounds

---

## **4.3 Statistics & Progress**

* “Today’s Progress” card
* Completed session count
* Daily goal progress bar
* Daily goal percentage
* Focus streak (“X days”)
* Streak visualization using 7 neon squares
* Personal best streak
* Quick Stats:

  * Total focus minutes
  * Total break minutes
  * Total long breaks

---

## **4.4 Settings & Personalization**

* Timer duration settings (Focus / Short Break / Long Break)
* Real-time update when changed
* All values saved to localStorage
* Theme selector with 5 color bubbles
* Selected theme persists
* Optional sound alerts (if added)
* Keybindings:

  * Space → Pause/Resume
  * R → Reset
  * S → Skip

---

## **4.5 Quick Actions Panel**

* Start New Session (button)
* Take a Break (button)
* View Analytics (button — basic, local-only)

*(Analytics will be basic unless you specify more.)*

---

## **4.6 PWA / Offline Features**

* Fully offline after first load
* `manifest.json` with icons
* Service worker precaching:

  * HTML
  * JS
  * CSS (Tailwind, fonts, icon styles)
  * Fonts
  * App icons
* No network requests allowed
* PWA installable banner
* App runs as standalone

---

## **4.7 Local Asset Requirements**

* Full Tailwind build stored locally
* Purged for unused classes to reduce size
* Local FontAwesome CSS and .woff2 fonts
* OR local inline SVG icons (your choice — default = FontAwesome local)
* Local Inter fonts in woff2 format
* All assets precached manually

---

## **4.8 Accessibility / Usability**

* Keyboard controls
* Responsive grid layout
* Large buttons for touch screens
* Clear color contrast
* Smooth transitions

---

# **5. Technical Requirements**

## 5.1 Required Files

```
index.html
script.js
manifest.json
service-worker.js
css/
fonts/
icons/
```

## 5.2 Allowed Local Files

✔ tailwind.css
✔ fontawesome.css
✔ inter-fonts.css
✔ svg icons
✔ png icons

---

# **6. Folder Structure**

```
/
├── index.html
├── script.js
├── manifest.json
├── service-worker.js
├── css/
│   ├── tailwind.css
│   ├── fontawesome.css
│   ├── inter-font.css
├── fonts/
│   ├── Inter-Regular.woff2
│   ├── Inter-Bold.woff2
│   ├── fa-solid-900.woff2
├── icons/
│   ├── icon-192.png
│   ├── icon-512.png
└── img/
```

---

# **7. Windsurf Build Phases**

## **Phase 1 — Setup (no externals)**

* Create folder structure
* Add empty CSS/JS files
* Add Tailwind input file

---

## **Phase 2 — Local Tailwind Build**

* Install TailwindCLI
* Purge classes from HTML
* Output `/css/tailwind.css`

---

## **Phase 3 — Local Fonts & Icons**

* Download Inter font set
* Download FontAwesome locally
* Build `/css/inter-font.css`
* Build `/css/fontawesome.css`

---

## **Phase 4 — Convert HTML**

* Remove external scripts/CDNs
* Reference local CSS files
* Reference local fonts
* Reference local icon styles

---

## **Phase 5 — Timer Engine**

* Countdown logic
* Phase management
* Skip / reset / pause
* LocalStorage state

---

## **Phase 6 — Advanced Pomodoro Logic**

* Custom cycle length
* Auto-switch
* Long-break handling
* Session counter

---

## **Phase 7 — Stats + Streak**

* Daily session count
* Daily goal progress
* Streak logic
* Personal best storage

---

## **Phase 8 — PWA**

* Build manifest
* Build service worker
* Precache all local assets
* Verify full offline mode

---

## **Phase 9 — UI Polish**

* Neon pulses
* Hover transitions
* SVG animations
* Responsive grid layout

---

## **Phase 10 — Testing**

* Offline test
* All buttons
* All timeline transitions
* LocalStorage persistence
* Microsoft Store PWA compatibility

---

# **8. Acceptance Criteria**

The project is complete when:

* All UI matches Appendix A exactly
* No external requests appear in network inspector
* App loads fully offline
* All Pomodoro features work
* Stats update properly
* Streak tracking works
* Theme selector works
* Keyboard shortcuts work
* PWA installable
* Microsoft Store compliant
* No console errors

---

# **APPENDIX A — FULL HTML PROVIDED**

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script> window.FontAwesomeConfig = { autoReplaceSvg: 'nest'};</script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        ::-webkit-scrollbar { display: none; }
        body { font-family: 'Inter', sans-serif; }
        .neon-glow { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
        .neon-text { text-shadow: 0 0 10px rgba(34, 197, 94, 0.5); }
        .progress-ring {
            transform: rotate(-90deg);
            transition: stroke-dasharray 0.3s ease;
        }
        .timer-animation {
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        .gradient-border {
            background: linear-gradient(45deg, #10b981, #3b82f6);
            padding: 2px;
            border-radius: 12px;
        }
        .gradient-border-content {
            background: #111827;
            border-radius: 10px;
        }
    </style>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'inter': ['Inter', 'sans-serif'],
                    },
                    colors: {
                        'neon-green': '#10b981',
                        'neon-blue': '#3b82f6',
                        'neon-purple': '#8b5cf6',
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-gray-900 text-white font-inter">

    <div id="main-dashboard" class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        
        <header id="header" class="px-8 py-6 border-b border-gray-700">
            <div class="flex justify-between items-center">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-gradient-to-r from-neon-green to-neon-blue rounded-lg flex items-center justify-center">
                        <i class="fas fa-clock text-white text-xl"></i>
                    </div>
                    <h1 class="text-2xl font-black text-white">Betway Focus Timer</h1>
                </div>
                <div class="flex items-center space-x-4">
                    <button class="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                        <i class="fas fa-bell text-gray-400 hover:text-neon-green"></i>
                    </button>
                    <button class="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                        <i class="fas fa-cog text-gray-400 hover:text-neon-green"></i>
                    </button>
                    <div class="w-8 h-8 bg-neon-green rounded-full"></div>
                </div>
            </div>
        </header>

        <main class="px-8 py-8">
            <div class="grid grid-cols-12 gap-8">
                
                <div id="timer-section" class="col-span-8">
                    <div class="gradient-border mb-8">
                        <div class="gradient-border-content p-8 text-center">
                            <div class="mb-6">
                                <h2 class="text-xl font-semibold text-gray-300 mb-2">Current Session</h2>
                                <div class="flex items-center justify-center space-x-2">
                                    <span class="px-3 py-1 bg-neon-green/20 text-neon-green rounded-full text-sm font-medium">Focus Time</span>
                                    <span class="text-gray-400">•</span>
                                    <span class="text-gray-400">Session 3 of 4</span>
                                </div>
                            </div>
                            
                            <div class="relative mb-8 timer-animation">
                                <svg class="w-64 h-64 mx-auto" viewBox="0 0 200 200">
                                    <circle cx="100" cy="100" r="90" fill="none" stroke="#374151" stroke-width="8"/>
                                    <circle cx="100" cy="100" r="90" fill="none" stroke="#10b981" stroke-width="8" 
                                            stroke-dasharray="565" stroke-dashoffset="141" class="progress-ring neon-glow"/>
                                </svg>
                                <div class="absolute inset-0 flex flex-col items-center justify-center">
                                    <div class="text-6xl font-black neon-text text-neon-green mb-2">18:32</div>
                                    <div class="text-gray-400 text-lg">75% Complete</div>
                                </div>
                            </div>

                            <div class="flex justify-center space-x-4">
                                <button class="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105 neon-glow">
                                    <i class="fas fa-pause mr-2"></i>Pause
                                </button>
                                <button class="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 rounded-xl font-bold text-lg transition-all transform hover:scale-105">
                                    <i class="fas fa-stop mr-2"></i>Reset
                                </button>
                                <button class="px-8 py-4 bg-gradient-to-r from-neon-blue to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105">
                                    <i class="fas fa-forward mr-2"></i>Skip
                                </button>
                            </div>
                        </div>
                    </div>

                    <div id="progress-overview" class="grid grid-cols-2 gap-6">
                        <div class="bg-gray-800 rounded-xl p-6 border border-gray-700">
                            <h3 class="text-lg font-bold mb-4 text-neon-green">Today's Progress</h3>
                            <div class="space-y-4">
                                <div class="flex justify-between items-center">
                                    <span class="text-gray-400">Completed Sessions</span>
                                    <span class="text-2xl font-bold">12</span>
                                </div>
                                <div class="w-full bg-gray-700 rounded-full h-3">
                                    <div class="bg-gradient-to-r from-neon-green to-neon-blue h-3 rounded-full" style="width: 80%"></div>
                                </div>
                                <div class="flex justify-between items-center text-sm">
                                    <span class="text-gray-400">Goal: 15 sessions</span>
                                    <span class="text-neon-green">80%</span>
                                </div>
                            </div>
                        </div>

                        <div class="bg-gray-800 rounded-xl p-6 border border-gray-700">
                            <h3 class="text-lg font-bold mb-4 text-neon-blue">Focus Streak</h3>
                            <div class="space-y-4">
                                <div class="flex justify-between items-center">
                                    <span class="text-gray-400">Current Streak</span>
                                    <span class="text-2xl font-bold">7 days</span>
                                </div>
                                <div class="flex space-x-1">
                                    <div class="w-6 h-6 bg-neon-green rounded opacity-100"></div>
                                    <div class="w-6 h-6 bg-neon-green rounded opacity-100"></div>
                                    <div class="w-6 h-6 bg-neon-green rounded opacity-100"></div>
                                    <div class="w-6 h-6 bg-neon-green rounded opacity-100"></div>
                                    <div class="w-6 h-6 bg-neon-green rounded opacity-100"></div>
                                    <div class="w-6 h-6 bg-neon-green rounded opacity-100"></div>
                                    <div class="w-6 h-6 bg-neon-green rounded opacity-100"></div>
                                </div>
                                <div class="text-sm text-gray-400">Personal best: 14 days</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="sidebar" class="col-span-4 space-y-6">
                    
                    <div id="quick-stats" class="bg-gray-800 rounded-xl p-6 border border-gray-700">
                        <h3 class="text-lg font-bold mb-4">Quick Stats</h3>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center space-x-3">
                                    <div class="w-3 h-3 bg-neon-green rounded-full"></div>
                                    <span class="text-gray-300">Focus Time</span>
                                </div>
                                <span class="font-bold">6h 15m</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center space-x-3">
                                    <div class="w-3 h-3 bg-neon-blue rounded-full"></div>
                                    <span class="text-gray-300">Break Time</span>
                                </div>
                                <span class="font-bold">1h 30m</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center space-x-3">
                                    <div class="w-3 h-3 bg-neon-purple rounded-full"></div>
                                    <span class="text-gray-300">Long Breaks</span>
                                </div>
                                <span class="font-bold">3</span>
                            </div>
                        </div>
                    </div>

                    <div id="timer-settings" class="bg-gray-800 rounded-xl p-6 border border-gray-700">
                        <h3 class="text-lg font-bold mb-4">Timer Settings</h3>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm text-gray-400 mb-2">Focus Duration</label>
                                <div class="flex items-center space-x-2">
                                    <input type="number" value="25" class="w-16 px-3 py-2 bg-gray-700 rounded-lg text-center border border-gray-600 focus:border-neon-green focus:outline-none">
                                    <span class="text-gray-400">minutes</span>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm text-gray-400 mb-2">Short Break</label>
                                <div class="flex items-center space-x-2">
                                    <input type="number" value="5" class="w-16 px-3 py-2 bg-gray-700 rounded-lg text-center border border-gray-600 focus:border-neon-green focus:outline-none">
                                    <span class="text-gray-400">minutes</span>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm text-gray-400 mb-2">Long Break</label>
                                <div class="flex items-center space-x-2">
                                    <input type="number" value="15" class="w-16 px-3 py-2 bg-gray-700 rounded-lg text-center border border-gray-600 focus:border-neon-green focus:outline-none">
                                    <span class="text-gray-400">minutes</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="controls" class="bg-gray-800 rounded-xl p-6 border border-gray-700">
                        <h3 class="text-lg font-bold mb-4">Quick Actions</h3>
                        <div class="space-y-3">
                            <button class="w-full px-4 py-3 bg-gradient-to-r from-neon-green to-green-600 hover:from-green-600 hover:to-green-700 rounded-lg font-semibold transition-all transform hover:scale-105">
                                <i class="fas fa-play mr-2"></i>Start New Session
                            </button>
                            <button class="w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors">
                                <i class="fas fa-coffee mr-2"></i>Take a Break
                            </button>
                            <button class="w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors">
                                <i class="fas fa-chart-line mr-2"></i>View Analytics
                            </button>
                        </div>
                    </div>

                    <div id="theme-selector" class="bg-gray-800 rounded-xl p-6 border border-gray-700">
                        <h3 class="text-lg font-bold mb-4">Theme Color</h3>
                        <div class="flex space-x-3">
                            <button class="w-8 h-8 bg-neon-green rounded-full border-2 border-white"></button>
                            <button class="w-8 h-8 bg-neon-blue rounded-full border-2 border-transparent hover:border-white transition-colors"></button>
                            <button class="w-8 h-8 bg-neon-purple rounded-full border-2 border-transparent hover:border-white transition-colors"></button>
                            <button class="w-8 h-8 bg-red-500 rounded-full border-2 border-transparent hover:border-white transition-colors"></button>
                            <button class="w-8 h-8 bg-yellow-500 rounded-full border-2 border-transparent hover:border-white transition-colors"></button>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    </div>

    <script>
        let isTimerRunning = false;
        let currentTime = 1112;
        let totalTime = 1500;

        function updateProgress() {
            const percentage = ((totalTime - currentTime) / totalTime) * 100;
            const circumference = 2 * Math.PI * 90;
            const offset = circumference - (percentage / 100 * circumference);
            
            const progressRing = document.querySelector('.progress-ring');
            if (progressRing) {
                progressRing.style.strokeDashoffset = offset;
            }
        }

        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${minutes}:${secs.toString().padStart(2, '0')}`;
        }

        function updateTimer() {
            const timerDisplay = document.querySelector('.neon-text');
            if (timerDisplay) {
                timerDisplay.textContent = formatTime(currentTime);
            }
            updateProgress();
        }

        document.addEventListener('keydown', function(e) {
            if (e.code === 'Space') {
                e.preventDefault();
                toggleTimer();
            } else if (e.code === 'KeyR') {
                resetTimer();
            } else if (e.code === 'KeyS') {
                skipSession();
            }
        });

        function toggleTimer() {
            isTimerRunning = !isTimerRunning;
            const pauseBtn = document.querySelector('button[class*="red-"]');
            if (pauseBtn) {
                if (isTimerRunning) {
                    pauseBtn.innerHTML = '<i class="fas fa-pause mr-2"></i>Pause';
                } else {
                    pauseBtn.innerHTML = '<i class="fas fa-play mr-2"></i>Resume';
                }
            }
        }

        function resetTimer() {
            isTimerRunning = false;
            currentTime = totalTime;
            updateTimer();
        }

        function skipSession() {
            currentTime = 0;
            updateTimer();
        }

        setInterval(() => {
            if (isTimerRunning && currentTime > 0) {
                currentTime--;
                updateTimer();
            }
        }, 1000);

        updateTimer();
    </script>

</body>
</html>

