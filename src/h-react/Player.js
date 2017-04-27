import React from 'react';

const Player = ({ firstName, lastName, playerId, teamId, teamName }) =>
  <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-256x256">
          <img src={`http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerId}.png`} alt="Image" />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{`${firstName}, ${lastName}`}</strong> <small>ID: {playerId}</small>
            <br />
            <strong>Team:</strong> {teamName}
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item">
              <span className="icon is-small"><i className="fa fa-reply"></i></span>
            </a>
            <a className="level-item">
              <span className="icon is-small"><i className="fa fa-retweet"></i></span>
            </a>
            <a className="level-item">
              <span className="icon is-small"><i className="fa fa-heart"></i></span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>

export default Player;
