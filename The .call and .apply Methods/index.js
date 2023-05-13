"use strict"

// Making a program for flight booking
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  /* Old way of writing function:
  book: function () {} */
  /* New way of writing function: */
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    )
    /* We want our book method to add a new object to bookings */
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
  },
}

lufthansa.book(239, "Ilhan Buhic")
lufthansa.book(635, "Ella Sterenborg")
console.log(lufthansa)

// Now let's say that after couple of years Lufthansa group made a new airline

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
  /* We also would like to be able to take bookings for a 'Eurowings' flight
  Copying and pasting exactly same function from the previous object would be a bad practice
  instead, we will just take the method and store it in the external function,
  so we can reuse that function for all different airlines */
}

// Does NOT work
const book = lufthansa.book
// book("23", "Amir Mustafic")

/* This will return 'undefined', because the 'book' function is now just a regular function call
In a regular function call the .this keyword points to 'undefined', at least in 'strict mode'
This 'book' function is not longer a method from 'lufthansa' object, it is not a separate function
It's only a copy of lufthansa.book, but it's not a method anymore, therefore the .this keyword inside of
lufthansa.book will now point to 'undefined'

Now we need to create a booking on the new 'eurowings' airline
We need to tell JavaScript explicitly what the .this keyword should be like
So if we want to book a lufthansa flight, the .this keyword should point to lufthansa,
but if we want to a eurowings flight, the .this keyword should point to eurowings
How do we tell JavaScript what the .this keyword should look like
There are 3 function methods to do that they are .call, .apply and .bind
*/

// We know that functions are objects and objects have methods, therefore functions can have methods too
// In the .call method the first argument is what we want the .this keyword to point to, the others are rest of the arguments
