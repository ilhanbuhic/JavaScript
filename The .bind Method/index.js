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

  nesto() {
    console.log("dsadsa")
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
// In the .call method the first argument is what we want the .this keyword to point to, the others are rest of the argument

// .call method
book.call(eurowings, 23, "Amir Mustafic")
console.log(eurowings)

const swiss = {
  airline: "Swiss Airline",
  iataCode: "LX",
  bookings: [],
}
book.call(swiss, 583, "Mary Cooper")
console.log(swiss)

// .apply method
/* Apply method basically does exactly the same thing
The only difference is that the .apply does not receive list of arguments after the .this keyword,
but instead it's gonna take an array of the arguments and that's the only way how it's going to work
It will take the elements from that array and pass it into the function */
const flightData = [583, "George Cooper"]
book.apply(swiss, flightData)
console.log(swiss)
/* This .apply method is not that used anymore in modern JavaScript, because there's a better way of doing the exact same thing,
because we can do exactly the same thing with .call method */
book.call(swiss, ...flightData)

// Bind method
/* Just like a .call method, .bind method allows us to manually set the .this keyword for any function call
The difference is that .bind does not immediately call the function, instead it returns a new function
where the .this keyword is bound, it's set to whatever value we pass into bind */

// Making a program where we need to use the book function for eurowings all the time
// book.call(eurowings, 23, "Amir Mustafic")

// We are going to use .bind method to create a new function with the .this keyword that is set to 'eurowings'
// book.bind(eurowings) // This will not call the book function, instead it will return a new function where the .this keyword is always set to 'eurowings'
const bookEW = book.bind(eurowings)
bookEW(23, "Ilhan Buhic")
console.log(eurowings)

// Creating one booking function for each of the airlines
const bookLH = book.bind(lufthansa)
const bookLX = book.bind(swiss)

// We can take this even further
// In the .call method, we can pass multiple arguments beside the .this keyword, so we can do the same in the .bind method
// All of these arguments will be set, so they will be defined and the function will then always be called with these same arguments
// We can use .bind to create a function for one specific airline and a specific flight number

// Creating a variable for EW, specifically 23

const bookEW23 = book.bind(eurowings, 23)
// What we did here is specifying parts of the argument beforehand, which is a common pattern called 'partical application'.
// Partical application means that a prt of the arguments of the original function are already applied, already set.
// That's what the 'bookEW23' function is. It's the book function, but with 23 already predefined
bookEW23("Ilhan Buhic")
bookEW23("Ramela Hadzic")

// There are also other situations where we can use the .bind method
// We can also use the .bind method when we use objects together with event listeners
