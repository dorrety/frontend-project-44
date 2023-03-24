import runGame, { getRandomInt } from '../index.js';

let question;
let correctAnswer;
let firstRandomInt;
let stepProgression;
let hiddenNumber;

const rules = 'What number is missing in the progression?';

// Функция для игры brain-progression
const getProgression = () => {
  const arr = [];
  firstRandomInt = getRandomInt(15);
  stepProgression = getRandomInt(10);
  const hideIndex = getRandomInt(10);
  if (stepProgression === 0) {
    stepProgression = getRandomInt(10);
  }
  const endProgression = firstRandomInt + stepProgression * 10;

  for (let i = firstRandomInt; i < endProgression; i += stepProgression) {
    arr.push(i);
  }
  hiddenNumber = arr.splice(hideIndex, 1, '..');
  return arr.join(' ');
};

const brainProgression = () => {
  question = `Question: ${getProgression()}`;
  correctAnswer = hiddenNumber.toString();
  return [question, correctAnswer];
};

const runBrainProgression = () => {
  runGame(rules, brainProgression);
};

export default runBrainProgression;
