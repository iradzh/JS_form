const ourForm = document.querySelector("#form");

ourForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.querySelector("#firstname").value;
  const lastName = document.querySelector("#lastname").value;
  const myEmail = document.querySelector("#email").value;
  const myColor = document.querySelector("#color").value;

  alert(
    `My name is ${name} ${lastName},\nthe email is ${myEmail}.\nAnd my favorite color is ${myColor}`
  );
});
