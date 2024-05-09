// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            let targetElement = document.querySelector(this.getAttribute('href'));
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
