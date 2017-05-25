import 'whatwg-fetch';

export const TOGGLE_PLAYLISTS = 'TOGGLE_PLAYLISTS';
export const TOGGLE_ADD_PLAYLIST = 'TOGGLE_ADD_PLAYLIST';
export const INITIALIZE_PLAYLIST = 'INITIALIZE_PLAYLIST';
export const CREATE_PLAYLIST = 'CREATE_PLAYLIST';
export const REQUEST_SUBS = 'REQUEST_SUBS';
export const RECEIVE_SUBS = 'RECEIVE_SUBS';
export const SELECT_SUB = 'SELECT_SUB';
export const REMOVE_SUB = 'REMOVE_SUB';
export const UPDATE_NAME = 'UPDATE_NAME';
export const CLEAR_CURRENT_PL = 'CLEAR_CURRENT_PL';
export const DELETE_PLAYLIST = 'DELETE_PLAYLIST';

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
      const id = getState().playlists.playlists.length + 1;
      const name = `playlist ${id}`;
      dispatch(initializePlaylist({ id, name, subs: [] }));
    } else {
      // clear current playlist
      dispatch(clearCurrentPL());
    }
    dispatch(toggleAddPlaylistsAction());
  };
}

export function initializePlaylist(playlist: IPlaylist) {
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

export function selectSub(playlist: IPlaylist) {
  return {
    type: SELECT_SUB,
    playlist
  };
}

export function removeSub(playlist: IPlaylist) {
  return {
    type: REMOVE_SUB,
    playlist
  };
}

export function updateSub(sub: string, remove?: boolean) {
  if (sub === '') { return; }
  return (dispatch: IDispatch<any>, getState: () => any) => {
    // get old subs
    const oldSubs = getState().playlists.currentPlaylist.subs;
    // create a new playlist
    let newPlaylist: IPlaylist = {
      id: getState().playlists.currentPlaylist.id,
      name: getState().playlists.currentPlaylist.name,
      subs: []
    };
    // just do a regular select
    if (!remove) {
      const newSubs = [...oldSubs, sub].sort();

      // add new subs
      newPlaylist.subs = newSubs;
      return dispatch(selectSub(newPlaylist));
    } else {
      // remove the select sub from the array
      const newSubs = oldSubs.filter((subv: string) => subv !== sub);
      // replace subs with removed sub
      newPlaylist.subs = newSubs;
      return dispatch(removeSub(newPlaylist));
    }
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

export function deletePlaylist(id: number) {
  return {
    type: DELETE_PLAYLIST,
    id
  };
}
