// ===== PRELOADER =====
window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(function() {
            preloader.classList.add('hide');
        }, 1400); // متزامن مع مدة الـ loader animation
    }
});

// ===== SCROLL REVEAL =====
function revealElements() {
    var elements = document.querySelectorAll('.stat-item, .project-card');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    elements.forEach(function(el) { observer.observe(el); });
}

// ===== SCROLL PROGRESS =====
function updateScrollProgress() {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = (scrollTop / docHeight) * 100;
    var bar = document.getElementById('scroll-progress');
    if (bar) bar.style.width = progress + '%';
}

// ===== SMOOTH SCROLL =====
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            var target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// ===== TYPEWRITER + 3D PARALLAX =====
const heroText = "Professional websites that help customers trust your business.";
const textElement = document.querySelector('.hero h1');
const heroContainer = document.querySelector('.hero');
let charIndex = 0;

function typeWriter() {
    if (charIndex < heroText.length) {
        textElement.innerHTML = heroText.substring(0, charIndex + 1) + '<span class="cursor">|</span>';
        charIndex++;
        setTimeout(typeWriter, 35); // سرعة الكتابة
    } else {
        document.querySelector('.cursor').style.display = 'none';
        startBrowserLoop(); // تشغيل المتصفح
    }
}

// حركة الماوس 3D
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth - e.clientX * 2) / 100;
    const y = (window.innerHeight - e.clientY * 2) / 100;
    heroContainer.style.transform = `rotateY(${x * 0.5}deg) rotateX(${y * 0.5}deg)`;
    heroContainer.style.transition = 'transform 0.1s ease-out';
});

// ===== BROWSER LOOP =====
const projects = [
    'projects/mazen/',
    'projects/arc161/',
    'https://gategith.github.io/hamiaphone-pro/',
    'https://gategith.github.io/YOKA-TECH/'
];
let projectIndex = 0;
const browserWindow = document.getElementById('browser-loop');
const iframe = document.getElementById('live-iframe');

function startBrowserLoop() {
    browserWindow.classList.add('active');
    loopProjects();
}

function loopProjects() {
    if (projectIndex >= projects.length) projectIndex = 0;
    const url = projects[projectIndex];
    
    iframe.style.opacity = '0';
    setTimeout(() => {
        iframe.src = url;
        iframe.style.opacity = '1';
    }, 400);
    
    projectIndex++;
    setTimeout(loopProjects, 4500); // مدة عرض كل مشروع
}

// ===== PARTICLES =====
const canvas = document.createElement('canvas');
canvas.style.cssText = 'position:absolute;top:0;left:0;z-index:-1;pointer-events:none;';
document.querySelector('.hero').appendChild(canvas);
const ctx = canvas.getContext('2d');
let w, h;
function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
window.addEventListener('resize', resize); resize();

const particles = Array.from({ length: 30 }, () => ({
    x: Math.random() * w, y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
    r: Math.random() * 2 + 1
}));

function animateParticles() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if(p.x < 0) p.x = w; if(p.x > w) p.x = 0;
        if(p.y < 0) p.y = h; if(p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(180, 140, 255, 0.15)';
        ctx.fill();
    });
    requestAnimationFrame(animateParticles);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
    typeWriter();
    revealElements();
    window.addEventListener('scroll', updateScrollProgress);
    smoothScroll();
    animateParticles();
});
