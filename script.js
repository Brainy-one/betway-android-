// ===== POMODORO TIMER APP =====

// State Management
const state = {
    isRunning: false,
    currentTime: 0,
    totalTime: 0,
    currentPhase: 'focus', // 'focus', 'shortBreak', 'longBreak'
    currentSession: 1,
    completedSessionsToday: 0,
    timerInterval: null,
    lastActiveDate: null
};

// Settings
const settings = {
    focusDuration: 25,
    shortBreakDuration: 5,
    longBreakDuration: 15,
    sessionsUntilLongBreak: 4,
    dailyGoal: 15,
    theme: 'green'
};

// Stats
const stats = {
    totalFocusMinutes: 0,
    totalBreakMinutes: 0,
    totalLongBreaks: 0,
    currentStreak: 0,
    personalBest: 0,
    lastCompletedDate: null,
    streakDates: []
};

// Theme Colors
const themes = {
    green: { primary: '#10b981', secondary: '#059669' },
    blue: { primary: '#3b82f6', secondary: '#2563eb' },
    purple: { primary: '#8b5cf6', secondary: '#7c3aed' },
    red: { primary: '#ef4444', secondary: '#dc2626' },
    yellow: { primary: '#eab308', secondary: '#ca8a04' }
};

// ===== INITIALIZATION =====

function init() {
    loadFromLocalStorage();
    updateAllUI();
    setupEventListeners();
    checkStreakReset();
    
    // Register service worker for PWA functionality
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(reg => console.log('Service Worker registered:', reg.scope))
            .catch(err => console.log('Service Worker registration failed:', err));
    }
}

// ===== LOCAL STORAGE =====

function saveToLocalStorage() {
    localStorage.setItem('pomodoroState', JSON.stringify(state));
    localStorage.setItem('pomodoroSettings', JSON.stringify(settings));
    localStorage.setItem('pomodoroStats', JSON.stringify(stats));
}

function loadFromLocalStorage() {
    const savedState = localStorage.getItem('pomodoroState');
    const savedSettings = localStorage.getItem('pomodoroSettings');
    const savedStats = localStorage.getItem('pomodoroStats');
    
    if (savedState) {
        const loaded = JSON.parse(savedState);
        Object.assign(state, loaded);
        state.isRunning = false; // Don't auto-start on load
        state.timerInterval = null;
    }
    
    if (savedSettings) {
        Object.assign(settings, JSON.parse(savedSettings));
    }
    
    if (savedStats) {
        Object.assign(stats, JSON.parse(savedStats));
    }
    
    // Initialize timer if not set
    if (state.currentTime === 0) {
        resetTimer();
    }
}

// ===== TIMER LOGIC =====

function startTimer() {
    if (state.isRunning) return;
    
    state.isRunning = true;
    updatePauseButton();
    
    state.timerInterval = setInterval(() => {
        if (state.currentTime > 0) {
            state.currentTime--;
            updateTimerDisplay();
            updateProgressRing();
            saveToLocalStorage();
        } else {
            completePhase();
        }
    }, 1000);
}

function pauseTimer() {
    state.isRunning = false;
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
    updatePauseButton();
    saveToLocalStorage();
}

function toggleTimer() {
    if (state.isRunning) {
        pauseTimer();
    } else {
        startTimer();
    }
}

function resetTimer() {
    pauseTimer();
    
    switch (state.currentPhase) {
        case 'focus':
            state.totalTime = settings.focusDuration * 60;
            break;
        case 'shortBreak':
            state.totalTime = settings.shortBreakDuration * 60;
            break;
        case 'longBreak':
            state.totalTime = settings.longBreakDuration * 60;
            break;
    }
    
    state.currentTime = state.totalTime;
    updateTimerDisplay();
    updateProgressRing();
    saveToLocalStorage();
}

function skipPhase() {
    pauseTimer();
    completePhase();
}

function completePhase() {
    pauseTimer();
    
    // Update stats based on completed phase
    if (state.currentPhase === 'focus') {
        stats.totalFocusMinutes += settings.focusDuration;
        state.completedSessionsToday++;
        updateTodayProgress();
        updateStreak();
    } else if (state.currentPhase === 'shortBreak') {
        stats.totalBreakMinutes += settings.shortBreakDuration;
    } else if (state.currentPhase === 'longBreak') {
        stats.totalBreakMinutes += settings.longBreakDuration;
        stats.totalLongBreaks++;
    }
    
    // Move to next phase
    if (state.currentPhase === 'focus') {
        if (state.currentSession >= settings.sessionsUntilLongBreak) {
            state.currentPhase = 'longBreak';
            state.currentSession = 1;
        } else {
            state.currentPhase = 'shortBreak';
            state.currentSession++;
        }
    } else {
        state.currentPhase = 'focus';
    }
    
    resetTimer();
    updateSessionInfo();
    updateQuickStats();
    saveToLocalStorage();
    
    // Optional: Auto-start next phase
    // startTimer();
}

// ===== STREAK LOGIC =====

function checkStreakReset() {
    const today = new Date().toDateString();
    const lastDate = stats.lastCompletedDate;
    
    if (!lastDate) return;
    
    const lastCompleted = new Date(lastDate);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    // Reset streak if more than 1 day has passed
    if (lastCompleted.toDateString() !== today && 
        lastCompleted.toDateString() !== yesterday.toDateString()) {
        stats.currentStreak = 0;
        stats.streakDates = [];
        saveToLocalStorage();
    }
}

function updateStreak() {
    const today = new Date().toDateString();
    
    // Only count first completion of the day
    if (stats.lastCompletedDate === today) return;
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (stats.lastCompletedDate === yesterday.toDateString()) {
        stats.currentStreak++;
    } else if (stats.lastCompletedDate === null || stats.currentStreak === 0) {
        stats.currentStreak = 1;
    } else {
        stats.currentStreak = 1;
    }
    
    stats.lastCompletedDate = today;
    
    // Update personal best
    if (stats.currentStreak > stats.personalBest) {
        stats.personalBest = stats.currentStreak;
    }
    
    // Update streak visualization (last 7 days)
    if (!stats.streakDates.includes(today)) {
        stats.streakDates.push(today);
        if (stats.streakDates.length > 7) {
            stats.streakDates.shift();
        }
    }
    
    updateStreakDisplay();
    saveToLocalStorage();
}

// ===== UI UPDATES =====

function updateAllUI() {
    updateTimerDisplay();
    updateProgressRing();
    updateSessionInfo();
    updatePauseButton();
    updateTodayProgress();
    updateStreakDisplay();
    updateQuickStats();
    updateSettingsInputs();
    applyTheme();
}

function updateTimerDisplay() {
    const minutes = Math.floor(state.currentTime / 60);
    const seconds = state.currentTime % 60;
    const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    document.getElementById('timerDisplay').textContent = timeString;
    
    const percentage = state.totalTime > 0 
        ? Math.round(((state.totalTime - state.currentTime) / state.totalTime) * 100)
        : 0;
    document.getElementById('percentageDisplay').textContent = `${percentage}% Complete`;
}

function updateProgressRing() {
    const percentage = state.totalTime > 0 
        ? ((state.totalTime - state.currentTime) / state.totalTime) * 100
        : 0;
    
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (percentage / 100 * circumference);
    
    const ring = document.getElementById('progressRing');
    ring.style.strokeDashoffset = offset;
}

function updateSessionInfo() {
    const typeElement = document.getElementById('sessionType');
    const counterElement = document.getElementById('sessionCounter');
    
    switch (state.currentPhase) {
        case 'focus':
            typeElement.textContent = 'Focus Time';
            typeElement.className = 'neu-card-inset px-4 py-2 text-neon-green text-sm font-medium';
            break;
        case 'shortBreak':
            typeElement.textContent = 'Short Break';
            typeElement.className = 'neu-card-inset px-4 py-2 text-neon-blue text-sm font-medium';
            break;
        case 'longBreak':
            typeElement.textContent = 'Long Break';
            typeElement.className = 'neu-card-inset px-4 py-2 text-neon-purple text-sm font-medium';
            break;
    }
    
    counterElement.textContent = `Session ${state.currentSession} of ${settings.sessionsUntilLongBreak}`;
}

function updatePauseButton() {
    const btn = document.getElementById('pauseBtn');
    
    if (state.isRunning) {
        btn.innerHTML = '<i class="fas fa-pause mr-2"></i>Pause';
        btn.className = 'neu-btn px-6 md:px-8 py-3 md:py-4 text-red-400 font-bold text-base md:text-lg';
        btn.style.boxShadow = '8px 8px 16px #0f0f1a, -8px -8px 16px #252542, 0 0 20px rgba(239, 68, 68, 0.3)';
    } else {
        btn.innerHTML = '<i class="fas fa-play mr-2"></i>Start';
        btn.className = 'neu-btn px-6 md:px-8 py-3 md:py-4 text-neon-green font-bold text-base md:text-lg neu-glow-green';
        btn.style.boxShadow = '';
    }
}

function updateTodayProgress() {
    document.getElementById('completedSessions').textContent = state.completedSessionsToday;
    
    const percentage = Math.min(100, Math.round((state.completedSessionsToday / settings.dailyGoal) * 100));
    document.getElementById('goalProgress').style.width = `${percentage}%`;
    document.getElementById('goalPercentage').textContent = `${percentage}%`;
    document.getElementById('dailyGoal').textContent = settings.dailyGoal;
}

function updateStreakDisplay() {
    document.getElementById('currentStreak').textContent = `${stats.currentStreak} days`;
    document.getElementById('personalBest').textContent = stats.personalBest;
    
    // Update streak visualization
    const container = document.getElementById('streakVisualization');
    container.innerHTML = '';
    
    for (let i = 0; i < 7; i++) {
        const box = document.createElement('div');
        if (i < stats.currentStreak) {
            box.className = 'w-5 h-5 md:w-6 md:h-6 rounded';
            box.style.background = '#10b981';
            box.style.boxShadow = '4px 4px 8px #0f0f1a, -4px -4px 8px #252542, 0 0 10px rgba(16, 185, 129, 0.4)';
        } else {
            box.className = 'w-5 h-5 md:w-6 md:h-6 neu-card-inset rounded';
        }
        container.appendChild(box);
    }
}

function updateQuickStats() {
    const focusHours = Math.floor(stats.totalFocusMinutes / 60);
    const focusMins = stats.totalFocusMinutes % 60;
    document.getElementById('totalFocusTime').textContent = `${focusHours}h ${focusMins}m`;
    
    const breakHours = Math.floor(stats.totalBreakMinutes / 60);
    const breakMins = stats.totalBreakMinutes % 60;
    document.getElementById('totalBreakTime').textContent = `${breakHours}h ${breakMins}m`;
    
    document.getElementById('totalLongBreaks').textContent = stats.totalLongBreaks;
}

function updateSettingsInputs() {
    document.getElementById('focusDuration').value = settings.focusDuration;
    document.getElementById('shortBreakDuration').value = settings.shortBreakDuration;
    document.getElementById('longBreakDuration').value = settings.longBreakDuration;
    document.getElementById('sessionsUntilLongBreak').value = settings.sessionsUntilLongBreak;
}

// ===== THEME MANAGEMENT =====

function applyTheme() {
    const theme = themes[settings.theme];
    console.log('Applying theme:', settings.theme, theme);
    
    // Update theme button styling for neumorphism
    document.querySelectorAll('.theme-btn').forEach(btn => {
        if (btn.dataset.theme === settings.theme) {
            // Selected: inset shadow (pressed look)
            btn.style.boxShadow = 'inset 3px 3px 6px #0f0f1a, inset -3px -3px 6px #252542';
            btn.style.transform = 'scale(0.95)';
            console.log('Selected theme button:', btn.dataset.theme);
        } else {
            // Not selected: outset shadow (raised look)
            btn.style.boxShadow = '4px 4px 8px #0f0f1a, -4px -4px 8px #252542';
            btn.style.transform = 'scale(1)';
        }
    });
    
    // Update progress ring color with glow
    const ring = document.getElementById('progressRing');
    if (ring) {
        ring.setAttribute('stroke', theme.primary);
        ring.style.filter = `drop-shadow(0 0 6px ${theme.primary}80)`;
        console.log('Progress ring color updated to:', theme.primary);
    }
    
    // Update timer text color with glow
    const timerDisplay = document.getElementById('timerDisplay');
    if (timerDisplay) {
        timerDisplay.style.color = theme.primary;
        timerDisplay.style.textShadow = `0 0 10px ${theme.primary}66`;
    }
    
    // Update session type badge when in focus mode
    const sessionType = document.getElementById('sessionType');
    if (sessionType && state.currentPhase === 'focus') {
        sessionType.style.color = theme.primary;
    }
    
    // Update accent elements
    document.querySelectorAll('.neu-text-accent').forEach(el => {
        el.style.color = theme.primary;
        el.style.textShadow = `0 0 10px ${theme.primary}66`;
    });
    
    // Update glow buttons
    document.querySelectorAll('.neu-glow-green').forEach(el => {
        el.style.boxShadow = `8px 8px 16px #0f0f1a, -8px -8px 16px #252542, 0 0 20px ${theme.primary}4D`;
    });
}

function setTheme(themeName) {
    console.log('Setting theme to:', themeName);
    settings.theme = themeName;
    applyTheme();
    saveToLocalStorage();
    console.log('Theme applied:', settings.theme);
}

// ===== ANALYTICS MODAL =====

function showAnalyticsModal() {
    console.log('showAnalyticsModal called');
    const focusHours = Math.floor(stats.totalFocusMinutes / 60);
    const focusMins = stats.totalFocusMinutes % 60;
    const breakHours = Math.floor(stats.totalBreakMinutes / 60);
    const breakMins = stats.totalBreakMinutes % 60;
    
    document.getElementById('modalCompletedToday').textContent = state.completedSessionsToday;
    document.getElementById('modalFocusTime').textContent = `${focusHours}h ${focusMins}m`;
    document.getElementById('modalBreakTime').textContent = `${breakHours}h ${breakMins}m`;
    document.getElementById('modalStreak').textContent = `${stats.currentStreak} days`;
    document.getElementById('modalBest').textContent = `${stats.personalBest} days`;
    document.getElementById('modalLongBreaks').textContent = stats.totalLongBreaks;
    
    const modal = document.getElementById('analyticsModal');
    console.log('Modal element:', modal);
    modal.classList.remove('hidden');
    console.log('Modal should be visible now');
}

function hideAnalyticsModal() {
    document.getElementById('analyticsModal').classList.add('hidden');
}

// ===== EVENT LISTENERS =====

function setupEventListeners() {
    // Timer controls
    document.getElementById('pauseBtn').addEventListener('click', toggleTimer);
    document.getElementById('resetBtn').addEventListener('click', resetTimer);
    document.getElementById('skipBtn').addEventListener('click', skipPhase);
    
    // Quick actions
    document.getElementById('startNewSessionBtn').addEventListener('click', () => {
        state.currentPhase = 'focus';
        state.currentSession = 1;
        resetTimer();
        updateSessionInfo();
        startTimer();
    });
    
    document.getElementById('takeBreakBtn').addEventListener('click', () => {
        state.currentPhase = 'shortBreak';
        resetTimer();
        updateSessionInfo();
        startTimer();
    });
    
    document.getElementById('viewAnalyticsBtn').addEventListener('click', () => {
        console.log('Analytics button clicked');
        showAnalyticsModal();
    });
    
    // Modal close handlers
    document.getElementById('closeModal').addEventListener('click', () => {
        hideAnalyticsModal();
    });
    
    document.getElementById('closeModalBtn').addEventListener('click', () => {
        hideAnalyticsModal();
    });
    
    // Close modal when clicking outside
    document.getElementById('analyticsModal').addEventListener('click', (e) => {
        if (e.target.id === 'analyticsModal') {
            hideAnalyticsModal();
        }
    });
    
    // Settings inputs
    document.getElementById('focusDuration').addEventListener('change', (e) => {
        settings.focusDuration = parseInt(e.target.value);
        if (state.currentPhase === 'focus') resetTimer();
        saveToLocalStorage();
    });
    
    document.getElementById('shortBreakDuration').addEventListener('change', (e) => {
        settings.shortBreakDuration = parseInt(e.target.value);
        if (state.currentPhase === 'shortBreak') resetTimer();
        saveToLocalStorage();
    });
    
    document.getElementById('longBreakDuration').addEventListener('change', (e) => {
        settings.longBreakDuration = parseInt(e.target.value);
        if (state.currentPhase === 'longBreak') resetTimer();
        saveToLocalStorage();
    });
    
    document.getElementById('sessionsUntilLongBreak').addEventListener('change', (e) => {
        settings.sessionsUntilLongBreak = parseInt(e.target.value);
        updateSessionInfo();
        saveToLocalStorage();
    });
    
    // Theme buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setTheme(btn.dataset.theme);
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Close modal with Escape
        if (e.code === 'Escape') {
            hideAnalyticsModal();
        }
        
        if (e.code === 'Space' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            toggleTimer();
        } else if (e.code === 'KeyR' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            resetTimer();
        } else if (e.code === 'KeyS' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            skipPhase();
        }
    });
    
    // Reset daily stats at midnight
    checkDailyReset();
    setInterval(checkDailyReset, 60000); // Check every minute
}

function checkDailyReset() {
    const today = new Date().toDateString();
    
    if (state.lastActiveDate && state.lastActiveDate !== today) {
        state.completedSessionsToday = 0;
        updateTodayProgress();
    }
    
    state.lastActiveDate = today;
    saveToLocalStorage();
}

// ===== START APP =====

document.addEventListener('DOMContentLoaded', init);
