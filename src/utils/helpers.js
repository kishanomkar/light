// This file will contain general utility functions

export function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // Adjust for fixed navbar height
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

export function animateCounter(elementId, target, duration = 2000) {
    const element = document.getElementById(elementId);
    if (!element) return;

    let start = 0;
    const increment = target / (duration / 16); // Assuming ~60fps

    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    updateCounter();
}

export function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'][Math.floor(Math.random() * 5)];
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '9999';

    document.body.appendChild(confetti);

    let pos = -10;
    const fall = setInterval(() => {
        pos += 5;
        confetti.style.top = pos + 'px';

        if (pos > window.innerHeight) {
            clearInterval(fall);
            confetti.remove();
        }
    }, 50);
}
