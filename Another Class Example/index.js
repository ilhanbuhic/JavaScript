"use strict"

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner
    this.currency = currency
    this.pin = pin
    this.movements = []
    this.locale = navigator.language
  }

  deposit(val) {
    this.movements.push(val)
  }

  widthdraw(val) {
    this.deposit(-val)
  }

  approveLoan() {
    return true
  }

  requestLoan(val) {
    if (this.approveLoan()) {
      this.deposit(val)
      console.log("Loan approved")
    }
  }
}

const acc1 = new Account("Ilhan", "EUR", 1111)

// Instead of this, we can do: (line: 12 - 18)
// acc1.movements.push(200)
// acc1.movements.push(-140)
acc1.deposit(200)
acc1.widthdraw(140)
acc1.requestLoan(140)
console.log(acc1)
