const form = document.querySelector("#form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const color = document.querySelector("#color");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errorElement = document.getElementById("error");
const submitButton = document.querySelector("#submit_btn");
const userBox = document.querySelector("#user_container");
const userInfoLine = document.querySelector("#user_info");
const resetButton = document.querySelector("#reset_btn");
const closeButton = document.querySelector("#close_btn");

// regular expressions
let format = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let formatEmail = /\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/;

// new image
const newImg = document.createElement("img");
newImg.src = "https://random.imagecdn.app/500/200";
newImg.classList.add("mt-4");

//removing userBox

userBox.style.display = "none";

// first name validation

firstName.addEventListener("input", function (e) {
    if (firstName.value && format.test(firstName.value)) {
        errorElement.innerText =
            "Your name could not contain special characters";
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
        errorElement.innerText =
            "Your name could not contain special characters";
        lastName.classList.remove("is-success");
        lastName.classList.add("is-danger");
        return;
    }
    if (
        lastName.value[0] &&
        lastName.value[0] !== lastName.value[0].toUpperCase()
    ) {
        errorElement.innerText =
            "The last name should start with a capital letter";
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
    if (password.value.length < 6 || password.value.length > 20) {
        password.classList.remove("is-success");
        password.classList.add("is-danger");
        errorElement.innerText =
            "Password should be between 6 and 20 characters";
    } else {
        password.classList.remove("is-danger");
        password.classList.add("is-success");
        errorElement.innerText = "";
    }
});

// color validation

color.value = "#7a7a7a";
color.addEventListener("change", function (e) {
    if (color.value !== "#7a7a7a") {
        color.classList.remove("is-danger");
        color.classList.add("is-success");
        errorElement.innerText = "";
        console.log("color success", color.value);
    } else {
        color.classList.remove("is-success");
        color.classList.add("is-danger");
        errorElement.innerText = "Pick your favorite color";
        console.log("color fail");
    }
});

// email validation

email.addEventListener("input", function (e) {
    if (email.value && !formatEmail.test(email.value)) {
        errorElement.innerText = "Provide a valid email format.";
        email.classList.remove("is-success");
        email.classList.add("is-danger");
        return;
    } else if (formatEmail.test(email.value)) {
        email.classList.add("is-success");
        email.classList.remove("is-danger");
        errorElement.innerText = "";
    } else {
        email.classList.remove("is-danger");
        email.classList.remove("is-success");
        errorElement.innerText = "";
    }
});

//changing button, if use fulfilled the form (add in condition color and email)

form.addEventListener("input", function (e) {
    if (
        firstName.classList.contains("is-success") &&
        lastName.classList.contains("is-success") &&
        color.classList.contains("is-success") &&
        email.classList.contains("is-success") &&
        password.classList.contains("is-success")
    ) {
        submitButton.removeAttribute("disabled");
        submitButton.classList.add("is-success", "is-light");
    }
});

// reset button

resetButton.onclick = function () {
    console.log("reset");
    firstName.value = "";
    firstName.classList.remove("is-success", "is-danger");
    lastName.value = "";
    lastName.classList.remove("is-success", "is-danger");
    color.value = "#7a7a7a";
    color.classList.remove("is-success", "is-danger");
    email.value = "";
    email.classList.remove("is-success", "is-danger");
    password.value = "";
    password.classList.remove("is-success", "is-danger");
    userBox.style.display = "none";
    userInfoLine.innerText = "";
};

// close button

closeButton.onclick = function (e) {
    userBox.style.display = "none";
    userInfoLine.innerText = "";
};

// submit behavior

form.addEventListener("submit", function (e) {
    console.log(e);
    e.preventDefault();
    userBox.style.display = "block";
    userInfoLine.innerText = `A wild ${lastName.value} appears, one of a curious kind, called ${firstName.value}. They carry a mailbox at ${email.value} full of random things, what will the Pandora's mailbox today bring?`;

    // append img
    newImg.style.border = `solid 1rem ${color.value}`;
    newImg.style.borderRadius = "2px";
    userInfoLine.insertAdjacentElement("afterend", newImg);
});
