document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("gallery");

    const images = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg"
    ];

    images.forEach(function(imageSrc) {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");

        const img = document.createElement("img");
        img.src = imageSrc;

        galleryItem.appendChild(img);
        gallery.appendChild(galleryItem);
    });
});
