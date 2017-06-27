import { REQUEST_SUBS, RECEIVE_SUBS } from '../actions/searchActions';

const INITIAL_STATE = {
  searchSubs: []
};

export default function searchReducer(
  state: { searchSubs: Array<string> } = INITIAL_STATE,
  action: ISearchAction
) {
  switch (action.type) {
    case REQUEST_SUBS:
      return {
        ...state
      };
    case RECEIVE_SUBS:
      return {
        ...state,
        searchSubs: action.searchSubs
      };
    default:
      return state;
  }
}
