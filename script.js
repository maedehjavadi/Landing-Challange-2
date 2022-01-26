const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".Menu");
console.log(hamburger)
hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}