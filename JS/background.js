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
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
  "21.jpg",
  "22.jpg",
  "23.jpg",
  "24.jpg",
  "25.jpg",
  "26.jpg",
  "27.jpg",
  "28.jpg",
  "29.jpg",
];

function bgImageChange() {
  // 이전 이미지 요소를 찾아 제거
  const previousImage = document.querySelector(".background-image");
  if (previousImage) {
    previousImage.remove();
  }

  const chosenImage = images[Math.floor(Math.random() * images.length)];
  const bgImage = document.createElement("img"); //js에서 html로 만들어 넣을때 사용

  bgImage.src = `img/${chosenImage}`;
  bgImage.loading = "lazy";
  bgImage.classList.add("background-image");

  // 새 이미지를 body에 추가
  document.body.appendChild(bgImage);
  //appendChild html에 추가
  //append는 가장 뒤에, prepend를 쓰면 가장 위에 오게 할 수 있음.
}

bgImageChange();

// 30분마다 배경 이미지 변경
setInterval(bgImageChange, 30 * 60 * 1000);
