const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

// the birthYear parameters are two completely different paramaters

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   //return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1995, "Sandy"));

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     return retirement;
//   } else {
//     // we usually return a number when the input is number
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1995, "Sandy"));
// console.log(yearsUntilRetirement(1950, "Mike"));

/**************************************************************** */
// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     return retirement;
//     console.log(`${firstName} retires in ${retirement} years`); // this will not return as
//     //after the keyword return, the code imeediately exits the functioin
//   } else {
//     return -1;
//     console.log(`${firstName} has already retired`); // move console at
//     //the top
//   }
// };

// console.log(yearsUntilRetirement(1995, "Sandy"));
// console.log(yearsUntilRetirement(1950, "Mike"));

/*****************************************************************/

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`); // this will not return as
    return retirement;
    //after the keyword return, the code imeediately exits the functioin
  } else {
    console.log(`${firstName} has already retired`); // move console at
    return -1;
    //the top
  }
};

console.log(yearsUntilRetirement(1995, "Sandy"));
console.log(yearsUntilRetirement(1950, "Mike"));
