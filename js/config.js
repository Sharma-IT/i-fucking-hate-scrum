// config.js - Application Configuration
// Global configuration settings for the Scrum Opinion website

const Config = {
    // App metadata
    app: {
        name: 'I Fucking Hate Scrum',
        version: '2.0.0',
        description: 'A cathartic collection of real developer opinions about Scrum methodology',
        url: 'https://ifuckinghaterscrum.com'
    },
    
    // Animation settings
    animations: {
        opinionTransition: 300,
        loadingDelay: 300,
        scaleAnimation: 100,
        fadeTransition: 200
    },
    
    // UI settings
    ui: {
        swipeThreshold: 50,
        debounceDelay: 250,
        autoAdvanceDelay: null, // Set to number of ms to auto-advance opinions
        showOpinionNumbers: false,
        enableKeyboardShortcuts: true
    },
    
    // Analytics settings
    analytics: {
        enabled: true,
        trackOpinionViews: true,
        trackUserInteractions: true,
        trackPerformance: false
    },
    
    // Feature flags
    features: {
        touchSupport: true,
        keyboardNavigation: true,
        localStorage: true,
        shareButtons: false,
        favorites: false,
        search: false
    },
    
    // Development settings
    development: {
        debug: false,
        logEvents: false,
        mockAnalytics: true
    },
    
    // Social sharing (for future implementation)
    social: {
        twitter: {
            handle: '@ifuckinghaterscrum',
            hashtags: ['scrum', 'agile', 'developer', 'programming']
        },
        facebook: {
            appId: null
        }
    },
    
    // External links
    links: {
        coffee: 'https://coff.ee/shubham.tech',
        github: 'https://github.com/Sharma-IT/i-fucking-hate-scrum',
        submit: 'https://github.com/Sharma-IT/i-fucking-hate-scrum/issues/new' // Placeholder for opinion submission
    }
};

// Environment-specific overrides
if (typeof window !== 'undefined') {
    // Development environment detection
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        Config.development.debug = true;
        Config.development.logEvents = true;
        Config.analytics.enabled = false;
    }
    
    // Production environment optimizations
    if (window.location.hostname.includes('ifuckinghaterscrum.com') || 
        window.location.hostname.includes('netlify.app')) {
        Config.analytics.enabled = true;
        Config.development.debug = false;
        Config.development.logEvents = false;
        Config.development.mockAnalytics = false;
    }
}

// Helper function to get config values with dot notation
Config.get = function(path, defaultValue = null) {
    const keys = path.split('.');
    let current = this;
    
    for (const key of keys) {
        if (current && typeof current === 'object' && key in current) {
            current = current[key];
        } else {
            return defaultValue;
        }
    }
    
    return current;
};

// Helper function to check if feature is enabled
Config.isEnabled = function(feature) {
    return this.get(`features.${feature}`, false);
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Config;
}

// Make available globally
if (typeof window !== 'undefined') {
    window.Config = Config;
}
