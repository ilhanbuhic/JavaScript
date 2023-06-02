"use strict"

const movements = [200, -200, 340, -300, -20, 50, 400, -460]

// .filter() method is used to filter elements that satisfy a certain condition
// To satisfy this certain position, we are going to use a callback function
const deposits = movements.filter(function () {
  //creating an array of deposits
  //deposites are movements that are only above 0
  //we are going to filter only negative values in the movements array
  //only the values that passed the condition will make it into the new array
  //we will return a Boolean value
  return mov > 0
  //only the array elements for which this condition is TRUE will make it into 'deposits' array
  //all other ones will be filtered out
})

// Same example using .forOf()

const depositsFor = []

for (const mov of movements) if (mov > 0) depositsFor.push(mov)

const withdrawals = movements.filter((mov) => mov > 0)

// 
