#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandomInt, brainEven } from './brain-even.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
const game = readlineSync.question('What shall we play? (brain-even, brain-gcd, brain-calc, brain-prime, brain-progression)\n');
switch (game) {
    case 'brain-even': console.log(brainEven(100));
    case 'brain-gcd': console.log(brainGcd());
    case 'brain-calc': brain-calc;
    case 'brain-prime': brain-prime;
    case 'brain-progression': brain-progression;
}