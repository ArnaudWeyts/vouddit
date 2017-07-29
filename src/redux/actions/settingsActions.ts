import 'whatwg-fetch';
import { getFingerprint } from '../../lib/auth';

import { fetchPosts } from './postsActions';

export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const TOGGLE_USE_DEFAULT_PLAYER = 'TOGGLE_USE_DEFAULT_PLAYER';
export const SET_DELAY = 'SET_DELAY';
export const SET_SORT = 'SET_SORT';
export const GET_APP_TOKEN = 'GET_APP_TOKEN';
export const SET_TOKEN = 'SET_TOKEN';

export const SORT_OPTIONS = [
  'hot',
  'new',
  'rising',
  'controversial',
  'top',
  'gilded',
  'promoted'
];

export function toggleSettings() {
  return {
    type: TOGGLE_SETTINGS
  };
}

export function toggleUseDefault() {
  return {
    type: TOGGLE_USE_DEFAULT_PLAYER
  };
}

export function setDelay(delay: number) {
  return {
    type: SET_DELAY,
    delay
  };
}

export function setSort(sort: string) {
  return {
    type: SET_SORT,
    sort
  };
}

export function setSortAndFetch(sort: string) {
  return (dispatch: IDispatch<any>, getState: () => any) => {
    const { subreddits } = getState().posts;
    dispatch(setSort(sort));
    dispatch(fetchPosts(subreddits, undefined, sort));
  };
}

export function setToken(token: string) {
  return {
    type: SET_TOKEN,
    token
  };
}

export function getAppToken() {
  const url = 'https://www.reddit.com/api/v1/access_token';
  const id = getFingerprint();
  console.log(id);
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: `grant_type=https://oauth.reddit.com/grants/installed_client&\\device_id=${id}`
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(ex => console.log(ex));
  return (dispatch: IDispatch<any>, getState: () => any) => {
    dispatch(setToken('meme'));
  };
}
