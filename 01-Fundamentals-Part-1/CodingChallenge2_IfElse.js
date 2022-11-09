// TEST DATA 1
// const markWeight = 78;
// const johnWeight = 92;
// const markHeight = 1.69;
// const johnHeight = 1.95;

//TEST DATA 2
const markWeight = 95;
const johnWeight = 85;
const markHeight = 1.88;
const johnHeight = 1.76;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

if (markHigherBMI) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher than Mark's");
}
