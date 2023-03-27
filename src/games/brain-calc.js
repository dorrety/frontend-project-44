import runGame from '../index.js';
import getRandomInt from '../randomInt.js';

let correctAnswer;

const rules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const arr = ['+', '-', '*'];
  const randomOperator = Math.floor(Math.random() * arr.length);
  const operator = arr[randomOperator];
  return operator;
};

const correctBrainCalcAnswer = (operator, a, b) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
  }
  return operator;
};

const getData = () => {
  const firstRandomInt = getRandomInt(0, 10);
  const secondRandomInt = getRandomInt(0, 10);
  const operator = getRandomOperator();
  correctAnswer = correctBrainCalcAnswer(operator, firstRandomInt, secondRandomInt).toString();
  const question = `Question: ${firstRandomInt} ${operator} ${secondRandomInt}`;
  return [question, correctAnswer];
};

const runBrainCalc = () => {
  runGame(rules, getData);
};

export default runBrainCalc;
