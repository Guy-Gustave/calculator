import operate from './operate';

let operationTotal = null;

export default function Calculatate(calculator, buttonName) {
  let { total, next, operation } = calculator;

  const operations = ['+', '-', 'x', '÷', '%'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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
      const op = operate(total, next, operation);
      total = op.toString();
      operationTotal = op.toString();
      next = null;
      operation = null;
    }
  }

  if (operations.includes(buttonName)) {
    if (operationTotal) {
      operationTotal = null;
      operation = buttonName;
    }
    if (next === null) {
      operation = buttonName;
    }
  }

  if (buttonName === '.') {
    if (total && operationTotal) {
      operationTotal = null;
      total = `${total.toString()}.`;
    } else if (operation === null && total === null) {
      total = '0.';
    } else if (operation === null && operationTotal === null && total && !total.toString().includes('.')) {
      total = `${total.toString()}.`;
    } else if (next && !next.toString().includes('.')) {
      next = `${next.toString()}.`;
    } else if (total && operation && next === null) {
      next = '0.';
    }
  }

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (numbers.includes(buttonName)) {
    if (total && operationTotal) {
      operationTotal = null;
      total = buttonName;
    } else if (operation === null && total === null) {
      total = buttonName;
    } else if (operation === null && operationTotal === null && total) {
      total = `${total}${buttonName}`;
    } else if (next) {
      next = `${next}${buttonName}`;
    } else {
      next = buttonName;
    }
  }

  return { total, next, operation };
}
