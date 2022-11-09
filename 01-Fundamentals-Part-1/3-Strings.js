const firstName = "Sandy";
const job = "Data Scientist";
const birthYear = 1991;
const year = 2037;
const sandy =
  "I'm " + firstName + ", a " + (year - birthYear) + " year-old " + job + "!";
console.log(sandy);

// TEMAPLATE LITERALS IN ES6
const sandyNew = `I'm ${firstName}, a ${year - birthYear} year-old ${job}!`;
console.log(sandyNew);

// we can use back ticks to any regular strings
console.log(`Hello, I am a regular string...`);

// multi-line strings
console.log("String with \n\
multiple \n\
lines");

console.log(`String with
multiple lines
using backticks`);
