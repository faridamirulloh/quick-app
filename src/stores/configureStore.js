import {configureStore} from '@reduxjs/toolkit';
import {logger} from 'redux-logger';
import {thunk} from 'redux-thunk';

import rootReducer from './reducers';
import {DEV_MODE} from '../constants/constant';

const disableLog = !DEV_MODE;

function configureReduxStore() {
  let store;

  if (disableLog) {
    store = configureStore({
      reducer: rootReducer,
      middleware: () => [thunk],
    });
  } else {
    store = configureStore({
      reducer: rootReducer,
      middleware: () => [thunk, logger],
    });
  }

  return store;
}

export default configureReduxStore;
