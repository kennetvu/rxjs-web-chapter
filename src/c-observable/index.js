import Rx from 'rxjs';
import updateContent from '../utility';
const observable = Rx.Observable.create((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  const timeoutId = setTimeout(()=> {
    observer.next(4);
    observer.complete();
  }, 1000);
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
// const subscription = observable.subscribe({
observable.subscribe(observer);
console.log('just after subscribe');
// subscription.unsubscribe();

