const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  // argument들어감. 첫번째 인자는 앞으로 벌어질 일들에 대한 정보를 제공.
  // 공간만 있으면 걍 알아서 함수 진행함.
  // 아무것도 안 넣어도 되지만, 넣으면 js가 알아서 진행해 주니깐, 주로 event를 넣음.
  event.preventDefault();
  console.log(loginInput.value); // 새로고침 안되고 출력됨.
}
loginForm.addEventListener("submit", onLoginSubmit);
// submit은 엔터치거나, 버튼 누를 때 발생
//submit 디폴트가 새로고침임. so, 못하게 해야 함.
//onLoginSubmit에 () 안 붙여도 js가 위의 알규먼트를 보고 알아서 실행 해줌.
