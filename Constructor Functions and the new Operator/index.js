'use strict'

/* 
We can use constructor functions to build an object using a function. Constructor function is a completely normal function
The only difference between a regular function and a function that we call constructior function, is that we call
a constructor function with the NEW operator
*/

/*
In OOP there is a convention that constructor function always start with a capital letter
Both function expression and function declaration will work, but arrow function will not as a function constructor
It's because it doesn't have its own .this keyword
*/

// This function is going to produce an object
const Person = function (firstName, birthytYear) {
  // Taking the firstName parameter, then create a property on the .this keyword
  // with the same name and set it to that value

  /* These properties are the INSTANCE properties
        This is because the firstName and birthYear
        will be available on all the instances that
        are created through this constructor function
    */
  this.firstName = firstName
  this.birthYear = birthytYear

  /* We can also add methods to our objects
        Never do this
        We should never create a method inside of a constructor
        It's because if we make too many person objects,
        each of these objects would carry around this function
        Instead of this, we will use prototypes of prototype inheritance
    */

  // this.calcAge = function() {
  //     console.log(2023 - this.birthYear)
  // }
}

const ilhan = new Person('Ilhan', 1998)
console.log(ilhan)
