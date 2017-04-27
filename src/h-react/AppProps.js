import React from 'react';
import Player from './Player';

const AppProps = ({ players, teams }) =>
  <div className="container has-text-centered">
    <h1 className="title">Hello Praha from React!!!</h1>
    {players.length > 0 && players.map((player, index) => <Player key={index} {...teams[player.teamId]} {...player} />)}
  </div>

export default AppProps;
