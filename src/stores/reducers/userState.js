import {User} from '../../constants/actionType';

const initialState = {
  id: 0,
  email: '',
  firstName: '',
  lastName: '',
  avatar: null,
};

export default function userState(state = initialState, action = {}) {
  switch (action.type) {
    case User.SET_USER:
      return {...state, ...action.data};

    default:
      return state;
  }
}
