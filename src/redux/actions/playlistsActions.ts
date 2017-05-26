import 'whatwg-fetch';

import { fetchPosts, selectSubreddits } from './postsActions';

export const TOGGLE_PLAYLISTS = 'TOGGLE_PLAYLISTS';
export const TOGGLE_ADD_PLAYLIST = 'TOGGLE_ADD_PLAYLIST';
export const INITIALIZE_PLAYLIST = 'INITIALIZE_PLAYLIST';
export const CREATE_PLAYLIST = 'CREATE_PLAYLIST';
export const REQUEST_SUBS = 'REQUEST_SUBS';
export const RECEIVE_SUBS = 'RECEIVE_SUBS';
export const SELECT_SUB = 'SELECT_SUB';
export const REMOVE_SUB = 'REMOVE_SUB';
export const UPDATE_NAME = 'UPDATE_NAME';
export const CLEAR_EDITING_PL = 'CLEAR_EDITING_PL';
export const DELETE_PLAYLIST = 'DELETE_PLAYLIST';
export const SELECT_PLAYLIST = 'SELECT_PLAYLIST';

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

export function toggleAddPlaylist(id?: number) {
  return (dispatch: IDispatch<any>, getState: () => any) => {
    // initialize the playlist if the addPlaylists is opened
    const playlists = getState().playlists;
    if (!playlists.showAddPlaylist) {
      // update or new
      if (id) {
        const { name, subs } = playlists.playlists[id - 1];
        dispatch(initializePlaylist({ id, name, subs, updating: true }));
      } else {
        const newId = playlists.playlists.length + 1;
        const name = `playlist ${newId}`;
        dispatch(initializePlaylist({ id: newId, name, subs: [] }));
      }
    } else {
      // clear current playlist
      dispatch(clearEditingPL());
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
    // create a new playlist
    let newPlaylist: IPlaylist = getState().playlists.editingPlaylist;
    // get old subs
    const oldSubs = newPlaylist.subs;
    // just do a regular select
    if (!remove) {
      const newSubs = [...oldSubs, sub].sort();
      // add new subs
      newPlaylist.subs = newSubs;
      return dispatch(selectSub(newPlaylist));
    } else {
      // remove the selected sub from the array
      const newSubs = oldSubs.filter((subv: string) => subv !== sub);
      // replace subs with removed sub
      newPlaylist.subs = newSubs;
      return dispatch(removeSub(newPlaylist));
    }
  };
}

export function createPlaylist(id?: number) {
  return (dispatch: IDispatch<any>, getState: () => any) => {
    // remove the old playlist
    if (id) {
      dispatch(deletePlaylist(id));
    }
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

function clearEditingPL() {
  return {
    type: CLEAR_EDITING_PL,
    playlist: undefined
  };
}

export function deletePlaylist(id: number) {
  return {
    type: DELETE_PLAYLIST,
    id
  };
}

function selectPlaylistAction(playlist: IPlaylist) {
  return {
    type: SELECT_PLAYLIST,
    playlist
  };
}

export function selectPlaylist(id: number) {
  return (dispatch: IDispatch<any>, getState: () => any) => {
    const playlist = getState().playlists.playlists.find((p: IPlaylist) => {
      return p.id === id;
    });
    dispatch(selectPlaylistAction(playlist));
    dispatch(selectSubreddits(playlist.subs));
    dispatch(fetchPosts(playlist.subs.join('+')));
  };
}
