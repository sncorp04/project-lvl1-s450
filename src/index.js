import readlineSync from 'readline-sync';

const welcomeMsg = () => {
  console.log('Welcome to the Brain Games!\n');
  const requestOfName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${requestOfName}!`);
  return requestOfName;
};
export default welcomeMsg;
