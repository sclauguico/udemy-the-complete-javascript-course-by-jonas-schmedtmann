"use strict";

//1.
const calcAverage = (score1, score2, score3) => {
  const average = (score1 + score2 + score3) / 3;
  return average;
};

//2.
// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgDolphins * 2 < avgKoalas) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`Nobody wins!`);
  }
};

console.log(checkWinner(scoreDolphins, scoreKoalas));
