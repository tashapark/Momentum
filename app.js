const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  powerOf: function (a, b) {
    return a ** b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};
//return을 쓰면 콘솔 창이 아닌 화면에 나타나게 할 수 있고, 앞에 계산된 거 가져다가 할 수도 있음.
const plusResult = calculator.plus(8, 1); // console.log 하고 싶으면 변수 명을 입력하면 됨.
const minusResult = calculator.minus(plusResult, 1);
const multiplyResult = calculator.multiply(10, minusResult);
const divideResult = calculator.divide(multiplyResult, plusResult);
const powerResult = calculator.powerOf(divideResult, minusResult);
