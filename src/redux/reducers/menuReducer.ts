import {
  TOGGLE_MENU,
  REQUEST_SUBS,
  RECEIVE_SUBS
} from '../actions/menuActions';

const INITIAL_STATE = {
  showMenu: false,
  subs: []
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
        subs: action.subs
      };
    default:
      return state;
  }
}