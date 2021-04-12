
import '@testing-library/jest-dom/extend-expect';
import Calculatate from '../logic/calculatate';

const button1 = '+/-';
const button2 = '+';
const button3 = '-';
const button4 = 'X';
const button5 = '/';
const button6 = 'AC';
const calculatorObj = { total: 15, next: 20, operation: button1 };
const calculatorObj2 = { total: 15, next: 20, operation: button2 };
const calculatorObj3 = { total: 15, next: 20, operation: button3 };
const calculatorObj4 = { total: 15, next: 20, operation: button4 };
const calculatorObj5 = { total: 15, next: 5, operation: button5 };

test('add the given numbers', () => {
  const answer = (Calculatate(calculatorObj2, button2));
  const answer2 = Calculatate(answer, '=');
  expect(answer2).toEqual({ next: null, operation: null, total: '35' });
});

test('subtract the given numbers', () => {
  const answer = (Calculatate(calculatorObj3, button3));
  const answer2 = Calculatate(answer, '=');
  expect(answer2).toEqual({ next: null, operation: null, total: '-5' });
});

test('divide the given numbers', () => {
  const answer = (Calculatate(calculatorObj5, button5));
  const answer2 = Calculatate(answer, '=');
  expect(answer2).toEqual({ next: null, operation: null, total: '3' });
});
