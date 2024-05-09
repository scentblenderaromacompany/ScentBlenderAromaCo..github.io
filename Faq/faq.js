// script.js
document.querySelectorAll('.faq-list dt').forEach(item => {
    item.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});
