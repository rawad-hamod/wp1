// a button to scroll up
let btn = document.getElementById("btnup");
window.onscroll = function () {
  if (scrollY >= 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

// change the tranporatery of the nav menu on scrolling
let header = document.getElementById("header");

window.onscroll = function () {
  if (scrollY < 200) {
    header.style.backgroundColor = "rgba(255,255,255)";
  } else {
    header.style.backgroundColor = "rgba(0,0,0,0.5)";
  }
};

// hide and display small devices menu
var smallDevicesMenu = document.getElementsByClassName("small-devices-menu")[0];

var menuIcon = document.getElementsByClassName("menu-icon")[0];

menuIcon.addEventListener("click", (e) => {
  smallDevicesMenu.classList.toggle("open");
  if (smallDevicesMenu.classList.contains("open")) {
    menuIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    menuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});

