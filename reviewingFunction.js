const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirment = 65 - age;

  if (retirment > 0) {
    console.log(`${firstName} retires in ${retirment} years`);
    return retirment;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearUntilRetirement(1991, "jonas"));
console.log(yearUntilRetirement(1950, "mike"));
