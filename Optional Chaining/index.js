"use strict"

// let openingHours = {
//   thu: {
//     open: 12,
//     close: 22
//   },
//   fri: {
//     open: 11,
//     close: 23
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24
//   }
// }

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
}
console.log(openingHours)

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenza, Italy",
  categories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  openingHours,

  orderDelivery: function ({ starterIndex, mainIndex, time, adress }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${adress} at ${time}`
    )
  },
}

console.log(restaurant)

// We want to check if 'monday.open' exists
if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open)
}

// 'restaurant.openingHours.fri' exists, so we could get 'open' variable from here
if (restaurant.openingHours.fri) {
  console.log(`The resaurant opens at: ${restaurant.openingHours.fri.open} am`)
}

// We are going to focus here on 'monday.open', because that's the one that doesn't exist
// This syntax is making our code less readable and more messy and we're checking just for one property here
// But we could be in a position where 'openingHours' would also be optional / 'restaurant' object not having opening hours

// We would have to do:
// Without 'Optional Chaining'
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open)
}
// This can make a huge mess when we have deeply nested objects with lots of optional properties
