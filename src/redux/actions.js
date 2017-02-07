import 'whatwg-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

const ROOT_URL = 'https://www.reddit.com';

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

function recievePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data
  }
}

export function fetchPosts(subreddit) {
  const url = `${ROOT_URL}/r/${subreddit}/hot.json?limit=10`;

  return dispatch => {
    dispatch(requestPosts(subreddit));
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(recievePosts(subreddit, json)))
      .catch(ex => {
        console.warn(`Couldn't fetch from url: ${ex}`);
      });
  }
}
