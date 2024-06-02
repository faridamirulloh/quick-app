import {isEqual} from 'lodash';

import {App} from '../../constants/actionType';

export const setAppText = (text) => (dispatch, getState) => {
  const {appState} = getState();

  if (!isEqual(appState.text, text)) {
    dispatch({type: App.SET_TEXT, text});
  }
};
