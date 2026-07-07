// ============================================================
// SABER PORTFOLIO — SCRIPT COMPLETE
// ============================================================

console.log('🚀 Saber Portfolio — Complete');

// ===== PRELOADER =====
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => preloader.classList.add('hide'), 1200);
});

// ===== LENIS SMOOTH SCROLL =====
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// ===== GSAP + SCROLLTRIGGER =====
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Hero Parallax
    gsap.to('.hero::before', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
        },
        y: 80,
        scale: 1.12,
        ease: 'none',
    });

    // Hero Lines
    gsap.from('.hero-title .line', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
    });
    gsap.from('.hero-typing', { y: 30, opacity: 0, duration: 0.8, delay: 0.6, ease: 'power3.out' });
    gsap.from('.hero-description', { y: 30, opacity: 0, duration: 0.8, delay: 0.8, ease: 'power3.out' });
    gsap.from('.hero-buttons', { y: 30, opacity: 0, duration: 0.8, delay: 1, ease: 'power3.out' });
    gsap.from('.scroll-indicator', { y: 20, opacity: 0, duration: 0.8, delay: 1.2, ease: 'power3.out' });

    // Stats
    gsap.from('.stat-item', {
        scrollTrigger: { trigger: '#stats', start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
    });

    // Projects
    gsap.from('.project-card', {
        scrollTrigger: { trigger: '#work', start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
    });

    // Results
    gsap.from('.result-card', {
        scrollTrigger: { trigger: '#results', start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
    });

    // Case Study
    gsap.from('.case-item', {
        scrollTrigger: { trigger: '#case-study', start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
    });

    // Services
    gsap.from('.service-card', {
        scrollTrigger: { trigger: '#services', start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
    });

    // Pricing
    gsap.from('.pricing-card', {
        scrollTrigger: { trigger: '#pricing', start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
    });

    // Process
    gsap.from('.process-step', {
        scrollTrigger: { trigger: '#process', start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
    });
    gsap.from('.flow-step', {
        scrollTrigger: { trigger: '#process', start: 'top 80%' },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
    });

    // Why Me
    gsap.from('.why-item', {
        scrollTrigger: { trigger: '#why-me', start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
    });

    // Testimonials
    gsap.from('.testimonials-wrapper', {
        scrollTrigger: { trigger: '#testimonials', start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
    });

    // FAQ
    gsap.from('.faq-item', {
        scrollTrigger: { trigger: '#faq', start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
    });

    // About
    gsap.from('.about-text', {
        scrollTrigger: { trigger: '#about', start: 'top 80%' },
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
    });
    gsap.from('.about-image', {
        scrollTrigger: { trigger: '#about', start: 'top 80%' },
        x: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
    });

    // Guarantee
    gsap.from('.guarantee-box', {
        scrollTrigger: { trigger: '.guarantee-box', start: 'top 85%' },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
    });

    // Contact
    gsap.from('.contact-section', {
        scrollTrigger: { trigger: '#contact', start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
    });

    // Footer
    gsap.from('.footer', {
        scrollTrigger: { trigger: '.footer', start: 'top 90%' },
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
    });
});

// ===== TYPING EFFECT =====
const words = ['Web Designer', 'Web Developer', 'UX/UI Designer', 'Creative Problem Solver'];
let wordIndex = 0, charIndex = 0, isDeleting = false;
const el = document.getElementById('typingText');

function typeEffect() {
    if (!el) return;
    const current = words[wordIndex];
    if (isDeleting) {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }
    let speed = isDeleting ? 40 : 80;
    if (!isDeleting && charIndex === current.length) {
        speed = 1800;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }
    setTimeout(typeEffect, speed);
}
setTimeout(typeEffect, 1500);

// ===== ANIMATED NUMBERS =====
document.querySelectorAll('.stat-item .number').forEach((el) => {
    const target = parseInt(el.dataset.count);
    if (isNaN(target)) return;
    let current = 0;
    const increment = target / 80;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        el.textContent = target;
                        clearInterval(timer);
                    } else {
                        el.textContent = Math.floor(current);
                    }
                }, 20);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    observer.observe(el);
});

// ===== CURSOR =====
const dot = document.querySelector('.cursor-dot');
const follower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX - 4 + 'px';
    dot.style.top = mouseY - 4 + 'px';
    requestAnimationFrame(updateFollower);
});

function updateFollower() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    follower.style.left = followerX - 20 + 'px';
    follower.style.top = followerY - 20 + 'px';
}

// Hover effects
document.querySelectorAll('a, button, .project-card, .btn, .pricing-btn, .nav-cta, .social-link').forEach((el) => {
    el.addEventListener('mouseenter', () => {
        dot.classList.add('hover');
        follower.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
        dot.classList.remove('hover');
        follower.classList.remove('hover');
    });
});

// ===== SPOTLIGHT =====
const spotlight = document.getElementById('heroSpotlight');
if (spotlight) {
    document.addEventListener('mousemove', (e) => {
        spotlight.style.left = e.clientX - 250 + 'px';
        spotlight.style.top = e.clientY - 250 + 'px';
        spotlight.classList.add('active');
    });
    document.addEventListener('mouseleave', () => {
        spotlight.classList.remove('active');
    });
}

// ===== MAGNETIC BUTTONS =====
document.querySelectorAll('.magnetic').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const strength = 0.3;
        btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

// ===== 3D TILT =====
document.querySelectorAll('.project-card[data-tilt]').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===== RIPPLE EFFECT =====
document.querySelectorAll('.btn, .pricing-btn').forEach((btn) => {
    btn.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            top: ${y}px; left: ${x}px;
            width: 0; height: 0;
            border-radius: 50%;
            background: rgba(255,255,255,0.3);
            transform: translate(-50%, -50%);
            pointer-events: none;
            animation: rippleAnim 0.6s ease-out forwards;
        `;
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// ===== SCROLL PROGRESS =====
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    document.getElementById('scroll-progress').style.width = progress + '%';
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

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

// ===== TESTIMONIALS CAROUSEL =====
const track = document.getElementById('testimonialsTrack');
const dots = document.getElementById('testimonialDots');
const testimonials = document.querySelectorAll('.testimonial');
let idx = 0, auto;

if (track && dots && testimonials.length) {
    testimonials.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goTo(i));
        dots.appendChild(dot);
    });

    function goTo(i) {
        idx = i;
        track.style.transform = 'translateX(-' + i * 100 + '%)';
        document.querySelectorAll('.dot').forEach((d, j) => d.classList.toggle('active', j === i));
    }

    function next() {
        goTo((idx + 1) % testimonials.length);
    }

    auto = setInterval(next, 5000);
    const wrapper = document.querySelector('.testimonials-wrapper');
    wrapper.addEventListener('mouseenter', () => clearInterval(auto));
    wrapper.addEventListener('mouseleave', () => { auto = setInterval(next, 5000); });
}

// ===== COMING SOON TYPING =====
const comingPhrases = [
    'Building something new...',
    'Next project in progress...',
    'Crafting digital experiences...',
    'More work is unfolding...',
    'Stay tuned for the next...'
];
let phraseIndex = 0, charIndex2 = 0, isDeleting2 = false;
const comingText = document.getElementById('comingText');
const dotsLoader = document.getElementById('dotsLoader');

function typeComingEffect() {
    if (!comingText) return;
    const currentPhrase = comingPhrases[phraseIndex];
    if (isDeleting2) {
        comingText.textContent = currentPhrase.substring(0, charIndex2 - 1);
        charIndex2--;
    } else {
        comingText.textContent = currentPhrase.substring(0, charIndex2 + 1);
        charIndex2++;
    }
    let speed = isDeleting2 ? 30 : 60;
    if (!isDeleting2 && charIndex2 === currentPhrase.length) {
        speed = 2000;
        isDeleting2 = true;
    } else if (isDeleting2 && charIndex2 === 0) {
        isDeleting2 = false;
        phraseIndex = (phraseIndex + 1) % comingPhrases.length;
        speed = 400;
    }
    setTimeout(typeComingEffect, speed);
}

function animateDots() {
    if (!dotsLoader) return;
    let dotCount = 0;
    setInterval(() => {
        dotCount = (dotCount % 3) + 1;
        dotsLoader.textContent = '.'.repeat(dotCount);
    }, 500);
}

setTimeout(() => {
    typeComingEffect();
    animateDots();
}, 1000);

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

// ===== REDUCED MOTION =====
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    document.querySelectorAll('.fade-up, .project-card, .service-card, .pricing-card, .result-card, .case-item, .process-step, .flow-step, .why-item, .faq-item').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
    gsap.globalTimeline.pause();
}

console.log('✅ Saber Portfolio — Complete.');
