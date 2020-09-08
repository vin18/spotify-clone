import { SET_USER, SET_TOKEN, SET_PLAYLISTS } from './types';

export default (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.payload,
      };

    default:
      return state;
  }
};
