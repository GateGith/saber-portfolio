// ============================================================
// SABER SLIFI — PORTFOLIO 10/10
// ============================================================

console.log('🚀 Saber Slifi — I show you how your project could look.');

// ============================================================
// TYPING EFFECT
// ============================================================
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

setTimeout(typeEffect, 500);

// ============================================================
// PARTICLES
// ============================================================
(function() {
    const c = document.getElementById('particles');
    if (!c) return;
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('span');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (18 + Math.random() * 25) + 's';
        p.style.animationDelay = (Math.random() * 20) + 's';
        p.style.width = (1.5 + Math.random() * 2.5) + 'px';
        p.style.height = p.style.width;
        c.appendChild(p);
    }
})();

// ============================================================
// TESTIMONIALS CAROUSEL
// ============================================================
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

// ============================================================
// FADE UP OBSERVER
// ============================================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12, rootMargin: '0px 0px -15px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ============================================================
// COMING SOON — TYPING EFFECT
// ============================================================
const comingPhrases = [
    'Building something new...',
    'Next project in progress...',
    'Crafting digital experiences...',
    'More work is unfolding...',
    'Stay tuned for the next...'
];
let phraseIndex = 0;
let charIndex2 = 0;
let isDeleting2 = false;
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
}, 500);
