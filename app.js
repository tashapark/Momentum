const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//2번 반복되니깐, 변수 해줌. 대문자로 쓰는 것은 string으로만 저장하고 싶으르 때 사용.
//즉 중요 정보는 아님. 반복 쓸 떄 오타를 줄이기 위해서 변수로 하면, 에러 확인 가능

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME); // 폼이 사라지게 클래스 .hidden이 나타나도록
  const username = loginInput.value; //입력 값 저장
  localStorage.setItem(USERNAME_KEY, username); // LS에 저장 ("저장될 이름", 변수 명)
  greeting.innerText = `hello ${username}`; // h1 값을 입력 내용으로 변경
  greeting.classList.remove(HIDDEN_CLASSNAME); // hidden을 보이게 없애줌.
}

// 첫번째 인자만 넣어주면 알아서 js가 계산함.
// ()넣지 말 것. 넣으면 직접 실행한다는 건데 그게 아니라 js가 하도록

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // LS 에 없으면 form 보여주기
  loginForm.classList.remove(HIDDEN_CLASSNAME); //form 보이게 만들어주기
  loginForm.addEventListener("submit", onLoginSubmit); //유저이름 입력할 수 있도록
} else {
  // greeting 보여주기
  greeting.innerText = `hello ${savedUsername}`; //먼저 그리팅 넣고
  greeting.classList.remove(HIDDEN_CLASSNAME); // 히든 없애기.. 보이게
}
