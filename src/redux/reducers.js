import {REQUEST_POSTS, RECEIVE_POSTS} from './actions';

const INITIAL_STATE = {
  posts: {},
  postActive: null,
  isFetching: false
}

export function postsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        posts: action.posts,
        postActive: action.posts.children[1].data,
        isFetching: false
      }
    default:
      return state;
  }
}