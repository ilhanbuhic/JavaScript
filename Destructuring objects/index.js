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
