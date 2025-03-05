// Simple number counter
function countUp(element, target, duration) {
    const start = 0;
    const increment = target / (duration / 16); // 16ms is roughly one frame
    let current = start;
    const format = new Intl.NumberFormat('en-US').format;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = format(target);
            clearInterval(timer);
        } else {
            element.textContent = format(Math.floor(current));
        }
    }, 16);
}

// Stats Animation
document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    function animateNumber(element, target) {
        let current = 0;
        const duration = 1500; // 1.5 seconds
        const framesPerSecond = 60;
        const totalFrames = duration * framesPerSecond / 1000;
        const increment = target / totalFrames;
        const formatter = new Intl.NumberFormat('en-US');

        function update() {
            current += increment;
            if (current >= target) {
                element.textContent = formatter.format(Math.round(target));
                return;
            }
            element.textContent = formatter.format(Math.round(current));
            requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
    }

    function startAnimation() {
        if (hasAnimated) return;
        
        const statsSection = document.querySelector('.stats-section');
        if (!statsSection) return;

        const rect = statsSection.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;

        if (isVisible) {
            hasAnimated = true;
            stats.forEach(stat => {
                const target = parseInt(stat.dataset.target);
                if (!isNaN(target)) {
                    animateNumber(stat, target);
                }
            });
            window.removeEventListener('scroll', startAnimation);
            console.log('Animation started');
        }
    }

    // Check on scroll and initial load
    window.addEventListener('scroll', startAnimation);
    // Check immediately in case stats are already visible
    startAnimation();
});

// Initialize immediately and on DOM content loaded to ensure it works
statsAnimation.init();
document.addEventListener('DOMContentLoaded', () => statsAnimation.init());

console.log('%cGrowth Engine X: Interactive effects initialized', 'color: #6FF394; font-size: 14px; font-weight: bold;');

document.addEventListener('DOMContentLoaded', function() {
    console.log('%c Growth Engine X: Interactive effects initialized', 'background: #6FF394; color: black; padding: 4px; border-radius: 4px;');
    
    // Initialize DOM elements
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    const terminalCards = document.querySelectorAll('.terminal-card');
    
    console.log('Found elements:', {
        header: !!header,
        heroSection: !!heroSection,
        terminalCards: terminalCards.length
    });
    
    // Sticky header functionality
    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', updateHeader);
    updateHeader();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Terminal card animation
    const floatingCards = document.querySelectorAll('.terminal-card');
    
    // Initial animation is handled by CSS
    // Setup floating animation
    floatingCards.forEach((card, index) => {
        const delay = index * 0.5;
        const direction = index % 2 === 0 ? 1 : -1;
        
        card.style.animationDelay = `${delay}s`;
        
        // Add floating animation after initial entrance
        setTimeout(() => {
            card.style.transition = 'transform 3s ease-in-out';
            
            // Setup floating animation
            setInterval(() => {
                card.style.transform = `perspective(800px) rotateY(${-10 + direction * 2}deg) translateY(${-5 * direction}px)`;
                
                setTimeout(() => {
                    card.style.transform = `perspective(800px) rotateY(-10deg) translateY(0)`;
                }, 1500);
            }, 3000);
        }, (delay + 1) * 1000);
    });

    // 3D Track effect enhancement
    const trackGlows = document.querySelectorAll('.track-glow');
    
    function updateTrackGlows() {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const scrollProgress = Math.min(scrollY / (viewportHeight * 0.7), 1);
        
        trackGlows.forEach((glow, index) => {
            const opacity = Math.max(0.7 - (index * 0.2) - (scrollProgress * 0.5), 0);
            glow.style.opacity = opacity;
        });
    }
    
    window.addEventListener('scroll', updateTrackGlows);
    updateTrackGlows();

    // Add glow effects to elements on scroll
    const glowElements = document.querySelectorAll('.service-card, .step, .case-study-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('glow-effect');
                if (entry.target.classList.contains('case-study-card')) {
                    entry.target.classList.add('glow-accent');
                }
            }
        });
    }, {
        threshold: 0.2
    });
    
    glowElements.forEach(element => {
        observer.observe(element);
    });

    // Rich hover effects for buttons
    const buttons = document.querySelectorAll('.get-started-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
            button.style.boxShadow = '0 5px 15px rgba(111, 243, 148, 0.4)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = '';
        });
    });

    // Simple hover effects for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 25px rgba(111, 243, 148, 0.2)';
            card.style.borderColor = 'var(--color-primary)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '';
            card.style.borderColor = 'var(--color-border)';
        });
    });

    // Hover effects for methodology steps
    const steps = document.querySelectorAll('.step');
    
    steps.forEach(step => {
        step.addEventListener('mouseenter', () => {
            step.style.transform = 'translateY(-5px)';
            step.style.boxShadow = '0 10px 25px rgba(111, 243, 148, 0.2)';
            step.style.borderColor = 'var(--color-primary)';
        });
        
        step.addEventListener('mouseleave', () => {
            step.style.transform = 'translateY(0)';
            step.style.boxShadow = '';
            step.style.borderColor = 'var(--color-border)';
        });
    });

    // Hover effects for case study cards
    const caseStudyCards = document.querySelectorAll('.case-study-card');
    
    caseStudyCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 25px rgba(111, 243, 148, 0.2)';
            card.style.borderColor = 'var(--color-primary)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '';
            card.style.borderColor = 'var(--color-border)';
        });
    });

    // Step 3 Methodology visibility and animations
    const step3Section = document.querySelector('.methodology.step-3');
    const step3Columns = document.querySelectorAll('.methodology.step-3 .comparison-column');
    
    if (step3Section) {
        const handleStep3Visibility = () => {
            const sectionTop = step3Section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                step3Section.classList.add('visible');
            }
        };
        
        // Run once on page load
        handleStep3Visibility();
        
        // Run on scroll
        window.addEventListener('scroll', handleStep3Visibility);
        
        // Add hover effects for comparison columns in Step 3
        step3Columns.forEach(column => {
            column.addEventListener('mouseenter', () => {
                column.style.transform = 'translateY(-5px)';
                column.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
                column.style.borderColor = column.classList.contains('past') ? 
                    'rgba(255, 100, 100, 0.7)' : 'rgba(111, 243, 148, 0.7)';
            });
            
            column.addEventListener('mouseleave', () => {
                column.style.transform = 'translateY(0)';
                column.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                column.style.borderColor = column.classList.contains('past') ? 
                    'rgba(255, 100, 100, 0.5)' : 'rgba(111, 243, 148, 0.5)';
            });
        });
        
        // Add video placeholder interactivity
        const videoPlaceholder = document.querySelector('.video-placeholder');
        const playButton = document.querySelector('.play-button');
        
        if (videoPlaceholder && playButton) {
            videoPlaceholder.addEventListener('mouseenter', () => {
                playButton.style.transform = 'scale(1.1)';
                videoPlaceholder.style.borderColor = 'rgba(111, 243, 148, 0.5)';
                videoPlaceholder.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.7)';
            });
            
            videoPlaceholder.addEventListener('mouseleave', () => {
                playButton.style.transform = 'scale(1)';
                videoPlaceholder.style.borderColor = 'rgba(111, 243, 148, 0.2)';
                videoPlaceholder.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
            });
            
            // Optional: Add click functionality to create a "video would play here" message
            videoPlaceholder.addEventListener('click', () => {
                alert('Video would play here in a production environment.');
            });
        }
    }

    // Form validation (if applicable)
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        const nameInput = contactForm.querySelector('input[name="name"]');
        const emailInput = contactForm.querySelector('input[name="email"]');
        const messageInput = contactForm.querySelector('textarea[name="message"]');
        const submitButton = contactForm.querySelector('.submit-btn');
        
        function markInvalid(input, message) {
            input.classList.add('invalid');
            const errorElement = input.parentElement.querySelector('.error-message');
            if (errorElement) {
                errorElement.textContent = message;
                errorElement.style.display = 'block';
            }
        }
        
        function markValid(input) {
            input.classList.remove('invalid');
            const errorElement = input.parentElement.querySelector('.error-message');
            if (errorElement) {
                errorElement.style.display = 'none';
            }
        }
        
        function isValidEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }
        
        function validateInput(input) {
            if (input.name === 'name' && input.value.trim() === '') {
                markInvalid(input, 'Please enter your name');
                return false;
            } else if (input.name === 'email') {
                if (input.value.trim() === '') {
                    markInvalid(input, 'Please enter your email');
                    return false;
                } else if (!isValidEmail(input.value.trim())) {
                    markInvalid(input, 'Please enter a valid email');
                    return false;
                }
            } else if (input.name === 'message' && input.value.trim() === '') {
                markInvalid(input, 'Please enter your message');
                return false;
            }
            
            markValid(input);
            return true;
        }
        
        [nameInput, emailInput, messageInput].forEach(input => {
            input.addEventListener('blur', () => validateInput(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('invalid')) {
                    validateInput(input);
                }
            });
        });
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            [nameInput, emailInput, messageInput].forEach(input => {
                if (!validateInput(input)) {
                    isValid = false;
                }
            });
            
            if (isValid) {
                // Simulate form submission
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
                
                setTimeout(() => {
                    const formContent = contactForm.querySelector('.form-content');
                    formContent.innerHTML = `
                        <div class="success-message">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="#6FF394" stroke-width="2"/>
                                <path d="M8 12L11 15L16 9" stroke="#6FF394" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h3>Message Sent!</h3>
                            <p>Thank you for reaching out. We'll get back to you shortly.</p>
                        </div>
                    `;
                }, 1500);
            }
        });
    }
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('open');
            this.classList.toggle('active');
        });
    }

    // Simple parallax effect for hero background
    const heroBackground = document.querySelector('.hero-background img');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (heroBackground && heroSection) {
            const sectionHeight = heroSection.offsetHeight;
            const scrollPercentage = Math.min(scrollPosition / sectionHeight, 1);
            heroBackground.style.transform = `translateY(${scrollPercentage * 100 * 0.1}px)`;
        }
    });

    // HDR glow effect on scroll
    glowElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const viewHeight = window.innerHeight;
        
        // If element is in viewport
        if (rect.top < viewHeight && rect.bottom > 0) {
            const scrollPercentage = 1 - ((rect.top + rect.height / 2) / viewHeight);
            const opacity = Math.min(0.6, Math.max(0.2, scrollPercentage * 0.7));
            
            if (element.querySelector('::before')) {
                element.querySelector('::before').style.opacity = opacity;
            }
        }
    });

    // Terminal notification animations
    function animateTerminalCards() {
        floatingCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
    
    // Animate terminal cards on page load
    animateTerminalCards();

    // Add HDR glow to highlighted elements
    const addHdrGlow = () => {
        const elements = document.querySelectorAll('h1, .hero-tagline, .get-started-btn');
        
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            
            const glowElement = document.createElement('div');
            glowElement.classList.add('hdr-glow');
            glowElement.style.position = 'absolute';
            glowElement.style.left = `${x}px`;
            glowElement.style.top = `${y}px`;
            glowElement.style.width = '300px';
            glowElement.style.height = '300px';
            glowElement.style.background = 'radial-gradient(circle, rgba(111, 243, 148, 0.3) 0%, transparent 70%)';
            glowElement.style.borderRadius = '50%';
            glowElement.style.transform = 'translate(-50%, -50%)';
            glowElement.style.pointerEvents = 'none';
            glowElement.style.zIndex = '-1';
            glowElement.style.filter = 'blur(30px)';
            
            document.body.appendChild(glowElement);
        });
    };
    
    // Call once after page load
    setTimeout(addHdrGlow, 500);

    // Partner banner functionality
    const scrollingContent = document.querySelector('.scrolling-content');
    if (scrollingContent) {
        // Adjust animation timing based on the number of partners if needed
        const partnerItems = scrollingContent.querySelectorAll('.partner-item');
        if (partnerItems.length > 8) { // If we have more than our duplicated set
            // Adjust the animation duration for smoother scrolling with more items
            scrollingContent.style.animationDuration = (partnerItems.length * 4) + 's'; // Increased from 3 to 4 for smoother scrolling
        } else {
            // Ensure the default animation duration matches our CSS
            scrollingContent.style.animationDuration = '30s';
        }
    }

    // Premium Interactive Effects
    document.addEventListener('DOMContentLoaded', () => {
        // Parallax effect for hero section
        const hero = document.querySelector('.hero');
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            const moveX = (mouseX - 0.5) * 20;
            const moveY = (mouseY - 0.5) * 20;
            
            hero.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
        });

        // Magnetic effect for terminal cards
        const cards = document.querySelectorAll('.terminal-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const deltaX = (x - centerX) / centerX;
                const deltaY = (y - centerY) / centerY;
                
                card.style.transform = `translate(${deltaX * 5}px, ${deltaY * 5}px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translate(0, 0)';
            });
        });

        // Cursor glow effect
        const cursorGlow = document.createElement('div');
        cursorGlow.classList.add('cursor-glow');
        document.body.appendChild(cursorGlow);

        let cursorTimeout;
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
            cursorGlow.style.opacity = '1';
            
            clearTimeout(cursorTimeout);
            cursorTimeout = setTimeout(() => {
                cursorGlow.style.opacity = '0';
            }, 1000);
        });
    });

    // Mouse hover effect for hero background
    if (heroSection) {
        // Create and append interactive background layers
        const interactiveBg = document.createElement('div');
        interactiveBg.className = 'interactive-bg';
        
        const layer1 = document.createElement('div');
        layer1.className = 'bg-layer-1';
        
        const layer2 = document.createElement('div');
        layer2.className = 'bg-layer-2';
        
        const layer3 = document.createElement('div');
        layer3.className = 'bg-layer-3';
        
        const cursorGlow = document.createElement('div');
        cursorGlow.className = 'cursor-glow';
        
        interactiveBg.appendChild(layer1);
        interactiveBg.appendChild(layer2);
        interactiveBg.appendChild(layer3);
        interactiveBg.appendChild(cursorGlow);
        
        heroSection.appendChild(interactiveBg);
        
        // Get the hero background image
        const heroBackgroundImg = heroSection.querySelector('.hero-background img');
        
        // Set CSS variables for mouse position
        heroSection.addEventListener('mousemove', function(e) {
            const rect = heroSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Convert to percentages
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;
            
            // Update CSS variables
            heroSection.style.setProperty('--mouse-x', xPercent);
            heroSection.style.setProperty('--mouse-y', yPercent);
            
            // Subtle parallax movement for each layer
            layer1.style.transform = `translate(${(xPercent - 50) * 0.02}px, ${(yPercent - 50) * 0.02}px)`;
            layer2.style.transform = `translate(${(xPercent - 50) * -0.01}px, ${(yPercent - 50) * -0.01}px)`;
            layer3.style.transform = `translate(${(xPercent - 50) * 0.03}px, ${(yPercent - 50) * 0.03}px)`;
            
            // Position the cursor glow
            cursorGlow.style.left = `${x}px`;
            cursorGlow.style.top = `${y}px`;
            cursorGlow.style.opacity = '1';
            
            // Apply subtle movement to background image if it exists
            if (heroBackgroundImg) {
                const moveX = ((xPercent - 50) * 0.05);
                const moveY = ((yPercent - 50) * 0.05);
                heroBackgroundImg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
            }
        });
        
        // Reset when mouse leaves
        heroSection.addEventListener('mouseleave', function() {
            layer1.style.transform = 'translate(0, 0)';
            layer2.style.transform = 'translate(0, 0)';
            layer3.style.transform = 'translate(0, 0)';
            cursorGlow.style.opacity = '0';
            
            // Reset background image position
            if (heroBackgroundImg) {
                heroBackgroundImg.style.transform = 'translate(0, 0) scale(1)';
            }
        });
    }

    // Methodology Card Animations
    const methodologyCards = document.querySelectorAll('.methodology-card');
    const typingTexts = document.querySelectorAll('.typing-text');
    
    // Reset all typing texts initially
    typingTexts.forEach(text => {
        text.style.width = '0';
    });
    
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle the card animations when they come into view
    function handleCardAnimations() {
        methodologyCards.forEach((card, index) => {
            if (isInViewport(card)) {
                // Add glow effect to card
                setTimeout(() => {
                    const typingText = card.querySelector('.typing-text');
                    if (typingText) {
                        typingText.classList.add('animate');
                    }
                }, index * 300); // Stagger the animations
                
                card.classList.add('in-view');
            }
        });
    }
    
    // Add animated border to cards
    methodologyCards.forEach(card => {
        // We can't directly manipulate pseudo-elements with querySelector
        // So we'll use classes to manage the glow effect
        card.addEventListener('mouseenter', function() {
            this.classList.add('card-glow-active');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('card-glow-active');
        });
    });
    
    // Check for elements in viewport on scroll and on load
    window.addEventListener('scroll', handleCardAnimations);
    window.addEventListener('resize', handleCardAnimations);
    
    // Initial check
    setTimeout(handleCardAnimations, 500);

    // Enhanced ICP Diagram interactions
    function initICPDiagram() {
        const icpVisualization = document.querySelector('.icp-visualization');
        const icpDiagram = document.querySelector('.icp-diagram');
        
        if (!icpVisualization || !icpDiagram) return;
        
        // Add interactive elements for the bullseye effect
        const circles = icpDiagram.querySelectorAll('circle');
        const outerCircle = icpDiagram.querySelector('circle[cx="200"][cy="200"]');
        const middleCircle = icpDiagram.querySelector('circle[cx="215"][cy="220"]');
        const innerCircle = icpDiagram.querySelector('circle[cx="225"][cy="235"]');
        
        // Interactive hover effects for circles
        [outerCircle, middleCircle, innerCircle].forEach(circle => {
            if (!circle) return;
            
            circle.addEventListener('mouseover', () => {
                circle.setAttribute('stroke-width', circle.getAttribute('stroke') === '#5CC7C0' ? '2.5' : '2');
                circle.setAttribute('stroke-opacity', '1');
            });
            
            circle.addEventListener('mouseout', () => {
                circle.setAttribute('stroke-width', circle.getAttribute('stroke') === '#5CC7C0' ? '2' : '1.5');
                circle.setAttribute('stroke-opacity', '0.8');
            });
        });
        
        // Mouse follow effect with 3D perspective
        let bounds;
        
        function rotateToMouse(e) {
            if (!bounds) bounds = icpVisualization.getBoundingClientRect();
            
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            const centerX = bounds.left + bounds.width / 2;
            const centerY = bounds.top + bounds.height / 2;
            
            // Calculate distance from center as percentage of element dimensions
            const percentX = (mouseX - centerX) / (bounds.width / 2);
            const percentY = (mouseY - centerY) / (bounds.height / 2);
            
            // Limit rotation angle
            const maxRotation = 8;
            const rotateY = maxRotation * percentX * -1; // Invert X for natural feel
            const rotateX = maxRotation * percentY;
            
            // Apply rotation transform with dampening for smoother effect
            icpVisualization.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        }
        
        function resetRotation() {
            icpVisualization.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            bounds = null; // Reset bounds to recalculate on next hover
        }
        
        icpVisualization.addEventListener('mousemove', rotateToMouse);
        icpVisualization.addEventListener('mouseleave', resetRotation);
        icpVisualization.addEventListener('mouseenter', e => {
            bounds = icpVisualization.getBoundingClientRect();
            rotateToMouse(e);
        });
    }

    // Enhance visibility of Step 2 section with Intersection Observer
    function initIntersectionObserver() {
        const step2Section = document.querySelector('.methodology.step-2');
        if (!step2Section) return;
        
        const comparisonColumns = step2Section.querySelectorAll('.comparison-column');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add visible class to trigger animations
                    step2Section.classList.add('visible');
                    
                    // Add staggered animation to columns
                    comparisonColumns.forEach((column, index) => {
                        setTimeout(() => {
                            column.style.opacity = '1';
                            column.style.transform = 'translateY(0)';
                        }, 200 * index);
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2 // Trigger when 20% of the section is visible
        });
        
        observer.observe(step2Section);
    }

    // Initialize all Step 2 section interactions
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize Step 2 ICP diagram interactivity
        initICPDiagram();
        
        // Initialize Intersection Observer
        initIntersectionObserver();
    });
}); 