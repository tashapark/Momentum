const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

function onColorChange() {
  const chosenColor1 = colors[Math.floor(Math.random() * colors.length)];
  const chosenColor2 = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundImage = `linear-gradient(.25turn, ${chosenColor1}, ${chosenColor2})`;
}

window.addEventListener("click", onColorChange);

// const colors = [
//   "#ef5777",
//   "#575fcf",
//   "#4bcffa",
//   "#34e7e4",
//   "#0be881",
//   "#f53b57",
//   "#3c40c6",
//   "#0fbcf9",
//   "#00d8d6",
//   "#05c46b",
//   "#ffc048",
//   "#ffdd59",
//   "#ff5e57",
//   "#d2dae2",
//   "#485460",
//   "#ffa801",
//   "#ffd32a",
//   "#ff3f34"
// ];
// const btn = document.querySelector("button");

// function handleClick() {
//   const a = colors[Math.floor(Math.random() * colors.length)];
//   const b = colors[Math.floor(Math.random() * colors.length)];
//   if (a === b) {
//     return handleClick(); //재귀함수 사용해서 다시 자기 부르게
//   }
//   document.body.style.background = `linear-gradient(to left, ${a}, ${b})`;
// }

// btn.addEventListener("click", handleClick);
