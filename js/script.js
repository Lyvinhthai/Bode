document.addEventListener("DOMContentLoaded", function () {
  // Load header
  fetch("header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
      setActiveMenuLink("header-placeholder");
    });
  // Load bo-de-tu.html
  fetch("http://localhost:3000/api/chua")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("danh-sach-chua");
      data.forEach((item) => {
        const div = document.createElement("div");
        div.className = "chua-item";
        div.innerHTML = `
        <h3>${item.ten_chua}</h3>
        <p><strong>Địa chỉ:</strong> ${item.dia_chi}</p>
        <p><strong>Năm xây dựng:</strong> ${item.nam_xay_dung}</p>
        <p><strong>Trụ trì:</strong> ${item.tru_tri}</p>
        <p>${item.mo_ta}</p>
        ${item.hinh_anh ? `<img src="${item.hinh_anh}" width="300">` : ""}
        <hr/>
      `;
        container.appendChild(div);
      });
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
