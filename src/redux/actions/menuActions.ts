import 'whatwg-fetch';

export const TOGGLE_MENU = 'TOGGLE_MENU';
export const REQUEST_SUBS = 'REQUEST_SUBS';
export const RECEIVE_SUBS = 'RECEIVE_SUBS';

export function toggleMenu() {
  return {
    type: TOGGLE_MENU
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
    subs
  };
}

export function fetchSubs(query: string) {
  return (dispatch: IDispatch<any>) => {
    const ROOT_URL = 'https://www.reddit.com';
    const url = `${ROOT_URL}/subreddits/search.json?q=${query}&limit=100`;

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
