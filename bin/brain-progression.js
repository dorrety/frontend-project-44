#!/usr/bin/env node
import * as readlineSync from 'readline-sync';

let firstRandomInt;
let stepProgression;
let hiddenNumber;
let correctAnswer;

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

const getProgression = () => {
    let arr = [];
    firstRandomInt = getRandomInt(15);
    stepProgression = getRandomInt(10);
    const hideIndex = getRandomInt(10);
    const endProgression = firstRandomInt + stepProgression * 10;
    if (stepProgression === 0) {
        stepProgression = getRandomInt(10);
    }
    for (let i = firstRandomInt; i < endProgression; i += stepProgression) {
        arr.push(i);
    }
    hiddenNumber = arr.splice(hideIndex, 1, '..');
    return arr.join(' ');
};

const brainProgression = () => {
    console.log('Welcome to the BrainProgression - game!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    let correctSum = 0;
    let arr = [];
    let firstRandomInt = getRandomInt(15);
    let stepProgression = getRandomInt(10);
    let hideIndex = getRandomInt(10);
    console.log('What number is missing in the progression?');
    for (let i = 0; i < 3; i += 1) {
        console.log(`Question: ${getProgression()}`);
        correctAnswer = hiddenNumber.toString();
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

brainProgression();