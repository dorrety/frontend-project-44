import runGame from "../index.js";
import { getRandomInt } from "..";

// Получение случайного мат. знака
const getRandomOperator = () => {
    const arr = ['+', '-', '*'];
    const randomOperator = Math.floor(Math.random() * arr.length);
    const operator = arr[randomOperator];
    return operator;
};

// Правильный ответ для brain-calc
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

const brainCalc = () => {
    randomNumber = getRandomInt(10);
    sign = getRandomOperator();
    const correctAnswer = correctBrainCalcAnswer(firstRandomInt, secondRandomInt).toString();
    const question = `Question: ${firstRandomInt} ${sign} ${secondRandomInt}`;
};



const runBrainCalc = () => {
    runGame(question, correctAnswer);
};

export default runBrainCalc;