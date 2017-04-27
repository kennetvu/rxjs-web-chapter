import React from 'react';
import ReactDOM from 'react-dom';
import Rx from 'rxjs/Rx';

import App from './App';
import AppProps from './AppProps';

// do rxjs here, send to reactdom render.
ReactDOM.render(
  <App /> ,
  // <AppProps players={[]} teams={[]} />,
  document.getElementById('content')
);




// Rx.Observable.ajax('http://localhost:3001/players?q=')
//   .map(e => e.response)
//   .combineLatest(Rx.Observable.ajax('http://localhost:3001/teams?q=')
//     .map(e => e.response.reduce((prev, curr) => { prev[curr.teamId] = curr; return prev; }, {})))
//   .subscribe(res => {
//     console.log(res);

//     ReactDOM.render(
//       // <App /> ,
//       <AppProps players={res[0]} teams={res[1]} />,
//       document.getElementById('content')
//     );
//   })
