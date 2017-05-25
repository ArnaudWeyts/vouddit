import {
  TOGGLE_PLAYLISTS,
  TOGGLE_ADD_PLAYLIST,
  INITIALIZE_PLAYLIST,
  REQUEST_SUBS,
  RECEIVE_SUBS,
  CREATE_PLAYLIST,
  SELECT_SUB,
  REMOVE_SUB,
  UPDATE_NAME,
  CLEAR_CURRENT_PL,
  DELETE_PLAYLIST
} from '../actions/playlistsActions';

const INITIAL_STATE = {
  showPlaylists: false,
  showAddPlaylist: false,
  searchSubs: [],
  playlists: [],
  currentPlaylist: { id: undefined, name: undefined, subs: [] }
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
      return {
        ...state,
        currentPlaylist: action.playlist
      };
    case REMOVE_SUB:
      return {
        ...state,
        currentPlaylist: action.playlist
      };
    case UPDATE_NAME:
      return {
        ...state,
        currentPlaylist: { name: action.name, subs: state.currentPlaylist.subs }
      };
    case DELETE_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.filter(p => p.id !== action.id)
      };
    default:
      return state;
  }
}