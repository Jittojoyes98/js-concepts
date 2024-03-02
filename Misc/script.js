// shallow copy and deep copy
// shallow copy means only a copy is made, any changes
// wont affect the orginal. But shallow copy means the 
// its copying in 1st level, deeper levels are referenced.

// types of copying the object.

const obj={name:"Jitto",age:23,country:{state:"Kerala"}}

const obj1=obj // direct , not shallow or deep, direct reference

const obj2={...obj}  // using spread, shallow copy

const obj3=Object.assign({},obj); // using objectassign shallow copy

const obj4=JSON.parse(JSON.stringify(obj)) // using json , deep copy

// obj1.age=25;
// obj1.country.state="Goa"
// console.log(obj); // will change, whole is a reference

// obj2.age=35;
// obj2.country.state="Goa" // will change as its only 1 level copy,other is referenced
// console.log(obj); // wont change

// obj3.age=35;
// obj3.country.state="Goa" // will change as its only 1 level copy,other is referenced
// console.log(obj); 

obj4.age=35;
obj4.country.state="Goa" // wont change anything as its a deep copy, no referencing
console.log(obj); 


// null coelising

const ifNull=undefined??"heyy";
console.log(ifNull);

// falsy truthy

const value=""

console.log(!value ? "falsy":"truthy")

// === vs ==
console.log("=== vs ==");

// === means value and type thats it.

// note that there is a type conversion that is happening.
console.log(1=='1')
console.log(0=='') //true
console.log(0=='0')

// only use case for ==
console.log(null==undefined)

// null vs undefined

// not much difference





