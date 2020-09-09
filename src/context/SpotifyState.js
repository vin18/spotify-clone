import React, { useReducer } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import SpotifyContext from './spotifyContext';
import SpotifyReducer from './spotifyReducer';
import {
  SET_USER,
  SET_TOKEN,
  SET_PLAYLISTS,
  SET_DISCOVER_WEEKLY,
} from './types';

const spotify = new SpotifyWebApi();

const SpotifyState = (props) => {
  const initialState = {
    user: '',
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    token: null,
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

  // Get playlist
  const setDiscoverWeekly = async () => {
    const response = await spotify.getPlaylist(
      '2Pmu7IfRWINhIdYrPNEGOg'
    );
    dispatch({
      type: SET_DISCOVER_WEEKLY,
      payload: response,
    });
  };

  return (
    <SpotifyContext.Provider
      value={{
        token: state.token,
        user: state.user,
        playlists: state.playlists,
        discover_weekly: state.discover_weekly,
        setToken,
        setUser,
        setPlaylists,
        setDiscoverWeekly,
      }}
    >
      {props.children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyState;
