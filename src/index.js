import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as ReduxProvider} from 'react-redux';

import configureStore from 'config/redux/configureStore';
import App from 'components/Common/App';

const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <App/>
  </ReduxProvider>,
  document.getElementById('root'),
);