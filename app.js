const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginBtnClick() {
  console.log(username);
}

// username이 비어있거나, 너무 길면 x
loginButton.addEventListener("click", handleLoginBtnClick);
