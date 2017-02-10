import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {injectGlobal} from 'styled-components';

import 'typeface-open-sans';

import store from './redux/store';
import App from './components/App';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: Open Sans, --apple-system, sans-serif;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
