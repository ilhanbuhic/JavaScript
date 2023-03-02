"use strict";

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
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, adress }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${adress} at ${time}`
    );
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// With FOR loop
console.log(`FOR loop`);
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

// With FOR-OF loop
console.log(`\n\nFOR-OF loop`);
for (const item of menu) console.log(item);

// Getting the current index with FOR-OF loop
console.log(`\n\nCurrent index with FOR-OF`);
for (const item of menu.entries()) console.log(...item);

// Old way
// for (const item of menu.entries())
// console.log(`${item[0] +1}: ${item[1]}`)

// New way
console.log(`\n`);
for (const [i, el] of menu.entries()) {
  console.log(`${i}: ${el}`);
}
