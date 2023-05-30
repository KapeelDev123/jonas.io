const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true
];


const types = []

for(let i = 0; i <= 5; i++){
  // reading from jonas array
  console.log(jonasArray[i] , typeof jonasArray[i])
  
  // filling types array
//  types[i] = typeof jonasArray[i]

types.push(typeof jonasArray[i])
}

console.log(types)

const years = [1991, 2007, 1969, 2020]
const ages = []

for(let i = 0; i < years.length; i++) {
  ages.push(2037 -years[i])
}
console.log(ages)


// continue and break
// console.log('---ONLY STRING---')
// for(let i = 0; i < jonasArray.length; i++){
//   if(typeof jonasArray[i] !== 'string') continue;

//   console.log(jonasArray[i], typeof jonasArray[i])
// }


console.log('---ONLY STRING---')
for(let i = 0; i < jonasArray.length; i++){
  if(typeof jonasArray[i] === 'number') break;

  console.log(jonasArray[i], typeof jonasArray[i])
}