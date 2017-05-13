import {
  TOGGLE_PLAYLISTS,
  REQUEST_SUBS,
  RECEIVE_SUBS,
  CREATE_PLAYLIST,
  SELECT_SUB
} from '../actions/playlistsActions';

const INITIAL_STATE = {
  showPlaylists: false,
  searchSubs: [],
  playlists: [],
};

export default function playlistsReducer(state: IPlaylists = INITIAL_STATE, action: IPlaylistsAction) {
  switch (action.type) {
    case TOGGLE_PLAYLISTS:
      return {
        ...state,
        showPlaylists: !state.showPlaylists
      };
    case REQUEST_SUBS:
      return {
        ...state
      };
    case RECEIVE_SUBS:
      return {
        ...state,
        searchSubs: action.searchSubs
      };
    case CREATE_PLAYLIST:
      return {
        ...state,
        playlists: [...state.playlists, action.playlist]
      };
    case SELECT_SUB:
      return {
        ...state,
        subs: [...state.playlists, action.sub]
      };
    default:
      return state;
  }
}