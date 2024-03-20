// api키를 활용하는 법을 전혀 모르겠어.........젠장.

// 2. 이 코드는 Iframe Player API를 비동기적으로 로드한다. !!필수!!
const tag = document.createElement("script");

const HIDDEN_TOGGLE = "hidden";

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. API 코드를 다운로드 받은 다음에 <iframe>을 생성하는 기능 (youtube player도 더불어)
let player1;
let player2; //두 번째 플레이어 추가
function onYouTubeIframeAPIReady() {
  player1 = new YT.Player("player1", {
    videoId: "gWfFWVQW13E", //변경-영상ID //리스본 카페.
    playerVars: {
      rel: 1, //연관동영상 표시여부(0:표시안함)
      controls: 1, //플레이어 컨트롤러 표시여부(0:표시안함)
      autoplay: 1, //자동재생 여부(1:자동재생 함, mute와 함께 설정)
      mute: 1, //음소거여부(1:음소거 함)
      loop: 1, //반복재생여부(1:반복재생 함)
      playsinline: 1, //iOS환경에서 전체화면으로 재생하지 않게
      // playlist:
      //  "AKWlyl8_sdM,4Hm56tqcOc,s56deFmiIh0,PfqRyzUuHnM,gOjkGLBZhZo,4YUuA-hPDZA,FDI8d7jm4zU,BJ2U4t1jruA,wkFL8Oa0p30,o3ORqZYUccE,POsucxJPxqM,VFosjkiy7bw",
      //이러다 공허하게 //내가 죽으려고 //산나비 //말포이 공부중 //내 비평가들 //바닷가 카페 //나비 보베따
      //바람이 물었다 //벅찬 날//쇼팽 왈츠//웬즈데이 //포기할 이유가 없다 //시절인연
      list: "PLRubaLN0jh9IH9EAxbE1ijc12Ilg-QB-Q",
      shuffle: 1,
      //재생할 영상 리스트 //
      color: "white",
      enablejsapi: 1,
      disablekb: 0,

      events: {
        onReady: onPlayerReady, //onReady 상태일 때 작동하는 function이름
        onStateChange: onPlayerStateChange, //onStateChange 상태일 때 작동하는 function이름
      },
    },
  });
  player1.getIframe().classList.add("hidden");

  player2 = new YT.Player("player2", {
    videoId: "Mya0LYrRgX4", //변경-영상ID //가끔 연락하던 애
    playerVars: {
      rel: 1, //연관동영상 표시여부(0:표시안함)
      controls: 1, //플레이어 컨트롤러 표시여부(0:표시안함)
      autoplay: 1, //자동재생 여부(1:자동재생 함, mute와 함께 설정)
      mute: 1, //음소거여부(1:음소거 함)
      loop: 1, //반복재생여부(1:반복재생 함)
      playsinline: 1, //iOS환경에서 전체화면으로 재생하지 않게
      list: "PLRubaLN0jh9JCZcTIRRNBvUq3Srx9o9SN", //플브랑 비아이
      shuffle: 1,
      //재생할 영상 리스트 //
      color: "white",
      enablejsapi: 1,
      disablekb: 0,

      events: {
        onReady: onPlayerReady, //onReady 상태일 때 작동하는 function이름
        onStateChange: onPlayerStateChange, //onStateChange 상태일 때 작동하는 function이름
      },
    },
  });
  player2.getIframe().classList.add("hidden");
}

// 5. API는 플레이어의 상태가 변화될 때 아래의 function을 불러올 것이다.
//    이 function은 비디오가 재생되고 있을 때를 가르킨다.(state=1),
//    플레이어는 6초 이상 재생되고 정지되어야 한다.
// 플레이어 상태가 변경 될 때 실행
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
//6. 재생 정지 함수
function stopVideo() {
  if (player1) player1.stopVideo(); //player1이 존재하는 경우에만 정지
  if (player2) player2.stopVideo();
}

// 6. 버튼 생성 및 이벤트 핸들러 함수
const button1 = document.createElement("button");
button1.classList.add("button1");
button1.innerText = "ASMR 📚";
button1.addEventListener("click", playlistButton1);

const button2 = document.createElement("button");
button2.classList.add("button2");
button2.innerText = "주인장 pick 🎶";
button2.addEventListener("click", playlistButton2);
// 8. 버튼을 body에 추가
document.body.appendChild(button1);
document.body.appendChild(button2);

// 7. 버튼 클릭 시 플레이어 표시/숨김 토글
function playlistButton1() {
  player1.getIframe().classList.toggle(HIDDEN_TOGGLE);
}

function playlistButton2() {
  player2.getIframe().classList.toggle(HIDDEN_TOGGLE);
}
// 4. API는 비디오 플레이어가 준비되면 아래의 function을 불러올 것이다.
function onPlayerReady(event) {
  event.target.setVolume(50);
  event.target.playVideo();
}
