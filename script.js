// PRELOADER
window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(function() {
            preloader.classList.add('hide');
        }, 1200);
    }
});

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
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// TYPEWRITER
var textElement = document.querySelector('.hero h1');
var heroText = "Professional websites that help customers trust your business.";
var charIndex = 0;

function typeWriter() {
    if (!textElement) return;
    if (charIndex < heroText.length) {
        textElement.innerHTML = heroText.substring(0, charIndex + 1) + '<span class="cursor">|</span>';
        charIndex++;
        setTimeout(typeWriter, 35);
    } else {
        var cursor = document.querySelector('.cursor');
        if (cursor) cursor.style.display = 'none';
        startBrowserLoop();
    }
}

// BROWSER LOOP (5 PROJECTS)
var projects = [
    'projects/mazen/',
    'projects/arc161/',
    'https://gategith.github.io/hamiaphone-pro/',
    'https://gategith.github.io/Rogers-Phone/',
    'https://gategith.github.io/YOKA-TECH/'
];
var projectIndex = 0;
var browserWindow = document.getElementById('browser-loop');
var iframe = document.getElementById('live-iframe');

function startBrowserLoop() {
    if (!browserWindow || !iframe) return;
    browserWindow.classList.add('active');
    loopProjects();
}

function loopProjects() {
    if (projectIndex >= projects.length) projectIndex = 0;
    var url = projects[projectIndex];
    
    iframe.style.opacity = '0';
    setTimeout(function() {
        iframe.src = url;
        iframe.style.opacity = '1';
    }, 400);
    
    projectIndex++;
    setTimeout(loopProjects, 4500);
}

// 3D PARALLAX
function initParallax() {
    if (window.innerWidth <= 768) return;
    var heroContainer = document.querySelector('.hero');
    if (!heroContainer) return;
    document.addEventListener('mousemove', function(e) {
        var x = (window.innerWidth - e.clientX * 2) / 100;
        var y = (window.innerHeight - e.clientY * 2) / 100;
        heroContainer.style.transform = 'rotateY(' + (x * 0.5) + 'deg) rotateX(' + (y * 0.5) + 'deg)';
    });
}

// PARTICLES
function initParticles() {
    var hero = document.querySelector('.hero');
    if (!hero) return;
    
    var canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;top:0;left:0;z-index:-1;pointer-events:none;';
    hero.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var w, h;
    
    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    var particles = [];
    for (var i = 0; i < 25; i++) {
        particles.push({
            x: Math.random() * w, y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
            r: Math.random() * 2 + 1
        });
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = w;
            if (p.x > w) p.x = 0;
            if (p.y < 0) p.y = h;
            if (p.y > h) p.y = 0;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(180, 140, 255, 0.15)';
            ctx.fill();
        }
        requestAnimationFrame(animate);
    }
    animate();
}

// INIT
document.addEventListener('DOMContentLoaded', function() {
    typeWriter();
    initParallax();
    initParticles();
});
