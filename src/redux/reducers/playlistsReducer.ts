import {
  TOGGLE_PLAYLISTS,
  TOGGLE_ADD_PLAYLIST,
  INITIALIZE_PLAYLIST,
  REQUEST_SUBS,
  RECEIVE_SUBS,
  CREATE_PLAYLIST,
  SELECT_SUB,
  CLEAR_CURRENT_PL
} from '../actions/playlistsActions';

const INITIAL_STATE = {
  showPlaylists: false,
  showAddPlaylist: false,
  searchSubs: [],
  playlists: [],
  currentPlaylist: { name: undefined, subs: [] }
};

export default function playlistsReducer(state: IPlaylists = INITIAL_STATE, action: IPlaylistsAction) {
  switch (action.type) {
    case TOGGLE_PLAYLISTS:
      return {
        ...state,
        showPlaylists: !state.showPlaylists
      };
    case TOGGLE_ADD_PLAYLIST:
      return {
        ...state,
        showAddPlaylist: !state.showAddPlaylist,
      };
    case INITIALIZE_PLAYLIST:
      return {
        ...state,
        currentPlaylist: action.playlist
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
        playlists: [...state.playlists, state.currentPlaylist]
      };
    case CLEAR_CURRENT_PL:
      return {
        ...state,
        currentPlaylist: action.playlist
      };
    case SELECT_SUB:
      const newPlaylist = {
        name: state.currentPlaylist.name,
        subs: [...state.currentPlaylist.subs, action.sub]
      };
      return {
        ...state,
        currentPlaylist: newPlaylist
      };
    default:
      return state;
  }
}