// #region Local
export const WEBSERVER = '/webserver.json';
export const WEBSERVER_PROD = `/webserver.prod.json`;
// #endregion

const version = {
  api: 'api',
  v1: 'v1',
};

const services = {
  USERS: 'users',
};

export const RestAPI = {
  users: {
    getData: [version.api, services.USERS].join('/'),
  },

  tasks: {
    getList: [version.api, services.USERS].join('/'),
    create: [version.api, services.USERS].join('/'),
    update: [version.api, services.USERS].join('/'),
    delete: [version.api, services.USERS].join('/'),
  },
};
