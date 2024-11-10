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
console.log(smallDevicesMenu.children);
var menuIcon = document.getElementsByClassName("menu-icon")[0];

menuIcon.addEventListener("click", (e) => {
  smallDevicesMenu.classList.toggle("open");
  if (smallDevicesMenu.classList.contains("open")) {
    menuIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    menuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});




// validation
let form = document.getElementById("form");
let userName = document.getElementById("name");
let number = document.getElementById("phone number");
let email = document.getElementById("email");
let question = document.getElementById("question");
let career = document.getElementById("career");
let nameError = document.getElementById("name-error");
let numberError = document.getElementById("num-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (number.value <= 899999999) {
    numberError.innerText =
      "the phone number must start with 9 and containts of 10 digits";
  } else if (userName.value.length < 5) {
    nameError.innerText =
      'type your first and last name and space between: exp "Rawad Hamod"';
  } else if (number.value >= 900000000 && userName.value.length >= 5) {
   
  window.alert(" submitted successfully");
  userName.value = "";
  number.value = "";
  email.value = "";
  career.value = "";
  question.value = "";
  file.value= "";
  numberError.innerText = "";
  nameError.innerText = "";
  }
  
});
