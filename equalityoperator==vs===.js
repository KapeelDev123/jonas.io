//=== strict equality operater
// == loose equality operator

const age = 18;
if (age === 18) console.log("you just became an adult :D(strict)");

if (age === 18) console.log("you just became an adult :D(loose)");

const favourite = Number(prompt("what's your favourite number?"));

if (favourite == 23) {
  //23 === 23 -> True
  console.log("cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("why not 23");
