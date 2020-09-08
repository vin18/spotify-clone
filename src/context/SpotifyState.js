import React, { useReducer } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import SpotifyContext from './spotifyContext';
import SpotifyReducer from './spotifyReducer';
import { SET_USER, SET_TOKEN, SET_PLAYLISTS } from './types';

const spotify = new SpotifyWebApi();

const SpotifyState = (props) => {
  const initialState = {
    user: '',
    playlists: [],
    playing: false,
    item: null,
    token:
      'BQCm7MUBbh-4Fx3q82iQw5p4Z2FWbs27RCMmTnnGRXZBXLVyHgklr-g9isp5NZ1oS6Y5YffGbRrz-QYyeoUYS6THHSKAVSRNBgOc_5XvZexT3ZOZr4ZgAjyrkzJ4jQkSboMYbTK1Gou72f1Dt1VHyFterS1LWaLcQNzDMCugM-h1RWAW',
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

  // Get Playlists
  const setPlaylists = async () => {
    const _playlists = await spotify.getUserPlaylists();
    dispatch({ type: SET_PLAYLISTS, payload: _playlists });
  };

  return (
    <SpotifyContext.Provider
      value={{
        token: state.token,
        user: state.user,
        playlists: state.playlists,
        setToken,
        setUser,
        setPlaylists,
      }}
    >
      {props.children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyState;
