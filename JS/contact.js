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

  if (number.value <= 899999999 && number.value>=1000000000) {
    numberError.innerText =
      "the phone number must start with 9 and containts of 10 digits";
  } else if (userName.value.length < 5) {
    nameError.innerText =
      'type your first and last name and space between: exp "Rawad Hamod"';
  } else if (number.value >= 900000000 && number.value <= 999999999 && userName.value.length >= 5) {
    window.alert(" submitted successfully");
    userName.value = "";
    number.value = "";
    email.value = "";
    career.value = "";
    question.value = "";
    file.value = "";
    numberError.innerText = "";
    nameError.innerText = "";
  }
});

// send alert message after 2s when open contact to check validation
const currentPage = window.location.href.split("/").slice(-1);
if (currentPage == "contact.html") {
  setTimeout(()=>{
window.alert("name must be more than five letters and phone number between 900000000 and 999999999 try to violates this roles and check what will happen")
  },2500)
}
