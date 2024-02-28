const creates = document.querySelector("#play-form .createNum");
const guess = document.querySelector("#play-form .guessNum");
const plays = document.querySelector("#play-form");
const answers = document.querySelector("#answer");
const winLose = document.querySelector("#winLose");

const CREATE_NUM_KEY = "reateNums";
const GUESS_NUM_KEY = "guessNums";
const HIDDEN_CLASSNAME = "hidden";

function onCreateSubmit(event) {
  event.preventDefault();
  const createNums = creates.value;
  const guessNums = guess.value;
  localStorage.setItem(CREATE_NUM_KEY, createNums);
  localStorage.setItem(GUESS_NUM_KEY, guessNums);
}

function onRandomNums() {
  const savedCreateNum = parseInt(localStorage.getItem(CREATE_NUM_KEY));
  const savedGuessNum = parseInt(localStorage.getItem(GUESS_NUM_KEY));
  const machinChose = Math.ceil(Math.random() * `${savedCreateNum}`);
  answers.innerHTML = `You chose: ${savedGuessNum}, the machine chose: ${machinChose}.`;
  answers.classList.remove(HIDDEN_CLASSNAME);

  if (savedGuessNum !== machinChose) {
    winLose.innerHTML = "You lost!";
  } else {
    winLose.innerHTML = "You won!";
  }
  //  <strong>`${userGuess === random ? "You won!" : "You lost!"}`</strong>
  // 이렇게 쓰는 것도 훨씬 짧아지구..
}

plays.addEventListener("submit", onCreateSubmit);
plays.addEventListener("submit", onRandomNums);
// 굳이 이벤트 2개로 나눌 필요 없이, 함수 하나로 끝낼 수 있어...
// 아직 리턴을 잘 쓰지 못하겟어..
//----------

// const guessForm = document.getElementById("js-guess");
// const result = document.getElementById("js-result");
// const maxNumber = document.getElementById("maxNumber");

// function handleGuessSubmit(e) {
//   e.preventDefault();
//   const guessInput = guessForm.querySelector("input");
//   if (guessInput.value === "" && maxNumber === "") {
//     return;
//   }
//   const max = maxNumber.value;
//   const random = Math.ceil(Math.random() * max);
//   const userGuess = parseInt(guessInput.value, 10);
//   const resultSpan = result.querySelector("span");
//   resultSpan.innerHTML = `
//   You chose: ${userGuess},
//   the machine chose: ${random}.<br />
//   <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
//   `;
// }

// guessForm.addEventListener("submit", handleGuessSubmit);
