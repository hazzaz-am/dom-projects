// console.log("logged in");


document.getElementById("login-btn").addEventListener("click", function () {
  const emailField = document.getElementById("email-field");
  const emailValue = emailField.value;
  // console.log(emailValue)
  const passField = document.getElementById("password-field");
  const passValue = passField.value;
  if (emailValue === "hazzaz@gmail.com" && passValue === "123456") {
    // console.log('congrats')
    window.location.href = "/mudaraba-system/mudaraba.html";
  }
});
