import { combineReducers } from 'redux';

import posts from './postsReducer';
import player from './playerReducer';
import settings from './settingsReducer';
import menu from './menuReducer';

export default combineReducers({
  posts,
  player,
  settings,
  menu
});
