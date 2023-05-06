"use strict"

// Default parameters:
// It's useful to have functions where some parameters are set by default
// This way, we don't have to pass them in manually in case we don't want to change the default

// Creating a booking airline function
const bookings = []
const createBooking = (flightNum, numPassangers = 1, price = 199) => {
  // Use this data to create an object and push it in bookings array

  // ES5:
  // This is an old way of setting the default parameters, before ES6
  // numPassangers = numPassangers || 1
  // price = price || 199
  // This works, because if 'numPassangers' is a falsy value, which undefined is
  // Then the result of 'numPassangers' operator will be the second operand, which is '1'

  const booking = {
    flightNum,
    numPassangers,
    price,
  }
  console.log(booking)
  bookings.push(booking)
}
// We only used 1 parameter for flightNum, while others are undefined
// We can use short curcuiting
/* ES5 */ createBooking("LH123")
/* ES6 */ createBooking("LH123", 2, 800)

// Default values can also contain any expression
// const createBooking = (flightNum, numPassangers = 1, price = 199 * 1.2)

// We can also use the values of the other parameters
// We can set the price based on the number of passangers
// const createBooking = (flightNum, numPassangers, price = 199 / 1.2)
// In this example, price is dynamically calculated, based on the number of passangers

// We can also skip the parameter while calling the function
createBooking("LH123", undefined, 800)
// The second one will return the default value of the operant, which is '1' in this case
