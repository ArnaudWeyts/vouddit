import 'whatwg-fetch';

export const REQUEST_SUBS = 'REQUEST_SUBS';
export const RECEIVE_SUBS = 'RECEIVE_SUBS';
export const SELECT_SUB = 'SELECT_SUB';

export const TOGGLE_PLAYLISTS = 'TOGGLE_PLAYLISTS';
export const CREATE_PLAYLIST = 'CREATE_PLAYLIST';

export function togglePlaylists() {
  return {
    type: TOGGLE_PLAYLISTS
  };
}

function requestSubs() {
  return {
    type: REQUEST_SUBS
  };
}

function recieveSubs(subs: Array<any>) {
  return {
    type: RECEIVE_SUBS,
    searchSubs: subs
  };
}

export function fetchSubs(query: string) {
  return (dispatch: IDispatch<any>) => {
    const ROOT_URL = 'https://www.reddit.com';
    const url = `${ROOT_URL}/subreddits/search.json?q=${query}&limit=30`;

    dispatch(requestSubs());
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        const subs = json.data.children
          .map(({ data }: { data: { display_name: string } }) => {
            return data.display_name;
          });
        dispatch(recieveSubs(subs));
      })
      .catch(ex => {
        console.warn(`Couldn't fetch from url: ${ex}`);
      });
  };
}

export function selectSub(sub: string) {
  return {
    type: SELECT_SUB,
    sub
  };
}

export function createPlaylist(name: string, subs: Array<string>) {
  return {
    type: CREATE_PLAYLIST,
    playlist: { name, subs }
  };
}
