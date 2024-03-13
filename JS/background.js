const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
];

function bgImageChange() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  const bgImage = document.createElement("img"); //js에서 html로 만들어 넣을때 사용

  bgImage.src = `img/${chosenImage}`;
  bgImage.loading = "lazy";
  bgImage.classList.add("background-image");

  // 이전 이미지 요소를 찾아 제거
  const previousImage = document.querySelector(".background-image");
  if (previousImage) {
    previousImage.remove();
  }

  // 새 이미지를 body에 추가
  document.body.appendChild(bgImage);
  //appendChild html에 추가
  //append는 가장 뒤에, prepend를 쓰면 가장 위에 오게 할 수 있음.
}

bgImageChange();

// 30분마다 배경 이미지 변경
setInterval(bgImageChange, 30 * 60 * 1000);
