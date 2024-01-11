'use strict'

// We have 2 kinds of times
// 1. setTimeout() timer that runs once after a defined time
// 2. setInterval() timer keeps running 'forever', until we stop it

// setTimeout()
// We can use setTimeout to execute some code at some point in the future

// Simulation of ordering pizza:
setTimeout(
  () => console.log('Here is your pizza🍕'),
  3000 /* Passing in the amount of miliseconds that will pass until this function is called */
)
// We do not call this function ourselves, but we pass in this function as an argument to setTimeout
// Then it is that function, who will then call our callback function in the future
// We can also say that we schedule this function call for 3 seconds later

// The code execution does not stop here at this point
// When the execution of our code reaches this point, it will call the setTimeout() function,
// it will then register the callback function to be called later. Then the code execution continues
console.log('Waiting...')