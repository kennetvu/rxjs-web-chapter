import Rx from 'rxjs/Rx';
import updateContent, { replaceContent, replaceTitle } from '../utility';
//replace title PLS
replaceTitle('Bleeh mousevents')

const app = document;

// mouse: mousemove, click, scroll
// Keyboard: keyup, keydown
// app.addEventListener("mousemove", (e) => {
//   const str = `x: ${e.x}, y: ${e.y}`;
//   console.log(str);
//   updateContent(str);
//   replaceContent(str);
// });

// app.addEventListener("click", (e) => {
//   const str = `x: ${e.x}, y: ${e.y}, alt: ${e.altKey}`;
//   console.log(str);
//   replaceContent(str);
// });

// const clickObservable = Rx.Observable.fromEvent(app, 'mousemove')
//   .map(e => ({ x: e.x, y: e.y }));
//
// const lessThanFiveHundred = clickObservable.filter(({ x, y }) => x < 500 && y < 500);
// const greaterThanOneThousand = clickObservable.filter(({ x, y }) => x > 1000);
//
// lessThanFiveHundred.merge(greaterThanOneThousand).subscribe(x => console.log(x));

// const mouseMove = Rx.Observable.fromEvent(document, 'mousemove');
// const date = new Date('2017-02-23 01:30:50'); // in the future
// const delayedClicks = mouseMove.delay(date); // click emitted only after that date
// delayedClicks.subscribe(x => console.log(x));
