import Rx from 'rxjs/Rx';

// Basic example of promise
const futureValue = new Promise((resolve, reject) => {
  // This block is not lazy
  setTimeout(() => {
    console.log("promise timeout hit!");
    resolve("I'm from the future");
  }, 2000); //wait 2 sec
  console.log("promise started")
});

futureValue.then(val => {
  console.log(val);
});


const futureValueObs = Rx.Observable.create((observer) => {
  setTimeout(() => {
    console.log("observable: timeout hit!");
    observer.next("observable: I'm from the future");
  }, 2000); //wait 2 sec
  console.log("observerble: started")
});

futureValueObs.subscribe((val) => {
  console.log(val);
});



