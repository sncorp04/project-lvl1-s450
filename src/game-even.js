import readlineSync from 'readline-sync';

const randNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
const game = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!\n`);
  let count = 1;
  const numIter = 3;
  while (count <= numIter) {
    const number = randNum(1, 20);
    const isEven = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== isEven) {
      console.log(`'${answer}' is wrong answer;(. Correct answer was '${isEven}'`);
      console.log(`Let's try again, ${name}`);
      break;
    }
    console.log('Correct!');
    count += 1;
  }
  if (count > numIter) console.log(`Congratulations, ${name}!`);
};
export default game;
