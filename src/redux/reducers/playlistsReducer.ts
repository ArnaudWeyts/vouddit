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
  CLEAR_EDITING_PL,
  DELETE_PLAYLIST,
  SELECT_PLAYLIST
} from '../actions/playlistsActions';

const INITIAL_STATE = {
  showPlaylists: false,
  showAddPlaylist: false,
  searchSubs: [],
  playlists: [],
  editingPlaylist: undefined,
  selectedPlaylist: undefined
};

export default function playlistsReducer(
  state: IPlaylists = INITIAL_STATE,
  action: IPlaylistsAction
) {
  switch (action.type) {
    case TOGGLE_PLAYLISTS:
      return {
        ...state,
        showPlaylists: !state.showPlaylists
      };
    case TOGGLE_ADD_PLAYLIST:
      return {
        ...state,
        showAddPlaylist: !state.showAddPlaylist
      };
    case INITIALIZE_PLAYLIST:
      return {
        ...state,
        editingPlaylist: action.playlist
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
      // remove the useless updating property
      const current = state.editingPlaylist;
      current!.updating = undefined;
      return {
        ...state,
        playlists: [...state.playlists, current]
      };
    case CLEAR_EDITING_PL:
      return {
        ...state,
        editingPlaylist: action.playlist
      };
    case SELECT_SUB:
      return {
        ...state,
        editingPlaylist: action.playlist
      };
    case REMOVE_SUB:
      return {
        ...state,
        editingPlaylist: action.playlist
      };
    case UPDATE_NAME:
      return {
        ...state,
        editingPlaylist: {
          id: state.editingPlaylist!.id,
          name: action.name,
          subs: state.editingPlaylist!.subs,
          updating: state.editingPlaylist!.updating
        }
      };
    case DELETE_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.filter(p => p.id !== action.id)
      };
    case SELECT_PLAYLIST:
      return {
        ...state,
        selectedPlaylist: action.playlist
      };
    default:
      return state;
  }
}
