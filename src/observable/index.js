import 'bulma/css/bulma.css';
import Rx from 'rxjs/Rx';

const simpleObserver$ = Rx.Observable
.create((observer) => {
  observer.next(2);
  setTimeout(function() {
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



