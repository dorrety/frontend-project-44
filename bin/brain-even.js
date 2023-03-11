#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

const question = (randomNumber) => {
    let correctAnswer = '';
    for (let i = 0; i < 3; i += 1) {
        randomNumber = getRandomInt(100);
        correctAnswer =  randomNumber % 2 === 0 ? 'yes' : 'no';
        console.log('Question: ' + randomNumber);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}`);
            break;
        }
    }
    console.log(`Congratulations, ${userName}`);
};

console.log(question(100));