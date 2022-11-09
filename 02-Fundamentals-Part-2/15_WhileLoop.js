"use strict";

// for (let rep = 1; rep <= 10; rep++) {
//   //rep = rep + 1
//   console.log(`FOR: Lifting weights repetition ${rep} 🏋🏼‍♀️`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep} 🏋🏼‍♀️`);
//   rep++;
// }

// while loop is more versatile than for loop because it does not
// really need a counter but a condition, which needs to stay true to execute
// that condition can be any condition that does not rely on counter alone
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

// you don't need to know how many iterations are needed in a while loop
