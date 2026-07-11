// ============================================================
// SABER PORTFOLIO — PREMIUM SCRIPT
// ============================================================
console.log('🚀 Saber Portfolio Ready');

// PRELOADER
window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    if (preloader) setTimeout(function() { preloader.classList.add('hidden'); }, 800);
});

// SCROLL REVEAL
function revealElements() {
    var elements = document.querySelectorAll('.stat-item, .benefit-card, .project-card, .choose-item, .service-card, .process-step, .promise-item');
    if (!elements.length) return;
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.15, rootMargin: '0px 0px -20px 0px' });
    elements.forEach(function(el) { observer.observe(el); });
}

// HERO ANIMATION
function heroAnimation() {
    var items = document.querySelectorAll('.hero .badge, .hero .typing-line, .hero .subtitle, .hero .buttons');
    items.forEach(function(el, i) { setTimeout(function() { el.classList.add('visible'); }, 200 + i * 150); });
}

// SCROLL PROGRESS
window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = (scrollTop / docHeight) * 100;
    var bar = document.getElementById('scroll-progress');
    if (bar) bar.style.width = progress + '%';
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// REMOVE TYPING CURSOR
function handleTyping() {
    var lines = document.querySelectorAll('.typing-line');
    if (!lines.length) return;
    setTimeout(function() {
        lines.forEach(function(line) {
            line.style.borderRight = 'none';
            line.style.width = 'auto';
            line.style.animation = 'none';
            line.style.opacity = '1';
        });
    }, 7500);
}

// INIT
document.addEventListener('DOMContentLoaded', function() {
    heroAnimation();
    revealElements();
    handleTyping();
    console.log('✅ All systems ready');
});
