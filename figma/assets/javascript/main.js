document.querySelector(".menu-icon").addEventListener("click", function () {
  const navDropdown = document.querySelector(".nav-dropdown");
  navDropdown.classList.toggle("active"); // Thêm/xóa class 'active' để hiển thị/ẩn menu
});
