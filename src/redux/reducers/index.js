import { combineReducers } from 'redux';

import posts from './postsReducer';
import player from './playerReducer';
import settings from './settingsReducer';

export default combineReducers({
  posts,
  player,
  settings
});
