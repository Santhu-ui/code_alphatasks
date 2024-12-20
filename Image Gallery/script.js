// Get the lightbox element
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementById('close');

// Get all thumbnail links
const thumbnails = document.querySelectorAll('.thumbnail');

// Add click event to each thumbnail
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        lightbox.style.display = 'block'; // Show the lightbox
        lightboxImage.src = this.href; // Set the lightbox image source
        captionText.innerHTML = this.children [0].alt; // Set the caption
    });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none'; // Hide the lightbox
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = 'none'; // Hide the lightbox
    }
});