#!/usr/bin/env node
import * as readlineSync from 'readline-sync';

let sign;
let correctAnswer;

const getRandomOperator = () => {
    const arr = ["+", "-", "*"];
    const randomOperator = Math.floor(Math.random() * arr.length);
    const operator = arr[randomOperator];
    return operator;
};

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

const correctBrainCalcAnswer = (a, b) => {
    if (sign === '+') {
        correctAnswer = a + b;
    } else if (sign === '-') {
        correctAnswer = a - b;
    } else {
        correctAnswer = a * b;
    }
    return correctAnswer;
};

const brainCalc = (firstRandomInt, secondRandomInt) => {
    console.log('Welcome to the BrainCalc - game!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    let correctSum = 0;
    console.log('What is the result of the expression?');
    for (let i = 0; i < 3; i += 1) {
        firstRandomInt = getRandomInt(10);
        secondRandomInt = getRandomInt(10);
        sign = getRandomOperator();
        let expression = `${firstRandomInt} ${sign} ${secondRandomInt}`;
        correctAnswer = correctBrainCalcAnswer(firstRandomInt, secondRandomInt).toString();
        console.log('Question: ' + expression);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer === correctAnswer) {
            correctSum += 1;
            console.log('Correct!');
            if (correctSum === 3) {
                console.log(`Congratulations, ${userName}!`);
            }
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}`);
            break;
        }
    }
};

brainCalc();
