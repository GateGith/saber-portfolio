// ===== PRELOADER =====
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) setTimeout(() => preloader.classList.add('hide'), 1400);
});

// ===== SCROLL REVEAL (Intersection Observer) =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.stat-item, .card, .project-card').forEach(el => observer.observe(el));
});

// ===== SCROLL PROGRESS =====
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    document.getElementById('scroll-progress').style.width = (scrollTop / docHeight) * 100 + '%';
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
});

// ===== TYPEWRITER =====
const heroText = "Professional websites that help customers trust your business.";
const textElement = document.querySelector('.hero h1');
let charIndex = 0;

function typeWriter() {
    if (charIndex < heroText.length) {
        textElement.innerHTML = heroText.substring(0, charIndex + 1) + '<span class="cursor">|</span>';
        charIndex++;
        setTimeout(typeWriter, 35);
    } else {
        document.querySelector('.cursor').style.display = 'none';
        startBrowserLoop();
    }
}

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
    if (!browserWindow || !iframe) return;
    browserWindow.classList.add('active');
    loopProjects();
}

function loopProjects() {
    if (projectIndex >= projects.length) projectIndex = 0;
    const url = projects[projectIndex];
    
    iframe.style.opacity = '0';
    setTimeout(() => { iframe.src = url; iframe.style.opacity = '1'; }, 400);
    projectIndex++;
    setTimeout(loopProjects, 4500);
}

// ===== 3D PARALLAX (Optimized for Mobile) =====
function initParallax() {
    if (window.innerWidth <= 768) return; // Disable on mobile for battery/performance
    
    const heroContainer = document.querySelector('.hero');
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.clientX * 2) / 100;
        const y = (window.innerHeight - e.clientY * 2) / 100;
        heroContainer.style.transform = `rotateY(${x * 0.5}deg) rotateX(${y * 0.5}deg)`;
        heroContainer.style.transition = 'transform 0.1s ease-out';
    });
}

// ===== PARTICLES (Floating Light) =====
function initParticles() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;top:0;left:0;z-index:-1;pointer-events:none;';
    document.querySelector('.hero').appendChild(canvas);
    const ctx = canvas.getContext('2d');
    let w, h;

    function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
    window.addEventListener('resize', resize); resize();

    const particles = Array.from({ length: 25 }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 1
    }));

    function animate() {
        ctx.clearRect(0, 0, w, h);
        particles.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
            if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(180, 140, 255, 0.15)';
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
    initParallax();
    initParticles();
});
