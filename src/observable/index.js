import Rx from 'rxjs';

const observerable = Rx.Observable.create((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(()=> {
    observer.complete();
  }, 1000);
  observer.next(4);
});

const nextFn = (val) => {
  console.log(val);
};

const errorFn = (val) => {
  console.log(`Error: ${val}`);
};

const completeFn = () => {
  console.log(`Done!`);
};

observerable.subscribe(nextFn, errorFn, completeFn);




