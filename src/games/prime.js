import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import gamePattern from '../flowGame';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let count = 2; count <= number / 2; count += 1) {
    if (number % count === 0) {
      return false;
    }
  }
  return true;
};
const conditionGame = () => {
  const question = randomNumber(1, 1000);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(String(question), correctAnswer);
};
const description = 'Answer "yes" if again number is prime. Otherwise answer "no".';
export default () => gamePattern(description, conditionGame);
