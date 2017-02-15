import {TOGGLE_USE_DEFAULT} from '../actions/settingsActions';

const INITIAL_STATE = {
  useDefaultPlayer: true
}

export default function settingsReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case TOGGLE_USE_DEFAULT:
      return !state.useDefaultPlayer;
    default:
      return state;
  }
}