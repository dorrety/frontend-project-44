import * as readlineSync from 'readline-sync';

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`${'Hello,'} ${userName}${'!'}`);
  return userName;
};

const getUserAnswer = () => readlineSync.question('Your answer: ');

const runGame = (rules, game) => {
  let correctSum = 0;
  const userName = greetings();
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = game();
    console.log(question);
    const userAnswer = getUserAnswer();
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
