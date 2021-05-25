// Initial loading
window.onload = showNavbar;

// Variables
var hamburgerButton = document.getElementById("hamburgerButton");
var navLinks = document.getElementById("navLinks");

// Hamburger button onclick
hamburgerButton.addEventListener("click", showNavbar);

// Function to show/hide navbar
function showNavbar() {
    if (navLinks.style.visibility === "hidden") {
        navLinks.style.visibility = "visible";
        hamburgerButton.src = "images/menu-selected.png"
    } else {
        navLinks.style.visibility = "hidden";
        hamburgerButton.src = "images/menu.png"
    }
}