// utils.js - Utility Functions
// Shared utility functions for the Scrum Opinion website

const Utils = {
    // Debounce function to limit rapid function calls
    debounce(func, wait, immediate) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func(...args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func(...args);
        };
    },
    
    // Throttle function to limit function calls over time
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Random number generator with seed support for testing
    random(min = 0, max = 1, seed = null) {
        if (seed !== null) {
            // Simple seeded random for testing
            const x = Math.sin(seed++) * 10000;
            return min + (x - Math.floor(x)) * (max - min);
        }
        return min + Math.random() * (max - min);
    },
    
    // Animation helper
    animate(element, property, startValue, endValue, duration = 300, easing = 'ease') {
        return new Promise((resolve) => {
            const startTime = performance.now();
            
            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Simple easing functions
                const easedProgress = easing === 'ease-out' 
                    ? 1 - Math.pow(1 - progress, 3)
                    : easing === 'ease-in'
                    ? Math.pow(progress, 3)
                    : progress; // linear
                
                const currentValue = startValue + (endValue - startValue) * easedProgress;
                element.style[property] = currentValue + (property.includes('scale') ? '' : 'px');
                
                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    resolve();
                }
            }
            
            requestAnimationFrame(update);
        });
    },
    
    // Local storage helpers
    storage: {
        get(key, defaultValue = null) {
            try {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : defaultValue;
            } catch (error) {
                console.warn('Error reading from localStorage:', error);
                return defaultValue;
            }
        },
        
        set(key, value) {
            try {
                localStorage.setItem(key, JSON.stringify(value));
                return true;
            } catch (error) {
                console.warn('Error writing to localStorage:', error);
                return false;
            }
        },
        
        remove(key) {
            try {
                localStorage.removeItem(key);
                return true;
            } catch (error) {
                console.warn('Error removing from localStorage:', error);
                return false;
            }
        }
    },
    
    // URL helpers
    url: {
        getParam(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        },
        
        setParam(name, value) {
            const url = new URL(window.location);
            url.searchParams.set(name, value);
            window.history.replaceState({}, '', url);
        },
        
        removeParam(name) {
            const url = new URL(window.location);
            url.searchParams.delete(name);
            window.history.replaceState({}, '', url);
        }
    },
    
    // Device detection
    device: {
        isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        },
        
        isTablet() {
            return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent);
        },
        
        isDesktop() {
            return !this.isMobile() && !this.isTablet();
        },
        
        supportsTouch() {
            return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        }
    },
    
    // Analytics helpers
    analytics: {
        track(event, properties = {}) {
            // Google Analytics 4
            if (typeof gtag !== 'undefined') {
                gtag('event', event, properties);
            }
            
            // Console log for development
            if (process?.env?.NODE_ENV === 'development') {
                console.log('Analytics:', event, properties);
            }
        },
        
        trackPageView(path = window.location.pathname) {
            this.track('page_view', {
                page_title: document.title,
                page_location: window.location.href,
                page_path: path
            });
        }
    },
    
    // Performance helpers
    performance: {
        mark(name) {
            if (window.performance && window.performance.mark) {
                window.performance.mark(name);
            }
        },
        
        measure(name, startMark, endMark) {
            if (window.performance && window.performance.measure) {
                try {
                    window.performance.measure(name, startMark, endMark);
                    const measure = window.performance.getEntriesByName(name)[0];
                    return measure ? measure.duration : null;
                } catch (error) {
                    console.warn('Performance measurement failed:', error);
                    return null;
                }
            }
            return null;
        }
    }
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Utils;
}

// Make available globally
if (typeof window !== 'undefined') {
    window.Utils = Utils;
}
