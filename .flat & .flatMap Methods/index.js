"use strict"

// We have an array, with some arrays in it
const arr = [[1, 2, 3], [4, 5, 6], 7, 8]
/* Using the .flat() method, we can take all these elements in the sub array and put all of them together in one big array,
which contains all the numbers from 1 to 8 */
console.log(arr.flat())
/* .flat() method goes only 1 level deep of nested arrays,
it cannot completely flatten something like this: [[[1, 2], 3], [4, [5, 6]]7, 8] */

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8]
// By default .flat() method is running by '1' is the depth
console.log(arrDeep.flat(1))
// We can also go 2 levels deep using the .flat() method
console.log(arrDeep.flat(2))
// These are not so common usecases of the .flat() method


// This is really common usecase of using the .flat()
// We want to calculate the overal balance of all the movements from all the accounts
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

const overalBalance1 = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0)
console.log(overalBalance1)
// It turns out that using .map() first and then flattening the result, is a pretty common operation
// To solve this, there is another method that was also introduced at the same time, which is .flatMap()
// .flatMap() combines a .map() and a .flat() method into just one method, which is better for performance
const overalBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0)
console.log(overalBalance2)
// .flatMap() goes only 1 level deep and we cannot change it
// If we need to go deeper than just 1 level, we need to use the .flat() method
