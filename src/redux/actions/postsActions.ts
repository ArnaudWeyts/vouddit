import 'whatwg-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SUBREDDITS = 'SELECT_SUBREDDITS';
export const NEXT_POST = 'NEXT_POST';

function requestPosts(subreddit: string) {
  return {
    type: REQUEST_POSTS,
    subreddit
  };
}

function receivePosts(update: boolean, json: { data: string }, subreddit?: string) {
  return {
    type: RECEIVE_POSTS,
    update,
    posts: json.data,
    subreddit
  };
}

function nextPost(nextPostId: number) {
  return {
    type: NEXT_POST,
    nextPostId
  };
}

export function selectSubreddits(subreddits: Array<string>) {
  return {
    type: SELECT_SUBREDDITS,
    subreddits
  };
}

export function fetchPosts(subreddits?: string, after?: string, sort: string = 'hot') {
  return (dispatch: IDispatch<any>, getState: () => any) => {
    const ROOT_URL = 'https://www.reddit.com';
    // if a no sub is passed, we just refresh
    const newSub = subreddits ? subreddits : getState().posts.subreddit;
    // if after is passed, add a string that fetches following posts
    const grabString = after ? `&after=${after}` : '';
    const url = `${ROOT_URL}/r/${newSub}/${sort}.json?${grabString}&limit=10`;

    dispatch(requestPosts(newSub));
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(receivePosts(after ? true : false, json, newSub));
      })
      .catch(ex => {
        console.warn(`Couldn't fetch from url: ${ex}`);
      });
  };
}

export function setPrevNextPost(current: IPost, direction: boolean) {
  // true is next, false is prev
  const indexNext = current.index + (direction ? 1 : -1);
  return (dispatch: IDispatch<any>) => {
    dispatch(nextPost(indexNext));
  };
}
