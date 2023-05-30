// const hasDriversLicense = true;  //A
// const hasGoodVision = true;  //B

// console.log(hasDriversLicense && hasGoodVision)


const hasDriversLicense = true;  //A
const hasGoodVision = false;  //B

console.log(hasDriversLicense && hasGoodVision)
console.log(hasDriversLicense || hasGoodVision)
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision

// if (hasDriversLicense && hasGoodVision){
//   console.log('Sarah is able to drive!')
// } else{
//   console.log('Someone else should drive...')
// }

const isTired = true   //c
console.log(hasDriversLicense && hasGoodVision && isTired)

if (hasDriversLicense && hasGoodVision && !isTired){
  console.log('Sarah is able to drive!')
} else{
  console.log('Someone else should drive...')
}



