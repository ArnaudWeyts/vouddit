import {FETCH_POSTS} from './actions';

const INITIAL_STATE = {
  posts: [],
  postActive: null
}

export function postsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
}