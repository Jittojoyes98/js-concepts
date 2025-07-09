/**
 * @Simpleexample
 * reference akshay saini
 */

// x=10 // note x is binded to this and thus we can do (delete x) which returns true


// function multiply(x,y){
//     console.log("Multiplying",x*y)
// }

// const multiplyByTwo=multiply.bind(this,2)
// multiplyByTwo(9) // oh wow... this is with bind method.


// // using a closure method for curring
// const multiplyClosure=(x)=>{
//     return function(y){
//         console.log(x*y)
//     }
// }

// const closureCurrying=multiplyClosure(5)
// closureCurrying(10)

// infinite currying

function adding(a){
    return function(b){
        if(b) return adding(a+b)
        return a;
    }
}
console.log(adding(1)(2)())
// infinite currying

function sum(a) {
  return function (b) {
    if (!b) {
      return a;
    }
    return sum(a + b);
  };
}
console.log(sum(1)(2)(3)(4)(5)(6)()); // should call like this...
