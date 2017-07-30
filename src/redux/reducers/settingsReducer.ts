import {
  TOGGLE_SETTINGS,
  TOGGLE_USE_DEFAULT_PLAYER,
  SET_DELAY,
  SET_SORT,
  SET_SNOOWRAP
} from '../actions/settingsActions';

const INITIAL_STATE = {
  showSettings: false,
  useDefaultPlayer: true,
  delay: 3000,
  sort: 'hot',
  snoowrap: undefined
};

export default function settingsReducer(
  state: ISettings = INITIAL_STATE,
  action: ISettingsAction
) {
  switch (action.type) {
    case TOGGLE_SETTINGS:
      return {
        ...state,
        showSettings: !state.showSettings
      };
    case TOGGLE_USE_DEFAULT_PLAYER:
      return {
        ...state,
        useDefaultPlayer: !state.useDefaultPlayer
      };
    case SET_DELAY:
      return {
        ...state,
        delay: action.delay
      };
    case SET_SORT:
      return {
        ...state,
        sort: action.sort
      };
    case SET_SNOOWRAP:
      return {
        ...state,
        snoowrap: action.snoowrap
      };
    default:
      return state;
  }
}
