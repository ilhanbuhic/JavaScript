"use strict"

const account1 = {
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
}

const account2 = {
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
}

const account3 = {
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
}

const account4 = {
  movements: [430, 1000, 700, 50, 90],
}

const accounts = [account1, account2, account3, account4]

// Practice #1:
// Caculating how much has been deposited in the bank across all the accounts

const depositSum = accounts
  .map((mov) => mov.movements.filter((el) => el > 0))
  .flat()
  .reduce((acc, mov, _i, arr) => acc + mov)
// console.log(depositSum)

// Practice #2:
// Counting how many deposits there have been in the bank with at least 1000$
// const numDeposits1000 = accounts.flatMap((mov) =>
//   mov.movements.filter((mov) => mov >= 1000)
// ).length
// console.log(numDeposits1000)

// Another way of doing -- Practice #2 --
// In this example we can use the .reduce() method as a counter too
const numDeposits1000 = accounts
  .flatMap((mov) => mov.movements)
  .reduce((count, mov) => (mov >= 1000 ? count + 1 : count), 0)
console.log(numDeposits1000)

// Practice #3:
// Creating an object which contains the sum of the deposits and of the withdrawals
// /* const sums*/ const {deposits, withdrawals} = accounts
//   .flatMap((mov) => mov.movements)
//   .reduce(
//     (sums, curr) => {
//       curr > 0 ? (sums.withdrawals += curr) : (sums.deposits += curr)
//       return sums
//     },
//     { deposits: 0, withdrawals: 0 }
//   )
// console.log(deposits, withdrawals)
// In an arrow function, the value is automatically returned when we don't have a function body
// Because we have a function body in this example, we have to manually return the accumulator from the function
// In the .reduce() method, we always have to return the accumulator from each iteration

// Another way of doing -- Practice #3 --
const { deposits, withdrawals } = accounts
  .flatMap((mov) => mov.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? "deposits" : "withdrawals"] += cur
      return sums
    },
    { deposits: 0, withdrawals: 0 }
  )
console.log(deposits, withdrawals)

// Getting a maximum value of the movements array by creating an array
const maximum = accounts
  .flatMap((mov) => mov.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? sums[0] += cur : sums[1] += cur
      sums[cur > 0 ? (sums[0] += cur) : (sums[1] += cur)]
      return sums
    },
    [0, 0]
  )
console.log(maximum[0], maximum[1])

// Practice #4:
// We want to create a simple function to convert any string to a title case
// Title case - all the words in a sentence are capitalized, except for some of them
// this is a nice title - This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1)
  const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"]

  // const titleCase = title.toLowerCase().split(" ").map((words) => words !== exceptions ? words[0].toUpperCase() + words.slice(1) : words.toLowerCase()) // This doesn't work
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((words) =>
      exceptions.includes(words) ? words.toLowerCase() : capitalize(words)
    )
    .join(" ")
  return capitalize(titleCase)
}

console.log(convertTitleCase("this is a nice title"))
console.log(convertTitleCase("this is a LONG title but not too long"))
console.log(convertTitleCase("and here is another title with an EXAMPLE"))
