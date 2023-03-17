#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
const game = readlineSync.question('What shall we play? (brain-even, brain-gcd, brain-calc, brain-prime, brain-progression)\n');