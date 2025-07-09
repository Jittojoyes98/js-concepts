/** 
 * @source is debug media 
*/


// console.log(this); // refers to window object 

// function getName(){
//     console.log(this); // refers to window object 
// }

// getName();

// const person={
//     name:"jitto",
//     // getName: function getName(){ // note the function decalration
//     //     console.log(this); // refers to the actual object {name,function} 
//     // }
//     // same as above
//     getName(){ // note the function decalration
//         console.log(this); // refers to the actual object {name,function} 
//         console.log(this.name)
//     }
// }

// try person with method

// person.getName() // note the value

// if we want to use a function along with a object context then we
//  need to use bind,apply or call
function getDetails(){
    console.log(this.age);
    console.log(this.name);
}

const person={
    name:"Jitto",
    age:23,
}

// getDetails.call(person) // calls the function
// getDetails.apply(person) // calls the function
const returnedFunction= getDetails.bind(person); // returns a function
returnedFunction()

// function getSum(x,y,z){
//     console.log(this.age);
//     console.log(this.name);
//     console.log(x+y+z)
// }



// getSum.call(person,"1","2","3") // calls the function
// // call -comma separated
// getSum.apply(person,["1","2","4"]) // calls the function
// apply - array

/**
 * Question using constructor
 */ 

// class User{
//     constructor(){
//         this.name="Alan"
//     }
//     getNameAndDetails(){
//         return this.name;
//     }
// }

// const user1=new User();

// console.log(user1.getNameAndDetails())

// const userNameFunction=user1.getNameAndDetails;

// // console.log(userNameFunction()) // gives error as the this context is not ther


// const userNameFunctionBinded=user1.getNameAndDetails.bind(user1)

// console.log(userNameFunctionBinded()) // no error Alan

/**
 * Arrow functions
 */

// const person1={
//     name:"ABC",
//     method(){
//         return function getThis(){
//             return this;
//         }
//         // since its that anonymous its always in the global scope 
//         // and thus no variable named this and points to global scope
//         const getThis=()=>{
//             return this; 
//             // now here it checks for its current lexical scope 
//             // there is a presence of this and this returns 
//             // actual this
//         }
//         return getThis
//     }
// }



// const newPerson=person1.method()
// console.log(newPerson())

/**
 * @Namastejs
 */

// in the gobal scope 
    // "use strict";

// console.log(this) // in node its different.

// // inside a function

// function x(){
//     console.log(this)
// }
// x();
// window.x(); // it becomes window

// inside the object

// const obj={
//     name:"Jitto",
//     x:function(){
//         console.log(this)
//     }
// }
// obj.x();


// bind,call, apply

const std1={
    mark:50,
    x:function(){
        console.log(this);
    }
}

const std2={
    mark:54,
}

std1.x.call(std2) // now here we are calling x with another object as a refernce
// std2 is the reference here

// within an arrow function

const user={
    name:"Deepthi",
    x:()=>{
        console.log(this) // it gives window
    }
}
user.x()

const userNested={
    name:"Bhasha",
    say:function (){
        // console.log(this); // similar
        const x=()=>{
            console.log(this) // here this refers to enclosing scopes's
        }
        x();
    }
}

userNested.say() 















