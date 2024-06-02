import {Quick} from '../../constants/actionType';

const initialState = {
  openButton: false,
};

export default function quicksState(state = initialState, action = {}) {
  switch (action.type) {
    case Quick.SET_OPEN_BUTTON:
      return {...state, openButton: action.openButton};

    default:
      return state;
  }
}
