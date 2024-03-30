const WEATHER_API = config.apikey;
function onGeoOk(position) {
  //js 가 채우도록 포지션 비워놓기
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API}&lang=kr&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
  //js가 url을 부름 //fetch는 응답에 시간이 좀 걸림, 그래서 then 써야ㅑ 함.
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 걍 위치 정보 줄 것임.
// getCurrentPosition() 2개 인자 필요
// 1. 모든 게 잘 됐을 때 실행될 함수, 2. 에러 발생 시 실행될 함수
