import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import gamePattern from '../flowGame';

const isEven = number => number % 2 === 0;
const description = 'Answer "yes" if number even otherwise answer "no".';
const getQuestionAndCorrectAnswer = () => {
  const question = randomNumber(1, 30);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(String(question), correctAnswer);
};
export default () => gamePattern(description, getQuestionAndCorrectAnswer);
