const form = document.querySelector("#form");
const name = document.querySelector("#name").value;
const lastname = document.querySelector("#lastname").value;
const color = document.querySelector("#color").value;
const email = document.querySelector("#email").value;
const password = document.querySelector("#password").value;
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
    let messages = [];
    if (name.value === "" || name.value == null) {
        messages.push("Name is required");
    }

    if (password.value.length <= 6) {
        messages.push("Password must be longer than 6 characters");
    }

    if (password.value.length >= 20) {
        messages.push("Password must be less than 20 characters");
    }

    if (password.value === "password") {
        messages.push("Password cannot be password");
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(", ");
    }
});
