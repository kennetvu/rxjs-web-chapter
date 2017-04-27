import Rx from 'rxjs/Rx';
import updateContent, { replaceContent } from '../utility';
/* HTML magic*/

const inputfield = document.querySelector('input');

const input = Rx.Observable.fromEvent(inputfield, 'input')
  .map(e => e.target.value)
  .combineLatest(Rx.Observable.interval(1000))
  .pluck(0); // Returns an Observable containing the value of a specified nested property from all elements in the Observable sequence.

const input$ = input
  .filter(value => value.length > 2)
input$.subscribe(value => replaceContent(`inputfield: ${value}`));
// input$.subscribe(value => updateContent(`inputfield: ${value}`));

const posts$ = input
  .map(val => `http://localhost:3001/players?q=${val}`)
  .switchMap(url =>
    Rx.Observable.ajax(url)
      .map(e => e.response)
  );

// const sub = posts$.subscribe((val) => {
  // const mapd = val.map(p => `${p.firstName} ${lastName}`);
  // replaceContent(JSON.stringify(val))
// }); // edit server

// subscription
// setTimeout(()=> {
//   sub.unsubscribe();
// }, 5000);


// input.filter(event => event.target.value.length > 2)
//   .map(event => event.target.value)
//   .subscribe(value => replaceContent(`inputfield: ${value}`)); // "hel"

// Stop the stream of events after 3 events
// input.take(3)
//   .map(event => event.target.value)
//   .subscribe(value => replaceContent(`done: ${value}`)); // "hel"
