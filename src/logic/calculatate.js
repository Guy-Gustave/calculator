import operate from './operate';

export default function calculatate(calculator, buttonName) {
  let { total, next, operation } = calculator;

  const operations = ['+', '-', 'x', '÷', '%'];
  // const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (buttonName === '+/-') {
    if (next) {
      next = +next * -1;
    }
    total = +total * -1;
  }

  if (buttonName === '%') {
    if (next) {
      next *= 0.01;
    } else {
      total *= 0.01;
    }
  }

  if (buttonName === '=') {
    if (next) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }

  if (operations.includes(buttonName)) {
    operation = buttonName;
  }

  if (buttonName === '.') {
    if (next && !next.toString().contains('.')) {
      next = `${next.toString()}.`;
    }
  }

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  return { total, next, operation };
}
