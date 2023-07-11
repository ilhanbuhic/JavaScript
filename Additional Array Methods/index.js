"use strict"

const arr = ["Sally", "Kyle", "John"]
console.log("Original", arr)

// Previously, in order to change an element into this arr, without mutating it, we had to do something like this:
const arrCopy = [...arr]
arrCopy[2] = "Ilhan"
console.log("Copy", arrCopy)
// This is also one of the easiest way to copy an entire array is by using the spread operator,
// but there are some downsides by doing it this way, because it requires you to manually make this copy
// and if we also want to do some looping through an array, it's going to be less performante,
// because, we need to first make a copy, which requires us to loop through an entire array,
// and then we would have to loop through an array the second time, which is not ideal

// .with() method
// This function accepts 2 arguments, the first one being the index and the second one the value of that index
console.log("----- WITH -----")
const arrWith = arr.with(2, "Ilhan")
console.log("With", arrWith)
// The main benefit of using .with() method is that it returns a new array
// This method won't help us improve the performance of our application and won't save us a lot of time writing less code

// We can use .sort() method to sort an elements into an array by alphabetic order, but it will mutate the original array
// Instead, there is another method that we can use to sort our array, without mutate the original one

// .toSorted():
// This method will return a new array, while sorting it in the alphabetic order
console.log("----- toSorted -----")
const sortedArr = arr.toSorted()
console.log("Sorted", sortedArr)
// This method can save us a lot of time of writing and can also improve our application performances
// If we used something like this instead: const sortedArr = [...arr].sort()
// 1. To create a copy of an array, we had to loop through the entire array
// 2. To sort the array, we again had to loop through the entire array
// Which makes us loop through this array twice, which is not ideal, as we can just do all the work at once

// .toReversed()
// The another method that does almost the same thing is reverse() V.S toReversed()
// .toReversed() is almost exactly the same as .reverse()
// It's going to give us a reversed copy, instead of just modifying the original array
console.log("----- toReversed -----")
const arrReversed = sortedArr.toReversed()
console.log("Reversed", arrReversed)

// .toSplice()
// Splice allows us to delete certain elements, add new elements
// The first parameter is the index from which we want to start deleting,
// The second one is the index at which we want to stop deleteting
// The third one is the new element that we want to add
// const spliced = arr.splice(0, 2, 'New') // This will delete all the elements from index 0 to index 2 and will add a new 'New ' element
// This will also mutate our original array, while .toSplice() method will do exactly the same thing, while not changing our original array
const spliced = arr.toSpliced(0, 2, "New")
console.log(spliced)
