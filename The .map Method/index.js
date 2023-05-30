"use strict"

// .map() method:
// The .map() method is another way that we can use to loop over an array
// Unlike .forEach, the .map() method will give us a brand new array
// This new array will contain in each position the results of applying a callback function to the original array elements

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
// Supposing that these movements are in Euros, we will try to convert them to USD
// Supposing that 1 Euro is 1.1 USD

const eurToUsd = 1.1
// We want to multiply each elements of the movements array by 1.1

const movementsUSD = movements.map(function (mov) {
  // Here in the callback function, we need to return the value
  //that we want the new array to have in the current position
  return mov * eurToUsd
})

console.log(movements)
console.log(movementsUSD)

// Same example using the ARROW function:
console.log(`----- ARROW FUNCTION -----`)
const movementsUSDArrowFunc = movements.map((mov) => mov * eurToUsd)
console.log(movementsUSDArrowFunc)

// Same example using FOR OF:
console.log(`----- FOR OF -----`)
const movementsUSDfor = []

for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd)
}
console.log(movementsUSDfor)

// Just like .forEach() method, the .map() method also has access to the exact same 3 parameters
// 1. Current array element 2. Current index 3. Entire array

// Using IF statement
// const movementDescriptions = movements.map((mov, i, arr) => {
//   if (mov > 0) {
//     // We don't want to console.log these values (line: 45/47), we want to return it
//     // That will place these values (line: 45/47) into the new array
//     return `Movement ${i + 1}: You deposited ${mov}`
//   } else {
//     return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`
//   }
// })
