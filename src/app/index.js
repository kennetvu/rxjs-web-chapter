
import Rx from 'rxjs/Rx';


const title = document.getElementById("title");
title.innerHTML = 'Welcome to RxJS';
const content = document.getElementById("content");
content.innerHTML = 'Lorem ipsum';


const header = document.getElementById("header");
const app = document.getElementById("app");
app.addEventListener("mousemove", (e) => {
  console.log('move');
  console.log(e);
});

const fiveSeconds$ = Rx.Observable.create((observer) => {
  observer.next(2);
  setTimeout(() => {
    observer.next(2);
  }, 1000);
  setTimeout(() => {
    observer.next(10);

  }, 2000);
  setTimeout(() => {
    observer.next(3);
    observer.complete();
  }, 3000);
}).filter(val => val % 2 == 0);


fiveSeconds$.subscribe({
  next: (val) => {
    console.log(val);
    header.innerHTML += `${val} <br />`;
  },
  err: () => {

  },
  complete: () => {
    const complete = 'COMPLETE!!!';
    header.innerHTML += `${complete}`;
  }
});



