import {isEqual} from 'lodash';

import {User} from '../../constants/actionType';

export const setUserData = (data) => (dispatch, getState) => {
  const {userState} = getState();

  if (!isEqual(userState, data)) {
    dispatch({type: User.SET_USER, data});
  }
};
