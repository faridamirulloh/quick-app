import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import App from './contents/App.jsx';
import configureReduxStore from './stores/configureStore.js';

const rootEl = document.getElementById('root');

const init = async () => {
  const store = configureReduxStore();

  ReactDOM.createRoot(rootEl).render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
  );
};

init();
