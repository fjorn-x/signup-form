const password = document.querySelector("#password");
const confirm_pass = document.querySelector("#confirm_password");
const submit = document.querySelector(".create-account");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  if (password.value !== confirm_pass.value) {
    e.preventDefault();
    alert("Passwords did not match");
  }
});
