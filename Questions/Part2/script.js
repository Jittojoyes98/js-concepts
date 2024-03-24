/**
 * strings are iteratable
 */

console.log([...'Lydia'])

// falsy and truthy

// There are 8 falsy values:

// undefined
// null
// NaN
// false
// '' (empty string)
// 0
// -0
// 0n (BigInt(0))

const newNumber = new Number(0)
// constructor values are truthy.
// console.log(!newNumber)
  //
//   (() => {
//   let x, y;
//   try {
//     throw new Error();
//   } catch (x) {
//     (x = 1), (y = 2);
//     console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })()

// here we know that the x value assigning will stay 
// as its inside the blocck doesnt affect.


// console.log(setInterval(() => console.log('Hi'), 1000))


// console.log(3 + 4 + '5'); 75
// const arr=[1, 2, 3]
// const newarr=arr.map(num => {
//   if (typeof num === 'number') return;
//   return num * 2;
// });


// console.log(newarr)// note the value

// == checking


// The difference between primitive and non-primitive data types is that:

// primitive data types are compared by value.
// non-primitive data types are compared by reference.



/**
 * 
 * @MostImportantQuestion - Q53
 */

function Car() {
  this.make = 'Lamborghini';
  console.log(this);
  return { make: 'Maserati' };
}

const myCar = new Car();
console.log(myCar.make);

/**
 * 
 * @AnotherOne
 * let x=(y=10)
 * is equivalent to 
 * y = 10;
 * let x = y;
 */


/**
 * @CompareObjects
 * https://www.educative.io/answers/how-to-compare-two-objects-in-javascript
 */

// const obj1 = { name: "Jack", age: 25 };
// const obj2 = { age: 25, name: "Jacks" };
// let objEqual = false;

// const obj1Keys = Object.keys(obj1).sort();
// const obj2Keys = Object.keys(obj2).sort();
// if (obj1Keys.length !== obj2Keys.length) {
//   console.log(objEqual);
// } else {
//   const areEqual = obj1Keys.every((key, index) => {
//     const objValue1 = obj1[key];
//     const objValue2 = obj2[obj2Keys[index]];
//     return objValue1 === objValue2;
//   });
//   if (areEqual) {
//     objEqual = true;
//     console.log(objEqual);
//   } else {
//     console.log(objEqual);
//   }
// }

console.log("-------------")

/**
 * @Question58
 */

const name = 'Lydia';
age = 21;

console.log(delete name);
console.log(delete age);

// The delete operator returns a boolean value: true on a successful deletion, else it'll return false. However, variables declared with the var, const, or let keywords cannot be deleted using the delete operator.

// The name variable was declared with a const keyword, so its deletion is not successful: false is returned. When we set age equal to 21, we actually added a property called age to the global object. You can successfully delete properties from objects this way, also the global object, so delete age returns true

/**
 * @foreachvsmap
 */

const arr=[1,2,3,4]

// 
const newArr=arr.forEach((x)=>{
  x=x+1 // it doesn't return anything
  return x; // if we return also it does not work
})

console.log(arr,"here we go ",newArr);





