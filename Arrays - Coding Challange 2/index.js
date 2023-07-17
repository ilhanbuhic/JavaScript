"use strict"

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property.
Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. 
HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
*/
// TEST DATA:
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] }
// ];

// The first way

// const dogs = [
//   { weight: 22, curFood: 278, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ]

// const recommendedFood = function (dogWeight) {
//   return Math.round(dogWeight ** 0.75 * 28)
// }

// const ownersEatTooMuchArray = []
// const ownersEatTooLittleArray = []
// const dogsEatingOkayAmountArray = []

// dogs.forEach(function (dog) {
//   const { weight } = dog
//   dog.recommendedPortion = recommendedFood(weight)
//   const lowerRange = dog.recommendedPortion - dog.recommendedPortion * 0.1
//   const upperRange = dog.recommendedPortion + dog.recommendedPortion * 0.1

//   const { curFood } = dog
//   const { owners } = dog
//   // console.log(dog)

//   if (owners[0].includes("Sarah")) {
//     if (curFood < lowerRange) {
//       console.log(
//         `${
//           owners[0] === "Sarah" ? "Sarah" : undefined
//         }'s dog is eating below recommended portion`
//       )
//     } else if (curFood > upperRange) {
//       console.log(
//         `${
//           owners[0] === "Sarah" ? "Sarah" : undefined
//         }'s dog is eating above recommended portion`
//       )
//     } else if (curFood < lowerRange && curFood > upperRange) {
//       console.log(
//         `${
//           owners[0] === "Sarah" ? "Sarah" : undefined
//         }'s dog is eating just okay`
//       )
//     }
//   }
//   const ownersEatTooMuch = function () {
//     if (curFood > dog.recommendedPortion) {
//       // console.log(
//       //   `${
//       //     owners.length <= 1 ? owners : `${owners[0]} and ${owners[1]}`
//       //   }'s dog is eating too much`
//       // )
//       ownersEatTooMuchArray.push(...owners)
//     }
//   }
//   ownersEatTooMuch()

//   const ownersEatTooLittle = function () {
//     if (curFood < dog.recommendedPortion) {
//       // console.log(
//       //   `${
//       //     owners.length <= 1 ? owners : `${owners[0]} and ${owners[1]}`
//       //   }'s dog is eating too little`
//       // )
//       ownersEatTooLittleArray.push(...owners)
//     }
//   }
//   ownersEatTooLittle()

//   const dogsEatingExactlyRecommended = dogs.some(
//     (dog) => dog.curFood === dog.recommendedPortion
//   )
//   const dogsEatingOkayAmount = dogs.some(
//     (dog) => dog.curFood > dog.lowerRange && dog.curFood < dog.upperRange
//   )
//   dogsEatingOkayAmountArray.push(dogsEatingOkayAmount)
// })
// console.log(`${ownersEatTooMuchArray.join(" and ")}'s dogs eat too much`)
// console.log(`${ownersEatTooLittleArray.join(" and ")}'s dogs eat too little`)
// console.log(dogsEatingOkayAmountArray)

// const dogsCopy = [...dogs].sort(function (a, b) {
//   if (a.recommendedPortion > b.recommendedPortion) return 1
//   if (a.recommendedPortion < b.recommendedPortion) return -1
// })
// // const dogsCopy = [...dogs].sort((a, b) => a.recommendedPortion - b.recommendedPortion) // This also works
// // We can also use .slice() method without any arguments to copy the array, instead of [...dogs]
// console.log(dogsCopy)

// The second way

const dogs = [
    { weight: 22, curFood: 278, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
  ]
  
  // 1.
  dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)))
  
  // 2.
  const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"))
  console.log(
    `Sarah's dog is eating ${
      dogSarah.curFood > dogSarah.recFood ? "too much" : "too little"
    }`
  )
  
  // 3.
  const ownersEatTooMuch = dogs
    .filter((dog) => dog.curFood > dog.recFood)
    .flatMap((dog) => dog.owners)
  const ownersEatTooLittle = dogs
    .filter((dog) => dog.curFood < dog.recFood)
    .flatMap((dog) => dog.owners)
  console.log(ownersEatTooMuch)
  console.log(ownersEatTooLittle)
  
  // 4.
  console.log(`${ownersEatTooMuch.join(" and ")}'s dogs are eating too much`)
  console.log(`${ownersEatTooLittle.join(" and ")}'s dogs are eating too little`)
  
  // 5.
  console.log(dogs.some((dog) => dog.curFood === dog.recFood))
  
  // 6.
  /* We are setting this function as an arrow function,
  so we can later use it as a callback function
  */
  const checkEatingOkay = (dog) =>
    dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  console.log(dogs.some(checkEatingOkay))
  
  // 7.
  console.log(dogs.filter(checkEatingOkay))
  
  // 8.
  const dogsSorted = [...dogs].sort((a, b) => a.recFood - b.recFood)
  console.log(dogsSorted)
  