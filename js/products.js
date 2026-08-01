// ================================
// Wishlist Toggle
// ================================

const hearts = document.querySelectorAll(".wishlist");

hearts.forEach(button => {

    button.addEventListener("click", () => {

        const icon = button.querySelector("i");

        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");

        button.classList.toggle("active");

    });

});