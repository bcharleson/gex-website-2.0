/**
 * Rive Animation Controller - FIXED VERSION
 * This file initializes and manages Rive animations throughout the site
 */

// Rive animations are initialized when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Always make buttons visible first, regardless of animation loading
    makeButtonsVisible();
    
    // Then try to initialize Rive animations as enhancement
    setTimeout(() => {
        // Only try to load animations if Rive is available
        if (typeof rive === 'undefined') {
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
                return false;
            }
            return true;
        })
        .catch(error => {
            return false;
        });
}

// This function runs immediately to ensure buttons are visible
function makeButtonsVisible() {
    // Style nav button
    const navButtonElement = document.querySelector('#nav-button-animation .get-started-btn');
    if (navButtonElement) {
        navButtonElement.style.display = 'inline-flex';
        navButtonElement.style.opacity = '1';
        navButtonElement.style.visibility = 'visible';
        navButtonElement.style.backgroundColor = '#6FF394';
    }
    
    // Style hero button
    const heroButtonElement = document.querySelector('#hero-button-animation .get-started-btn');
    if (heroButtonElement) {
        heroButtonElement.style.display = 'inline-flex';
        heroButtonElement.style.opacity = '1';
        heroButtonElement.style.visibility = 'visible';
        heroButtonElement.style.backgroundColor = '#6FF394';
    }
}

// Initialize both button animations if files exist
function initRiveAnimations() {
    checkAnimationFilesExist().then(filesExist => {
        if (!filesExist) {
            return;
        }
        
        // Only try to initialize animations if files exist
        try {
            initNavButtonAnimation();
            initHeroButtonAnimation();
        } catch (e) {
            // Silent fail, standard buttons are already visible as fallback
        }
    });
}

/**
 * Initialize the nav button animation
 */
function initNavButtonAnimation() {
    try {
        const navCanvas = document.getElementById('nav-button-canvas');
        if (!navCanvas) {
            return false;
        }
        
        const navBtn = document.querySelector('#nav-button-animation .get-started-btn');
        if (!navBtn) {
            return false;
        }
        
        // Initialize Rive animation
        const navRive = new Rive({
            src: 'assets/animations/button.riv',
            canvas: navCanvas,
            autoplay: true,
            stateMachines: 'State Machine 1',
            onLoad: () => {
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
                return false;
            }
        });
        
        return true;
    } catch (error) {
        return false;
    }
}

/**
 * Initialize the hero button animation
 */
function initHeroButtonAnimation() {
    try {
        const heroCanvas = document.getElementById('hero-button-canvas');
        if (!heroCanvas) {
            return false;
        }
        
        const heroBtn = document.querySelector('#hero-button-animation .get-started-btn');
        if (!heroBtn) {
            return false;
        }
        
        // Initialize Rive animation
        const heroRive = new Rive({
            src: 'assets/animations/button.riv',
            canvas: heroCanvas,
            autoplay: true,
            stateMachines: 'State Machine 1',
            onLoad: () => {
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
                return false;
            },
            onLoadError: (err) => {
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
        return false;
    }
} 