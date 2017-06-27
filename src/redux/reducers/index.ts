import { combineReducers } from 'redux';

import posts from './postsReducer';
import player from './playerReducer';
import settings from './settingsReducer';
import playlists from './playlistsReducer';
import search from './searchReducer';

export default combineReducers({
  posts,
  search,
  player,
  settings,
  playlists
});
