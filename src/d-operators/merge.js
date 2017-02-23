import Rx from 'rxjs/Rx';
import updateContent from '../utility';

const myObservable = Rx.Observable.interval(500)
// .delay(3000)
  .skip(2)
  .take(10);

const evenObservable = myObservable
  .filter(x => x % 2 == 0);

const oddObservable = myObservable
  .filter(x=> x%2 != 0);

// myObservable.subscribe({
//   next: (val) => {
//     console.log(`observable: ${val}`);
//     updateContent(val);
//   }
// });
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

const merged = evenObservable.merge(oddObservable);
merged.subscribe({
  next: (val) => {
    console.log(`merged: ${val}`);
    updateContent(`merged ${val}`);
  }
});
