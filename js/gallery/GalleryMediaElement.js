export default function createGalleryMediaElement(carousel, carouselElement, idx, image, description) {
    {
        const wrapperElement = document.createElement("div");
        wrapperElement.classList.add("row", "align-items-center");
        
        {
            const leftElement = document.createElement("div");
            leftElement.classList.add("col-md-3", "my-3");

            {
                const img = image.cloneNode();
                img.className = "w-100";

                leftElement.append(img);
            }

            const rightElement = document.createElement("div");
            rightElement.classList.add("col-md-9", "my-3");

            {
                
                const jumpButton = document.createElement("button");
                jumpButton.classList.add("btn", "btn-primary");
                
                jumpButton.addEventListener("click", () => {
                    carousel.to(idx);
                    carouselElement.scrollIntoView();
                });

                jumpButton.innerText = "Switch";

                rightElement.append(...description, jumpButton);
            }

            wrapperElement.append(leftElement, rightElement);
        }

        return wrapperElement;
    }
}