// "use strict"
/* Sometimes in JavaScript we need a function that is only executed once and then, never again.
A function that disappears right after it's called once. This will be very useful with Async, Await */
;(function () {
  console.log("This will never run again")
})()
// Normaly, without putting this whole function into phrases, JavaScript would expect us to pass in the name of the function,
// but when we put parentheses, we can trick JavaScript into thinking that this is just an expression.
// We basically transformed that statement that we had before into an expression

// Arrow function:
;(() => {
    console.log('This will ALSO never run again')
})()

/* Why is this pattern even invented?
We know that functions create scopes and one scope does not have access to variables from an inner scope.
Right here, in this global scope, we do not have access to any variables that are defined in the scope of any of these functions
*/
;(function() {
    console.log('Scope Chain')
    const isPrivate = 23
})()
console.log(isPrivate)
// This is not going to work because of the scope chain

/* So the inner scope would have access to anything defined outside in the global scope,
but the other way around the global scope does not have access to anything that is inside the scope
All data defined inside a scope is private, is encapsulated inside of a function scope
Data encapsulation and data privacy are very important in programming.
Many times we need to protect our variables from being accidentally overwritten by some other parts by the program,
or even with external scripts or libraries.

Variables declared with let or const also create their own scope inside a block

IIFE are not that used anymore. If we want to create a new scope for data privacy,
we can just create a block containing variables declated with let or const,
which will protect variables themselves as they create new  
*/