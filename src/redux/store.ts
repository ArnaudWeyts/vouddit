import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

import { debounce } from '../lib/utils';
import { loadState, saveState } from '../lib/localStorage';

const middlewares = [thunk];
const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

store.subscribe(
  debounce(
    () => {
      saveState({
        settings: store.getState().settings
      });
    },
    1000)
);

export default store;
