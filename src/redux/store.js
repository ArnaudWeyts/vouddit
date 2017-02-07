import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {composeWithDevTools} from 'redux-devtools-extension';
import {postsReducer} from './reducers';

const middlewares = [promise, thunk];
const store = createStore(postsReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
