import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let total;
  const x = new Big(numberOne);
  const y = new Big(numberTwo);
  switch (operation) {
    case '-':
      return x.minus(y).toString();
    case '+':
      return x.plus(y).toString();
    case 'x':
      return x.mul(y).toString();
    case '%':
      return x.mod(100).toString();
    default:
      if (y === '0') {
        total = 'Infinity';
      } else {
        total = x.div(y).toString();
      }
      return total;
  }
}
