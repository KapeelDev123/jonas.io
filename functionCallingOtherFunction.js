function cutFruitPices(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPices(apples);
  const orangePieces = cutFruitPices(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3)) ;
