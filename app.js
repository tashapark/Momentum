const h1 = document.querySelector("div.hello:first-child h1");

function handleh1Click() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}
h1.addEventListener("click", handleh1Click); //("event", functionName) js에게 실행을 넘겨주는 것

function handleMouseenter() {
  h1.innerText = "mouse is here";
}

function handleMouseleave() {
  h1.innerText = "Mouse is gone";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no wifi");
}

function handleWindowOnline() {
  alert("all good");
}
h1.onclick = handleh1Click; //이렇게 쓰는 것도 가능함.
h1.addEventListener("mouseenter", handleMouseenter);
h1.addEventListener("mouseleave", handleMouseleave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
