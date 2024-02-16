// let and const are hoisted, but hoisted differently 
// from var.

// console.log(a)
// stops execution

// let a=10;

// type error in const 

// const x=10;
// x=100;

// syntax error 
// const b;
// b=1000;

// block scope
// let and const are block scoped.

// {
//     var a=10;
//     let b=100;
//     const c=1000;
// }
// console.log(a)
// console.log(b)
// console.log(c)

// shadowing in js

// working of var
var a=10;
{
    var a=100;
    let b=100;
    const c=1000;
}
console.log(a) // prints 100, var is not block scoped

// working of let

let b=10;
{
    var a=100;
    let b=1;
    const c=1000;
}
console.log(b) // prints 10


// illegal shadowing
console.log("illigela shadowing")

// works
// var shadow=10;
// {
//     let shadow=100;
// }


// dont work
// let shadow=10;
// {
//     var shadow=100;
// }

// this works 
let shadow=10;

// because this block is having a border so it works,
//  new execution block
function func(){
    var shadow=100;
}
func()



