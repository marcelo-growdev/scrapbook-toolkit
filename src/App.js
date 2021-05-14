import React from 'react';
import { Provider } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';

import store from './store';
import Routes from './routes';

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <CssBaseline />
        <Routes />
      </Provider>
    </div>
  );
}
