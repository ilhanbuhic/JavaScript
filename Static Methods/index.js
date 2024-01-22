'use strict'

/* A good example to understand what a static method is, is the build-in Array.from() method
This method converts any array-like structure to a real array
Example: Array.from(document.querySelectorAll('h1')) --> This will return a node list
This .from() method is a method that is attached to the Array constructor,
we could not use .from() method on array, because .from() is not a function
That's because the .from() method is attached to the entire Array constructor,
and not to the prototype property of the constructor
Therefore, all arrays do not inherit this method
Array.from() is just a simple function, but its a function that's attached to the Array constructor
The reason for that is so that developers know that it is related to Arrays

We also say that the .from() method is in the Array namespace
We also have different nemaspaces with Number
Example: Number.parseFloat
These methods are actually static methods and it's static on the Number, Array constructor  
*/

// Creating static methods for both constructor functions and class

// Constructor function:
const Person = function (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

const ilhan = new Person('Ilhan', 'Buhic')
console.log(ilhan)

// To add a static method, all we have to do is write:
Person.hey = function () {
  console.log(`Hey there 👋 ${ilhan.firstName}`)
}

Person.hey()

// We cannot do:
// ilhan.hey()
// because its not in the prototype of ilhan object

// Class:
class PersonCl {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  static hey() {
    console.log(`Hey there 👋 ${ilhan.firstName}`)
  }
}

const ilhanCl = new PersonCl('Ilhan', 'Buhic')
console.log(ilhanCl)
PersonCl.hey()
