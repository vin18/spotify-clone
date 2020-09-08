import React, { useContext, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { getTokenFromUrl } from './api/spotifyApi';

import Login from './pages/Login';
import Player from './pages/Player';
import { Global } from './styles/Global';
import SpotifyContext from './context/spotifyContext';

const spotify = new SpotifyWebApi();

const App = () => {
  const spotifyContext = useContext(SpotifyContext);
  const { token, setToken, setUser } = spotifyContext;

  useEffect(() => {
    async function fetchApi() {
      const hash = getTokenFromUrl();
      window.location.hash = '';

      const _token = hash.access_token;
      if (_token) {
        setToken(_token);
        spotify.setAccessToken(_token);
        setUser();
      }
    }
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Global />
      {token ? <Player /> : <Login />}
    </div>
  );
};

export default App;
