import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import gamePattern from '../flowGame';

const gcd = (numberOne, numberTwo) => {
  if (numberOne === numberTwo) {
    return numberOne;
  }
  const firstNumber = Math.abs(numberOne - numberTwo);
  const secondNumber = numberTwo > numberOne ? numberOne : numberTwo;
  return gcd(firstNumber, secondNumber);
};
const conditionGame = () => {
  const number1 = randomNumber(1, 100);
  const number2 = randomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = gcd(number1, number2);
  return cons(question, String(correctAnswer));
};
const description = 'Find the gratest common divisor of given numbers';
export default () => gamePattern(description, conditionGame);
