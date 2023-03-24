import runGame, { getRandomInt } from '../index.js';

let question;
let correctAnswer;
let firstRandomInt;
let secondRandomInt;
let sign;

const rules = 'What is the result of the expression?';

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
  firstRandomInt = getRandomInt(10);
  secondRandomInt = getRandomInt(10);
  sign = getRandomOperator();
  correctAnswer = correctBrainCalcAnswer(firstRandomInt, secondRandomInt).toString();
  question = `Question: ${firstRandomInt} ${sign} ${secondRandomInt}`;
  return [question, correctAnswer];
};

const runBrainCalc = () => {
  runGame(rules, brainCalc);
};

export default runBrainCalc;
