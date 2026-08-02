const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

console.log(menuBtn);
console.log(navLinks);

menuBtn.addEventListener("click", () => {
    console.log("Menu Clicked");
    navLinks.classList.toggle("active");
});