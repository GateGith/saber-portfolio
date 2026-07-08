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
            setTimeout(startAnimations, 300);
        }, 1000);
    } else {
        startAnimations();
    }
});

// ===== GSAP ANIMATIONS =====
function startAnimations() {
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not loaded — using fallback');
        fallbackAnimations();
        return;
    }

    try {
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        // Hero
        var heroTl = gsap.timeline();
        heroTl
            .from('.hero .badge', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' })
            .from('.hero h1 .line', { y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, '-=0.4')
            .from('.hero .subtitle', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
            .from('.hero .buttons', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4');

        // Stats
        if (document.querySelector('.stats')) {
            gsap.from('.stat-item', {
                scrollTrigger: { trigger: '.stats', start: 'top 85%' },
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }

        // Benefits
        if (document.querySelector('#benefits')) {
            gsap.from('.benefit-card', {
                scrollTrigger: { trigger: '#benefits', start: 'top 85%' },
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: 'power3.out'
            });
        }

        // Projects
        if (document.querySelector('#work')) {
            gsap.from('.project-card', {
                scrollTrigger: { trigger: '#work', start: 'top 85%' },
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: 'power3.out'
            });
        }

        // Why Choose Me
        if (document.querySelector('#why-choose')) {
            gsap.from('.choose-item', {
                scrollTrigger: { trigger: '#why-choose', start: 'top 85%' },
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: 'power3.out'
            });
        }

        // Services
        if (document.querySelector('#services')) {
            gsap.from('.service-card', {
                scrollTrigger: { trigger: '#services', start: 'top 85%' },
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power3.out'
            });
        }

        // Process
        if (document.querySelector('#process')) {
            gsap.from('.process-step', {
                scrollTrigger: { trigger: '#process', start: 'top 85%' },
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power3.out'
            });
        }

        // Promise
        if (document.querySelector('#promise')) {
            gsap.from('.promise-item', {
                scrollTrigger: { trigger: '#promise', start: 'top 85%' },
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: 'power3.out'
            });
        }

        // About
        if (document.querySelector('#about')) {
            gsap.from('.about-text', {
                scrollTrigger: { trigger: '#about', start: 'top 85%' },
                x: -40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });
            gsap.from('.about-image', {
                scrollTrigger: { trigger: '#about', start: 'top 85%' },
                x: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });
        }

        // Offer Box
        if (document.querySelector('.offer-box')) {
            gsap.from('.offer-box', {
                scrollTrigger: { trigger: '.offer-box', start: 'top 88%' },
                y: 40,
                opacity: 0,
                duration: 0.7,
                ease: 'power3.out'
            });
        }

        // Contact
        if (document.querySelector('#contact')) {
            gsap.from('.contact-section', {
                scrollTrigger: { trigger: '#contact', start: 'top 85%' },
                y: 40,
                opacity: 0,
                duration: 0.7,
                ease: 'power3.out'
            });
        }

        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
    } catch (e) {
        console.warn('GSAP error:', e);
        fallbackAnimations();
    }
}

// ===== FALLBACK =====
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
    var heroEls = document.querySelectorAll('.hero .badge, .hero h1 .line, .hero .subtitle, .hero .buttons');
    heroEls.forEach(function(el, i) {
        setTimeout(function() {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, i * 200);
    });
}

// ===== SET INITIAL STATE =====
document.addEventListener('DOMContentLoaded', function() {
    var animatedEls = document.querySelectorAll(
        '.stat-item, .benefit-card, .project-card, .choose-item, .service-card, .process-step, .promise-item'
    );
    animatedEls.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    var heroEls = document.querySelectorAll('.hero .badge, .hero h1 .line, .hero .subtitle, .hero .buttons');
    heroEls.forEach(function(el) {
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

// ============================================================
// OFFER BUTTONS — FEEDBACK + RIPPLE
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    var cta1 = document.getElementById('cta1');
    var cta2 = document.getElementById('cta2');
    var feedback = document.getElementById('feedback');

    var messages = {
        talk: [
            "📞 Booking a call... redirecting you now.",
            "⏳ One moment, taking you to the contact section.",
            "✨ Ready to talk? You're almost there!",
            "📬 Opening contact form in 3... 2... 1..."
        ],
        preview: [
            "👀 Preparing your preview... almost there!",
            "🖌️ You're about to see how your site could look.",
            "🚀 Let's see what we can build together!",
            "📱 Scroll down to book your free consultation."
        ]
    };

    function getRandomMessage(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function createRipple(e, button) {
        var rect = button.getBoundingClientRect();
        var ripple = document.createElement('span');
        ripple.className = 'ripple';
        var size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        button.appendChild(ripple);
        setTimeout(function() { ripple.remove(); }, 600);
    }

    function showFeedback(message, type) {
        feedback.textContent = message;
        feedback.className = 'feedback show ' + type;
        clearTimeout(feedback._timeout);
        feedback._timeout = setTimeout(function() {
            feedback.className = 'feedback';
        }, 4000);
    }

    if (cta1) {
        cta1.addEventListener('click', function(e) {
            createRipple(e, this);
            showFeedback(getRandomMessage(messages.talk), 'info');
            var originalText = this.textContent;
            this.textContent = '↻ Redirecting...';
            this.style.opacity = '0.7';
            setTimeout(function() {
                cta1.textContent = originalText;
                cta1.style.opacity = '1';
            }, 2000);
        });
    }

    if (cta2) {
        cta2.addEventListener('click', function(e) {
            createRipple(e, this);
            showFeedback(getRandomMessage(messages.preview), 'info');
            var originalText = this.textContent;
            this.textContent = '↻ Preparing preview...';
            this.style.opacity = '0.7';
            setTimeout(function() {
                cta2.textContent = originalText;
                cta2.style.opacity = '1';
            }, 2000);
        });
    }
});

console.log('✅ Saber Portfolio — Fully Loaded');
