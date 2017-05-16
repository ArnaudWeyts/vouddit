import 'whatwg-fetch';

export const TOGGLE_PLAYLISTS = 'TOGGLE_PLAYLISTS';
export const TOGGLE_ADD_PLAYLIST = 'TOGGLE_ADD_PLAYLIST';
export const INITIALIZE_PLAYLIST = 'INITIALIZE_PLAYLIST';
export const CREATE_PLAYLIST = 'CREATE_PLAYLIST';
export const REQUEST_SUBS = 'REQUEST_SUBS';
export const RECEIVE_SUBS = 'RECEIVE_SUBS';
export const SELECT_SUB = 'SELECT_SUB';
export const UPDATE_NAME = 'UPDATE_NAME';
export const CLEAR_CURRENT_PL = 'CLEAR_CURRENT_PL';

export function togglePlaylists() {
  return {
    type: TOGGLE_PLAYLISTS
  };
}

function toggleAddPlaylistsAction() {
  return {
    type: TOGGLE_ADD_PLAYLIST
  };
}

export function toggleAddPlaylist() {
  return (dispatch: IDispatch<any>, getState: () => any) => {
    // initialize the playlist if the addPlaylists is opened
    if (!getState().playlists.showAddPlaylist) {
      const name = `playlist ${getState().playlists.playlists.length + 1}`;
      dispatch(initializePlaylist({ name, subs: [] }));
    } else {
      // clear current playlist
      dispatch(clearCurrentPL());
    }
    dispatch(toggleAddPlaylistsAction());
  };
}

export function initializePlaylist(playlist: { name: string, subs: Array<string> }) {
  return {
    type: INITIALIZE_PLAYLIST,
    playlist
  };
}

function requestSubs() {
  return {
    type: REQUEST_SUBS
  };
}

export function receiveSubs(subs: Array<any>) {
  return {
    type: RECEIVE_SUBS,
    searchSubs: subs
  };
}

export function fetchSubs(query: string) {
  return (dispatch: IDispatch<any>) => {
    const ROOT_URL = 'https://www.reddit.com';
    const url = `${ROOT_URL}/subreddits/search.json?q=${query}&limit=10`;

    dispatch(requestSubs());
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        const subs = json.data.children
          .map(({ data }: { data: { display_name: string } }) => {
            return data.display_name;
          });
        dispatch(receiveSubs(subs));
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

export function createPlaylist() {
  return (dispatch: IDispatch<any>) => {
    dispatch(createPLFromCurrent());
    dispatch(toggleAddPlaylist());
  };
}

export function updateName(name: string) {
  return {
    type: UPDATE_NAME,
    name
  };
}

function createPLFromCurrent() {
  return {
    type: CREATE_PLAYLIST
  };
}

function clearCurrentPL() {
  return {
    type: CLEAR_CURRENT_PL,
    playlist: { name: undefined, subs: [] }
  };
}
