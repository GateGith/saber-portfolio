// ============================================================
// SABER PORTFOLIO — 10/10 PREMIUM
// ============================================================

console.log('🚀 Saber Portfolio — Premium Edition');

// ===== PRELOADER =====
window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(function() {
            preloader.classList.add('hide');
        }, 800);
    }
});

// ===== SCROLL REVEAL (Intersection Observer) =====
function revealElements() {
    var elements = document.querySelectorAll(
        '.stat-item, .benefit-card, .project-card, .choose-item, .service-card, .process-step, .promise-item'
    );

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

// ===== HERO ANIMATION =====
function heroAnimation() {
    var heroElements = document.querySelectorAll('.hero .badge, .hero h1 .line, .hero .subtitle, .hero .buttons');
    heroElements.forEach(function(el, index) {
        setTimeout(function() {
            el.classList.add('visible');
        }, 200 + index * 150);
    });
}

// ===== SCROLL PROGRESS =====
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
}

// ===== OFFER BUTTONS =====
function offerButtons() {
    var cta1 = document.getElementById('cta1');
    var cta2 = document.getElementById('cta2');
    var feedback = document.getElementById('feedback');

    if (!cta1 || !cta2 || !feedback) return;

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

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
    heroAnimation();
    revealElements();
    window.addEventListener('scroll', updateScrollProgress);
    smoothScroll();
    lazyLoadImages();
    offerButtons();
    console.log('✅ Saber Portfolio — Premium Edition Ready');
});
