import { cons } from 'hexlet-pairs';

const randNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const gcd = (number1, number2) => {
  let firstNum = Math.abs(number1);
  let secondNum = Math.abs(number2);
  while (firstNum !== secondNum) {
    if (firstNum > secondNum) firstNum -= secondNum;
    else secondNum -= firstNum;
  }
  return firstNum;
};
const conditionGame = () => {
  const number1 = randNum(1, 100);
  const number2 = randNum(1, 100);
  const corrAnswer = gcd(number1, number2);
  return cons(`${number1} ${number2}`, corrAnswer);
};
const description = 'Find the gratest common divisor of given numbers';
const game = cons(description, conditionGame);
export default game;
