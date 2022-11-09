const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
// change true of false values to show results
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDirve) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

//
const isTired = true; // vary this
console.log(hasDriversLicense || hasGoodVision || !isTired);

if (shouldDirve) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
