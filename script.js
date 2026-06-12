// ========================================
// GSAP ANIMATIONS
// ========================================
gsap.registerPlugin(ScrollTrigger);

// Fade-up animations
gsap.utils.toArray('.gsap-fade-up').forEach((elem, i) => {
    gsap.from(elem, {
        scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'power3.out'
    });
});

// Cards animation
const cards = gsap.utils.toArray('.project-card, .service-card');
cards.forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'back.out(0.7)'
    });
});

// ========================================
// STATS COUNTER
// ========================================
const counters = document.querySelectorAll('.stat-number[data-count]');
const animateNumbers = () => {
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.count);
        let current = 0;
        const increment = target / 50;
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target + (target === 100 ? '%' : '');
            }
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(counter);
    });
};
animateNumbers();

// ========================================
// CUSTOM CURSOR
// ========================================
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

if (cursor && cursorFollower && window.matchMedia('(hover: hover)').matches) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
        cursorFollower.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
    });
    
    document.querySelectorAll('a, button, .btn, .project-card, .service-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursorFollower.style.transform = 'scale(1.5)';
            cursorFollower.style.borderColor = 'var(--accent-glow)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
            cursorFollower.style.borderColor = 'var(--accent-primary)';
        });
    });
}

// ========================================
// DARK/LIGHT MODE
// ========================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle?.querySelector('.theme-icon');
let isDark = true;

function toggleTheme() {
    isDark = !isDark;
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeIcon.textContent = isDark ? '🌙' : '☀️';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

themeToggle?.addEventListener('click', toggleTheme);

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    isDark = false;
    document.body.setAttribute('data-theme', 'light');
    themeIcon.textContent = '☀️';
}

// ========================================
// PROJECT FILTERS
// ========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        
        projects.forEach(project => {
            if (filter === 'all' || project.dataset.category === filter) {
                project.style.display = 'flex';
                setTimeout(() => {
                    project.style.opacity = '1';
                    project.style.transform = 'translateY(0)';
                }, 10);
            } else {
                project.style.opacity = '0';
                project.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    project.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ========================================
// SCROLL BUTTONS
// ========================================
document.getElementById('scrollToProjects')?.addEventListener('click', () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
});

// ========================================
// CONTACT MODAL
// ========================================
const modal = document.getElementById('contactModal');
const openBtn = document.getElementById('openContactForm');
const closeBtn = document.querySelector('.modal-close');

openBtn?.addEventListener('click', () => {
    modal?.classList.add('active');
});

closeBtn?.addEventListener('click', () => {
    modal?.classList.remove('active');
});

modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// ========================================
// FORM SUBMISSION (Netlify ready)
// ========================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('.submit-btn');
        submitBtn.classList.add('loading');
        
        const formData = new FormData(contactForm);
        
        try {
            const response = await fetch('/', {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                formStatus.textContent = '✅ Message envoyé ! Je vous répondrai rapidement.';
                formStatus.className = 'form-status success';
                contactForm.reset();
            } else {
                throw new Error('Erreur');
            }
        } catch (error) {
            formStatus.textContent = '❌ Une erreur est survenue. Veuillez réessayer.';
            formStatus.className = 'form-status error';
        } finally {
            submitBtn.classList.remove('loading');
            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000);
        }
    });
}

// ========================================
// THREE.JS BACKGROUND
// ========================================
const canvas = document.createElement('canvas');
canvas.id = 'canvas-bg';
document.body.appendChild(canvas);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 800;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i += 3) {
    posArray[i] = (Math.random() - 0.5) * 30;
    posArray[i+1] = (Math.random() - 0.5) * 20;
    posArray[i+2] = (Math.random() - 0.5) * 20;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.05,
    color: '#6366f1',
    transparent: true,
    opacity: 0.4
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

camera.position.z = 10;

function animateParticles() {
    requestAnimationFrame(animateParticles);
    particlesMesh.rotation.x += 0.0005;
    particlesMesh.rotation.y += 0.0008;
    renderer.render(scene, camera);
}
animateParticles();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// ========================================
// LAZY LOADING (Intersection Observer)
// ========================================
const lazyImages = document.querySelectorAll('img[loading="lazy"]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ========================================
// SCROLL REVEAL FOR PROJECTS
// ========================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.project-card, .service-card').forEach(el => {
    revealObserver.observe(el);
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
if ('connection' in navigator && navigator.connection.saveData) {
    // Reduce animations for save-data users
    document.querySelectorAll('.project-card, .service-card').forEach(el => {
        el.style.transition = 'none';
    });
}

console.log('🚀 Portfolio 9.9/10 - Prêt à impressionner !');
