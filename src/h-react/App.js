import React from 'react';
import Rx from 'rxjs/Rx';

import Player from './Player';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      teams: []
    }
  }

  componentDidMount() {
    Rx.Observable.ajax('http://localhost:3001/players?q=')
      .map(e => e.response)
      .combineLatest(Rx.Observable.ajax('http://localhost:3001/teams?q=')
        .map(e => e.response.reduce((prev, curr) => { prev[curr.teamId] = curr; return prev; }, {})))
      .subscribe(res => {
        console.log(res);
        this.setState({ players: res[0], teams: res[1] })
      })
  }

  render() {
    const { players, teams } = this.state;
    return (
      <div className="container has-text-centered">
        <h1 className="title">Hello Praha from React!!!</h1>
        {players.length > 0 && players.map((player, index) => <Player key={index} {...teams[player.teamId]} {...player}  />)}
      </div>
    );
  }
}
export default App;
