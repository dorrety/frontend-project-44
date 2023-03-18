#!/usr/bin/env node
import * as readlineSync from 'readline-sync';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

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
getProgression();