"use strict"

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenza, Italy",
  categories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    Thursday: {
      open: 12,
      close: 22,
    },
    Friday: {
      open: 11,
      close: 23,
    },
    Saturday: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: {
    time: "23:30",
    adress: "Via del Sole, 21",
    mainIndex: 0,
    starterIndex: 2,
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, adress }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${adress} at ${time}`
    )
  },
}

// We use FOR-OF loop to loop through objects, even though they're not iterables, but in the indirect way
// We have couple of options, depending on what we want to loop over. Over the object.propertyNames, over the values or both together

// Looping over Property NAMES/KEYS
console.log(`\n---- Property NAMES ----`)
for (const day of Object.keys(restaurant.openingHours)) console.log(day)

// We can get the length of the 'openingHours' days because when we loop over that object, it's being showed in the form of array
// Therefore, we can loop through arrays and even get the length of it
const properties = Object.keys(restaurant.openingHours)
console.log(properties.length)

let openStr = `We are open on ${properties.length} days: `

for (const day of properties) {
  openStr += `${day}, `
}
console.log(openStr)

// Property VALUES
console.log(`\n---- Property VALUES ----`)
const values = Object.values(restaurant.openingHours)
console.log(values)

// In order to loop through an entire object, we need the entries
// Entries are keys + values together
// Entire object
console.log(`\n---- KEY, VALUES / ENTRIES ----`)
const entries = Object.entries(restaurant.openingHours)

const key = Object.keys(restaurant.openingHours)
const open = Object.values(restaurant.openingHours)

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`)
}
