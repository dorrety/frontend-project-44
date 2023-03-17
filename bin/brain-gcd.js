#!/usr/bin/env node
import * as readlineSync from 'readline-sync';

const getNOD = (a, b) => {
    for (let i = 0; i < 2; i += 1) {
        while (a && b) {
            a > b ? a %= b : b %= a;
        }
        a += b;
    }
    return a;
};

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

const brainGcd = (firstRandomInt, secondRandomInt) => {
    console.log('Welcome to the BrainGcd - game!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    let correctSum = 0;
    console.log('Find the greatest common divisor of given numbers.');
    for (let i = 0; i < 3; i += 1) {
        firstRandomInt = getRandomInt(15);
        secondRandomInt = getRandomInt(15);
        let expression = `${firstRandomInt} ${secondRandomInt}`;
        let correctAnswer = getNOD(firstRandomInt, secondRandomInt).toString();
        console.log('Question: ' + expression);
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

brainGcd();