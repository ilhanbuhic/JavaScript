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

// ES2020 introduced 'Optional Chaining'
// With Optional Chaining, if a certain property doesn't exist, then 'undefined' is returned immediately

// With 'Optional Chaining'
console.log(restaurant.openingHours.mon?.open)
// Only if the property that is before this '?', so ONLY if 'monday' exists, then this 'open' property will be read from there, otherwise 'undefined' is returned
// The property exists if it's not 'null' or 'undefined'. If it's 0 or an empty string it still exists

// We can have multiple Optinal Chainings
console.log(restaurant.openingHours?.mon?.open)
// If 'openinHours' doesn't exist, it will not even try to find 'openingHours.mon. The same 'openingHours.mon.open'

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]
for (const day of days) {
  // console.log(day)
  const open = restaurant.openingHours[day]?.open ?? "closed"
  console.log(`On ${day} we open at ${open}`)
}

// Methods
// We can check if method actually exists before we call it
console.log(`\n---- METHODS ----`)
console.log(restaurant.order?.(0, 1) ?? "Method does not exist")
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist")
// We are checking if 'restaurant.order' exists. If it does exist, we can call it
// We should always use nullish coalescing operator

// Arrays
// Optional Chaining even works on arrays
console.log(`\n---- ARRAYS ----`)
const users = [
  {
    name: "ilhan",
    email: `ilhanbuhic@hotmail.com`,
  },
]
// We want to get the first element of 'users' array
console.log(users[0]?.name ?? `User array empty`)

// If we couldn't use Optional Chaining, we would have to write like this:
if (users.length > 0) {
  console.log(users[0].name)
} else {
  console.log(`User array empty`)
}
