import { getUserAnswer } from "..";
import { greetings } from "..";
import { getRandomInt } from "..";

// Получение случайного мат. знака
const getRandomOperator = () => {
    const arr = ['+', '-', '*'];
    const randomOperator = Math.floor(Math.random() * arr.length);
    const operator = arr[randomOperator];
    return operator;
  };