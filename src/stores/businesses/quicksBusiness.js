import {selectQuick, setOpenQuickButton} from '../actions/quicksStateAction';

export const onClickQuickButton = (openContent) => (dispatch, getState) => {
  const {quicksState} = getState();

  if (openContent) dispatch(onClickQuickItem());
  dispatch(setOpenQuickButton(!quicksState.openButton));
};

export const onClickQuickItem = (quickId) => (dispatch) => {
  dispatch(selectQuick(quickId));
};
