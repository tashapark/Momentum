const videoForm = document.querySelector("#video-form");
const playlistForm = document.querySelector("#playlist-form");
const videoInput = document.querySelector("#video-form input");
const playlistInput = document.querySelector("#playlist-form input");

const HIDDEN_TOGGLE = "hidden";
const VIDEO_ID = "userVideo";
const PL_ID = "userPL";

// 3. API 코드를 다운로드 받은 다음에 <iframe>을 생성하는 기능 (youtube player도 더불어)
let player1; //asmr
let player2; //플브
let player3; // 밴드
let player4; // 예준 플리
let player5; // user
// 2. 이 코드는 Iframe Player API를 비동기적으로 로드한다. !!필수!!
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//입력 버튼누르면 플리 입력창 보이게
videoForm.classList.add(HIDDEN_TOGGLE);
playlistForm.classList.add(HIDDEN_TOGGLE);

// playlist입력 버튼 만들기
const buttonSubmit = document.createElement("button");
buttonSubmit.classList.add("buttonSubmit"); //for css
buttonSubmit.innerText = "playlist 입력";
buttonSubmit.addEventListener("click", playlistButtonToggle);
document.body.appendChild(buttonSubmit);

function playlistButtonToggle() {
  videoForm.classList.toggle(HIDDEN_TOGGLE);
  playlistForm.classList.toggle(HIDDEN_TOGGLE);

  const savedUserVideo = localStorage.getItem(VIDEO_ID);
  const savedUserPL = localStorage.getItem(PL_ID);

  if (savedUserVideo === null && savedUserPL === null) {
    // LS 에 없으면 form 보여주기
    alert(
      `1. 유튜브에서 재생 목록 만들기
    2. 재생 목록을 비공개 --> 공개로 전환 
    3. 화면의 url 링크 창을 확인하면 v="여기서 & 앞까지 복사" --> video-ID
    4. 화면의 url 링크 창을 확인하면 list="끝까지 혹은 재생 중이면 & 앞까지 복사" ---> PL-ID
    5. 엔터 치기 
    6. 이후부터의 재생목록 수정은 유튜브 해당 재생목록에서 가능
    7. 수정 이후에 페이지 새로고침 할 것 :)`
    );
  }
}

//LS저장, 입력
function onUserPlaylistSubmit(event) {
  event.preventDefault();

  const userPL = playlistInput.value;
  const userVideo = videoInput.value;
  localStorage.setItem(VIDEO_ID, userVideo);
  localStorage.setItem(PL_ID, userPL);
  onYouTubeIframeAPIReady();
}

videoForm.addEventListener("submit", onUserPlaylistSubmit); //유저이름 입력할 수 있도록
playlistForm.addEventListener("submit", onUserPlaylistSubmit); //유저이름 입력할 수 있도록

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
  player1.getIframe().classList.add(HIDDEN_TOGGLE);

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
  player2.getIframe().classList.add(HIDDEN_TOGGLE);

  player3 = new YT.Player("player3", {
    videoId: "RowlrvmyFEk", //변경-영상ID //웰컴 투더쇼
    playerVars: {
      rel: 1, //연관동영상 표시여부(0:표시안함)
      controls: 1, //플레이어 컨트롤러 표시여부(0:표시안함)
      autoplay: 1, //자동재생 여부(1:자동재생 함, mute와 함께 설정)
      mute: 1, //음소거여부(1:음소거 함)
      loop: 1, //반복재생여부(1:반복재생 함)
      playsinline: 1, //iOS환경에서 전체화면으로 재생하지 않게
      list: "PLRubaLN0jh9KG4rmmC92a0uNo1aV4LIrx", //봄은 밴드지
      setShuffle: 1,
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
  player3.getIframe().classList.add(HIDDEN_TOGGLE);

  player4 = new YT.Player("player4", {
    videoId: "hlrP9GXTx8", //변경-영상ID //다이브 인투 유
    playerVars: {
      rel: 1, //연관동영상 표시여부(0:표시안함)
      controls: 1, //플레이어 컨트롤러 표시여부(0:표시안함)
      autoplay: 1, //자동재생 여부(1:자동재생 함, mute와 함께 설정)
      mute: 1, //음소거여부(1:음소거 함)
      loop: 1, //반복재생여부(1:반복재생 함)
      playsinline: 1, //iOS환경에서 전체화면으로 재생하지 않게
      list: "PLRubaLN0jh9IZdWBQFIVehghrOKEbEQs7", //
      setShuffle: 1,
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
  player4.getIframe().classList.add(HIDDEN_TOGGLE);

  const savedUserVideo = localStorage.getItem(VIDEO_ID);
  const savedUserPL = localStorage.getItem(PL_ID);

  if (savedUserVideo !== null && savedUserPL !== null) {
    player5 = new YT.Player("player5", {
      videoId: savedUserVideo, //변경-영상ID //유저입력
      playerVars: {
        rel: 1, //연관동영상 표시여부(0:표시안함)
        controls: 1, //플레이어 컨트롤러 표시여부(0:표시안함)
        autoplay: 1, //자동재생 여부(1:자동재생 함, mute와 함께 설정)
        mute: 1, //음소거여부(1:음소거 함)
        loop: 1, //반복재생여부(1:반복재생 함)
        playsinline: 1, //iOS환경에서 전체화면으로 재생하지 않게
        list: savedUserPL, //유저플리
        setShuffle: 1,
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
    player5.getIframe().classList.add(HIDDEN_TOGGLE);
  }
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
  if (player3) player3.stopVideo();
  if (player4) player4.stopVideo();
  if (player5) player5.stopVideo();
}

// 6. 버튼 생성 및 이벤트 핸들러 함수
const button1 = document.createElement("button");
button1.classList.add("button1");
button1.innerText = "ASMR 📚";
button1.addEventListener("click", playlistButton1);

const button2 = document.createElement("button");
button2.classList.add("button2");
button2.innerText = "플브 💙💜💗❤️🖤";
button2.addEventListener("click", playlistButton2);

const button3 = document.createElement("button");
button3.classList.add("button3");
button3.innerText = "봄은 밴드지 🌸💗";
button3.addEventListener("click", playlistButton3);

const button4 = document.createElement("button");
button4.classList.add("button4");
button4.innerText = "예준 플리 💙🫧🐬";
button4.addEventListener("click", playlistButton4);

const button5 = document.createElement("button");
button5.classList.add("button5");
button5.innerText = "당신의 pick🎶";
button5.addEventListener("click", playlistButton5);

// 8. 버튼을 body에 추가
document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);
document.body.appendChild(button4);
document.body.appendChild(button5);

// 7. 버튼 클릭 시 플레이어 표시/숨김 토글
function playlistButton1() {
  player1.getIframe().classList.toggle(HIDDEN_TOGGLE);
}

function playlistButton2() {
  player2.getIframe().classList.toggle(HIDDEN_TOGGLE);
}

function playlistButton3() {
  player3.getIframe().classList.toggle(HIDDEN_TOGGLE);
}

function playlistButton4() {
  player4.getIframe().classList.toggle(HIDDEN_TOGGLE);
}

function playlistButton5() {
  player5.getIframe().classList.toggle(HIDDEN_TOGGLE);
}

// 4. API는 비디오 플레이어가 준비되면 아래의 function을 불러올 것이다.
function onPlayerReady(event) {
  event.target.setVolume(50);
  event.target.playVideo();
}
