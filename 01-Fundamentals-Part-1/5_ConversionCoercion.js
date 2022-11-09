// TYPE CONVERSION

// Type conversion is when we manually convert
// from one type to another

// Type coercion is when JS automatically converts
//types behind the scenes for us

/*
const inputYear = "1995";
console.log(inputYear + 18);
*/

/*
const inputYear = "1995";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
*/

const inputYear = "1995";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

// non convertible string
console.log(Number("Sandy")); // NaN for not a number

// NaN is still a number but an invalid one
console.log(typeof NaN);
console.log(String(23));

//JS can only convert to three types
// Convert to a number, to a string, or to a Boolean
// but not to undefined or to null

/************************************************************************/

// TYPE COERCION
//Hapens whenever an operator is dealing with two values with different
// types. In that case, JS BTS will change the data type from one
// value to another compatible to other one to execute prorpely

console.log("I am " + 27 + " years old"); // numbers are converted to string
// this is the same as writing this
console.log("I am " + "27" + " years old");

//what if?
console.log("23" - "10" - 3);

//what if
console.log("23" + "10" + 3);
console.log("23" * "2");

//GUESS THE RESULTS

let n = "1" + 1; //addition makes it to a string 11
n = n - 1; // minus makes string 11 to a number so number 11 minus numer 1 = 10
console.log(n);

console.log(2 + 3 + 4 + "5");

console.log("10" - "4" - "3" - 2 + "5");
