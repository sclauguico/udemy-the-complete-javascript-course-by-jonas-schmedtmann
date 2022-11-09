"use strict";
const sandy = [
  "Sandy",
  "Lauguico",
  2037 - 1995,
  "Data Scientist",
  ["MJ", "Ruzcko", "Galaksy"],
  true,
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = sandy.length - 1; i >= 0; i--) {
  console.log(i, sandy[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---Starting exercice ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋🏼‍♀️`);
  }
}
