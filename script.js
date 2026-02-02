// Order button click
const orderButton = document.querySelector("#orderBtn");

orderButton.addEventListener("click", function () {
    alert("Thank you for your order! ☕ Your coffee is on the way.");
});

// Smooth scrolling for navbar links
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Change header color on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#54392b";
    } else {
        header.style.backgroundColor = "#6f4e37";
    }
});

// Auto update year in footer
const year = new Date().getFullYear();
document.querySelector("footer p").innerText =
    "© " + year + " Coffee Bliss. All rights reserved.";
