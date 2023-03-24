import runGame, { getRandomInt } from '../index.js';

let question;
let correctAnswer;
let randomNumber;

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  randomNumber = getRandomInt(100);
  question = `Question: ${randomNumber}`;
  correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runBrainEven = () => {
  runGame(rules, brainEven);
};

export default runBrainEven;
