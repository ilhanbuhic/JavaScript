// Food prices
const juice = 2.25
const burger = 4.75
const desert = 3.55

// account Balance
var accountBalance = 17

// Drink juice
function drinkJuice() {
    accountBalance -= juice
    console.log(accountBalance)
}

// Eat burger
function eatBurger() {
    accountBalance -= burger
    console.log(accountBalance)
}

// Eat Desert
function eatDesert() {
    accountBalance -= desert
    console.log(accountBalance)
}

// Calling function for drink and eat
// drinkJuice()
// eatBurger()
// eatDesert()
// drinkJuice()

var eatOut = [drinkJuice, eatBurger, eatDesert]

function goingOut(eatingOut) {
    for (let i = 0; i < eatingOut.length; i++) {
        eatingOut[i]()
    }
}

goingOut(eatOut)