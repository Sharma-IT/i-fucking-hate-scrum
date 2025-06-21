// app.js - Main Application Logic
// Handles the opinion display functionality and user interactions

class ScrumOpinionApp {
    constructor() {
        this.currentOpinionIndex = 0;
        this.opinions = window.scrumOpinions || [];
        this.opinionContainer = null;
        this.opinionElement = null;
        this.config = window.Config || {};
        
        this.init();
    }
    
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupApp());
        } else {
            this.setupApp();
        }
    }
    
    setupApp() {
        // Get DOM elements
        this.opinionContainer = document.querySelector('.opinion-container');
        this.opinionElement = document.getElementById('current-opinion');
        
        if (!this.opinionContainer || !this.opinionElement) {
            console.error('Required DOM elements not found');
            return;
        }
        
        if (this.opinions.length === 0) {
            console.error('No opinions data found');
            return;
        }
        
        // Show initial random opinion
        this.showRandomOpinion();
        
        // Setup event listeners
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Keyboard navigation (if enabled)
        if (this.config.get && this.config.get('ui.enableKeyboardShortcuts', true)) {
            document.addEventListener('keydown', (e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    this.showRandomOpinion();
                }
            });
        }
        
        // Touch/swipe support for mobile (if enabled)
        if (this.config.get && this.config.get('features.touchSupport', true)) {
            this.setupTouchEvents();
        }
    }
    
    setupTouchEvents() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });
    }
    
    handleSwipe(startX, endX) {
        const swipeThreshold = this.config.get ? this.config.get('ui.swipeThreshold', 50) : 50;
        const swipeDistance = endX - startX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            this.showRandomOpinion();
        }
    }
    
    showRandomOpinion() {
        if (!this.opinionContainer || !this.opinionElement || this.opinions.length === 0) {
            console.error('App not properly initialized');
            return;
        }
        
        // Add loading animation
        this.opinionContainer.classList.add('loading');
        
        setTimeout(() => {
            // Get random opinion (different from current)
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * this.opinions.length);
            } while (newIndex === this.currentOpinionIndex && this.opinions.length > 1);
            
            this.currentOpinionIndex = newIndex;
            const opinion = this.opinions[this.currentOpinionIndex];
            
            // Update content
            this.updateOpinionDisplay(opinion);
            
            // Remove loading animation
            this.opinionContainer.classList.remove('loading');
            
            // Add subtle animation to indicate new content
            this.animateNewContent();
            
            // Track the opinion view for analytics
            if (this.config.get && this.config.get('analytics.trackOpinionViews', true)) {
                this.trackOpinionView(this.currentOpinionIndex);
            }
            
        }, this.config.get ? this.config.get('animations.opinionTransition', 300) : 300);
    }
    
    updateOpinionDisplay(opinion) {
        this.opinionElement.innerHTML = `
            <p>"${this.escapeHtml(opinion.quote)}"</p>
            <div class="opinion-meta">
                <span class="author">- ${this.escapeHtml(opinion.author)}</span>
                <span class="role">${this.escapeHtml(opinion.role)}</span>
            </div>
            <div class="highlight-quote">
                "${this.escapeHtml(opinion.highlight)}"
            </div>
        `;
    }
    
    animateNewContent() {
        this.opinionContainer.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.opinionContainer.style.transform = 'scale(1)';
        }, 100);
    }
    
    // Utility function to escape HTML to prevent XSS
    escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
    
    // Analytics tracking (placeholder for future implementation)
    trackOpinionView(index) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'opinion_viewed', {
                'opinion_index': index,
                'opinion_author': this.opinions[index].author,
                'opinion_category': 'scrum_frustration'
            });
        }
        
        // Console log for development
        console.log(`Opinion viewed: ${index} - ${this.opinions[index].author}`);
    }
    
    // Public method to get current opinion
    getCurrentOpinion() {
        return this.opinions[this.currentOpinionIndex];
    }
    
    // Public method to get all opinions
    getAllOpinions() {
        return this.opinions;
    }
    
    // Public method to get opinions count
    getOpinionsCount() {
        return this.opinions.length;
    }
}

// Global function for backwards compatibility
function showRandomOpinion() {
    if (window.scrumApp) {
        window.scrumApp.showRandomOpinion();
    } else {
        console.error('Scrum app not initialized');
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    window.scrumApp = new ScrumOpinionApp();
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ScrumOpinionApp, showRandomOpinion };
}
