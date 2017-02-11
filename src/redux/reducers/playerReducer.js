import {TOGGLE_PLAYER} from '../actions/playerActions';

const INITIAL_STATE = {
  playing: false
};

export function playerReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case TOGGLE_PLAYER:
      return {
        ...state,
        playing: action.toggle
      }
    default:
      return state;
  }
}
