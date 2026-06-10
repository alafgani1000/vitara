/**
 * VITARA - Main JavaScript
 * Handles global interactions like navbar scroll, mobile menu, and animations.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            once: true,
            offset: 50,
        });
    }

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('bg-bg-surface', 'shadow-sm', 'border-b', 'border-border-light');
                navbar.classList.remove('bg-transparent', 'text-text-inverse');
            } else {
                navbar.classList.remove('bg-bg-surface', 'shadow-sm', 'border-b', 'border-border-light');
                // The root page might want it transparent or not based on hero color
                navbar.classList.add('bg-transparent');
            }
        });
    }

    // 3. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 4. Counter Animation (For Stats Strip)
    const counters = document.querySelectorAll('.counter-value');
    
    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const speed = 200; // Lower is faster
            
            const updateCount = () => {
                const count = +counter.innerText.replace(/,/g, '');
                const inc = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + inc).toLocaleString();
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };
            
            updateCount();
        });
    }
    
    // Use Intersection Observer to trigger counter when in view
    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateCounters();
                observer.disconnect();
            }
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }
});
