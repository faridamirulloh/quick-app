import {selectQuick, setOpenQuickButton} from '../actions/quicksStateAction';

export const onClickQuickButton = () => (dispatch, getState) => {
  const {quicksState} = getState();

  dispatch(setOpenQuickButton(!quicksState.openButton));
};

export const onClickQuickItem = (quickId) => (dispatch) => {
  dispatch(selectQuick(quickId));
};
