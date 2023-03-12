"use strict"

// In the past JavaScript has always had very little data structures, we only had objects and arrays
// In ES6, 2 more data structures were introduced: Sets & Maps

// SET is collection of unique values. They can never have any duplicates and that property makes them useful in certain situations
// To create a new SET, we write 'new Set' and then we need to pass an iterable. The most common iterable is an array
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
])
console.log(ordersSet)
// Here, we have 6 strings. We could've have different data types here
// SETS can hold mixed data types
// The only values that we can see in 'ordersSet ' are: 'Pasta, 'Pizza, 'Risotto', all other duplicates are gone

// Order of elements in the SET is irrelevant
console.log(new Set("Ilhan"))

// We can get the size of a SET
console.log(ordersSet.size)
// This could be useful if the Chief wanted to know how many different meals are going to be cooked

// We can check if certain element is in a SET
console.log(ordersSet.has("Pizza"))
console.log(ordersSet.has("Bread"))

// We can add a new element to a SET
ordersSet.add("Bread")
console.log(ordersSet)

// We can also delete elements
ordersSet.delete("Bread")
console.log(ordersSet)

// We can't retrieve values out of a SET. We can't use index like in arrays
console.log(ordersSet[0]) // This will return 'undefined'

// There is no way of getting values of a SET. There is no need for getting data of a SET
// That's because if all values are unique and their order doesn't matter, then there is no point of retrieving values out of a SET
// All we need to know is that if a certain value is in the SET or not and that's why we have '.has' method
// If our goal is to actually store values in order and then retrieve it, then the best use case is to just use and array

// We can use this method to delete all the elements from a SET
// ordersSet.clear()
// console.log(ordersSet)

// Looping through a SET
for (const orders of ordersSet) {
  console.log(orders)
}

// In the normal code base, the normal use case is to remove duplicate values of arrays
// We have an array in restaurant which contains the staff of our restaurant
// Example:
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]
// Now we want to know which different positions are available in the restaurant - having a new unique array of this 'staff' array
const staffUnique = new Set(staff)
console.log(staffUnique)
// Now we want for 'staffUnique' to be an array
// Conversation from SETS to ARRAYS is easy, because they're both iterables
// Spread operators works on all iterables, which includes SETS
const arrStaffUnique = [...staffUnique]
console.log(arrStaffUnique)
// We want to check the SET size of 'staff'
console.log(staffUnique.size)
// We want to check how many different letters are there in my name
console.log(new Set("ilhanbuhic").size)

// SETS are not intended to deplace arrays at all
// Whenever we need to store values in order and might contain duplicates - we should use arrays
// We should also use arrays when we need to manipulate data, because arrays have access to many different array methods
