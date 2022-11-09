// no other lines of codes should be on top of 'use strict' to activate strict mode
// this allows for secure code
// secure means makes it easier for us developers to avoid accidental errors and helps
// us introduce bugs into our code
// 1. Strict mode forbids us to do certain things
// 2. Create visible errors for us in certain situations in which w/o strict mode
//    JS will simply fail silently
"use strict"; // experiment on this by commenting it out

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// interface is a reserved word so strict mode would produce an error
// regarding the interv=face variable
// strict mode reserves this variables
//const interface = "Audio";
const private = 534;
