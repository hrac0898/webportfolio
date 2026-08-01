// ================================
// Mobile Navigation
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// ================================
// Mobile Dropdown
// ================================

const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", function () {

    if (window.innerWidth <= 992) {

        this.classList.toggle("open");

    }

});