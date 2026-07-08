// ============================================================
// SABER PORTFOLIO — GSAP + ADVANCED ANIMATIONS
// ============================================================

console.log('🚀 Saber Portfolio — Advanced Edition');

// ===== PRELOADER =====
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hide');
        // Start animations after preloader
        initAnimations();
    }, 1200);
});

// ===== GSAP + SCROLLTRIGGER =====
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // ---- Hero Animations ----
    const heroTl = gsap.timeline();

    heroTl
        .from('.hero .badge', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
        })
        .from('.hero h1 .line', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
        }, '-=0.4')
        .from('.hero .subtitle', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
        }, '-=0.4')
        .from('.hero .buttons', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
        }, '-=0.4');

    // ---- Stats Animation ----
    gsap.from('.stat-item', {
        scrollTrigger: {
            trigger: '.stats',
            start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
    });

    // ---- Benefits Animation ----
    gsap.from('.benefit-card', {
        scrollTrigger: {
            trigger: '#benefits',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
    });

    // ---- Projects Animation ----
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '#work',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
    });

    // ---- Why Choose Me Animation ----
    gsap.from('.choose-item', {
        scrollTrigger: {
            trigger: '#why-choose',
            start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
    });

    // ---- Services Animation ----
    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '#services',
            start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // ---- Process Animation ----
    gsap.from('.process-step', {
        scrollTrigger: {
            trigger: '#process',
            start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
    });

    // ---- Promise Animation ----
    gsap.from('.promise-item', {
        scrollTrigger: {
            trigger: '#promise',
            start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
    });

    // ---- About Animation ----
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
    });

    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
        },
        x: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
    });

    // ---- Offer Box Animation ----
    gsap.from('.offer-box', {
        scrollTrigger: {
            trigger: '.offer-box',
            start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
    });

    // ---- Contact Animation ----
    gsap.from('.contact-section', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
    });

    // ---- Footer Animation ----
    gsap.from('.footer', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
    });

    // ---- Refresh ScrollTrigger ----
    ScrollTrigger.refresh();
}

// ===== SCROLL PROGRESS =====
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    document.getElementById('scroll-progress').style.width = progress + '%';
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// ===== NAVBAR ACTIVE LINK =====
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links a:not(.cta)');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ===== LAZY LOADING =====
const lazyImages = document.querySelectorAll('img[loading="lazy"]');
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src;
                imageObserver.unobserve(img);
            }
        });
    });
    lazyImages.forEach((img) => imageObserver.observe(img));
}

// ===== REDUCED MOTION PREFERENCE =====
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    document.querySelectorAll('.benefit-card, .project-card, .service-card, .choose-item, .promise-item, .process-step').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
    // Remove GSAP animations
    if (typeof gsap !== 'undefined') {
        gsap.globalTimeline.pause();
    }
}

console.log('✅ Saber Portfolio — Advanced Edition Ready');
