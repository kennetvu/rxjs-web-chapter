const myObservable = (observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
};

var subscription = source.subscribe(
  function (x) {
    console.log('Next: ' + x);
  },
  function (err) {
    console.log('Error: ' + err);
  },
  function () {
    console.log('Completed');
  });
