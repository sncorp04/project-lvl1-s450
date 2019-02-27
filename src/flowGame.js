import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';
import { conditionGame } from './games/calc';

const game = (descGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${descGame}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  for (let round = 1; round <= 3; round += 1) {
    const condGame = conditionGame();
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
export default game;
