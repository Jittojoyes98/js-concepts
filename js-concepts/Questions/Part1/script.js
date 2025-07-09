// event loop

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
//   by the time global execution scope is ended , the value of var becomes 3
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// object and arrow and other functions

// const shape = {
//   radius: 10,
//   diameter:function() {
//     return this.radius * 2;
//     // "this" is defined here for regular function not for callbacks or arrow. 
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());

// truthy falsy and operand working

// console.log(+'true'); // nan as 'true' is converted to number here
// console.log(!'liya'); // false
// console.log(+true);  // +1

// objects

// In JavaScript, all object keys are strings (unless it's a Symbol). 
// Even though we might not type them as strings,
//  they are always converted into strings under the hood.

// Then, we ask for the size using dot notation: mouse.bird.size. Since mouse.bird is undefined, we're actually asking undefined.size

// const bird = {
//   size: 'small',
// };

// const mouse = {
//   name: 'Mickey',
//   small: true,
// };


// speacial feture of var
// let greeting;
// greetign = {}; // Typo!
// console.log(greetign);


// functions are objects so we can do like

// function bark() {
//   console.log('Woof!');
// }

// bark.animal = 'dog';

// objects and adding properties, proptypes
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Person('Lydia', 'Hallie');
// Person.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// }; 
// this wont add anything to member object,a new object
// after this will have access to getFullName.
// to get instant access add to proptype
// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName()); 
// will give error, type error  "note" its type error as getFullName is not a fuction, not syntax error


// constructor,object

// function Person(firstName,lastName){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     // return "hii"
//     // this. things make the function a constructor. and thus object.
//     // note the return , even if we return anything else we 
//     // get the same this as return, its because we used this...
// }
// function helloo(){
//     console.log("Hello function");
// }

// const person1=new Person("liya","theressa")
// const person2= Person("liya","theressa")


// console.log(person1);
// console.log(person2);// Hii // returns undefined if nothing is returned.


// type coersion
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, '2')); // "12" its a string
// console.log(sum('2',1)); // "21" its a string
// so the preference is for string conversion in "+" as binary operator


// objects

// try to change with this
// const obj={age:18}
// const obj2=obj; 


// function checkAge(data) {
//   if (data === { age: 18 }) {
//     console.log('You are an adult!');
//   } else if (data == { age: 18 }) {
//     console.log('You are still an adult.');
//   } else {
//     console.log(`Hmm.. You don't have an age I guess`);
//   }
// }

// checkAge({ age: 18 }); 
// objects are checked by reference
// not by value, so === and == wont work.



//  spread in arguments

// function getAge(...args){
//     console.log(args)
// }

// getAge([12,13])
// getAge(12)

// const numbers=[12,12,34]
// function getSum(...args){
//     console.log(args)
//     // console.log(x,y,z)
// }

// getSum(...numbers)

// note spread in params will try to take, if not an array of values as 
// [[...]] , just the zero'th index


// misc
// const sum = eval('10*10+5');
// console.log(sum);


// objects, thought this would give syntax error 

// const obj = { a: 'one', b: 'two', a: 'three' };
// console.log(obj);
// it wont give syntax error , but a is replaced with the last
// given value, but the position of a wont change("note").

// keys in objects are converted to string by default.

// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);
// when converted it gets into "[object Object]" and thus 2 times replaces.

/**
 * object method create
 * This method creates a prototype not just an instance,
 * so if we delete any propery,
 * it still have it from its inheritance 
 * */ 

// var Employee = {company:"xyz"}
// var emp1 =Object.create(Employee);
// emp1.company="abc";
// delete emp1.company;
// console.log(emp1.company); // xyz is still there
// delete emp1.company;
// console.log(emp1.company); // xyz is still there, this is called referenced

// delete has no effect on variables  it has effect on object properties

// var output = (function(x){
//   delete x;
//   return x;
// })(0);
// console.log(output)


/**
 * Type of
 * FYI: typeof can return the following list of values: undefined, boolean, number, bigint, string,
 *  symbol, function and object. Note that typeof null returns "object".
 */

/**
 * array value for non-existant value, will give empty
 */

// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);


