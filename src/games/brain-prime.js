import runGame, { getRandomInt } from '../index.js';

let question;
let correctAnswer;
let firstRandomInt;

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Функция для игры brain-prime
const getPrime = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const brainPrime = () => {
  firstRandomInt = getRandomInt(10);
  question = `Question: ${firstRandomInt}`;
  correctAnswer = getPrime(firstRandomInt);
  return [question, correctAnswer];
};

const runBrainPrime = () => {
  runGame(rules, brainPrime);
};

export default runBrainPrime;
