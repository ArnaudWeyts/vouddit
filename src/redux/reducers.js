import {
  REQUEST_POSTS, RECEIVE_POSTS, NEXT_POST,
  SELECT_SUBREDDIT
} from './actions';

const INITIAL_STATE = {
  posts: {},
  postActive: null,
  isFetching: false,
  subreddit: 'videos'
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
      action.nextPost >= index ? index++ : index--;
      return {
        ...state,
        postActive: {index, ...state.posts.children[action.nextPost].data}
      };
    case SELECT_SUBREDDIT:
      return {
        ...state,
        subreddit: action.subreddit
      }
    default:
      return state;
  }
}