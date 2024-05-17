document.addEventListener('DOMContentLoaded', function() {
    const videoButton = document.querySelector('.video-button');
    const video = document.getElementById('hero-video');

    videoButton.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent the default action of the link
        video.muted = false;  // Unmute the video
        video.play();  // Play the video with sound
        video.style.width = '600px';  // Increase the size of the video
        video.style.pointerEvents = 'auto';  // Allow interaction with the video
    });
});
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        document.getElementById('scroll-element').classList.add('scroll-up-hidden');
        document.getElementById('scroll-element').classList.remove('scroll-up-visible');
    } else {
        // Scroll up
        document.getElementById('scroll-element').classList.add('scroll-up-visible');
        document.getElementById('scroll-element').classList.remove('scroll-up-hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);
