import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {postsReducer} from './reducers';

const middlewares = [thunk];
const store = createStore(postsReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
