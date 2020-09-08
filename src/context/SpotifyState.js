import React, { useReducer } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import SpotifyContext from './spotifyContext';
import SpotifyReducer from './spotifyReducer';
import { SET_USER, SET_TOKEN } from './types';

const spotify = new SpotifyWebApi();

const SpotifyState = (props) => {
  const initialState = {
    user: '',
    playlist: [],
    playing: false,
    item: null,
    token:
      'BQCAIcNmE3vBU5lUALDUFU-daYzttFQQ1Qqb28eHID66KH2GwTMQ6jZsI7Bn9EBbnMQj-RhqRTNxCG0iBrzB3fVEgB7AwqQtaja7Z3PnCqQRBLqFaM484zryu4m5SyLzKUidV7pAsKglq9eoypNM2zue-7a73SMw6k5GwpzwQMjokgrw',
    // token: null,
  };

  const [state, dispatch] = useReducer(SpotifyReducer, initialState);

  // Set token
  const setToken = async (token) => {
    dispatch({
      type: SET_TOKEN,
      payload: token,
    });
    spotify.setAccessToken(token);
  };

  // Set User
  const setUser = async () => {
    const user = await spotify.getMe();
    dispatch({ type: SET_USER, payload: user });
  };

  return (
    <SpotifyContext.Provider
      value={{
        token: state.token,
        user: state.user,
        setToken,
        setUser,
      }}
    >
      {props.children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyState;
