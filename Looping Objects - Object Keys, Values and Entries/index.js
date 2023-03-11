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
