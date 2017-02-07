import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {injectGlobal} from 'styled-components';

import store from './redux/store';
import App from './components/App';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
