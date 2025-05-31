document.addEventListener("DOMContentLoaded", function () {
  // Load header
  fetch("header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
      setActiveMenuLink("header-placeholder");
    });

  // Load sidebar (nếu có)
  const sidebar = document.getElementById("sidebar-placeholder");
  if (sidebar) {
    fetch("sidebar.html")
      .then((res) => res.text())
      .then((data) => {
        sidebar.innerHTML = data;
        setActiveMenuLink("sidebar-placeholder");
      });
  }

  // Hàm tự động đánh dấu link active dựa vào URL hiện tại
  function setActiveMenuLink(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const links = container.querySelectorAll("a.nav-link, a.list-group-item");
    const currentUrl = window.location.pathname.split("/").pop();

    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === currentUrl || (href === "index.html" && currentUrl === "")) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
});
