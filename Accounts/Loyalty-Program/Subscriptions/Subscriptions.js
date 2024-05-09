// script.js
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for choosing a subscription package! Please proceed to sign up.');
        });
    });
});
