export const TOGGLE_PLAYER = 'TOGGLE_PLAYER';
export const TOGGLE_CONTROLS = 'TOGGLE_CONTROLS';
export const UPDATE_PLAYED = 'UPDATE_PLAYED';
export const SET_VOLUME = 'SET_VOLUME';
export const SEEKING = 'SEEKING';
export const SET_DURATION = 'SET_DURATION';
export const TOGGLE_ENDED = 'TOGGLE_ENDED';

export function togglePlayer(play = null) {
  return {
    type: TOGGLE_PLAYER,
    play
  };
}

export function toggleControls() {
  return {
    type: TOGGLE_CONTROLS
  };
}

export function updatePlayed(played) {
  return {
    type: UPDATE_PLAYED,
    played
  };
}

export function setVolume(volume) {
  return {
    type: SET_VOLUME,
    volume
  };
}

export function seek(seek) {
  return {
    type: SEEKING,
    seek
  };
}

export function setDuration(duration) {
  return {
    type: SET_DURATION,
    duration
  };
}

export function toggleEnded() {
  return {
    type: TOGGLE_ENDED
  };
}
