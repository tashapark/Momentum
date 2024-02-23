const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  //클릭해서 색 바뀌었을 때 class가 바뀜. list를 써서 clicked만 나타났다 사라지게 하는 것
  //const clickedClass = "clicked"; //오타 에러를 줄이기 위해서. 변수를 잘 못쓰면 에러로 알려줌. 오타는 안 알려주지만
  // if (h1.classList.contains(clickedClass)) {
  //   h1.classList.remove(clickedClass);
  // } else {
  //   h1.classList.add(clickedClass);
  // }
  h1.classList.toggle("clicked"); //토글을.. 찬양해라, ("classname")가 없으면 넣어주고 있으면 뺴줌
}

h1.addEventListener("click", handleTitleClick);

// class가 이미 있으면 sexy-font 이것처럼. js는 무시하고 걍 동작함. 이전 클래스는 날아가는 것임.
// 그대로 킵하고 싶음...  sexy-font를 지우지 않고..
//so, classlist 사용할 것. list로 사용 가능하니깐, classname은 대체해버림.
// 리스트에서 contain은 명시한 클래스가 html 클래스에 포함되는 지 알려주는 것.
