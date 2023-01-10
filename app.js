const form = document.querySelector("#form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const color = document.querySelector("#color");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errorElement = document.getElementById("error");
const submitButton = document.querySelector("submit_btn");

//validation of the First Name
firstName.addEventListener("input", function (e) {
  if (
    firstName.value[0] &&
    firstName.value[0] === firstName.value[0].toUpperCase()
  ) {
    firstName.classList.remove("is-danger");
    firstName.classList.add("is-success");
  }
  if (
    firstName.value[0] &&
    firstName.value[0] !== firstName.value[0].toUpperCase()
  ) {
    firstName.classList.remove("is-success");
    firstName.classList.add("is-danger");
  }
});

//validation of the Last Name
lastName.addEventListener("input", function (e) {
  if (
    lastName.value[0] &&
    lastName.value[0] === lastName.value[0].toUpperCase()
  ) {
    lastName.classList.remove("is-danger");
    lastName.classList.add("is-success");
  }
  if (
    lastName.value[0] &&
    lastName.value[0] !== lastName.value[0].toUpperCase()
  ) {
    lastName.classList.remove("is-success");
    lastName.classList.add("is-danger");
  }
});

//validation of the Email -

// here should not be input, i've tried change - no succes, i am keep thinking
form.addEventListener("input", function (e) {
  if (
    firstName.classList.contains("is_succes") &&
    lastName.classList.contains("is_succes") &&
    email.classList.contains("is_succes")
  ) {
    submitButton.removeAttribute("disabled");
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    `My name is ${firstName.value} ${lastName.value},\nthe email is ${myEmail.value}.\nAnd my favorite color is ${myColor.value}`
  );
});

// form.addEventListener("submit", (e) => {
//   let messages = [];
//   if (name.value === "" || name.value == null) {
//     messages.push("Name is required");
//   }

//   if (password.value.length <= 6) {
//     messages.push("Password must be longer than 6 characters");
//   }

//   if (password.value.length >= 20) {
//     messages.push("Password must be less than 20 characters");
//   }

//   if (password.value === "password") {
//     messages.push("Password cannot be password");
//   }

//   if (messages.length > 0) {
//     e.preventDefault();
//     errorElement.innerText = messages.join(", ");
//   }
// });
