// Image Data (Replace with your actual image paths and alt text)
const photos = [
    { src: 'images/image1.JPG', alt: 'Shark point, near Santa Cruz. California. May 2022' },
    { src: 'images/DSCF3309.jpg', alt: 'Beautiful Vernal Falls with a rainbow. Yosemite National Park, California. August 2022' },
    { src: 'images/DSCF3373.JPG', alt: 'Sunrise over the lake. Lake Tahoe, California. August 2022' },
    { src: 'images/DSCF3409.jpg', alt: 'A sea of lakes from the top of Desolation Wilderness. Lake Tahoe, California. August 2022' },
    { src: 'images/DSCF4027.jpg', alt: 'The greenest field I have ever witness. Fairy Glen, Isle of Skye, Scotland. August 2023' },
    { src: 'images/DSCF4233.JPG', alt: 'Mountains over mountains in Parque Arenas. Cajón del Maipo, Chile. October 2023' },
    { src: 'images/DSCF4187.jpg', alt: 'Where the mountains meet the water, Embalse el Yeso 2.600 m.a.s.l. Cajón del Maipo, Chile. October 2023' },
    { src: 'images/IMG_2640.jpeg', alt: 'Views from the Veleta peak, 3.396 m.a.s.l. Sierra Nevada, Granada, Spain. February 2023' },
    { src: 'images/DSCF4440.JPG', alt: 'Torres del Paine behind the clouds, Parque Nacional Torres del Paine, Chile. December 2023' },
    { src: 'images/DSCF3898.jpg', alt: 'Fishing town, Portree, Scotland. August 2023' },
    // ...add more photos as needed
];

const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const buttonStyles = `
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 18px;
`;

let currentImageIndex = 0;

// Create gallery elements dynamically
photos.forEach((photo, index) => {
    const photoDiv = document.createElement('div');
    photoDiv.classList.add('photo');

    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.alt;
    img.classList.add('thumbnail');
    img.addEventListener('click', () => openLightbox(index));

    photoDiv.appendChild(img);
    gallery.appendChild(photoDiv);
});

function openLightbox(index) {
    currentImageIndex = index;
    lightboxImage.src = photos[index].src;
    lightboxImage.alt = photos[index].alt;
    lightbox.style.display = 'block';
    lightboxImage.onclick = () => {
        lightboxImage.style.transform = lightboxImage.style.transform === 'scale(2)' ? 'scale(1)' : 'scale(2)';
    };
    // Previous and Next buttons
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    prevButton.style = buttonStyles;
    nextButton.style = buttonStyles;
    // Set caption
    const caption = document.getElementById('lightbox-caption');
    caption.textContent = photos[index].alt; 
    lightbox.style.display = 'block';
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function changePhoto(step) {
    currentImageIndex = (currentImageIndex + step + photos.length) % photos.length;
    lightboxImage.src = photos[currentImageIndex].src;
    lightboxImage.alt = photos[currentImageIndex].alt;
    // Update caption
    const caption = document.getElementById('lightbox-caption');
    caption.textContent = photos[currentImageIndex].alt; 
}

// Event listener for keyboard navigation
document.addEventListener('keydown', (event) => {
    if (lightbox.style.display === 'block') { // Only handle keys when lightbox is open
        if (event.key === 'ArrowLeft') {
            changePhoto(-1); // Go to previous photo
        } else if (event.key === 'ArrowRight') {
            changePhoto(1);  // Go to next photo
        }
        else if (event.key === 'Escape') {
            closeLightbox()
        }
    }
});
