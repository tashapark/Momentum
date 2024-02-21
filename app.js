const calculator = {
  plus: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  powerOf: function (a, b) {
    console.log(a ** b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
};

calculator.plus(1, 1);
calculator.minus(1, 1);
calculator.powerOf(3, 3);
calculator.divide(80, 4);
