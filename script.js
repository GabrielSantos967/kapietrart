document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.max');
    const items = document.querySelectorAll('.mp1, .mp2, .mp3, .mp4');
    let position = 0;
    const itemWidth = 500; // Largura de cada item

    document.getElementById('bt1').addEventListener('click', function() {
        if (position > 0) {
            position--;
            updateCarousel();
        }
    });

    document.getElementById('bt2').addEventListener('click', function() {
        if (position < items.length - 1) {
            position++;
            updateCarousel();
        }
    });

    function updateCarousel() {
        const offset = -position * itemWidth;
        carousel.style.left = `${offset}px`;
    }
});