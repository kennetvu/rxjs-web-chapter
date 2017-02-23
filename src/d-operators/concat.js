const myObservable2 = Rx.Observable.interval(100)
  .skip(10)
  .take(10);


const myObservable3 = Rx.Observable.interval(100)
  .skip(20)
  .take(10);
const concatObserv = myObservable.concat(myObservable2, myObservable3);
concatObserv.subscribe({
  next: (val) => {
    console.log(`oddObservable: ${val}`);
    updateContent(`odd ${val}`);
  }
});
