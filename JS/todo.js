const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const routineForm = document.getElementById("routine-form");
const routineInput = routineForm.querySelector("#routine-form input");
const routineList = document.getElementById("routine-list");

const TODOS_KEY = "todos";
const ROUTINE_KEY = "routines";
const HIDDEN_CLASS = "hidden";

let toDos = []; // 배열로 만들어주기
let routineToDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // ("저장명" --> 변수명 따로 저장하면 ""빼고, 저장 내용) //배열로 넣으려고 string으로 바꿔줌
}

function saveRoutines() {
  localStorage.setItem(ROUTINE_KEY, JSON.stringify(routineToDos)); // ("저장명" --> 변수명 따로 저장하면 ""빼고, 저장 내용) //배열로 넣으려고 string으로 바꿔줌
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

function deleteRoutines(event) {
  const li = event.target.parentElement; //console.dir로 찾아야 함.
  li.remove(); //어떤 x를 지울 지 몰라서 부여해주는 것임.
  routineToDos = routineToDos.filter(
    (routine) => routine.id !== parseInt(li.id)
  ); // 누른 것을 지운다는 것은 누른 게 아닌 다른 id를 남기는 것.
  saveRoutines(); //지웠으면 반드시 저장할 것.
  if (routineToDos.length === 0) {
    //여기는 배열이 아니라서 length.. 사용 gpt천재
    routineList.classList.add(HIDDEN_CLASS);
  }
}

// 페이지가 로드될 때 저장된 todo 리스트를 확인하여 체크박스의 상태를 복원
window.addEventListener("DOMContentLoaded", () => {
  const savedToDos = localStorage.getItem(TODOS_KEY);
  if (savedToDos !== null) {
    toDos = JSON.parse(savedToDos);
    // 각 todo 항목에 대해 체크박스 상태를 확인하여 복원
    toDos.forEach((todo) => {
      const checkbox = document.getElementById(`checkbox-${todo.id}`);
      if (checkbox && todo.checked) {
        checkbox.checked = true;
        const text = checkbox.nextElementSibling;
        text.style.textDecorationLine = "line-through";
      }
    });
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const savedRoutines = localStorage.getItem(ROUTINE_KEY);
  if (savedRoutines !== null) {
    routineToDos = JSON.parse(savedRoutines);
    // 각 todo 항목에 대해 체크박스 상태를 확인하여 복원
    routineToDos.forEach((routine) => {
      const checkbox = document.getElementById(`checkbox-${routine.id}`);
      if (checkbox && routine.checked) {
        checkbox.checked = true;
        const text = checkbox.nextElementSibling;
        text.style.textDecorationLine = "line-through";
      }
    });
  }
});

function checkToDo(event) {
  //체크박스 줄 그어지는 것 만들어주려고
  const checkbox = event.target; //무조건 따로 정의를 해줄 것
  const text = checkbox.nextElementSibling; // 체크박스 다음 요소인 텍스트 가져오기
  if (checkbox.checked) {
    text.style.textDecorationLine = "line-through";
    // checkbox.setAttribute("id", "checkedBox"); //id 추가
    // const myCheckbox = document.getElementById("checkedBox");
    // myCheckbox.checked = true;
    //체크박스에 체크 추가되게 하는 것.
  } else {
    text.style.textDecorationLine = "none";
    // const myCheckbox = document.getElementById("checkedBox");
    // myCheckbox.checked = false;
  }
  // 변경된 체크박스 상태를 로컬 스토리지에 저장
  const todoId = checkbox.parentElement.id; // 부모 요소인 li의 id 가져오기
  const index = toDos.findIndex((todo) => todo.id.toString() === todoId); // 해당 id를 가진 todo의 인덱스 찾기
  if (index !== -1) {
    toDos[index].checked = checkbox.checked; // 해당 todo의 checked 속성 업데이트
    saveToDos(); // 변경된 todo 리스트를 다시 저장
  }
}

function checkRoutines(event) {
  //체크박스 줄 그어지는 것 만들어주려고
  const checkbox = event.target; //무조건 따로 정의를 해줄 것
  const text = checkbox.nextElementSibling; // 체크박스 다음 요소인 텍스트 가져오기
  if (checkbox.checked) {
    text.style.textDecorationLine = "line-through";
  } else {
    text.style.textDecorationLine = "none";
  }

  // 변경된 체크박스 상태를 로컬 스토리지에 저장
  const routineId = checkbox.parentElement.id; // 부모 요소인 li의 id 가져오기
  const index = routineToDos.findIndex(
    (routine) => routine.id.toString() === routineId
  ); // 해당 id를 가진 todo의 인덱스 찾기
  if (index !== -1) {
    routineToDos[index].checked = checkbox.checked; // 해당 todo의 checked 속성 업데이트
    saveRoutines(); // 변경된 todo 리스트를 다시 저장
  }
}

function paintToDo(newTodo) {
  toDoList.classList.remove(HIDDEN_CLASS);
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.id = `checkbox-${newTodo.id}`;
  checkBox.addEventListener("change", checkToDo);
  const li = document.createElement("li");
  li.id = newTodo.id; //list id랑 같이
  const span = document.createElement("span");
  span.innerText = newTodo.text; //span에 투두 넣기 // object니깐 text 나온다고 표기필요
  const button = document.createElement("button");
  button.innerText = "✖️";
  button.addEventListener("click", deleteToDo);
  li.appendChild(checkBox);
  li.appendChild(span); //li에 span 들어감
  li.appendChild(button); //li에 버튼 넣기
  toDoList.appendChild(li); // todo리스트에 li넣어줌
}

function paintRoutine(newRoutine) {
  routineList.classList.remove(HIDDEN_CLASS);
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.id = `checkbox-${newRoutine.id}`;
  checkBox.addEventListener("change", checkRoutines);
  const li = document.createElement("li");
  li.id = newRoutine.id; //list id랑 같이
  const span = document.createElement("span");
  span.innerText = newRoutine.text; //span에 투두 넣기 // object니깐 text 나온다고 표기필요
  const button = document.createElement("button");
  button.innerText = "✖️";
  button.addEventListener("click", deleteRoutines);
  li.appendChild(checkBox);
  li.appendChild(span); //li에 span 들어감
  li.appendChild(button); //li에 버튼 넣기
  routineList.appendChild(li); // todo리스트에 li넣어줌
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

function handleRoutineSubmit(event) {
  event.preventDefault();
  const newRoutine = routineInput.value; // input의 현재 value를 새로운 변수에 복사하는 것. 뒤에서 뭐 하든 상관 없음
  routineInput.value = ""; //엔터치고 비워 지도록
  const newRoutineObj = {
    text: newRoutine,
    id: Date.now(),
  };
  routineToDos.push(newRoutineObj); // 배열에 새로운 투두가 추가되도록
  paintRoutine(newRoutineObj); //화면에 투두 리스트 보이게
  saveRoutines();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
routineForm.addEventListener("submit", handleRoutineSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  //ls에서 가져온 string을 js object로 변경
  // 대개 각 항목별로 뭘 하기 때문에 객체로 변경하는 게 중요함.
  toDos = parsedToDos; // 새로 추가된 리스트로로 덮혀써지지 않게, let으로 변경
  parsedToDos.forEach(paintToDo); // 배열 각각의 항목에 대해 함수 실행 시킴. 항목 개수만큼 실행
  // foreach는 어떤 아이템을 사용하는 지 모르면 의미 없음.
}

const savedRoutineToDos = localStorage.getItem(ROUTINE_KEY);

if (savedRoutineToDos !== null) {
  const parsedRoutineToDos = JSON.parse(savedRoutineToDos);
  routineToDos = parsedRoutineToDos;
  parsedRoutineToDos.forEach(paintRoutine);
}
