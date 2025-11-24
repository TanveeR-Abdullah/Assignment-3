

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

document.getElementById("sendBtn").addEventListener("click", function (e) {
  e.preventDefault();

  alert("✔ Your message has been successfully sent!")

})








