import { cons } from 'hexlet-pairs';

const randNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const isEven = number => number % 2 === 0;
const description = 'Answer "yes" if number even otherwise answer "no".';
const conditionGame = () => {
  const question = randNum(1, 30);
  const corrAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, corrAnswer);
};
const game = cons(description, conditionGame);
export default game;
