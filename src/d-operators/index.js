import Rx from 'rxjs/Rx';
import updateContent from '../utility';

// Slide 24
// interval: emits ascending numbers every X ms
// start with 2000
// delay, skip, take, do, filter, scan, merge
const myObservable = Rx.Observable.interval(1000)
// .delay(3000)
  .skip(2)
  .take(10);

myObservable.subscribe({
  next: (val) => {
    console.log(`observable: ${val}`, val);
    updateContent(val);
  }
});

// const getPostOne$ = Rx.Observable.timer(3000).mapTo({ id: 1 }); // 3 seconds
// const getPostTwo$ = Rx.Observable.timer(1000).mapTo({ id: 2 }); // 1 sec
//
// getPostOne$.concat(getPostTwo$).subscribe(val=>updateContent(`concat: ${val.id}`));

// Just like promise all
// Rx.Observable.forkJoin(getPostTwo$, getPostOne$).subscribe(res => console.log(res))

// const evenObservable = myObservable
//     .filter(x => x % 2 == 0);
//
// const oddObservable = myObservable
//   .filter(x=> x%2 != 0);

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


// // Slide 24
// // (oberver) => {} ,,, emits ascending numbers every X ms
// // start with 2000
// const myObservable = Rx.Observable.interval(500)
//   // .delay(3000)
//     .skip(2)
//     .take(10)
//     .do(x => {
//       console.log(x);
//       updateContent(`before filter ${x}`);
//     })
//     .filter(x => x % 2 == 0)
//     // .map(x => x*2)
//     .scan((acc,curr) => acc+curr,0)
//   ;
//
// myObservable.subscribe({
//   next: (val) => {
//     console.log(`observable: ${val}`);
//     updateContent(val);
//   }
// });
//
