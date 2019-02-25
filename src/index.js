import readlineSync from 'readline-sync';

const welcomeMsg = () => {
  console.log('Welcome to the Brain Games!');
  console.log('');
  const requestOfName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${requestOfName}!`);
};
export default welcomeMsg;
