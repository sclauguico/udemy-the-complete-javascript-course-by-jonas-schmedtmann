// An expression is a piece of code that produces value
3 + 4; // expression
2020; // this is an expression because the number itself will produce a value in JS
true && false && !false; // expression

// A statement is a bigger piece of code that is executed which
// cannot produce a value by itself

// this does not pproduce a value
if (23 > 10) {
  const str = "23 is bigger"; // the string itself is a statement
}

//template literal
console.log(`I'm ${2037 - 1995} years old`);
console.log(`I'm ${2037 - 1995} years old {if (23 > 10) {
  const str = "23 is bigger"; // the string itself is a statement
}}`);
