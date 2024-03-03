const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img"); //js에서 html로 만들어 넣을때 사용

bgImage.src = `img/${chosenImage}`;
bgImage.loading = "lazy";
document.body.appendChild(bgImage); //appendChild html에 추가
//append는 가장 뒤에, prepend를 쓰면 가장 위에 오게 할 수 있음.
