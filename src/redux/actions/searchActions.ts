export const REQUEST_SUBS = 'REQUEST_SUBS';
export const RECEIVE_SUBS = 'RECEIVE_SUBS';

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
  return (dispatch: IDispatch<any>, getState: () => any) => {
    dispatch(requestSubs());
    return getState().settings.snoowrap
      .searchSubredditNames({ query })
      .then((response: Array<string>) => dispatch(receiveSubs(response)));
  };
}
