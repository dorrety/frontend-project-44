import runGame from '../index.js';
import getRandomInt from '../randomInt.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getData = () => {
  const firstRandomInt = getRandomInt(2, 20);
  const question = `Question: ${firstRandomInt}`;
  const correctAnswer = getPrime(firstRandomInt) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runBrainPrime = () => {
  runGame(rules, getData);
};

export default runBrainPrime;
