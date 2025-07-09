// namaste js (Basics)

// note that here we are using var only.

console.log(x);
console.log(getName); // gives undefined as getName is a var in arrow functions.
// getName()

let x = 10;

// if we use arrow function it wont take to the top scope and thus gives the
// error
var getName = () => {
  console.log('Hi user');
};
// console.log(x);
// console.log(getName); // gives fullfunction as getName just the same function.
// getName()
// function getName() {
//   console.log('Hi user');
// }

// console.log(getName)

// -------------------------------------- //

// note hoisting for function

// a();
// b();
// gives error , because although function is undefined , we cant really call them
// note here its giving error because its a var not an anonymous way of declaring.

// function a() {
//   console.log('Hi there');
// }

// var b = function () {
//   console.log('Hi there');
// };

// console.log(this);
