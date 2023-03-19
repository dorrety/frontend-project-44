import * as readlineSync from 'readline-sync';

let sign;
let correctAnswer;
let correctSum = 0;
let userAnswer;

//Приветствие
export const greetings = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`${'Hello,'} ${userName}${'!'}`);
};

//Получение случайного числа
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

//Получение случайного мат. знака
const getRandomOperator = () => {
  const arr = ["+", "-", "*"];
  const randomOperator = Math.floor(Math.random() * arr.length);
  const operator = arr[randomOperator];
  return operator;
};

//Приветствие игры
const getBrainGame = (nameGame) => {
  switch (nameGame) {
    case 'brain-even':
      console.log('Welcome to the BrainEven - game!');
    case 'brain-calc':
      console.log('Welcome to the BrainCalc - game!');
    case 'brain-gcd':
      console.log('Welcome to the BrainGcd - game!');
    case 'brain-progression':
      console.log('Welcome to the BrainProgression - game!');
    case 'brain-prime':
      console.log('Welcome to the BrainPrime - game!');
  }
};

//Правила игры
const rulesOfGames = (nameGame) => {
  switch (nameGame) {
    case 'brain-even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
    case 'brain-calc':
      console.log('What is the result of the expression?');
    case 'brain-gcd':
      console.log('Find the greatest common divisor of given numbers.');
    case 'brain-prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    case 'brain-progression':
      console.log('What number is missing in the progression?');
  }
};
//Правильный ответ для brain-calc
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

//Окончание игры
const gameOver = () => {
  for (let i = 0; i < 3; i += 1) {
    if (userAnswer === correctAnswer) {
      correctSum += 1;
      console.log('Correct!');
      if (correctSum === 3) {
          console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}`);
      break;
    }
  }
};

//Функция для игры НОД
const getNOD = (a, b) => {
  for (let i = 0; i < 2; i += 1) {
      while (a && b) {
          a > b ? a %= b : b %= a;
      }
      a += b;
  }
  return a;
};

//Функция для игры brain-progression
const getProgression = () => {
  let arr = [];
  firstRandomInt = getRandomInt(15);
  stepProgression = getRandomInt(10);
  const hideIndex = getRandomInt(10);
  const endProgression = firstRandomInt + stepProgression * 10;
  if (stepProgression === 0) {
      stepProgression = getRandomInt(10);
  }
  for (let i = firstRandomInt; i < endProgression; i += stepProgression) {
      arr.push(i);
  }
  hiddenNumber = arr.splice(hideIndex, 1, '..');
  return arr.join(' ');
};

//Функция для игры brain-prime
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

//Правильный ответ
const getCorrectAnswer = (nameGame) => {
  switch (nameGame) {
    case 'brain-even':
      correctAnswer =  randomNumber % 2 === 0 ? 'yes' : 'no';
    case 'brain-calc':
      correctAnswer = correctBrainCalcAnswer(firstRandomInt, secondRandomInt).toString();
    case 'brain-gcd':
      correctAnswer = correctAnswer = getNOD(firstRandomInt, secondRandomInt).toString();
    case 'brain-progression':
      correctAnswer = hiddenNumber.toString();
    case 'brain-prime':
      correctAnswer = getPrime(randomNumber);
  }
};

const runGame = (nameGame) => {
  getBrainGame(nameGame);
  greetings();
  rulesOfGames(nameGame);
};

export default runGame;