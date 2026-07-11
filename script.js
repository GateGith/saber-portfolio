// ============================================================
// SABER PORTFOLIO — 10/10 PREMIUM (مدمج مع التعديلات الجديدة)
// ============================================================

console.log('🚀 Saber Portfolio — Premium Edition');

// ===== PRELOADER =====
window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(function() {
            preloader.classList.add('hidden'); // متوافق مع CSS الجديد
        }, 800);
    }
});

// ===== SCROLL REVEAL (Intersection Observer) =====
function revealElements() {
    var elements = document.querySelectorAll(
        '.stat-item, .benefit-card, .project-card, .choose-item, .service-card, .process-step, .promise-item'
    );

    if (!elements.length) return;

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -20px 0px'
    });

    elements.forEach(function(el) {
        observer.observe(el);
    });
}

// ===== HERO ANIMATION (تأثير ظهور عناصر الهيرو) =====
function heroAnimation() {
    var heroElements = document.querySelectorAll('.hero .badge, .hero .typing-line, .hero .subtitle, .hero .buttons');
    heroElements.forEach(function(el, index) {
        setTimeout(function() {
            el.classList.add('visible');
        }, 200 + index * 150);
    });
}

// ===== SCROLL PROGRESS BAR =====
function updateScrollProgress() {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = (scrollTop / docHeight) * 100;
    var bar = document.getElementById('scroll-progress');
    if (bar) {
        bar.style.width = progress + '%';
    }
}

// ===== SMOOTH SCROLL =====
function smoothScroll() {
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
}

// ===== LAZY LOADING =====
function lazyLoadImages() {
    var lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if (!lazyImages.length || !('IntersectionObserver' in window)) return;

    var imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var img = entry.target;
                // تفعيل التحميل عن طريق إزالة lazy ثم تعيين src مرة أخرى إذا لزم
                img.src = img.src; // كافي لإعادة التحميل في حال استخدام loading="lazy"
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(function(img) {
        imageObserver.observe(img);
    });
}

// ===== إزالة مؤشر الكتابة بعد انتهاء الأنيميشن =====
function handleTypingCursor() {
    var typingLines = document.querySelectorAll('.typing-line');
    if (!typingLines.length) return;

    // إجمالي الوقت: آخر تأخير (4.8s) + مدة الكتابة (2s) + هامش
    var totalTime = 4800 + 2000 + 600; // ~7.4 ثانية
    setTimeout(function() {
        typingLines.forEach(function(line) {
            line.style.borderRight = 'none';
            line.style.width = 'auto';
            line.style.animation = 'none';
            line.style.opacity = '1';
        });
    }, totalTime);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
    heroAnimation();
    revealElements();
    window.addEventListener('scroll', updateScrollProgress);
    smoothScroll();
    lazyLoadImages();
    handleTypingCursor();
    console.log('✅ Saber Portfolio — Premium Edition Ready');
});
