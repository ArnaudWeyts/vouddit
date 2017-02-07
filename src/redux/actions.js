import 'whatwg-fetch';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'https://www.reddit.com';

export function fetchPosts(subreddit) {
  const url = `${ROOT_URL}/r/${subreddit}/hot.json?limit=10`;

  const request = fetch(url)
    .then(response => response.json())
    .then(json => json)
    .catch(ex => {
      console.warn(`Couldn't fetch from url: ${ex}`);
    }
  );

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
