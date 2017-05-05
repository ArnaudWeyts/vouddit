import 'whatwg-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const NEXT_POST = 'NEXT_POST';

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  };
}

function receivePosts(subreddit, update, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    update,
    posts: json.data
  };
}

function nextPost(nextPost) {
  return {
    type: NEXT_POST,
    nextPost
  };
}

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  };
}

export function fetchPosts(subreddit, after, sort = 'hot') {
  return (dispatch, getState) => {
    const ROOT_URL = 'https://www.reddit.com';
    // if a no sub is passed, we just refresh
    const newSub = subreddit ? subreddit : getState().posts.subreddit;
    // if after is passed, add a string that fetches following posts
    const grabString = after ? `&after=${after}` : '';
    const url = `${ROOT_URL}/r/${newSub}/${sort}.json?${grabString}&limit=10`;

    dispatch(requestPosts(subreddit));
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        // set boolean to see if it's an update or not
        dispatch(receivePosts(subreddit, after ? true : false, json));
      })
      .catch(ex => {
        console.warn(`Couldn't fetch from url: ${ex}`);
      });
  };
}

export function setPrevNextPost(current, direction) {
  // true is next, false is prev
  const indexNext = current.index + (direction ? 1 : -1);
  return dispatch => {
    dispatch(nextPost(indexNext));
  };
}
