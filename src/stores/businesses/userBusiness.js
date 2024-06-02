import camelcaseKeys from 'camelcase-keys';

import {getUserDataAPI} from '../../api/userAPI';
import {setUserData} from '../actions/userStateAction';

export const getUserData = () => async (dispatch) => {
  try {
    const response = await getUserDataAPI(1);

    if (response.data) {
      const data = camelcaseKeys(response.data);
      dispatch(setUserData(data));
    }
  } catch (error) {
    console.error({error});
  }
};
