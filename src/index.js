import * as readlineSync from 'readline-sync';

let userName;
let userAnswer;

// Приветствие
export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`${'Hello,'} ${userName}${'!'}`);
};

// Получение ответа
const getUserAnswer = () => {
  userAnswer = readlineSync.question('Your answer: ');
};

// Получение случайного числа
export const getRandomInt = (max) => Math.floor(Math.random() * max);

const runGame = (rules, game) => {
  let correctSum = 0;
  greetings();
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = game();
    console.log(question);
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
