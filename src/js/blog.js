// Blog functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add reading time estimate to blog posts
    document.querySelectorAll('.blog-post').forEach(post => {
        const text = post.querySelector('p').textContent;
        const words = text.trim().split(/\s+/).length;
        const readingTime = Math.ceil(words / 200); // Assuming average reading speed of 200 words per minute
        
        const meta = post.querySelector('.post-meta');
        const readingTimeSpan = document.createElement('span');
        readingTimeSpan.className = 'reading-time';
        readingTimeSpan.textContent = `${readingTime} min read`;
        meta.appendChild(readingTimeSpan);
    });
});
