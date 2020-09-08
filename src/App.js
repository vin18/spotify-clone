import React, { useContext, useEffect } from 'react';
import { getTokenFromUrl } from './api/spotifyApi';
import SpotifyContext from './context/spotifyContext';

import Login from './pages/Login';
import Player from './pages/Player';
import { Global } from './styles/Global';

const App = () => {
  const spotifyContext = useContext(SpotifyContext);
  const { token, setToken, setUser, setPlaylists } = spotifyContext;

  useEffect(() => {
    function fetchApi() {
      const hash = getTokenFromUrl();
      window.location.hash = '';

      const _token = hash.access_token;
      if (_token) {
        setToken(_token);
        setUser();
        setPlaylists();
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
