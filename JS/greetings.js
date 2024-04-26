const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//2번 반복되니깐, 변수 해줌. 대문자로 쓰는 것은 string으로만 저장하고 싶으르 때 사용.
//즉 중요 정보는 아님. 반복 쓸 떄 오타를 줄이기 위해서 변수로 하면, 에러 확인 가능
let savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  event.preventDefault();
  let username = loginInput.value; // 새로운 사용자 이름 저장
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  loginForm.classList.add(HIDDEN_CLASSNAME); // 폼이 사라지게 클래스 .hidden이 나타나도록 // h1 값을 입력 내용으로 변경 // hidden을 보이게 없애줌.
}

function onRenameToggle() {
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  buttonRename.classList.add(HIDDEN_CLASSNAME); // 로그인 폼 나오면, 수정 버튼 감추기
  greeting.classList.toggle(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
  // 위 아래 반복되서 함수로 만들어서 뺐음
  greeting.innerText = `Hello ${username} :)`; //먼저 그리팅 넣고
  greeting.classList.remove(HIDDEN_CLASSNAME); // 히든 없애기.. 보이게
  buttonRename.classList.remove(HIDDEN_CLASSNAME); // 그리팅이 나타날 때 수정 버튼 보이기
}

//이름 수정하는 버튼
const buttonRename = document.createElement("button");
buttonRename.classList.add("buttonRename");
buttonRename.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
buttonRename.addEventListener("click", onRenameToggle);
document.body.appendChild(buttonRename);
buttonRename.classList.add(HIDDEN_CLASSNAME); // 수정 버튼 감추기

if (savedUsername === null) {
  // LS 에 없으면 form 보여주기
  loginForm.classList.remove(HIDDEN_CLASSNAME); //form 보이게 만들어주기
  loginForm.addEventListener("submit", onLoginSubmit); //유저이름 입력할 수 있도록
} else {
  // greeting 보여주기
  paintGreetings(savedUsername); //변수만 savedUsername로 바꿔줌
  loginForm.addEventListener("submit", onLoginSubmit); //아오......이걸 안 해줘서...난리 난리...
}
