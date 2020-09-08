import React, { useContext } from 'react';
import SpotifyContext from '../context/spotifyContext';

const Player = () => {
  const spotifyContext = useContext(SpotifyContext);
  const { user } = spotifyContext;

  return (
    <div>
      <h1>Player</h1>
      <h1>{user.display_name}</h1>
    </div>
  );
};

export default Player;
