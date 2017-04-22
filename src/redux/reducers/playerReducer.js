import {
  TOGGLE_PLAYER,
  TOGGLE_CONTROLS,
  SET_VOLUME,
  SEEKING,
  SET_DURATION,
  UPDATE_PLAYED,
  TOGGLE_ENDED
} from '../actions/playerActions';

const INITIAL_STATE = {
  showControls: false,
  playing: false,
  played: 0,
  volume: 1,
  seeking: false,
  duration: null,
  ended: false
};

export default function playerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_PLAYER:
      return {
        ...state,
        playing: action.play === null ? !state.playing : action.play
      };
    case TOGGLE_CONTROLS:
      return {
        ...state,
        showControls: !state.showControls
      };
    case UPDATE_PLAYED:
      return {
        ...state,
        played: action.played
      };
    case SET_VOLUME:
      return {
        ...state,
        volume: action.volume
      };
    case SEEKING:
      return {
        ...state,
        seeking: action.seek
      };
    case SET_DURATION:
      return {
        ...state,
        duration: action.duration
      };
    case TOGGLE_ENDED:
      return {
        ...state,
        ended: !state.ended
      };
    default:
      return state;
  }
}
