const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  //=== true
  console.log("please write a real positive number");
} else if (age < 18) {
  console.log("you are too young");
} else if (age >= 18 && age <= 50) {
  console.log("you can drink");
} else if (age > 50 && age <= 80) {
  console.log("you should exercise");
} else if (age === 100) {
  //순서가 중요하니까 잘 생각할 것. 이게 아래면,절대 안 나타남.
  console.log("wow!");
} else {
  console.log("you can do whatever you want");
}
