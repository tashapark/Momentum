const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginBtnClick() {
  const username = loginInput.value;
  if (username === "") {
    alert("please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  }
}

// username이 비어있거나, 너무 길면 x
loginButton.addEventListener("click", handleLoginBtnClick);
