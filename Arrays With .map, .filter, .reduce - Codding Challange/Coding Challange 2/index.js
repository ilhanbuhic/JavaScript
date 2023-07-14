"use strict"

// Coding Challenge #1

/* 
Rewrite the 'calcAverageHumanAge' function from the previous
challange, but this time as an arrow function, and using chaining

const calcAverageHumanAge = function (ages) {
  const humanAgeDogs = ages.map((dogAge) =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  )
  const adultDogs = humanAgeDogs.filter((adultDogs) => adultDogs >= 18)
  const averageAdultDogs = adultDogs.reduce(
    (acc, curr) => (acc += curr / adultDogs.length),
    0
  )
  console.log(`Human age dogs: ${humanAgeDogs}`)
  console.log(`Adult dogs: ${adultDogs}`)
  console.log(averageAdultDogs)
}

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

const calcAverageHumanAge1 = (ages) => {
  const humanAgeDogs = ages
    .map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter((adultDogs) => adultDogs >= 18)
    .reduce((acc, curr, i, arr) => (acc += curr / arr.length), 0)
  console.log(`Sum of human age dogs:: ${humanAgeDogs}`)
}

const data1 = [5, 2, 4, 1, 15, 8, 3]
const data2 = [16, 6, 10, 5, 6, 1, 4]
// calcAverageHumanAge(data1)
// calcAverageHumanAge(data2)

calcAverageHumanAge1(data1)
calcAverageHumanAge1(data2)
