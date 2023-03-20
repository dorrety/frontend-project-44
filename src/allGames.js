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
  userName = readlineSync.question('May I have your name? ');
  console.log(`${'Hello,'} ${userName}${'!'}`);
};

// Получение ответа
const getUserAnswer = () => {
  userAnswer = readlineSync.question('Your answer: ');
};

// Получение случайного числа
const getRandomInt = (max) => Math.floor(Math.random() * max);

// Получение случайного мат. знака
const getRandomOperator = () => {
  const arr = ['+', '-', '*'];
  const randomOperator = Math.floor(Math.random() * arr.length);
  const operator = arr[randomOperator];
  return operator;
};

// Приветствие игры
const getBrainGame = (nameGame) => {
  switch (nameGame) {
    case 'brain-even':
      console.log('Welcome to the BrainEven - game!');
      break;
    case 'brain-calc':
      console.log('Welcome to the BrainCalc - game!');
      break;
    case 'brain-gcd':
      console.log('Welcome to the BrainGcd - game!');
      break;
    case 'brain-progression':
      console.log('Welcome to the BrainProgression - game!');
      break;
    case 'brain-prime':
      console.log('Welcome to the BrainPrime - game!');
      break;
    default:
  }
};

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
  for (let i = 0; i < 2; i += 1) {
    while (a && b) {
      a > b ? a %= b : b %= a;
    }
    a += b;
  }
  return a;
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
  getBrainGame(nameGame);
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
