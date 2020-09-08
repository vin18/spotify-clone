import React from 'react';
import ReactDOM from 'react-dom';
import SpotifyState from './context/SpotifyState';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <SpotifyState>
      <App />
    </SpotifyState>
  </React.StrictMode>,
  document.getElementById('root')
);
