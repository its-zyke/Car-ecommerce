document.addEventListener("DOMContentLoaded", function () {
  /* hamburger menu */
  const btn = document.getElementById("menu-btn");
  const nav = document.getElementById("menu");

  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  });

  /* active nav link */
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (link.classList.contains("text-gray-500")) {
        link.classList.remove("text-gray-500");
        link.classList.add("nav-link-active");
      } else {
        link.classList.add("text-gray-500");
      }
    });
  });
});
