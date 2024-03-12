// api키를 활용하는 법을 전혀 모르겠어.........젠장.

// 2. 이 코드는 Iframe Player API를 비동기적으로 로드한다. !!필수!!
const tag = document.createElement("script");

tag.src = "http://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. API 코드를 다운로드 받은 다음에 <iframe>을 생성하는 기능 (youtube player도 더불어)
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "180", //변경가능-영상 높이
    width: "320", //변경가능-영상 너비
    videoId: "FxB6_qaqHlY", //변경-영상ID //이게 지금.. 밑에 플레이 리스트랑 다르면 리스트 영상으로됨
    playerVars: {
      rel: 1, //연관동영상 표시여부(0:표시안함)
      controls: 1, //플레이어 컨트롤러 표시여부(0:표시안함)
      autoplay: 1, //자동재생 여부(1:자동재생 함, mute와 함께 설정)
      mute: 1, //음소거여부(1:음소거 함)
      loop: 1, //반복재생여부(1:반복재생 함)
      playsinline: 1, //iOS환경에서 전체화면으로 재생하지 않게
      playlist: "W0IPdHFSgX8", //재생할 영상 리스트 // 추가하는 법을 모르겠고..
    },
    events: {
      onReady: onPlayerReady, //onReady 상태일 때 작동하는 function이름
      onStateChange: onPlayerStateChange, //onStateChange 상태일 때 작동하는 function이름
    },
  });
}

// 4. API는 비디오 플레이어가 준비되면 아래의 function을 불러올 것이다.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. API는 플레이어의 상태가 변화될 때 아래의 function을 불러올 것이다.
//    이 function은 비디오가 재생되고 있을 때를 가르킨다.(state=1),
//    플레이어는 6초 이상 재생되고 정지되어야 한다.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
