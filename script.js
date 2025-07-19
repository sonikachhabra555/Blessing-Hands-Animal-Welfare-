// Basic script for interactivity

document.addEventListener("DOMContentLoaded", function () {
  console.log("Blessing Hands website loaded!");

  // Highlight navigation when clicked
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Scroll to section on click
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
