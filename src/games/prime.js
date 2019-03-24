import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import gamePattern from '../flowGame';

const isPrime = (number) => {
  const iter = (count, acc) => {
    if (count >= number / 2 || acc) {
      return !acc;
    }
    const newAcc = number < 2 || number % count === 0;
    return iter(count + 1, newAcc);
  };
  return iter(2, false);
};
const getQuestionAndCorrectAnswer = () => {
  const question = randomNumber(1, 1000);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(String(question), correctAnswer);
};
const description = 'Answer "yes" if again number is prime. Otherwise answer "no".';
export default () => gamePattern(description, getQuestionAndCorrectAnswer);
