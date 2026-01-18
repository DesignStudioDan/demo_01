const header = document.getElementById("header");
const backToTop = document.getElementById("js-back-to-top");
const hamburger = document.getElementById("js-hamburger");
const nav = document.getElementById("js-nav");
const navLinks = document.querySelectorAll(".nav-list a");

function toggleMenu() {
  hamburger.classList.toggle("active");
  nav.classList.toggle("is-open");
}

hamburger.addEventListener("click", toggleMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("is-open")) {
      toggleMenu();
    }
  });
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY > 300) {
    header.classList.add("header-visible");
    header.classList.remove("header-hidden");
  } else {
    header.classList.remove("header-visible");
    header.classList.add("header-hidden");
  }
  if (scrollY > 500) {
    backToTop.classList.add("is-visible");
  } else {
    backToTop.classList.remove("is-visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const objects = document.querySelectorAll(".fadeUp");

const cb = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("displayed");
      observer.unobserve(entry.target);
    }
  });
};

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const io = new IntersectionObserver(cb, options);

objects.forEach((object) => {
  io.observe(object);
});
