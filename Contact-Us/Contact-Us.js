// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    form.onsubmit = function(event) {
        event.preventDefault();
        // Add form submission logic here, possibly an AJAX call
        alert('Thank you for your message. We will get back to you shortly!');
    };
});
