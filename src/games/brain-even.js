import runGame from '../index.js';
import getRandomInt from '../randomInt.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const getData = () => {
  const randomNumber = getRandomInt(1, 100);
  const question = `Question: ${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runBrainEven = () => {
  runGame(rules, getData);
};

export default runBrainEven;
