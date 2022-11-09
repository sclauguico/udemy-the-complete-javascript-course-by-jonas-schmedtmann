// // Minimum requirement
// const dolphinsAvergaeScore = (96 + 108 + 89) / 3;
// const koalasAverageScore = (88 + 91 + 110) / 3;
// console.log(dolphinsAvergaeScore, koalasAverageScore);

// switch (true) {
//   case dolphinsAvergaeScore > koalasAverageScore:
//     console.log("Dolphins win!");
//     break;
//   case dolphinsAvergaeScore < koalasAverageScore:
//     console.log("Koalas win!");
//     break;
//   case dolphinsAvergaeScore === koalasAverageScore:
//     console.log("Both win the trophy");
//     break;
// }

// // Bonus 1

// const dolphinsAvergaeScore = (97 + 112 + 81) / 3;
// const koalasAverageScore = (109 + 95 + 86) / 3;
// console.log(dolphinsAvergaeScore, koalasAverageScore);

// switch (true) {
//   case dolphinsAvergaeScore > koalasAverageScore && dolphinsAvergaeScore >= 100:
//     console.log("Dolphins win!");
//     break;
//   case dolphinsAvergaeScore < koalasAverageScore && koalasAverageScore >= 100:
//     console.log("Koalas win!");
//     break;
//   case dolphinsAvergaeScore === koalasAverageScore:
//     console.log("Draw");
//     break;
// }

// Bonus 2
const dolphinsAvergaeScore = (97 + 112 + 80) / 3;
const koalasAverageScore = (109 + 95 + 50) / 3;
console.log(dolphinsAvergaeScore, koalasAverageScore);

switch (true) {
  case dolphinsAvergaeScore > koalasAverageScore && dolphinsAvergaeScore >= 100:
    console.log("Dolphins win!");
    break;
  case dolphinsAvergaeScore < koalasAverageScore && koalasAverageScore >= 100:
    console.log("Koalas win!");
    break;
  case dolphinsAvergaeScore === koalasAverageScore &&
    dolphinsAvergaeScore >= 100 &&
    koalasAverageScore >= 100:
    console.log("Draw");
    break;
  default:
    console.log("No one wins the trophy");
    break;
}
