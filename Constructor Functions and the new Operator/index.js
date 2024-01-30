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

/*
NEW operator is a special operator, because it calls the function
Behind the scenes, the NEW operator will do 4 steps
1. New, empty object is created
2. The function is called and in this function call, the .this keyword will be set to this newly created object
The .this keyword is this new empty object. In the execution context of the 'Person' function, the .this keyword
will point to this new object here that was created in step number 1
All of this happens only because we are calling the function using the NEW operator
3. Newly created object is linked to a prototype
4. Function automatically returns that empty object
*/

// We can now use this constructor function to create as many different objects as we want
const emina = new Person('Emina', 2003)
console.log(emina)

/*
In classical OOP, an object created from a class is called an instance
We didn't technically create a class here, because JavaScript doesn't really have classes, in the sense of traditional OOP
We did create an object from a constructor function
Constructor functions have been used since the beginning of JavaScript to kind of simulate classes
We can say that 'ilhan' and 'emina' is an instance of a 'Person'
*/

// We can also check:
console.log(ilhan instanceof Person) // This will return boolean
