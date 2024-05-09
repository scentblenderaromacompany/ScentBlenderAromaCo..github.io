// script.js
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            alert('Taking you to the selected product page!');
        });
    });
});
