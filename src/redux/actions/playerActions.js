export const TOGGLE_PLAYER = 'TOGGLE_PLAYER';

export function togglePlayer(toggle) {
  return {
    type: TOGGLE_PLAYER,
    toggle
  }
}
