// script.js
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Add to Cart Functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            alert('Added to cart!');
            // Further functionality can be added to connect with a shopping cart system
        });
    });

    // More Info Expansion
    document.querySelectorAll('.more-info').forEach(button => {
        button.addEventListener('click', function () {
            alert('Redirecting to product details page.');
            // Implement redirection or modal popup for more product details
        });
    });
});
