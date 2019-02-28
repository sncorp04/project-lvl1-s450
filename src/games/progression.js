import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import gamePattern from '../flowGame';

const progressionLength = 10;
const progressionStr = (first, step, hidden) => {
  let string = '';
  for (let count = 0, digit = first; count < progressionLength; count += 1) {
    string = `${string}${count === hidden ? '..' : digit} `;
    digit += step;
  }
  return string.trim();
};
const conditionGame = () => {
  const firstElement = randomNumber(1, 10);
  const step = randomNumber(1, 10);
  const hiddenElementPosition = randomNumber(0, progressionLength - 1);
  const question = progressionStr(firstElement, step, hiddenElementPosition);
  const correctAnswer = firstElement + step * hiddenElementPosition;
  return cons(question, String(correctAnswer));
};
const description = 'What number is missing in the progression?';
export default () => gamePattern(description, conditionGame);
