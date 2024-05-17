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
