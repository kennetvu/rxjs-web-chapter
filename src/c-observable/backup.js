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






