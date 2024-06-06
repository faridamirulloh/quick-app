// #region Local
export const WEBSERVER = '/webserver.json';
export const WEBSERVER_PROD = `/webserver.prod.json`;
// #endregion

const version = {
  api: 'api',
  v1: 'v1',
};

const services = {
  MESSAGES: 'users',
  TASKS: 'users',
};

export const RestAPI = {
  messages: {
    getMessages: [version.api, services.MESSAGES].join('/'),
    getChats: [version.api, services.MESSAGES].join('/'),
    sendChat: [version.api, services.MESSAGES].join('/'),
    update: [version.api, services.MESSAGES].join('/'),
    delete: [version.api, services.MESSAGES].join('/'),
  },

  tasks: {
    getList: [version.api, services.TASKS].join('/'),
    create: [version.api, services.TASKS].join('/'),
    update: [version.api, services.TASKS].join('/'),
    delete: [version.api, services.TASKS].join('/'),
  },
};
