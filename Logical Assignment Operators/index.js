'use strict'

const rest1 = {
  name: 'Capri',
  numGuests: 0
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi'
}

// First way 
// We are going to add numGuests property to the objects that do not have them
// This value was already 20, so it got returned immediately
rest1.numGuests = rest1.numGuests || 10
// This one turned 'undefined', so the second one was returned (10)
rest2.numGuests = rest2.numGuests || 10

// Second way (OR assignment operator)
rest1.numGuests ||= 10
rest2.numGuests ||= 10
// This operator assigns a value to a variable if that variable is currently falsy
// rest2.numGuests was falsy, so it was assigned the value of 10

// Nullish assignment operator
// We can use this in case if numGuests is 0, which is a falsy value, but we still want for that 0 to be returned
rest1.numGuests ??= 10
rest2.numGuests ??= 10

console.log(rest1, rest2)

// AND assignment operator
// Let's say that we want to anonymouse the name of the restaurant owners. So when there currently is a owner, we want to replace the string with 'anonymouse'
// This works because of short curcutting. It short curcuts when the first value is falsy and it immediately returns that falsy value
rest1.owner ||= '<ANONYMOUS>'
// This is truthy, so the second value will be evaluated and returned  
rest2.owner &&= '<ANONYMOUSE>'

console.log(rest1.owner, rest2.owner)