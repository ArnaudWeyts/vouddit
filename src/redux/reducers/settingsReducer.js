import {TOGGLE_SETTINGS, TOGGLE_USE_DEFAULT_PLAYER} from '../actions/settingsActions';

const INITIAL_STATE = {
  showSettings: false,
  useDefaultPlayer: true
}

export default function settingsReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case TOGGLE_SETTINGS:
      return {
        ...state,
        showSettings: !state.showSettings
      }
    case TOGGLE_USE_DEFAULT_PLAYER:
      return {
        ...state,
        useDefaultPlayer: !state.useDefaultPlayer
      }
    default:
      return state;
  }
}