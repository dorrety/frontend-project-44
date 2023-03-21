import * as readlineSync from 'readline-sync';

let userName;
let correctAnswer;
let stepProgression;
let randomNumber;
let userAnswer;
let firstRandomInt;
let secondRandomInt;
let sign;
let hiddenNumber;

// Приветствие
export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`${'Hello,'} ${userName}${'!'}`);
};

// Получение ответа
export const getUserAnswer = () => {
  userAnswer = readlineSync.question('Your answer: ');
};

// Получение случайного числа
export const getRandomInt = (max) => Math.floor(Math.random() * max);

// Правила игры
const rulesOfGames = (nameGame) => {
  switch (nameGame) {
    case 'brain-even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'brain-calc':
      console.log('What is the result of the expression?');
      break;
    case 'brain-gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'brain-prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    case 'brain-progression':
      console.log('What number is missing in the progression?');
      break;
    default:
  }
};

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

// Функция для игры brain-prime
const getPrime = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

// Вопрос игры
const getQuestion = (nameGame) => {
  firstRandomInt = getRandomInt(10);
  secondRandomInt = getRandomInt(10);
  randomNumber = getRandomInt(100);
  sign = getRandomOperator();
  switch (nameGame) {
    case 'brain-even':
      console.log(`Question: ${randomNumber}`);
      break;
    case 'brain-calc':
      randomNumber = getRandomInt(10);
      console.log(`Question: ${firstRandomInt} ${sign} ${secondRandomInt}`);
      break;
    case 'brain-gcd':
      console.log(`Question: ${firstRandomInt} ${secondRandomInt}`);
      break;
    case 'brain-progression':
      console.log(`Question: ${getProgression()}`);
      break;
    case 'brain-prime':
      console.log(`Question: ${firstRandomInt}`);
      break;
    default:
  }
};

// Правильный ответ для brain-calc
const correctBrainCalcAnswer = (a, b) => {
  if (sign === '+') {
    correctAnswer = a + b;
  } else if (sign === '-') {
    correctAnswer = a - b;
  } else {
    correctAnswer = a * b;
  }
  return correctAnswer;
};

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

// Правильный ответ
const getCorrectAnswer = (nameGame) => {
  switch (nameGame) {
    case 'brain-even':
      correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
      break;
    case 'brain-calc':
      correctAnswer = correctBrainCalcAnswer(firstRandomInt, secondRandomInt).toString();
      break;
    case 'brain-gcd':
      correctAnswer = getNOD(firstRandomInt, secondRandomInt).toString();
      break;
    case 'brain-progression':
      correctAnswer = hiddenNumber.toString();
      break;
    case 'brain-prime':
      correctAnswer = getPrime(firstRandomInt);
      break;
    default:
  }
};

const runGame = (nameGame) => {
  let correctSum = 0;
  greetings();
  rulesOfGames(nameGame);
  for (let i = 0; i < 3; i += 1) {
    getQuestion(nameGame);
    getCorrectAnswer(nameGame);
    getUserAnswer();
    if (correctAnswer === userAnswer) {
      correctSum += 1;
      console.log('Correct!');
      if (correctSum === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export default runGame;
