import runGame from '../index.js';
import getRandomInt from '../randomInt.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getNOD = (a, b) => {
  let c = a;
  let d = b;
  while (c !== 0 && d !== 0) {
    if (c > d) {
      c %= d;
    } else {
      d %= c;
    }
  }
  return c + d;
};

const getData = () => {
  const firstRandomInt = getRandomInt(2, 30);
  const secondRandomInt = getRandomInt(2, 30);
  const question = `Question: ${firstRandomInt} ${secondRandomInt}`;
  const correctAnswer = getNOD(firstRandomInt, secondRandomInt).toString();
  return [question, correctAnswer];
};

const runBrainGcd = () => {
  runGame(rules, getData);
};

export default runBrainGcd;
