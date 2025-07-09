/**
 * @source - devto -https://dev.to/masteringjs/using-then-vs-async-await-in-javascript-2pma
 * Async await vs .then
 */

/**
 * ASYNC
 */
// async function test() {
//   console.log('Ready');
//   let example = await fetch('http://httpbin.org/get'); // note, there is this pretending to wait
//   console.log('I will print second');
// }

// test();
// console.log('I will print first');

/**
 * AWAIT
 */

function test() {
  console.log('Ready');
  let example = fetch('http://httpbin.org/get').then((res) => {
    console.log('This is inside the then() block');
  });
  console.log('This is after the fetch statement where we are now executing other code that is not async');

}

test();
console.log('this is after the entire function');