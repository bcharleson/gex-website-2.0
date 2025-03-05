/**
 * Rive Animation Controller - FIXED VERSION
 * This file initializes and manages Rive animations throughout the site
 */

// Rive animations are initialized when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded - initializing buttons and animations");
    
    // Always make buttons visible first, regardless of animation loading
    makeButtonsVisible();
    
    // Then try to initialize Rive animations as enhancement
    setTimeout(() => {
        // Only try to load animations if Rive is available
        if (typeof rive === 'undefined') {
            console.warn("Rive library not available - using standard buttons");
            return;
        }
        initRiveAnimations();
    }, 100);
});

// First check if animation files exist
function checkAnimationFilesExist() {
    return fetch('/assets/animations/button.riv')
        .then(response => {
            if (!response.ok) {
                console.warn(`Animation file not found (${response.status}) - using standard buttons`);
                return false;
            }
            return true;
        })
        .catch(error => {
            console.warn("Failed to check animation file:", error);
            return false;
        });
}

// This function runs immediately to ensure buttons are visible
function makeButtonsVisible() {
    console.log("Making buttons visible as failsafe");
    
    // Style nav button
    const navButtonElement = document.querySelector('#nav-button-animation .get-started-btn');
    if (navButtonElement) {
        navButtonElement.style.display = 'inline-flex';
        navButtonElement.style.opacity = '1';
        navButtonElement.style.visibility = 'visible';
        navButtonElement.style.backgroundColor = '#6FF394';
        console.log("Nav button made visible");
    } else {
        console.warn("Nav button element not found");
    }
    
    // Style hero button
    const heroButtonElement = document.querySelector('#hero-button-animation .get-started-btn');
    if (heroButtonElement) {
        heroButtonElement.style.display = 'inline-flex';
        heroButtonElement.style.opacity = '1';
        heroButtonElement.style.visibility = 'visible';
        heroButtonElement.style.backgroundColor = '#6FF394';
        console.log("Hero button made visible");
    } else {
        console.warn("Hero button element not found");
    }
}

// Initialize both button animations if files exist
function initRiveAnimations() {
    console.log("Initializing Rive animations");
    
    checkAnimationFilesExist().then(filesExist => {
        if (!filesExist) {
            console.log("Animation files don't exist, using standard buttons");
            return;
        }
        
        // Only try to initialize animations if files exist
        try {
            initNavButtonAnimation();
            initHeroButtonAnimation();
        } catch (e) {
            console.error("Error initializing animations:", e);
        }
    });
}

/**
 * Initialize the nav button animation
 */
function initNavButtonAnimation() {
    console.log('Initializing nav button animation');
    
    try {
        const navCanvas = document.getElementById('nav-button-canvas');
        if (!navCanvas) {
            console.warn('Nav button canvas not found');
            return false;
        }
        
        const navBtn = document.querySelector('#nav-button-animation .get-started-btn');
        if (!navBtn) {
            console.warn('Nav button element not found');
            return false;
        }
        
        // Initialize Rive animation
        const navRive = new Rive({
            src: 'assets/animations/button.riv',
            canvas: navCanvas,
            autoplay: true,
            stateMachines: 'State Machine 1',
            onLoad: () => {
                console.log('Nav button animation loaded');
                
                // Add hover effect
                const navStateMachineInputs = navRive.stateMachineInputs('State Machine 1');
                if (navStateMachineInputs) {
                    const hoverInput = navStateMachineInputs.find(input => input.name === 'Hover');
                    if (hoverInput) {
                        navBtn.addEventListener('mouseenter', () => {
                            hoverInput.value = true;
                        });
                        
                        navBtn.addEventListener('mouseleave', () => {
                            hoverInput.value = false;
                        });
                    }
                }
            },
            onError: (err) => {
                console.error('Nav button animation error:', err);
                return false;
            }
        });
        
        return true;
    } catch (error) {
        console.error('Error in nav button animation:', error);
        return false;
    }
}

/**
 * Initialize the hero button animation
 */
function initHeroButtonAnimation() {
    console.log('Initializing hero button animation');
    
    try {
        const heroCanvas = document.getElementById('hero-button-canvas');
        if (!heroCanvas) {
            console.warn('Hero button canvas not found');
            return false;
        }
        
        const heroBtn = document.querySelector('#hero-button-animation .get-started-btn');
        if (!heroBtn) {
            console.warn('Hero button element not found');
            return false;
        }
        
        // Initialize Rive animation
        const heroRive = new Rive({
            src: 'assets/animations/button.riv',
            canvas: heroCanvas,
            autoplay: true,
            stateMachines: 'State Machine 1',
            onLoad: () => {
                console.log('Hero button animation loaded');
                
                // Add hover effect
                const heroStateMachineInputs = heroRive.stateMachineInputs('State Machine 1');
                if (heroStateMachineInputs) {
                    const hoverInput = heroStateMachineInputs.find(input => input.name === 'Hover');
                    if (hoverInput) {
                        heroBtn.addEventListener('mouseenter', () => {
                            hoverInput.value = true;
                        });
                        
                        heroBtn.addEventListener('mouseleave', () => {
                            hoverInput.value = false;
                        });
                    }
                }
            },
            onError: (err) => {
                console.error('Hero button animation error:', err);
                return false;
            },
            onLoadError: (err) => {
                console.error('Failed to load hero button animation:', err);
                // Make just this button visible as fallback
                const buttonElement = document.querySelector('#hero-button-animation .get-started-btn');
                if (buttonElement) {
                    buttonElement.style.display = 'inline-flex';
                    buttonElement.style.opacity = '1';
                    buttonElement.style.visibility = 'visible';
                }
            }
        });
        
        return true;
    } catch (error) {
        console.error('Failed to initialize hero button animation:', error);
        return false;
    }
} 