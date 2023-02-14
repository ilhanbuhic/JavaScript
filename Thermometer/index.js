'use strict'

// We want to build a smart home thermometer. Given the array of temperatures
// of one day, calculate the temperature amplitude. Keep in mind that sometimes
// there might be a sensor error

const temperature1 = [-10, -3, -1, 0, 4, 'error', 7, 15, 32]
const temperature2 = [
  -20,
  -16,
  -4,
  1,
  'error',
  2,
  'error',
  20,
  'error',
  36,
  'error',
]
const temperature3 = temperature1.concat(temperature2)

function calcTempAmpliture(temp) {
  let max = temp[0]
  let min = temp[0]
  for (let i = 0; i < temp.length; i++) {
    const currentTemp = temp[i]
    if (typeof currentTemp !== 'number') continue
    if (currentTemp > max) max = currentTemp
    if (currentTemp < min) min = currentTemp
  }
  console.log(min, max)
  return max - min
}

const amplitude = calcTempAmpliture(temperature3)

console.log(amplitude)
