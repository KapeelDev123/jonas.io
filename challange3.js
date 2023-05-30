// const ScoreDolphins = (96 + 108 + 89) / 3;
// const ScoreKoalas = (88 + 91 + 110) / 3;

// console.log(ScoreDolphins, ScoreKoalas);

// if (ScoreDolphins > ScoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (ScoreKoalas > ScoreDolphins) {
//   console.log("Koalas win the trophy");
// } else if (ScoreDolphins === ScoreKoalas) {
//   console.log("Both win the trophy!");
// }

// Bonus 1
const ScoreDolphins = (97 + 112 + 80) / 3;
const ScoreKoalas = (109 + 95 + 50) / 3;

console.log(ScoreDolphins, ScoreKoalas);

if (ScoreDolphins > ScoreKoalas && ScoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (ScoreKoalas > ScoreDolphins && ScoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (ScoreDolphins === ScoreKoalas && ScoreKoalas >= 100 && ScoreKoalas >= 100) {
  console.log("Both win the trophy!");
}else {
  console.log('No one wins the trophy')
}

