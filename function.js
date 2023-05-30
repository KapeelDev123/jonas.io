function logger() {
  console.log("My name is Johan");
}

// calling / running / invoking function

logger();
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranjes.`;
  return juice;
}

fruitProcessor(5, 0);


const appleJuice =  fruitProcessor(5,0)
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2,4)
console.log(appleOrangeJuice)