"use strict";
(() => {
    const endOfURLRegex = /\/?(?:index\.html)?$/;
    const doMenu = links => {
        for (const link of links) {
            if (!link.href) continue;
            if (link.href.replace(endOfURLRegex, "") === window.location.href.replace(endOfURLRegex, "")) {
                link.classList.add("active");
                break;
            } else {
                link.classList.remove("active");
            }
        }
    };

    document.addEventListener("DOMContentLoaded", () => {
        const navbar = document.querySelector("nav.navbar");
        if (!navbar) return;
        const links = navbar.querySelectorAll("a.nav-link");
        doMenu(links);
    });
})();