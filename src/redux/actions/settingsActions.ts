import { fetchPosts } from './postsActions';

export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const TOGGLE_USE_DEFAULT_PLAYER = 'TOGGLE_USE_DEFAULT_PLAYER';
export const SET_DELAY = 'SET_DELAY';
export const SET_SORT = 'SET_SORT';

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
