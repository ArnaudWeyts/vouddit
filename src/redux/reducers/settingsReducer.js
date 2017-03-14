import {
  TOGGLE_SETTINGS, TOGGLE_USE_DEFAULT_PLAYER,
  SET_DELAY
} from '../actions/settingsActions';

const INITIAL_STATE = {
  showSettings: false,
  useDefaultPlayer: true,
  delay: 3000
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
    case SET_DELAY:
      return {
        ...state,
        delay: action.delay
      }
    default:
      return state;
  }
}