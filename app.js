const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
//2번 반복되니깐, 변수 해줌. 대문자로 쓰는 것은 string으로만 저장하고 싶으르 때 사용.
//즉 중요 정보는 아님

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME); // 폼이 사라지게 클래스 .hidden이 나타나도록

  const username = loginInput.value; //입력 값 저장
  greeting.innerText = `hello ${username}`; // h1 값을 입력 내용으로 변경
  greeting.classList.remove(HIDDEN_CLASSNAME); // hidden을 보이게 없애줌.
}

loginForm.addEventListener("submit", onLoginSubmit);
// 첫번째 인자만 넣어주면 알아서 js가 계산함.
// ()넣지 말 것. 넣으면 직접 실행한다는 건데 그게 아니라 js가 하도록
