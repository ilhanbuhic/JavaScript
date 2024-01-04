"use strict"

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
}

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
}

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
}

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
}

const accounts = [account1, account2, account3, account4]
const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30]

// We can use the .find() method to retrieve one element of an array based on a condition
// .find() method also accepts a callback function which will then be called as a method loops over the array
// .find() is just another method that loops over the array
const firstWithdrawal = movements.find((mov) => mov < 0)
// Unlike the .filter() method, the .find() method will not return a new array,
// but it will only return the first element in the array that satisfies this condition
console.log(firstWithdrawal)

/* .filter() vs .find():
1. .filter() returns all the elements that match the condition, while .find() method only returns the first one
2. The .filter() method returns a new array, while .find() only returns the element itself and not an array
*/

const account = accounts.find((acc) => acc.owner === "Jessica Davis")
console.log(account)

// Using .forEach()
accounts.forEach((n) => (n.owner === "Jessica Davis" ? console.log(n) : ``))
