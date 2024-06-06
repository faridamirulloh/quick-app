import api from './apiContext';
import {RestAPI} from '../constants/routeAPI';

export const getMessagesListAPI = async () => {
  const response = await api.get([RestAPI.messages.getMessages, '?page=1&per_page=1'].join(''));
  if (!response) throw response;
  return response.data;
};

export const getChatsListAPI = async (id) => {
  const response = await api.get([RestAPI.messages.getChats, id].join('/'));
  if (!response) throw response;
  return response.data;
};

export const sendChatAPI = async (data) => {
  const response = await api.post(RestAPI.messages.sendChat, data);
  if (!response) throw response;
  return response.data;
};

export const editChatAPI = async (data) => {
  const response = await api.put([RestAPI.messages.update, data.id].join('/'), data);
  if (!response) throw response;
  return response.data;
};

export const deleteChatAPI = async (id) => {
  const response = await api.delete([RestAPI.messages.delete, id].join('/'));
  if (!response) throw response;
  return response.data;
};
