import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

import { debounce } from '../lib/utils';
import { loadItem, saveItem } from '../lib/localStorage';

const middlewares = [thunk];
const persistedState = loadItem('state');
const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

store.subscribe(
  debounce(
    () => {
      saveItem(
        {
          settings: store.getState().settings,
          playlists: store.getState().playlists
        },
        'state'
      );
    },
    1000)
);

export default store;
