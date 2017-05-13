import {
  TOGGLE_MENU,
  REQUEST_SUBS,
  RECEIVE_SUBS,
  CREATE_PLAYLIST,
  //SELECT_SUB
} from '../actions/menuActions';

const INITIAL_STATE = {
  showMenu: false,
  searchSubs: [],
  playlists: []
};

export default function menuReducer(state: IMenu = INITIAL_STATE, action: IMenuAction) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        showMenu: !state.showMenu
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
    /*case SELECT_SUB:
      return {
        ...state,
        subs: [...state.playlists, action.sub]
      };*/
    default:
      return state;
  }
}