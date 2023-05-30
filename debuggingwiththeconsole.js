const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Degrees celsius:'),
  };

  console.log(measurement);
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin);
