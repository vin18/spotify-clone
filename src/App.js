import React, { useState, useEffect } from 'react';

import { Global } from './styles/Global';
import Login from './pages/Login';
import { getTokenFromUrl } from './api/spotifyApi';

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';

    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
  }, []);

  return (
    <div className='app'>
      <Global />
      {token ? <h1>Player</h1> : <Login />}
    </div>
  );
};

export default App;
