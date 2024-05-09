// script.js
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
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

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            alert('Added to cart!');
            // Implement actual cart addition logic here
        });
    });

    document.querySelectorAll('.more-info').forEach(button => {
        button.addEventListener('click', function () {
            alert('Redirecting to product details page.');
            // Implement redirection or more info modal here
        });
    });
});
