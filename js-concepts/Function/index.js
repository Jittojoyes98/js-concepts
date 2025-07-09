// Function statement also same as function decalration
// a()
// b()

function a() {
  console.log("Hi there");
}

// Function expression

var b = function () {
  console.log("Hi there");
};

// anonymous function , it can be used as a value
// or else it will give an error
// function (){
// }

// syntax error

// named function expression (important interview question)

var x = function xyz() {
  console.log("Hello ");
};

x();
xyz(); // it gives an error because of scope issue , like within xyz only.

// params and arguments.

function y(param1, param2) {
  // params
}
y(1, 2); // arguments

// functions are first class functions , because it can be used as values, params, return type etc thus first class

// callback functions in js
// js is a synchronous and single-threaded language
