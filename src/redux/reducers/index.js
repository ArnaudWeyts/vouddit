import {combineReducers} from 'redux';

import {postsReducer} from './postsReducer';
import {playerReducer} from './playerReducer';

export default combineReducers({
  postsReducer,
  playerReducer
});
