# JavaScript Modules Documentation

This directory contains the modularized JavaScript code for the "I Fucking Hate Scrum" website.

## File Structure

```
js/
├── config.js          # Application configuration and settings
├── utils.js           # Utility functions and helpers
├── opinions-data.js   # Scrum opinions data module
└── app.js            # Main application logic and UI interactions
```

## Module Descriptions

### config.js
- **Purpose**: Central configuration management
- **Exports**: `Config` object with app settings
- **Features**:
  - Environment-specific settings
  - Feature flags
  - Animation timing
  - Analytics configuration
  - Helper methods for accessing nested config values

### utils.js
- **Purpose**: Shared utility functions
- **Exports**: `Utils` object with helper methods
- **Features**:
  - Debounce and throttle functions
  - Animation helpers
  - Local storage utilities
  - Device detection
  - Analytics helpers
  - Performance measurement tools

### opinions-data.js
- **Purpose**: Contains all Scrum opinion data
- **Exports**: `scrumOpinions` array
- **Features**:
  - 25+ real developer quotes from community sources
  - Structured opinion objects with quote, author, role, and highlight
  - Compatible with both browser and Node.js environments

### app.js
- **Purpose**: Main application logic and UI management
- **Exports**: `ScrumOpinionApp` class and `showRandomOpinion` function
- **Features**:
  - Object-oriented architecture
  - Event handling (keyboard, touch, mouse)
  - Opinion display management
  - Animation control
  - Analytics integration
  - Backwards compatibility with global functions

## Usage

### Browser Environment
```html
<!-- Load in dependency order -->
<script src="js/config.js"></script>
<script src="js/utils.js"></script>
<script src="js/opinions-data.js"></script>
<script src="js/app.js"></script>
```

### Accessing the App
```javascript
// The app automatically initializes on DOMContentLoaded
// Access the app instance globally
window.scrumApp.showRandomOpinion();

// Or use the backwards-compatible global function
showRandomOpinion();
```

### Configuration
```javascript
// Check if a feature is enabled
if (Config.isEnabled('touchSupport')) {
    // Touch features are enabled
}

// Get configuration values
const animationSpeed = Config.get('animations.opinionTransition', 300);
```

### Adding New Opinions
1. Edit `opinions-data.js`
2. Add new opinion object to the `scrumOpinions` array:
```javascript
{
    quote: "Your new quote about Scrum frustrations",
    author: "Developer Name or Anonymous Developer",
    role: "Job Title",
    highlight: "SHORT PUNCHY STATEMENT IN CAPS"
}
```

## Development

### Local Testing
```bash
# Start local server
python3 -m http.server 8080

# Open browser to test
open http://localhost:8080
```

### Debugging
- Set `Config.development.debug = true` for console logging
- Use browser dev tools to inspect module loading
- Check console for any initialization errors

### Performance
- All modules are loaded synchronously for simplicity
- Should use ES6 modules or a bundler for production
- Lazy loading can be implemented for non-critical utilities

## Browser Compatibility

- **Modern Browsers**: Full feature support
- **IE11+**: Basic functionality (no ES6 features used)
- **Mobile**: Touch and swipe support included
- **Accessibility**: Keyboard navigation supported

## Future Enhancements

### Possible Module Additions
- `analytics.js` - Dedicated analytics module
- `storage.js` - Enhanced data persistence
- `share.js` - Social sharing functionality
- `search.js` - Opinion search and filtering
- `themes.js` - Theme switching capability

### Bundle Optimization
- Should use webpack or Rollup for production builds
- Implement code splitting for larger feature sets
- Add TypeScript definitions for better development experience

## Security

- All user inputs are escaped to prevent XSS
- No external dependencies to minimize attack surface
- Configuration validates environment settings
- Local storage usage is wrapped with error handling

## Contributing

When adding new modules:
1. Follow the existing naming convention
2. Include proper exports for both browser and Node.js
3. Add configuration options to `config.js`
4. Update this documentation
5. Test in multiple browsers
