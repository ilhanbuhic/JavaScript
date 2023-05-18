"use strict"

/* Closure is not a feature that we explicitly use, so we don't create closures manually,
like we create a new array or a new function. Closure happens automatically in certain situations.

/* We will create a function and a variable inside of it, so it cannot be accessed from the outside */

const secureBooking = function() {
  let passangerCount = 0

  return function() {
    passangerCount++
  }
}