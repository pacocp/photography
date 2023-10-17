const photos = document.querySelectorAll(".thumbnail");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const captionContainer = document.createElement("div");
captionContainer.className = "caption-container";
lightbox.appendChild(captionContainer);
let currentIndex = 0;

photos.forEach((photo, index) => {
    photo.addEventListener("click", () => {
        openLightbox(index);
    });
});

function openLightbox(index) {
    currentIndex = index;
    lightboxImage.src = photos[index].src;
    lightbox.style.display = "block";

    updateCaptionPosition(); // Call the function to position the caption
    
    // Add a caption below the image
    const captionText = document.createElement("p");
    captionText.innerHTML = photos[index].alt;
    captionContainer.innerHTML = "";
    captionContainer.appendChild(captionText);
}

function zoomImage() {
    if (lightboxImage.style.transform === "scale(1.1)") {
        lightboxImage.style.transform = "scale(1)";
    } else {
        lightboxImage.style.transform = "scale(1.1)";
    }
    
    updateCaptionPosition(); // Call the function to reposition the caption
}

function updateCaptionPosition() {
    const imageAspectRatio = lightboxImage.naturalWidth / lightboxImage.naturalHeight;
    
    if (imageAspectRatio > 1) {
        captionContainer.style.bottom = "0";
        captionContainer.style.top = "";
    } else {
        captionContainer.style.top = "0";
        captionContainer.style.bottom = "";
    }
}

function closeLightbox() {
    lightbox.style.display = "none";
    captionContainer.innerHTML = "";
}

function changePhoto(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = photos.length - 1;
    } else if (currentIndex >= photos.length) {
        currentIndex = 0;
    }
    lightboxImage.src = photos[currentIndex].src;

    updateCaptionPosition(); // Call the function to position the caption

    // Update the caption when changing photos
    const captionText = document.createElement("p");
    captionText.innerHTML = photos[currentIndex].alt;
    captionContainer.innerHTML = "";
    captionContainer.appendChild(captionText);
}

document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "block") {
        if (e.key === "Escape") {
            closeLightbox();
        } else if (e.key === "ArrowLeft") {
            changePhoto(-1);
        } else if (e.key === "ArrowRight") {
            changePhoto(1);
        }
    }
});
