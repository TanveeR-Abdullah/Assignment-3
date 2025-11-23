// ===== Slider =====
// let index = 0;
// const slides = document.querySelectorAll(".slide");

// function changeSlide() {
//   slides.forEach(s => s.style.opacity = 0);
//   slides[index].style.opacity = 1;
//   index = (index + 1) % slides.length;
// }
// setInterval(changeSlide, 2500);

// ===== Mobile Menu =====
const mobileMenu = document.getElementById("mobileMenu");
const mobileNav = document.getElementById("mobileNav");

mobileMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});

// ===== Smooth Scroll =====
document.querySelectorAll("nav a, #mobileNav a").forEach(a => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(a.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    mobileNav.classList.add("hidden");
  });
});
