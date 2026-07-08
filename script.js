// ============================================================
// SABER PORTFOLIO — STABLE & RELIABLE
// ============================================================

console.log('🚀 Saber Portfolio — Stable');

// ===== PRELOADER =====
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(function() {
        preloader.classList.add('hide');
        // Start GSAP animations after preloader hides
        startAnimations();
    }, 1000);
});

// ===== GSAP ANIMATIONS =====
function startAnimations() {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not loaded. Using fallback animations.');
        fallbackAnimations();
        return;
    }

    // Register ScrollTrigger if available
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // ---- Hero Animations ----
    try {
        gsap.from('.hero .badge', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.2
        });
        
        gsap.from('.hero h1 .line', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            delay: 0.2
        });
        
        gsap.from('.hero .subtitle', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.4
        });
        
        gsap.from('.hero .buttons', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.5
        });
    } catch (e) {
        console.warn('Hero animation error:', e);
        fallbackAnimations();
    }

    // ---- Scroll Animations ----
    const elements = [
        { selector: '.stat-item', trigger: '.stats', stagger: 0.15 },
        { selector: '.benefit-card', trigger: '#benefits', stagger: 0.12 },
        { selector: '.project-card', trigger: '#work', stagger: 0.12 },
        { selector: '.choose-item', trigger: '#why-choose', stagger: 0.12 },
        { selector: '.service-card', trigger: '#services', stagger: 0.08 },
        { selector: '.process-step', trigger: '#process', stagger: 0.1 },
        { selector: '.promise-item', trigger: '#promise', stagger: 0.12 },
    ];

    elements.forEach(function(item) {
        try {
            const target = document.querySelector(item.trigger);
            if (!target) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item.trigger,
                    start: 'top 85%',
                }
            });

            tl.from(item.selector, {
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: item.stagger,
                ease: 'power3.out',
            });
        } catch (e) {
            console.warn('Animation error for', item.trigger, e);
        }
    });

    // ---- About Animation ----
    try {
        gsap.from('.about-text', {
            scrollTrigger: { trigger: '#about', start: 'top 85%' },
            x: -40,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
        });
        
        gsap.from('.about-image', {
            scrollTrigger: { trigger: '#about', start: 'top 85%' },
            x: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
        });
    } catch (e) {
        console.warn('About animation error:', e);
    }

    // ---- Offer Box & Contact ----
    try {
        gsap.from('.offer-box', {
            scrollTrigger: { trigger: '.offer-box', start: 'top 88%' },
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
        });
        
        gsap.from('.contact-section', {
            scrollTrigger: { trigger: '#contact', start: 'top 85%' },
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
        });
    } catch (e) {
        console.warn('Contact animation error:', e);
    }

    // Refresh ScrollTrigger if available
    if (typeof ScrollTrigger !== 'undefined') {
        try {
            ScrollTrigger.refresh();
        } catch (e) {
            console.warn('ScrollTrigger refresh error:', e);
        }
    }
}

// ===== FALLBACK ANIMATIONS (if GSAP fails) =====
function fallbackAnimations() {
    const elements = document.querySelectorAll(
        '.stat-item, .benefit-card, .project-card, .choose-item, .service-card, .process-step, .promise-item'
    );
    
    elements.forEach(function(el, i) {
        setTimeout(function() {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, i * 100);
    });

    // Hero elements
    document.querySelectorAll('.hero .badge, .hero h1 .line, .hero .subtitle, .hero .buttons').forEach(function(el, i) {
        setTimeout(function() {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, i * 200);
    });
}

// ===== SCROLL PROGRESS =====
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    const bar = document.getElementById('scroll-progress');
    if (bar) {
        bar.style.width = progress + '%';
    }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== LAZY LOADING =====
const lazyImages = document.querySelectorAll('img[loading="lazy"]');
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src;
                imageObserver.unobserve(img);
            }
        });
    });
    lazyImages.forEach(function(img) {
        imageObserver.observe(img);
    });
}

// ===== SET INITIAL OPACITY (prevent flash) =====
document.addEventListener('DOMContentLoaded', function() {
    // Set initial opacity for animated elements
    const animatedElements = document.querySelectorAll(
        '.stat-item, .benefit-card, .project-card, .choose-item, .service-card, .process-step, .promise-item'
    );
    animatedElements.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Hero elements start hidden
    document.querySelectorAll('.hero .badge, .hero h1 .line, .hero .subtitle, .hero .buttons').forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});

console.log('✅ Saber Portfolio — Stable & Ready');
