const navLinks = document.getElementsByClassName("navlinks")[0];
const toggleBtn = document.getElementsByClassName("togglebtn")[0];

toggleBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
