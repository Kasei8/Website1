document.addEventListener('DOMContentLoaded', function() {
    const videoButton = document.getElementById('video-button');
    const video = document.getElementById('hero-video');

    // Function to play video with sound and increase size
    function playVideo() {
        video.muted = false; // Unmute the video
        video.play();
        video.style.width = '600px';
    }

    // Event listener to play video when clicked
    videoButton.addEventListener('click', function(event) {
        event.preventDefault();
        playVideo();
    });

    // Function to handle scrolling behavior
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scroll down
            video.pause();
        } else {
            // Scroll up
            playVideo();
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});
