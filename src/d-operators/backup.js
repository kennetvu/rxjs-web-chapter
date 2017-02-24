import Rx from 'rxjs/Rx';
import updateContent, { replaceTitle } from '../utility';
replaceTitle("Fancy operators");


// Slide 24
// interval: emits ascending numbers every X ms
// start with 2000
// delay, skip, take, do, filter, scan, merge
// SPEED UP PLS!
const myObservable = Rx.Observable.interval(100)
  // .delay(3000)
    .skip(2)
    .take(10)
  // .filter((i) => i % 2 == 0)
  // .do((i)=> console.log(`before scan: ${i}`))
  // .scan((acc, curr) => acc+curr, 0)
  ;

// myObservable.subscribe({
//   next: (val) => {
//     console.log(`observable: ${val}`);
//     updateContent(val);
//   }
// });


const evenObservable = myObservable
  .filter(x => x % 2 == 0);

const oddObservable = myObservable
  .filter(x=> x%2 != 0);

// evenObservable.subscribe({
//   next: (val) => {
//     console.log(`evenobservable: ${val}`);
//     updateContent(`even ${val}`);
//   }
// });
// oddObservable.subscribe({
//   next: (val) => {
//     console.log(`oddObservable: ${val}`);
//     updateContent(`odd ${val}`);
//   }
// });

// const merged = evenObservable.merge(oddObservable);
// merged.subscribe({
//   next: (val) => {
//     console.log(`merged: ${val}`);
//     updateContent(`merged ${val}`);
//   }
// });
// const concat = evenObservable.concat(oddObservable);
// concat.subscribe({
//   next: (val) => {
//     console.log(`concat: ${val}`);
//     updateContent(`concat ${val}`);
//   }
// });
