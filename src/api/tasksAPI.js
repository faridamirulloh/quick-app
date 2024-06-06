import api from './apiContext';
import {RestAPI} from '../constants/routeAPI';

export const getTasksListAPI = async () => {
  const response = await api.get([RestAPI.tasks.getList, '?page=1&per_page=1'].join(''));
  if (!response) throw response;
  return response.data;
};

export const createTaskAPI = async (data) => {
  const response = await api.post(RestAPI.tasks.create, data);
  if (!response) throw response;
  return response.data;
};

export const updateTaskAPI = async (data) => {
  const response = await api.put([RestAPI.tasks.update, data.id].join('/'), data);
  if (!response) throw response;
  return response.data;
};

export const deleteTaskAPI = async (id) => {
  const response = await api.delete([RestAPI.tasks.delete, id].join('/'));
  if (!response) throw response;
  return response.data;
};
