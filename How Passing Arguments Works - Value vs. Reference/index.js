"use strict"

const flight = "LH234"
const ilhan = {
  firstName: "Ilhan",
  lastName: "Buhic",
  passport: 90432804329,
}

// Creating checkIn function

const checkIn = (flightNum, passanger) => {
  // We are passing in the 'flight' variable
  // But what if the flight has been changed?

  // This is generally a bad way of reassigning variables
  // But we're doing it this way just for the purpose of demonstrating
  flightNum = "LH999"
  passanger.firstName = "Mr." + passanger.firstName

  if (passanger.passport === 90432804329) {
    alert("Checked in")
  } else alert("Wrong passport")
}

checkIn(flight, ilhan)
console.log(flight, ilhan)

/* The reason why flight = 'LH234' and not 'LH999' is because 'flight' is a primitive type
As we passed that value into the function, then the flightNum is only the copy of that original value
It would be the same as if we wrote flightNum = flight
FlightNum is a completely different variable, therefore as we changed it inside of a function it did not get
reflected on the outside flight variable

But now comes the question what about the 'ilhan' object that we passed into the function?
In this function it's called 'passanger' and we changed that passanger object. Why did it got affected?
When we pass a reference type to a function only the reference is coppied to the memory heap
*/

// Interactions of different functions with the same object can create sone issues

// ilhan.passport has been changed, but it later on has a negative effect on 'checkIn ' function

const newPassport = (person) => {
  ilhan.passport = Math.trunc(Math.random() * 10000000)
}

newPassport(ilhan)
checkIn(flight, ilhan)
