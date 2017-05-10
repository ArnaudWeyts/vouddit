import {
  TOGGLE_MENU
} from '../actions/menuActions';

const INITIAL_STATE = {
  showMenu: false
};

export default function menuReducer(state: IMenu = INITIAL_STATE, action: IMenuAction) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        showMenu: !state.showMenu
      };
    default:
      return state;
  }
}