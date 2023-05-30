const massMarks = 95
const heightMarks = 1.88
const massJohn = 85
const heightJohn = 1.76

const BMIMark = massMarks / heightMarks **2
const BMIJohn = massJohn / heightJohn **2

console.log(BMIMark , BMIJohn)

// if(BMIMark > BMIJohn) {
//   console.log("mark's BMI higher than John's")
//   }else{
//   console.log("John's BMI higher than Mark's")
    
//   }

if(BMIMark > BMIJohn) {
  console.log(`mark's BMI (${BMIMark})higher than John's`)
  }else{
  console.log(`John's BMI (${BMIJohn})higher than Mark's`)
    
  }