import {combineReducers} from 'redux';

import postsReducer from './postsReducer';
import playerReducer from './playerReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
  postsReducer,
  playerReducer,
  settingsReducer
});
