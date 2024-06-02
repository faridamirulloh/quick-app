import {setOpenQuickButton} from '../actions/quicksStateAction';

export const onClickQuickButton = () => (dispatch, getState) => {
  const {quicksState} = getState();

  dispatch(setOpenQuickButton(!quicksState.openButton));
};
