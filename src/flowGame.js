import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const gamePattern = (conditionGame) => {
  console.log('Welcome to the Brain Games!');
  const description = car(conditionGame);
  console.log(`${description}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const roundNum = 3;
  for (let round = 1; round <= roundNum; round += 1) {
    const condGame = cdr(conditionGame)();
    const condition = car(condGame);
    const correct = cdr(condGame);
    console.log(`Question: ${condition}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(answer) !== String(correct)) {
      console.log(`'${answer}' is wrong answer;(. Correct answer was '${correct}'`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default gamePattern;
