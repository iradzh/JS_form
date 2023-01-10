const form = document.querySelector("#form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const color = document.querySelector("#color");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errorElement = document.getElementById("error");
const submitButton = document.querySelector("#submit_btn");

let format = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

// first name validation

firstName.addEventListener("input", function (e) {
  if (firstName.value && format.test(firstName.value)) {
    errorElement.innerText = "Your name could not contain special characters";
    firstName.classList.remove("is-success");
    firstName.classList.add("is-danger");
    return;
  }
  if (
    firstName.value[0] &&
    firstName.value[0] !== firstName.value[0].toUpperCase()
  ) {
    errorElement.innerText =
      "The first name should start with a capital letter";
    firstName.classList.remove("is-success");
    firstName.classList.add("is-danger");
    return;
  }
  errorElement.innerText = "";
  firstName.classList.remove("is-danger");

  if (firstName.value.length < 3 && firstName.value.length > 0) {
    errorElement.innerText = "Your name must be at least 3 characters long";
    firstName.classList.remove("is-success");
    firstName.classList.add("is-danger");
  }
  if (firstName.value.length >= 3) {
    errorElement.innerText = "";
    firstName.classList.remove("is-danger");
    firstName.classList.add("is-success");
  }
});

// last name validation

lastName.addEventListener("input", function (e) {
  if (lastName.value && format.test(lastName.value)) {
    errorElement.innerText = "Your name could not contain special characters";
    lastName.classList.remove("is-success");
    lastName.classList.add("is-danger");
    return;
  }
  if (
    lastName.value[0] &&
    lastName.value[0] !== lastName.value[0].toUpperCase()
  ) {
    errorElement.innerText = "The last name should start with a capital letter";
    lastName.classList.remove("is-success");
    lastName.classList.add("is-danger");
    return;
  }
  errorElement.innerText = "";
  lastName.classList.remove("is-danger");

  if (lastName.value.length < 3 && lastName.value.length > 0) {
    errorElement.innerText = "Your name must be at least 3 characters long";
    lastName.classList.remove("is-success");
    lastName.classList.add("is-danger");
  }
  if (lastName.value.length >= 3) {
    errorElement.innerText = "";
    lastName.classList.remove("is-danger");
    lastName.classList.add("is-success");
  }
});

//password validation

password.addEventListener("input", function (e) {
  if (password.value.length <= 6) {
    password.classList.remove("is-success");
    password.classList.add("is-danger");
    errorElement.innerText = "Password should be longer than 6 characters";
  } else if (password.value.length > 6 && password.value.length < 20) {
    password.classList.remove("is-danger");
    password.classList.add("is-success");
    errorElement.innerText = "";
  } else if (password.value.length >= 20) {
    password.classList.remove("is-success");
    password.classList.add("is-danger");
    errorElement.innerText = "Password should be shorter than 20 characters";
  }
});

//changing button, if use fulfilled the form (add in condition color and email)

form.addEventListener("input", function (e) {
  if (
    firstName.classList.contains("is-success") &&
    lastName.classList.contains("is-success") &&
    password.classList.contains("is-success")
  ) {
    submitButton.removeAttribute("disabled");
    submitButton.classList.add("is-success", "is-light");
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    `My name is ${firstName.value} ${lastName.value},\nthe email is ${email.value}.\nAnd my favorite color is ${color.value}`
  );
});
