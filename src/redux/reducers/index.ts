import { combineReducers } from 'redux';

import posts from './postsReducer';
import player from './playerReducer';
import settings from './settingsReducer';
import playlists from './playlistsReducer';

export default combineReducers({
  posts,
  player,
  settings,
  playlists
});
