import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import gamePattern from '../flowGame';

const progressionLength = 10;
const progressionString = (first, step, hidden) => {
  const iter = (count, digit, acc) => {
    if (count === progressionLength) {
      return acc;
    }
    const newAcc = `${acc}${count === hidden ? '..' : digit} `;
    return iter(count + 1, digit + step, newAcc);
  };
  return iter(0, first, '').trim();
};
const conditionGame = () => {
  const firstElement = randomNumber(1, 10);
  const step = randomNumber(1, 10);
  const hiddenElementPosition = randomNumber(0, progressionLength - 1);
  const question = progressionString(firstElement, step, hiddenElementPosition);
  const correctAnswer = firstElement + step * hiddenElementPosition;
  return cons(question, String(correctAnswer));
};
const description = 'What number is missing in the progression?';
export default () => gamePattern(description, conditionGame);
