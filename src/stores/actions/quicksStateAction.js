import {Quick} from '../../constants/actionType';

export const setOpenQuickButton = (openButton) => (dispatch, getState) => {
  const {quicksState} = getState();

  if (quicksState.openButton !== openButton) {
    dispatch({type: Quick.SET_OPEN_BUTTON, openButton});
  }
};
