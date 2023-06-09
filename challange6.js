const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
console.log(mark.bmi);

john.calcBMI();
console.log(john.bmi);


if(mark.bmi > john.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is lower than ${mark.fullName}'s BMI (${mark.bmi})`)
} else if (john.bmi > mark.bmi){
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
  
}
