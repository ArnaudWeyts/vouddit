export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const TOGGLE_USE_DEFAULT_PLAYER = 'TOGGLE_USE_DEFAULT_PLAYER';
export const SET_DELAY = 'SET_DELAY';

export function toggleSettings() {
  return {
    type: TOGGLE_SETTINGS
  }
}

export function toggleUseDefault() {
  return {
    type: TOGGLE_USE_DEFAULT_PLAYER
  }
}

export function setDelay(delay) {
  return {
    type: SET_DELAY,
    delay
  }
}
