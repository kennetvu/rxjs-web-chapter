import Rx from 'rxjs/Rx';
import updateContent from '../utility';
/* HTML magic*/

// Slide 24
// (oberver) => {}
const myObservable = Rx.Observable.create(function (observer) {
  console.log("observable!");
  observer.next(1); // first value
  observer.next(2); // second vaue
  observer.next(3); // third value
  setTimeout(() => {
    observer.next(4);
    observer.complete(); // complete after 4 seconds
  }, 4000) // 4sec
});

console.log("Observables are laaazy");
// updateContent("koko");
