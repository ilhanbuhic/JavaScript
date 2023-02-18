"use strict"

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenza, Italy",
  categories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  // Many times in JavaScript we have funtions with a lot of parameters and it can be hard to know the order of parameters for someone that is using this function
  // Instead of defining the parameters manually, we can just pass an object into the function as an argument and then the function will immediately destructor that object

  orderDelivery: function ({ starterIndex, mainIndex, time, adress }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${adress} at ${time}`
    )
  },
}

restaurant.orderDelivery({
  time: "23:30",
  adress: "Via del Sole, 21",
  mainIndex: 0,
  starterIndex: 2,
})

// With object destructuring we have to provide variable names that exactly match the property names that we want to retrieve from the object
// We need to write the exact property names to extract the variables from this object. in the objects, the order of elements does not matter
const { name, openingHours, categories } = restaurant
console.log(name, openingHours, categories)

// What if we want the variables names to be different from the property names?
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant
console.log(restaurantName, hours, tags)
// We still need to reference the property names like we did before, otherwise JavaScript has no way of knowing what we want
// We usually use this way when we are dealing with the third-party data like APIs


// Default values:
// Another useful feature for when we're dealing with third-party data, like an object that we get from somewhere else like an API call
// It can be very useful to have the default values for the case that we're trying to read a property that does not exist on the object
// Usually we would get the 'undefined'
// restaurant.menu // This would be 'undefined', because there is no property called 'menu'
// So we can set the default values, just like we can do it with arrays
// We can combine this feature by giving them another name instead of using the property name and give them default values
const {
  menu = [],
  starterMenu: starters = [
    /*default value: none*/
  ],
} = restaurant
// const menu = restaurant.menu || []
// 'starterMenu' does exist, therefore the default value will not apply, but it will apply to 'menu',
// because there is no property in the 'restaurant' object called 'menu'
console.log(menu, starters)

// Mutating variables:
let a = 111
let b = 999
// let obj = {};
const obj = { a: 23, b: 7, c: 14 }

// {a, b} = obj
// This is not possible, because when we start a line witha  curly brace, then JavaScript expects a codeblock,
// and because we can't assign anything to a codeblock
// To solve this, we need to wrap everything into parentheses
;({ a, b } = obj)
console.log(a, b)

// Nested destructuring of object
const {
  fri: { open: o, close: c },
} = openingHours
console.log(/*open, close*/ o, c)
