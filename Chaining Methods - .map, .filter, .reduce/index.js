"use strict"

// We can chain .map(), .filter(), .reduce()
// We want to take all the movement deposits, convert them from EUR to USD and add them all up

const movements = [200, -200, 340, -300, -20, 50, 400, -460]

// With this code, we converter all deposits to USD
const eurToUSD = 1.1
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUSD)
  .reduce((acc, mov) => acc + mov, 0)
console.log(totalDepositsUSD.toFixed())

// We could chain all these methods together, except after the .reduce() method
// This is because the .reduce() method doesn't return an array, but value instead
// We can chain these methods only if the first one returns an array
// We can imagine all of this as a 'PIPELINE' that processes our data
// We put the data at the begining, which goes through all the steps (line: 10/13)
// In the end, our input data comes out processed on the other side of the 'pipeline'
