// script.js
console.log("Website Bode đã sẵn sàng!");
// Load HTML partials
function includeHTML(id, file) {
  fetch(file)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  includeHTML("header-placeholder", "partials/header.html");
  includeHTML("sidebar-placeholder", "partials/sidebar.html");

  // Highlight nav active
  const currentPath = window.location.pathname.split("/").pop();
  setTimeout(() => {
    document.querySelectorAll(".nav-link").forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      }
    });
  }, 100); // Delay để chờ load xong sidebar
});
