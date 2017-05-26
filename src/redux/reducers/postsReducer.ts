import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  NEXT_POST,
  SELECT_SUBREDDITS
} from '../actions/postsActions';

const INITIAL_STATE = {
  posts: [],
  isFetching: false,
  subreddits: ['videos'],
  postActive: undefined,
  nextPosts: undefined,
};

let index = 0;

export default function postsReducer(state: IPosts = INITIAL_STATE, action: IPostsAction) {
  switch (action.type) {
    // isFetching gives us the option to show a loading bar
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_POSTS:
      const posts = action.posts.children.filter(post => {
        // filter out all the posts we don't want
        if (!post.data.media) { return false; }
        const { type } = post.data.media;
        return (
          type === 'youtube.com' ||
          type === 'vimeo.com' ||
          type === 'soundcloud.com'
        );
      });

      // reset index when it's a complete subreddit change
      if (!action.update) { index = 0; }

      return {
        ...state,
        // if update => add to state, else replace
        posts: action.update ? [...state.posts, ...posts] : posts,
        nextPosts: action.posts.after,
        // don't set the postactive to the first one after an update
        postActive: action.update
          ? state.postActive
          : { index, ...posts[0].data },
        isFetching: false
      };
    case NEXT_POST:
      // decide if the index is higher or lower and update
      action.nextPostId >= index ? index++ : index--;
      if (action.nextPostId < 0) {
        return state;
      }
      return {
        ...state,
        postActive: { index, ...state.posts[action.nextPostId].data }
      };
    case SELECT_SUBREDDITS:
      return {
        ...state,
        subreddits: action.subreddits
      };
    default:
      return state;
  }
}
