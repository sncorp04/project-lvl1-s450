import { cons } from 'hexlet-pairs';

const randNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const progressionStr = (first, step, miss) => {
  let string = '';
  const numOfDig = 10;
  for (let count = 1, digit = first; count <= numOfDig; count += 1) {
    string = `${string}${count === miss ? '..' : digit} `;
    digit += step;
  }
  return string;
};
const conditionGame = () => {
  const firstIndex = Math.abs(randNum(1, 10));
  const step = randNum(1, 10);
  const indexMiss = Math.abs(randNum(1, 10));
  const condition = progressionStr(firstIndex, step, indexMiss);
  const corrAnswer = firstIndex + step * (indexMiss - 1);
  return cons(condition, corrAnswer);
};
const description = 'What number is missing in the progression?';
const game = cons(description, conditionGame);
export default game;
