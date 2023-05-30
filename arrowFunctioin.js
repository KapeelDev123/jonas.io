// arrow function

const calcAge = (birthYear) => 2037 - birthYear;
const age = calcAge(1991);
console.log(age);

const yearUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirment = 65 - age;
  return `${firstName} retires in ${retirment} years `;
};

console.log(yearUntilRetirement(1991, "Jonas"));
console.log(yearUntilRetirement(1980, "Bobs"));


