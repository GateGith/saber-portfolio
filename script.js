// ============================================================
// SABER PORTFOLIO — 9.8/10 STABLE
// ============================================================

console.log('🚀 Saber Portfolio — 9.8/10 Stable');

// ===== PRELOADER =====
window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(function() {
            preloader.classList.add('hide');
            // Start animations after preloader
            setTimeout(startAnimations, 300);
        }, 1000);
    } else {
        startAnimations();
    }
});

// ===== GSAP ANIMATIONS =====
function startAnimations() {
    // Check if GSAP is available
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not loaded — using fallback');
        fallbackAnimations();
        return;
    }

    try {
        // Register ScrollTrigger if available
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        // ---- Hero Animations ----
        var heroTl = gsap.timeline();
        heroTl
            .from('.hero .badge', {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power3.out'
            })
            .from('.hero h1 .line', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out'
            }, '-=0.4')
            .from('.hero .subtitle', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.4')
            .from('.hero .buttons', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.4');

        // ---- Stats Animation ----
        if (document.querySelector('.stats')) {
            gsap.from('.stat-item', {
                scrollTrigger: {
                    trigger: '.stats',
                    start: 'top 85%'
                },
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }

        // ---- Benefits Animation ----
        if (document.querySelector('#benefits')) {
            gsap.from('.benefit-card', {
                scrollTrigger: {
                    trigger: '#benefits',
                    start: 'top 85%'
                },
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: 'power3.out'
            });
        }

        // ---- Projects Animation ----
        if (document.querySelector('#work')) {
            gsap.from('.project-card', {
                scrollTrigger: {
                    trigger: '#work',
                    start: 'top 85%'
                },
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: 'power3.out'
            });
        }

        // ---- Why Choose Me Animation ----
        if (document.querySelector('#why-choose')) {
            gsap.from('.choose-item', {
                scrollTrigger: {
                    trigger: '#why-choose',
                    start: 'top 85%'
                },
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: 'power3.out'
            });
        }

        // ---- Services Animation ----
        if (document.querySelector('#services')) {
            gsap.from('.service-card', {
                scrollTrigger: {
                    trigger: '#services',
                    start: 'top 85%'
                },
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power3.out'
            });
        }

        // ---- Process Animation ----
        if (document.querySelector('#process')) {
            gsap.from('.process-step', {
                scrollTrigger: {
                    trigger: '#process',
                    start: 'top 85%'
                },
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power3.out'
            });
        }

        // ---- Promise Animation ----
        if (document.querySelector('#promise')) {
            gsap.from('.promise-item', {
                scrollTrigger: {
                    trigger: '#promise',
                    start: 'top 85%'
                },
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: 'power3.out'
            });
        }

        // ---- About Animation ----
        if (document.querySelector('#about')) {
            gsap.from('.about-text', {
                scrollTrigger: {
                    trigger: '#about',
                    start: 'top 85%'
                },
                x: -40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });

            gsap.from('.about-image', {
                scrollTrigger: {
                    trigger: '#about',
                    start: 'top 85%'
                },
                x: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });
        }

        // ---- Offer Box Animation ----
        if (document.querySelector('.offer-box')) {
            gsap.from('.offer-box', {
                scrollTrigger: {
                    trigger: '.offer-box',
                    start: 'top 88%'
                },
                y: 40,
                opacity: 0,
                duration: 0.7,
                ease: 'power3.out'
            });
        }

        // ---- Contact Animation ----
        if (document.querySelector('#contact')) {
            gsap.from('.contact-section', {
                scrollTrigger: {
                    trigger: '#contact',
                    start: 'top 85%'
                },
                y: 40,
                opacity: 0,
                duration: 0.7,
                ease: 'power3.out'
            });
        }

        // Refresh ScrollTrigger if available
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }

    } catch (e) {
        console.warn('GSAP animation error:', e);
        fallbackAnimations();
    }
}

// ===== FALLBACK ANIMATIONS =====
function fallbackAnimations() {
    var elements = document.querySelectorAll(
        '.stat-item, .benefit-card, .project-card, .choose-item, .service-card, .process-step, .promise-item'
    );

    elements.forEach(function(el, i) {
        setTimeout(function() {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, i * 100);
    });

    // Hero
    var heroElements = document.querySelectorAll('.hero .badge, .hero h1 .line, .hero .subtitle, .hero .buttons');
    heroElements.forEach(function(el, i) {
        setTimeout(function() {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, i * 200);
    });
}

// ===== SET INITIAL STATE =====
document.addEventListener('DOMContentLoaded', function() {
    // Set initial opacity for animated elements
    var animatedElements = document.querySelectorAll(
        '.stat-item, .benefit-card, .project-card, .choose-item, .service-card, .process-step, .promise-item'
    );
    animatedElements.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Hero elements
    var heroElements = document.querySelectorAll('.hero .badge, .hero h1 .line, .hero .subtitle, .hero .buttons');
    heroElements.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});

// ===== SCROLL PROGRESS =====
window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = (scrollTop / docHeight) * 100;
    var bar = document.getElementById('scroll-progress');
    if (bar) {
        bar.style.width = progress + '%';
    }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== LAZY LOADING =====
var lazyImages = document.querySelectorAll('img[loading="lazy"]');
if ('IntersectionObserver' in window) {
    var imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var img = entry.target;
                img.src = img.src;
                imageObserver.unobserve(img);
            }
        });
    });
    lazyImages.forEach(function(img) {
        imageObserver.observe(img);
    });
}

console.log('✅ Saber Portfolio — 9.8/10 Stable');
/* ============================================================
   OFFER BOX — BUTTONS WITH FEEDBACK
   ============================================================ */

.offer-box {
    max-width: 700px;
    margin: 2rem auto 3rem;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(180, 140, 255, 0.06), rgba(255, 107, 157, 0.03));
    border: 1px solid rgba(180, 140, 255, 0.12);
    border-radius: 1.2rem;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.offer-box:hover {
    border-color: rgba(180, 140, 255, 0.25);
}

.offer-box h3 {
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
}

.offer-box p {
    color: #8a8a9a;
    font-size: 0.9rem;
    max-width: 500px;
    margin: 0 auto 1.2rem;
    line-height: 1.7;
}

.offer-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

/* ----- RIPPLE EFFECT ON BUTTONS ----- */
.offer-buttons .btn {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.offer-buttons .btn .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: rippleAnim 0.6s ease-out forwards;
    pointer-events: none;
}

@keyframes rippleAnim {
    0% {
        transform: scale(0);
        opacity: 0.8;
    }
    100% {
        transform: scale(4);
        opacity: 0;
    }
}

/* ----- BUTTON PRESS FEEDBACK ----- */
.offer-buttons .btn:active {
    transform: scale(0.92);
}

/* ----- FEEDBACK MESSAGE ----- */
.offer-feedback {
    margin-top: 0.8rem;
    font-size: 0.8rem;
    font-weight: 500;
    min-height: 1.5rem;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.4s ease;
}

.offer-feedback.show {
    opacity: 1;
    transform: translateY(0);
}

.offer-feedback.success {
    color: #4ade80;
}

.offer-feedback.info {
    color: #b48cff;
}

/* ============================================================
   RESPONSIVE
   ============================================================ */

@media (max-width: 768px) {
    .offer-box {
        padding: 1.5rem;
        margin: 1.5rem auto;
    }
    .offer-box h3 {
        font-size: 1.2rem;
    }
    .offer-box p {
        font-size: 0.8rem;
    }
    .offer-buttons {
        flex-direction: column;
        align-items: center;
    }
    .offer-buttons .btn {
        width: 100%;
        max-width: 280px;
        justify-content: center;
    }
}
