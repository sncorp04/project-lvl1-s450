import readlineSync from 'readline-sync';

const randNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const isEven = number => number % 2 === 0;
const game = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  for (let round = 1; round <= 3; round += 1) {
    const question = randNum(1, 20);
    const corrAnswer = isEven(question) ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== corrAnswer) {
      console.log(`'${answer}' is wrong answer;(. Correct answer was '${corrAnswer}'`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default game;
