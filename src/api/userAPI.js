import api from './apiContext';
import {RestAPI} from '../constants/routeAPI';

export const getUserDataAPI = async (id) => {
  const response = await api.get([RestAPI.users.getData, id].join('/'));
  if (!response) throw response;
  return response.data;
};
