const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const portfolioDropdown = document.querySelector(".portfolio-dropdown");

burger.addEventListener("click", burgerClick);

function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

// Mobile: toggle dropdown når man klikker på Portfolio
if (portfolioDropdown && window.innerWidth < 800) {
  const portfolioLink = portfolioDropdown.querySelector("a");
  portfolioLink.addEventListener("click", (e) => {
    if (window.innerWidth < 800 && nav.classList.contains("active")) {
      e.preventDefault();
      portfolioDropdown.classList.toggle("open");
    }
  });
}

// Luk menuen når man klikker på et link
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!link.parentElement.classList.contains("portfolio-dropdown") || window.innerWidth >= 800) {
      burger.classList.remove("active");
      nav.classList.remove("active");
    }
  });
});

// Luk dropdown ved resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 800) {
    portfolioDropdown.classList.remove("open");
  }
});
