import Rx from 'rxjs/Rx';
import updateContent, { replaceContent, replaceTitle } from '../utility';
//replace title PLS
replaceTitle('Bleeh mousevents');

const app = document;
// mouse: mousemove, click, scroll
// Keyboard: keyup, keydown
// app.addEventListener("mousemove", (e) => {
// console.log(e);
// const str = `x: ${e.x}, y: ${e.y}`;
// console.log(str);
// updateContent(str);
// replaceContent(str);
//   const str = `x: ${e.x}, y: ${e.y}, alt: ${e.altKey}`;
// });

// really?????? addEventListener???



const clickObservable = Rx.Observable.fromEvent(app, 'mousemove')
  .map(e => ({ x: e.x, y: e.y }));

//
// clickObservable.subscribe(({x,y}) => {
//   console.log(x, y);
//   replaceContent(`${x} :: ${y}`);
// });


// const lessThanFiveHundred = clickObservable.filter(({ x, y }) => x < 200 && y < 200);
// const greaterThanOneThousand = clickObservable.filter(({ x, y }) => x > 800);
// lessThanFiveHundred.merge(greaterThanOneThousand).subscribe(x => console.log(x));

// const mouseMove = Rx.Observable.fromEvent(document, 'mousemove');
// const date = new Date('2017-02-24 13:44:00'); // in the future
// const delayedClicks = mouseMove.delay(date); // click emitted only after that date
// delayedClicks.subscribe(x => console.log(x));
