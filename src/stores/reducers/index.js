import {combineReducers} from 'redux';

import quicksState from './quicksState';
import userState from './userState';

const rootReducer = combineReducers({
  quicksState,
  userState,
});

export default rootReducer;
