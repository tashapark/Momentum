const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; // 배열로 만들어주기

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // ("저장명" --> 변수명 따로 저장하면 ""빼고, 저장 내용) //배열로 넣으려고 string으로 바꿔줌
}

function deleteToDo(event) {
  const li = event.target.parentElement; //console.dir로 찾아야 함.
  li.remove(); //어떤 x를 지울 지 몰라서 부여해주는 것임.
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo; //span에 투두 넣기
  const button = document.createElement("button");
  button.innerText = "✖️";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); //li에 span 들어감
  li.appendChild(button); //li에 버튼 넣기
  toDoList.appendChild(li); // todo리스트에 li넣어줌
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사하는 것. 뒤에서 뭐 하든 상관 없음
  toDoInput.value = ""; //엔터치고 비워 지도록
  toDos.push(newTodo); // 배열에 새로운 투두가 추가되도록
  paintToDo(newTodo); //화면에 투두 리스트 보이게
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  //ls에서 가져온 string을 js object로 변경
  // 대개 각 항목별로 뭘 하기 때문에 객체로 변경하는 게 중요함.
  toDos = parsedToDos; // 새로 추가된 리스트로로 덮혀써지지 않게, let으로 변경
  parsedToDos.forEach(paintToDo); // 배열 각각의 항목에 대해 함수 실행 시킴. 항목 개수만큼 실행
  // foreach는 어떤 아이템을 사용하는 지 모르면 의미 없음.
}

// function sayHello(item) {
//   console.log("this is the turn of", item);
// } // arrow function 아니면 걍 이렇게 쓰면 됨.
//parsedToDos.forEach((item) => console.log("this is the turn of", item));
// 배열 각각의 항목에 대해 함수 실행 시킴. 항목 개수만큼 실행
//함수 굳이 안 만들고 치는 방법. => arrow function
