const roles = [
  "IT Student",
  "Python Developer",
  "Web Developer",
  "Cybersecurity Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const typing = document.getElementById("typing");
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typing.textContent = currentRole.substring(0, charIndex++);
  } else {
    typing.textContent = currentRole.substring(0, charIndex--);
  }

  let speed = isDeleting ? 60 : 120;

  if (!isDeleting && charIndex > currentRole.length) {
    isDeleting = true;
    speed = 1500;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
const sections = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});

// =========================
// Back To Top Button
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
// =========================
// Mobile Menu
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});