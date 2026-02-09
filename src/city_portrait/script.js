function openLightbox(imageSrc, title) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    lightboxImg.src = imageSrc;
    lightboxImg.alt = title;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
}

function closeLightbox(event) {
    if (event.target !== document.getElementById('lightbox-img')) {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover effect for gallery images
document.addEventListener('DOMContentLoaded', () => {
    const hoverImages = document.querySelectorAll('.gallery-item img[data-hover-src]');

    hoverImages.forEach(img => {
        const originalSrc = img.src;
        const hoverSrc = img.getAttribute('data-hover-src');

        // Preload hover image
        const preloadImg = new Image();
        preloadImg.src = hoverSrc;

        img.addEventListener('mouseenter', () => {
            img.src = hoverSrc;
            img.style.transition = 'opacity 0.3s ease'; // Optional smooth transition preparation
        });

        img.addEventListener('mouseleave', () => {
            img.src = originalSrc;
        });
    });
});
