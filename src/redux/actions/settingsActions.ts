import 'whatwg-fetch';
import * as Snoowrap from '../../lib/snoowrap';

import { getFingerprint } from '../../lib/auth';

import { fetchPosts } from './postsActions';

export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const TOGGLE_USE_DEFAULT_PLAYER = 'TOGGLE_USE_DEFAULT_PLAYER';
export const SET_DELAY = 'SET_DELAY';
export const SET_SORT = 'SET_SORT';
export const SET_SNOOWRAP = 'SET_SNOOWRAP';

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

export function setSnoowrap(token: string) {
  const snoowrap = new Snoowrap({ userAgent: '', accessToken: token });
  return {
    type: SET_SNOOWRAP,
    snoowrap
  };
}

export function initSnoowrap() {
  const url = 'https://www.reddit.com/api/v1/access_token';
  return (dispatch: IDispatch<any>, getState: () => any) => {
    getFingerprint().then(result => {
      const form = new FormData();
      form.set(
        'grant_type',
        'https://oauth.reddit.com/grants/installed_client'
      );
      form.set('device_id', 'DO_NOT_TRACK_THIS_DEVICE');
      fetch(url, {
        method: 'POST',
        body: form,
        headers: {
          authorization: `Basic ${btoa(
            process.env.REACT_APP_REDDIT_ANON_TOKEN + ':'
          )}`
        },
        credentials: 'omit'
      })
        .then(response => response.json())
        .then(json => {
          dispatch(setSnoowrap(json.access_token));
        })
        .catch(ex => console.warn(ex));
    });
  };
}
