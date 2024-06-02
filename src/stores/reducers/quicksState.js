import {Quick} from '../../constants/actionType';

const initialState = {
  openButton: false,
  selectedQuick: null,
};

export default function quicksState(state = initialState, action = {}) {
  switch (action.type) {
    case Quick.SET_OPEN_BUTTON:
      return {...state, openButton: action.openButton};

    case Quick.SELECT_QUICK:
      return {...state, selectedQuick: action.selectedQuick};

    default:
      return state;
  }
}
