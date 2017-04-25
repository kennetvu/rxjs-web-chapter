import React from 'react';
import Rx from 'rxjs/Rx';

class App extends React.Component {
  constructor() {
    super();
    console.log(Rx);
  }

  render() {
    return (
      <div className="container has-text-centered">
        <h1 className="title">Hello Praha from React</h1>
      </div>
    );
  }
}
export default App;
