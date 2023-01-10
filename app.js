const form = document.querySelector("#form");
const name = document.querySelector("#name").value;
const lastname = document.querySelector("#lastname").value;
const color = document.querySelector("#color").value;
const email = document.querySelector("#email").value;
const password = document.querySelector("#password").value;

ourForm.addEventListener("submit", function (e) {
    e.preventDefault();

    alert(
        `My name is ${name} ${lastName},\nthe email is ${myEmail}.\nAnd my favorite color is ${myColor}`
    );
});
