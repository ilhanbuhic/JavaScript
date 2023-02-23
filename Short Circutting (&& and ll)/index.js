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

  orderDelivery: function ({ starterIndex, mainIndex, time, adress }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${adress} at ${time}`
    )
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}. ${ing3}`)
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient)
    console.log(otherIngredients)
  },
}

console.log("------ OR ------")

// We used logical operators to combine online boolean values so far
// Logical operators can use ANY data type, return ANY data type, short-circutting
// Short-circutting means that if the first value is a truthy value, it will immediately return that first value
// If the first value is truthy, the second operant will not even be evaluated, JavaScript will not even take a look at it
console.log(3 || "Jonas")
console.log("" || "Jonas")
console.log(true || 0)
console.log(undefined || null)

console.log(undefined || 0 || "" || "Hello" || 23 || null)
//   JavaScript will pick 'Hello" as a result, because that's the first truthy valued it encountered

// In this example JavaScript is going to take 10, because restaurant.numberGuests is undefined, which is falsy value, so 10 will be the result
// The result will be 10, because restaurant.numGuests doesn't exist, so this is undefined, therefore 10 will be the result
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
console.log(guests1)

// But if we put
restaurant.numGuests = 23

const guests2 = restaurant.numGuests || 10
console.log(guests2)
// JavaScript is going to take 23, because it's already defined, which means it's a truthy value

console.log('------ AND ------')
// AND operator works exactly the opposite of OR operator
// Using AND operator, JavaScript is going to pick the first value that is falsy
// It returns the first falsy value, without even evaluating the second operant
 console.log(0 && 'Ilhan')
 console.log('Hello' && 23 && null && 'Ilhan')

// To check whether if restaurant.orderPizza exists, if does, use the parameters
// 1st way to check this
 if (restaurant.orderPizza) {
   restaurant.orderPizza('mushroom', 'ham', 'cheese')
 }

// 2nd way to check this
// If restaurant.orderPizza doesn't exist, undefined, it will short-curcit evaluation and nothing will happen, which is the same as using IF operator
// If it does exist, if it's a truthy value, then the second part will be evaluated
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'ham', 'cheese')


