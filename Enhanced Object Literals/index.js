"use strict"

let openingHours = {
  thu: {
    open: 12,
    close: 22
  },
  fri: {
    open: 11,
    close: 23
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24
  } 
}

// We're trying to make an object that is outside of 'restaurant' object
// We want to have a 'openingHours' object inside a 'restaurant' object

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenza, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  // Before ES6, we would have to write
  // openingHours: openingHours,
  // ES6 Enhanced Object Literals
  openingHours,

  // We can also use Enhanced Object Literals when it comes to writting methods
  // In ES6 we no longer have to create a property and then set it to a function expression
  
  // Old way
  orderDelivery: function({starterIndex, mainIndex, time, adress}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${adress} at ${time}`)
  },
  
  // New way
  orderDelivery ({starterIndex, mainIndex, time, adress}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${adress} at ${time}`)
  }
};

console.log(restaurant)

const [weekdays, ...weekend] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

openingHours = {
  [weekdays]: {
    open: 12,
    close: 22
  },
  [weekdays]: {
    open: 11,
    close: 23
  },
  [`Day-${6}`]: {
    open: 0, // Open 24 hours
    close: 24
  } 
}

// console.log(openingHours)
console.log(weekdays, weekend)
