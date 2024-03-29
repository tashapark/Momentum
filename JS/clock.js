const clock = document.querySelector("h2#clock");
const dates = document.querySelector("h2#current_date");
// interval: 매번 일어나야 하는 무언가. 예, 매 2초마다 일어날 것.

function getClock() {
  //매 초마다 바뀌어야 하니깐, 인터벌 필요.
  let date = new Date(); // 코드 실행 시점의 시간을 가져옮
  const hours = String(date.getHours()).padStart(2, "0"); //getHours에는 padStart못 씀.. number라서 그래서 바꿔주면 됌. String()에 넣어주);
  const minutes = String(date.getMinutes()).padStart(2, "0");
  // const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours < 12 ? `오전` : `오후`} ${hours}:${minutes}`;
}

getClock(); //호출하고, 아래서 1초 간격 아니면 화면에 바로 안 나타남.
setInterval(getClock, 1000); // (함수, 간격;ms) 내, 5초간격으로 계속 실행
//setTimeout(sayHello, 5000); // 5초 후에 1번만 실행

//padStart() // string을 가진 것보다 더 길게 만들고 싶을 때 사용가능한 함수
// "1".padStart(2, "0") // "01" //그새 생긴듯, 만약에 "1" 즉 1글자를 2글자 길이로 만들고 싶은데 아니면,"0"을 앞에 추가해달라는 거임

//"12".padStart(2, "0") // "12"// 여기는 변화 없음.
//padEnd()는 뒤에 추가함

function getDate() {
  let date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dayName = daysOfWeek[date.getDay()];
  dates.innerText = `${year}년 ${month}월 ${day}일 (${dayName})`;
}

getDate();
