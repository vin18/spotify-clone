import {
  SET_USER,
  SET_TOKEN,
  SET_PLAYLISTS,
  SET_DISCOVER_WEEKLY,
} from './types';

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

    case SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discover_weekly: action.payload,
      };

    default:
      return state;
  }
};
