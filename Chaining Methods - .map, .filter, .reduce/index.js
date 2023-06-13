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

// When we chain all the methods together, it can be hard to debug if one of the results is not what we expect
// Sometimes we can't know from which step of this 'pipeline' the bug would come from
// To solve this, it would be good to check out the array in each of these different steps

// We can check what's causing the bug in this way:

// const eurToUSD = 1.1
// const totalDepositsUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov, _, arr) => {
//   // this array has to be the result of the previous operation, of this .filter()
//     console.log(arr)
//     return mov * eurToUSD
//   })
//   .reduce((acc, mov) => acc + mov, 0)
// console.log(totalDepositsUSD.toFixed())

/* Remarks about chaining:
1. We shouldn't overuse chaining, we should try to optimize it, 
because chaining tons of methods can cause performance issues if we have huge arrays
If we have a huge chain of methods, chained one after another, 
we should try to compress all the functionality that they do into as little methods as possible
Sometimes we can create way more .map methods than we need, where we could do it in just 1 .map call

2. It is a bad practice in JavaScript to chain methods that mutate the original array
We shouldn't chain methods like .splice() and or the .reverse() method
*/
