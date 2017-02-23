import Rx from 'rxjs/Rx';
// Basic example of promise
const futureValue = new Promise((resolve, reject) => {
  // This block is not lazy
  setTimeout(() => {
    console.log("promise: timeout hit!");
    resolve("promise: I'm from the future");
  }, 1000); //wait 2 sec
  console.log("promise: started")
});

// futureValue.then(val => {
//   console.log(val);
// });

//
//
// // Promise is CACHED!
// setTimeout(() => {
//   futureValue.then(val => {
//     console.log(val);
//   });
// }, 3000);

// Using RXJS on observable
// const promiseObs = Rx.Observable.fromPromise(futureValue);
// promiseObs.subscribe((v) => console.log(v));
//
// const res = Rx.Observable.fromPromise(fetch('http://jsonplaceholder.typicode.com/posts'));
// res.subscribe(x => console.log(x));

// const futureValueObs = Rx.Observable.create((observer) => {
//   setTimeout(() => {
//     console.log("observable: timeout hit!");
//     observer.next("observable: I'm from the future");
//   }, 1000); //wait 2 sec
//   console.log("observable: started")
// });
//
// futureValueObs.subscribe((val) => {
//   console.log("observable: first");
//   console.log(val);
// });
//
// // Not cached observer
// setTimeout(() => {
//   futureValueObs.subscribe((val) => {
//     console.log("observable: second");
//     console.log(val);
//   });
// }, 3000);
