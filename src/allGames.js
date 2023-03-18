import * as readlineSync from 'readline-sync';

let sign;
let correctAnswer;
let correctSum = 0;
let userAnswer;

//Приветствие
const greetings = () => {
  const userName = readlineSync.question('May I have your name?');
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

//Приветсвие игры
const getBrainGame = (nameGame) => {
  switch (nameGame) {
    case 'brain-even':
      console.log('Welcome to the BrainEven - game!');
    case 'brain-calc':
      console.log('Welcome to the BrainCalc - game!');
  }
};

//Правила игры
const rulesOfGames = (nameGame) => {
  switch (nameGame) {
    case 'brain-even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
    case 'brain-calc':
      console.log('What is the result of the expression?');
  }
};

//Правильный ответ
const getCorrectAnswer = (nameGame) => {
  switch (nameGame) {
    case 'brain-even':
      correctAnswer =  randomNumber % 2 === 0 ? 'yes' : 'no';
    case 'brain-calc':
      correctAnswer = correctBrainCalcAnswer(firstRandomInt, secondRandomInt).toString();
  }
};

//Окончание игры
const gameOver = () => {
  for (let i = 0; i < 3; i += 1) {
    if (userAnswer === correctAnswer) {
      correctSum += 1;
      console.log('Correct!');
      if (correctSum === 3) {
          console.log(`Congratulations, ${userName}`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}`);
      break;
    }
  }
};

//Функция для brain-progression

const getProgression = () => {
  let arr = [];
  let firstRandomInt = getRandomInt(15);
  let stepProgression = getRandomInt(10);
  const hideIndex = getRandomInt(10);
  const endProgression = firstRandomInt + stepProgression * 10;
  for (let i = firstRandomInt; i < endProgression; i += stepProgression) {
      arr.push(i);
  }
  arr.splice(hideIndex, 1, '..');
  console.log(arr.join(' '));
};