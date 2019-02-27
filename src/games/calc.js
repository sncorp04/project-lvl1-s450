import { cons } from 'hexlet-pairs';

const randNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const conditionGame = () => {
  const number1 = randNum(1, 30);
  const number2 = randNum(1, 30);
  const operNum = randNum(1, 3);
  let condition;
  switch (operNum) {
    case 1:
      condition = cons(`${number1} * ${number2}`, number1 * number2);
      break;
    case 2:
      condition = cons(`${number1} + ${number2}`, number1 + number2);
      break;
    case 3:
      condition = cons(`${number1} - ${number2}`, number1 - number2);
      break;
    default:
      break;
  }
  return condition;
};
const description = 'What is the result of the expression?';
const calc = cons(description, conditionGame);
export default calc;
