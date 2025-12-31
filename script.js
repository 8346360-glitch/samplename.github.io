document.addEventListener('DOMContentLoaded', () => {

    const images = document.querySelectorAll('.lightbox-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    images.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.dataset.large || img.src;
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
