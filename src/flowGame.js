import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

export default (description, getQuestionAndCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const roundNum = 3;
  const rounds = (round) => {
    const questionAndCorrectAnswer = getQuestionAndCorrectAnswer();
    const question = car(questionAndCorrectAnswer);
    const correctAnswer = cdr(questionAndCorrectAnswer);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
    if (round >= roundNum) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    rounds(round + 1);
  };
  return rounds(1);
};
