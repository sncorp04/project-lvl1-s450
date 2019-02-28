import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

export default (description, conditionGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const roundNum = 3;
  for (let round = 1; round <= roundNum; round += 1) {
    const condition = conditionGame();
    const question = car(condition);
    const correctAnswer = cdr(condition);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
