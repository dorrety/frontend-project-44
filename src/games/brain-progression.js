import runGame from '../index.js';
import getRandomInt from '../randomInt.js';

let hiddenNumber;

const rules = 'What number is missing in the progression?';

const getProgression = () => {
  const arr = [];
  const firstRandomInt = getRandomInt(0, 15);
  const stepProgression = getRandomInt(1, 10);
  const hideIndex = getRandomInt(0, 9);
  const endProgression = firstRandomInt + stepProgression * 10;

  for (let i = firstRandomInt; i < endProgression; i += stepProgression) {
    arr.push(i);
  }
  hiddenNumber = arr.splice(hideIndex, 1, '..');
  return arr.join(' ');
};

const getData = () => {
  const question = `Question: ${getProgression()}`;
  const correctAnswer = hiddenNumber.toString();
  return [question, correctAnswer];
};

const runBrainProgression = () => {
  runGame(rules, getData);
};

export default runBrainProgression;
