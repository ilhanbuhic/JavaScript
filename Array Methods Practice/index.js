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
