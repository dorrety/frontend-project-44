import runGame, { getRandomInt } from '../index.js';

let question;
let correctAnswer;
let firstRandomInt;
let secondRandomInt;

const rules = 'Find the greatest common divisor of given numbers.';

// Функция для игры НОД
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

const brainGcd = () => {
  firstRandomInt = getRandomInt(10);
  secondRandomInt = getRandomInt(10);
  question = `Question: ${firstRandomInt} ${secondRandomInt}`;
  correctAnswer = getNOD(firstRandomInt, secondRandomInt).toString();
  return [question, correctAnswer];
};

const runBrainGcd = () => {
  runGame(rules, brainGcd);
};

export default runBrainGcd;
