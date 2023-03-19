#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

const brainEven = (randomNumber) => {
    console.log('Welcome to the BrainEven - game!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    let correctAnswer = '';
    let correctSum = 0;
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        randomNumber = getRandomInt(100);
        correctAnswer =  randomNumber % 2 === 0 ? 'yes' : 'no';
        console.log('Question: ' + randomNumber);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer === correctAnswer) {
            correctSum += 1;
            console.log('Correct!');
            if (correctSum === 3) {
                console.log(`Congratulations, ${userName}!`);
            }
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
            break;
        }
    }
};

brainEven();