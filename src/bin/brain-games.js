#!/usr/bin/node
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
console.log('');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
