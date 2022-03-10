"use strict";
(() => {
    /**
     * @type {HTMLFormElement}
     */
    const contactForm = document.querySelector("form#contact-form");

    /**
     * @type {HTMLDivElement}
     */
    const toast = document.querySelector("div#contact-toast");
    const t = new bootstrap.Toast(toast);

    let lock = false;

    toast.addEventListener("hide.bs.toast", () => {
        lock = false;
    });

    toast.addEventListener("show.bs.toast", () => {
        lock = true;
    });

    contactForm.addEventListener("submit", (ev) => {
        ev.preventDefault();

        if (!lock) t.show();
    });
})();