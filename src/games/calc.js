import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import gamePattern from '../flowGame';

const conditionGame = () => {
  const number1 = randomNumber(1, 30);
  const number2 = randomNumber(1, 30);
  const operNum = randomNumber(1, 3);
  let question;
  let correctAnswer;
  switch (operNum) {
    case 1:
      question = `${number1} * ${number2}`;
      correctAnswer = number1 * number2;
      break;
    case 2:
      question = `${number1} + ${number2}`;
      correctAnswer = number1 + number2;
      break;
    case 3:
      question = `${number1} - ${number2}`;
      correctAnswer = number1 - number2;
      break;
    default:
      break;
  }
  return cons(question, String(correctAnswer));
};
const description = 'What is the result of the expression?';
export default () => gamePattern(description, conditionGame);
