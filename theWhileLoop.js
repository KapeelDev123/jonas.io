for (let rep = 1; rep <= 10; rep++) {
  // console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`While: Lifting weights repetition ${rep}`);
  rep++;
}

// let dice = Math.random() * 6
// console.log(dice)

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...')
}
