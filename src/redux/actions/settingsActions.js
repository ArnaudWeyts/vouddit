export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const TOGGLE_USE_DEFAULT_PLAYER = 'TOGGLE_USE_DEFAULT_PLAYER';

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