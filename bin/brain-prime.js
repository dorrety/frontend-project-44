#!/usr/bin/env node
import * as readlineSync from 'readline-sync';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

const getPrime = (number) => {
    if (number < 2) {
        return 'no';
    }
    for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
            return 'no';
        }
    }
    return 'yes';
};

const brainPrime = (randomNumber) => {
    console.log('Welcome to the BrainPrime - game!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    let correctSum = 0;
    let correctAnswer;
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        randomNumber = getRandomInt(10);
        correctAnswer = getPrime(randomNumber);
        console.log('Question: ' + randomNumber);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer === correctAnswer) {
            correctSum += 1;
            console.log('Correct!');
            if (correctSum === 3) {
                console.log(`Congratulations, ${userName}`);
            }
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}`);
            break;
        }
    }
};

brainPrime();