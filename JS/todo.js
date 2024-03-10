const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const HIDDEN_CLASS = "hidden";

let toDos = []; // 배열로 만들어주기

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // ("저장명" --> 변수명 따로 저장하면 ""빼고, 저장 내용) //배열로 넣으려고 string으로 바꿔줌
}

function deleteToDo(event) {
  const li = event.target.parentElement; //console.dir로 찾아야 함.
  li.remove(); //어떤 x를 지울 지 몰라서 부여해주는 것임.
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 누른 것을 지운다는 것은 누른 게 아닌 다른 id를 남기는 것.
  saveToDos(); //지웠으면 반드시 저장할 것.
  if (toDos.length === 0) {
    //여기는 배열이 아니라서 length.. 사용 gpt천재
    toDoList.classList.add(HIDDEN_CLASS);
  }
}

function paintToDo(newTodo) {
  toDoList.classList.remove(HIDDEN_CLASS);
  const li = document.createElement("li");
  li.id = newTodo.id; //list id랑 같이
  const span = document.createElement("span");
  span.innerText = newTodo.text; //span에 투두 넣기 // object니깐 text 나온다고 표기필요
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
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // 배열에 새로운 투두가 추가되도록
  paintToDo(newTodoObj); //화면에 투두 리스트 보이게
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

// function sexyFilter() {
//   // 반드시 true를 리턴해야, 새 array에서 object유지 가능.
//   // false면 제외하고, 나머지만 새 array에 넣음
// }

// [1, 2, 3, 4].filter(sexyFilter);

// sexyFilter(1); //1
// sexyFilter(2); //1
// sexyFilter(3); //1
// sexyFilter(4); //1
// // 이렇게 항목 수만큼 4번 실행되고, 다 각자 다른 아이템으로 실행됨.
// // if 3일 때 false면 [1, 2, 4]만 됨
//filter 엄청 중요함!!!!!!!!!!!
