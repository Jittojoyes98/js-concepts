/**
 * @source is Roadside coder
 */

// const property="firstName";
// const name="Jitto"

// to make key as a string
// use [] method for it.

// const obj={
//     age:25,
//     "my name is":"jitto",
//     [property]:name,
// }

// for(key in obj){
//     console.log(key,"---")
// }

// console.log(obj[property])

// const user=(function(x){
//     delete x;
//     return x;
// },(2));

// console.log(user);


 /* ----- QUESTIONS ------ */

//  1. What is JSON.stringify and JSON.parse

// const person={
//     age:23,
//     health:30,
//     level:18,
// }

// const newPerson=JSON.stringify(person,["level","health"])
// console.log(newPerson,"000")

// 2.destructure
    // const newUser={
    //     userName:{
    //         firstName:"Jitto",
    //         lastName:"Joyes",
    //     },
    //     age:25,
    // }

    // const {userName:{firstName}}=newUser; // nested destructuring

    // console.log(firstName) // note we dont get username value here.

// 3. referencing (important question)
// var obj1={
//     place:"kerala",
//     country:"India"
// }
// var obj2=obj1;

// obj2=null // it wont change the reference, 
// // obj2.place="banglore" // it will change the refernce 

// console.log(obj1);

// another example
// let person={
//     name:"Livya"
// }
// const members=[person]
// // person=null; // wont change
// person.name="LEWIS"// will change
// console.log(members)

// important

// const value={number:10}

// const multiply=(x={...value})=>{
//     console.log((x.number*=2)) // note the updated x.number is printed 
// }
// multiply() // prints 20 because we are using the copy using spread
// multiply()
// multiply(value) // 20
// multiply(value) // 40 it actually changed the value since there is x=value assign happens

// another important question

function changeAgeandReference(person){
    person.age=25;
    person={
        name:"John",
        age:50,
    }
    return person;
}

const personObj1={
    name:"Alex",
    age:30
}

const personObj2=changeAgeandReference(personObj1)
console.log(personObj1) // {name:"Alex",age:25} we assigned directly not property,so that wont change 
console.log(personObj2) // {name:"John",age:50} directly assigned comes in as its returned.

// actually cloning or deepcopy or no refernce
// const deepClone = JSON.parse(JSON.stringify(nestedObject));


