import {REQUEST_POSTS, RECEIVE_POSTS, NEXT_POST} from './actions';

const INITIAL_STATE = {
  posts: {},
  postActive: null,
  isFetching: false
}

let index = 1;

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
        postActive: {index, ...action.posts.children[1].data},
        isFetching: false
      };
    case NEXT_POST:
      index++;
      return {
        ...state,
        postActive: {index, ...state.posts.children[action.nextPost].data}
      };
    default:
      return state;
  }
}