/**
 *
 * @source at namaste js
 */

// async function getData(){
//     console.log("Hii")
//     return "abc"
//     // note a wrapped promise is always returned
// }

// const data=getData()
// console.log(data); // note this become a promise that is not resolved.
// data.then((res)=>console.log(res)) // gives the returned data
// const newData=getData().then((res)=>console.log(res)) // gives the returned data

// why async await is different.

const p = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved('The promise is resolved');
  }, 10000);
});

const p2 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved('The promise is resolved');
  }, 10000);
});

const p1 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved('The promise is resolved');
  }, 5000);
});

// async function getData(){
//     return p;
// }
// getData().then((res)=>console.log(res))

// console.log("Before promise")

// const handlePromise=async()=>{
//     console.log("Before promise")
//     const data=await p;
//     console.log(data)
//     console.log("After promise")
// }

// handlePromise()

// handling more than one promises.

const handlePromise = async () => {
  console.log('Before promises');
  const data = await p2;
  console.log(data);
  console.log('After promise1');

  const data2 = await p1;
  console.log(data2);
  console.log('After promise2');
};

handlePromise();
// setTimeout(() => {
//   console.log('after timeout');
// }, 5000);
