import Rx from 'rxjs/Rx';
import updateContent, { replaceContent } from '../utility';
/* HTML magic*/


const input = Rx.Observable.fromEvent(document.querySelector('input'), 'input')
  .map(e => e.target.value)
  .combineLatest(Rx.Observable.interval(1000))
  .pluck(0);

const posts$ = input
  .map(val => `http://localhost:3001/players?q=${val}`)
  .switchMap(url =>
    Rx.Observable.ajax(url)
      .map(e => e.response)
  );

// const fetchEveryTenSec =
//   .combineLatest(posts$);
//
// Rx.Observable.combineLatest(
//   input,
// )
const sub = posts$.subscribe((val) => replaceContent(JSON.stringify(val)));

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
