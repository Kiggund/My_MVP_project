// script.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get references to navigation links
    const homeLink = document.querySelector("a[href='#home']");
    const featuresLink = document.querySelector("a[href='#features']");
    const aboutLink = document.querySelector("a[href='#about']");

    // Add event listeners for navigation
    homeLink.addEventListener("click", scrollToSection);
    featuresLink.addEventListener("click", scrollToSection);
    aboutLink.addEventListener("click", scrollToSection);
});

// Function to scroll smoothly to a section
function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
}