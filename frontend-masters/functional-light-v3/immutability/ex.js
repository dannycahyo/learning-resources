"use strict";

function lotteryNum() {
  return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(num, numbers) {
  if (!numbers.includes(num)) {
    numbers = [...numbers, num];
    numbers.sort((x, y) => x - y);
  }
  return numbers;
}

var luckyLotteryNumbers = [];

while (luckyLotteryNumbers.length < 6) {
  luckyLotteryNumbers = pickNumber(lotteryNum(), luckyLotteryNumbers);
}

console.log(luckyLotteryNumbers);
