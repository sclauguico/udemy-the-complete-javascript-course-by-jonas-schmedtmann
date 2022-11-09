"use strict";

function calcTip(bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(calcTip(bills[i]) + bills[i]);
}

console.log(bills, tips, totals);

function calcAverage(arr) {
  let sum = 0;
  // let average = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
    // average = sum / (i + 1);
  }
  // return average
  return sum / arr.length;
}

console.log(calcAverage(totals));
