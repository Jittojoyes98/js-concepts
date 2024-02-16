// namaste js (Basics) 

// note that here we are using var only.



console.log(x)
console.log(getName) // gives undefined as getName is a var in arrow functions.
// getName()

var x=10;

// if we use arrow function it wont take to the top scope and thus gives the 
// error
// var getName=()=>{
//     console.log("Hi user")
// }

console.log(getName) // gives fullfunction as getName just the same function.
// getName()
function getName(){
    console.log("Hi user")
}

// console.log(getName)

// -------------------------------------- //

