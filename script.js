// Image Data (Replace with your actual image paths and alt text)
const photos = [
    { 
        src: 'images/optimized/image1.webp', 
        thumb: 'images/thumbs/image1-thumb.jpg',
        alt: 'Shark point, near Santa Cruz. California. May 2022' 
    },
    { 
        src: 'images/optimized/DSCF3309.webp', 
        thumb: 'images/thumbs/DSCF3309-thumb.jpg',
        alt: 'Beautiful Vernal Falls with a rainbow. Yosemite National Park, California. August 2022' 
    },
    { 
        src: 'images/optimized/DSCF3373.webp', 
        thumb: 'images/thumbs/DSCF3373-thumb.jpg',
        alt: 'Sunrise over the lake. Lake Tahoe, California. August 2022' 
    },
    { 
        src: 'images/optimized/DSCF3409.webp', 
        thumb: 'images/thumbs/DSCF3409-thumb.jpg',
        alt: 'A sea of lakes from the top of Desolation Wilderness. Lake Tahoe, California. August 2022' 
    },
    { 
        src: 'images/optimized/DSCF4027.webp', 
        thumb: 'images/thumbs/DSCF4027-thumb.jpg',
        alt: 'The greenest field I have ever witness. Fairy Glen, Isle of Skye, Scotland. August 2023' 
    },
    { 
        src: 'images/optimized/DSCF4233.webp', 
        thumb: 'images/thumbs/DSCF4233-thumb.jpg',
        alt: 'Mountains over mountains in Parque Arenas. Cajón del Maipo, Chile. October 2023' 
    },
    { 
        src: 'images/optimized/DSCF4187.webp', 
        thumb: 'images/thumbs/DSCF4187-thumb.jpg',
        alt: 'Where the mountains meet the water, Embalse el Yeso 2.600 m.a.s.l. Cajón del Maipo, Chile. October 2023' 
    },
    { 
        src: 'images/optimized/DSCF4440.webp', 
        thumb: 'images/thumbs/DSCF4440-thumb.jpg',
        alt: 'Torres del Paine behind the clouds, Parque Nacional Torres del Paine, Chile. December 2023' 
    },
    { 
        src: 'images/optimized/DSCF3898.webp', 
        thumb: 'images/thumbs/DSCF3898-thumb.jpg',
        alt: 'Fishing town, Portree, Scotland. August 2023' 
    },
    { 
        src: 'images/optimized/DSCF5189.webp', 
        thumb: 'images/thumbs/DSCF5189-thumb.jpg',
        alt: 'Foggy mountains, Chamonix, France. December 2024' 
    },
    { 
        src: 'images/optimized/DSCF5285.webp', 
        thumb: 'images/thumbs/DSCF5285-thumb.jpg',
        alt: 'Lake Bled, Slovenia. July 2025' 
    },
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
    // Use the thumbnail source for the gallery view
    img.src = photo.thumb; // <-- THIS IS THE KEY CHANGE
    img.alt = photo.alt;
    img.classList.add('thumbnail');
    img.loading = 'lazy'; 
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
