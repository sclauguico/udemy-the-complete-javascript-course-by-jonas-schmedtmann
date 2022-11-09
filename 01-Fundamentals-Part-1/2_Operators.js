// Math operators
const now = 2037;
const ageSandy = now - 1995;
const ageSarah = now - 2018;
console.log(ageSandy, ageSarah);

console.log(ageSandy * 2, ageSandy / 10, 2 ** 3);

const firstName = "Sandy";
const lastName = "Lauguico";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
// x will now be 25
x *= 4;
x++; // x = x + 1
x--;
console.log(x);

// Comparison operators
console.log(ageSandy > ageSarah); // > , <, >=, <=
console.log(ageSarah >= 18);

// all the variable in the js can be read by the js in-browser as well

// in real scenario we store the results in variable
const isFullAge = ageSarah >= 18;

// you can include the entire formula in the console all in one step
console.log(now - 1995 > now - 2018);
// math first or comparison first? left to right?
// JS has some way of knowing that it should the the maths first then
// compare them

/*****************************************************************************************/

// precedence of operators
const now = 2037;
const ageSandy = now - 1995;
const ageSarah = now - 2018;

console.log(now - 1995 > now - 2018);

// JS has a well-defined order of precedence
// google mdn operator precedence for JS

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, y = 10, x = 10
console.group(x, y);
// what do you think will happen?

const averageAge = ageSandy + ageSarah / 2;
console.log(ageSandy, ageSarah, averageAge);
// we need parenthesis

const averageAgeNew = (ageSandy + ageSarah) / 2;
console.log(ageSandy, ageSarah, averageAgeNew);
