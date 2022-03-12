import createGalleryMediaElement from "./gallery/GalleryMediaElement.js";

/**
 * @type {HTMLDivElement}
 */
const carouselElement = document.querySelector("#carousel");

const container = document.querySelector("body > .container");
const carousel = bootstrap.Carousel.getOrCreateInstance(carouselElement);

const carouselItems = carouselElement.querySelectorAll(".carousel-inner > .carousel-item");

for (const idx of carouselItems.keys()) {
    const carouselItem = carouselItems[idx];

    const image = carouselItem.querySelector("img");
    const caption = carouselItem.querySelector(".carousel-caption");

    container.appendChild(createGalleryMediaElement(carousel, carouselElement, idx, image, Array.from(caption.childNodes.values()).map(x => x.cloneNode(true))));
}