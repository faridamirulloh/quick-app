import {combineReducers} from 'redux';

import quicksState from './quicksState';

const rootReducer = combineReducers({
  quicksState,
});

export default rootReducer;
