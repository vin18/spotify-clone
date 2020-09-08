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
    token: null,
  };

  const [state, dispatch] = useReducer(SpotifyReducer, initialState);

  // Set token
  const setToken = async (token) => {
    dispatch({
      type: SET_TOKEN,
      payload: token,
    });
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
