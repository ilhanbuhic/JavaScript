"use strict"

// We use the .reduce() method to 'boil down' all the elements in an array to one single value

// We are going to use movements array to add up all the numbers from it,
// both the deposits and withdrawals, so we can make the global balance of the account

// The .reduce() method also gets a callback function, but this one is different from the others
// In the other callbacks, the first parameter is always the current element of the array, second: current index, and the third: an entire array
// But in the callback of the .reduce() method, the first parameter is ACCUMULATOR
// This accumulator is a variable that keeps accumulating the value that we want to return
// In the case of adding all the elements or all the numbers of an array together, that will be the sum

const movements = [200, -200, 340, -300, -20, 50, 400, -460]

const balance = movements.reduce(
  function (acc, cur, i, arr) {
    console.log(`Iteration ${i}: ${acc}`)
    //this callback function will be called in each iteration of looping over the array
    //since the accumulator is a value that we will keep adding, we will add the current value to the accumulator
    return acc + cur
    //this works because in each call of the callback function, the accumulator will be the current sum of all the previous values
    //we will keep adding to this accumulator in each iteration of the loop
    //this callback functionis the first argument of the reduce method, but it also has a second parameter
  },
  //that is the initial value of the accumulator
  //the value that we specify here is the initial value of the accumulator in the first loop iteration
  //in this example, we will start counting/adding at '0'
  //if we put '0', it will mean that we will start counting/adding from index '0'
  0
)
