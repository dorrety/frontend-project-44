import runGame from '../index.js';
import getRandomInt from '../randomInt.js';

const rules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const arr = ['+', '-', '*'];
  const randomOperator = getRandomInt(0, 2);
  const operator = arr[randomOperator];
  return operator;
};

const getCalc = (operator, a, b) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default: throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const getData = () => {
  const firstRandomInt = getRandomInt(0, 10);
  const secondRandomInt = getRandomInt(0, 10);
  const operator = getRandomOperator();
  const correctAnswer = getCalc(operator, firstRandomInt, secondRandomInt).toString();
  const question = `Question: ${firstRandomInt} ${operator} ${secondRandomInt}`;
  return [question, correctAnswer];
};

const runBrainCalc = () => {
  runGame(rules, getData);
};

export default runBrainCalc;
