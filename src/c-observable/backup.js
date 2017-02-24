import Rx from 'rxjs/Rx';

const simpleObserver$ = Rx.Observable.create((observer) => {
  observer.next(2);
  setTimeout(function () {
    observer.complete();
  }, 1000);
});


simpleObserver$.subscribe({
  next: (val) => {
    console.log(val);
  },
  err: () => {

  },
  complete: () => {
    console.log("coMPLETE");
  }
});

import Rx from 'rxjs';

const observerable = Rx.Observable.create((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
  observer.next(4);
});

const nextFn = (val) => {
  console.log(val);
};

const errorFn = (val) => {
  console.log(`Error: ${val}`);
};

const completeFn = (val) => {
  console.log(`Done!: ${val}`);
};

observerable.subscribe(nextFn, errorFn, completeFn);



import Rx from 'rxjs';
import updateContent, {replaceTitle} from '../utility';
replaceTitle("Observables are awesome");

const observable = Rx.Observable.create((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  const timeoutId = setTimeout(()=> {
    observer.next(4);
    observer.complete();
  }, 2000); //wait 2 sec
  // return function unsubscribe(){
  //   clearTimeout(timeoutId);
  // }
});


const observer = {
  next: x => {
    console.log('Observer got a next value: ' + x);
    updateContent(x)
  },
  error: err => console.error('Observer got an error: ' + err),
  complete: () => {
    console.log('Observer got a complete notification');
    updateContent("Complete")
  },
};

console.log('just before subscribe');
// observable.subscribe(observer);
// const subscription = observable.subscribe(observer);
console.log('just after subscribe');

// subscription.unsubscribe();





