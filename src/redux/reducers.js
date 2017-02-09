import {
  REQUEST_POSTS, RECEIVE_POSTS, NEXT_POST,
  SELECT_SUBREDDIT
} from './actions';

const INITIAL_STATE = {
  posts: [],
  postActive: null,
  isFetching: false,
  subreddit: 'videos'
}

let index = 0;

export function postsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_POSTS:
      const posts = action.posts.children.filter(post => {
        if (!post.data.media) return false;
        const {type} = post.data.media;
        return (
          type === 'youtube.com' ||
          type === 'vimeo.com' ||
          type === 'soundcloud.com'
        );
      });
      return {
        ...state,
        // filter out all the posts that don't have what we want
        posts: posts,
        postActive: {index, ...posts[0].data},
        isFetching: false
      };
    case NEXT_POST:
      action.nextPost >= index ? index++ : index--;
      return {
        ...state,
        postActive: {index, ...state.posts[action.nextPost].data}
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