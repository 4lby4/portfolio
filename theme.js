
// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in effect as you scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('fade-in-visible');
        } else {
            section.classList.remove('fade-in-visible');
        }
    });
});

// Add event listener to show fade-in on load
window.addEventListener('load', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
});
