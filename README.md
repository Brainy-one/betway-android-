# Batway Focus Timer

A neon-themed Pomodoro productivity timer with advanced features, offline PWA support, and Microsoft Store compatibility.

## Features

### Pomodoro Timer
- ⏱️ Customizable focus, short break, and long break durations
- 🔄 Automatic phase switching with session tracking
- ⏸️ Pause, resume, reset, and skip controls
- 🎯 Visual circular progress indicator with neon glow effects
- ⌨️ Keyboard shortcuts (Space: pause/resume, R: reset, S: skip)

### Progress Tracking
- 📊 Daily session completion tracking
- 🎯 Customizable daily goals with progress visualization
- 🔥 Streak tracking (current streak & personal best)
- 📈 Quick stats: total focus time, break time, and long breaks
- 📅 Automatic daily reset at midnight

### Customization
- 🎨 5 theme colors (green, blue, purple, red, yellow)
- ⚙️ Adjustable timer durations
- 🔢 Configurable sessions until long break
- 💾 All settings persist in localStorage

### PWA Features
- 📱 Fully offline after first load
- 🚀 Installable on desktop and mobile
- 🔒 No external dependencies or CDNs
- 📦 Microsoft Store compatible
- ⚡ Service worker caching for instant load

## Installation

### Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build Tailwind CSS:**
   ```bash
   npm run build:css
   ```

3. **Generate app icons:**
   - Open `create-icons.html` in a browser
   - Right-click each canvas and save as:
     - `icons/icon-192.png`
     - `icons/icon-512.png`

4. **Serve locally:**
   Use any local server (e.g., Live Server, Python's http.server, or Node's http-server)
   ```bash
   # Example with Python
   python -m http.server 8000
   
   # Example with Node
   npx http-server -p 8000
   ```

5. **Open in browser:**
   Navigate to `http://localhost:8000`

## File Structure

```
/
├── index.html              # Main HTML file
├── script.js               # Timer logic and state management
├── manifest.json           # PWA manifest
├── service-worker.js       # Service worker for offline support
├── package.json            # NPM dependencies
├── tailwind.config.js      # Tailwind configuration
├── create-icons.html       # Icon generator utility
├── css/
│   ├── tailwind.css        # Compiled Tailwind CSS
│   ├── inter-font.css      # Local Inter font definitions
│   └── fontawesome.css     # Local FontAwesome styles
├── fonts/
│   ├── Inter-*.woff2       # Inter font files
│   └── fa-*.woff2          # FontAwesome font files
├── icons/
│   ├── icon-192.png        # 192x192 app icon
│   └── icon-512.png        # 512x512 app icon
└── src/
    └── input.css           # Tailwind source file
```

## Usage

### Timer Controls
- **Start/Pause:** Click the main button or press `Space`
- **Reset:** Click Reset button or press `R`
- **Skip:** Click Skip button or press `S`

### Quick Actions
- **Start New Session:** Begins a fresh focus session
- **Take a Break:** Immediately starts a short break
- **View Analytics:** (Coming soon)

### Settings
Adjust timer durations in the sidebar:
- Focus Duration (1-60 minutes)
- Short Break (1-30 minutes)
- Long Break (1-60 minutes)
- Sessions Until Long Break (2-10 sessions)

### Themes
Click any color bubble in the Theme Color section to change the app's accent color.

## Technical Details

### Technologies
- **HTML5** - Semantic markup
- **CSS3** - Tailwind CSS (local build)
- **Vanilla JavaScript** - No frameworks
- **PWA** - Service Worker + Manifest
- **localStorage** - State persistence

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Any modern browser with PWA support

### Offline Support
All assets are cached on first load:
- HTML, CSS, JavaScript
- Fonts (Inter, FontAwesome)
- Icons
- Manifest

No network requests after initial load.

## Microsoft Store Deployment

This app is ready for Microsoft Store submission:
1. All resources are local (no CDNs)
2. PWA manifest configured
3. Service worker implements offline functionality
4. Icons provided in required sizes

Use PWABuilder (https://www.pwabuilder.com/) to package for Microsoft Store.

## License

MIT License - Feel free to use and modify.

## Credits

- **Fonts:** Inter by Rasmus Andersson
- **Icons:** Font Awesome Free
- **Design:** Neon-themed dashboard aesthetic
