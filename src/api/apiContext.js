import axios, {isCancel} from 'axios';

import {URL_HOST} from '../constants/constant';
import apiRequestTracker from '../libs/apiRequestTracker';

const cacheBuster = () => Math.round(new Date().getTime() / 1000);

const instance = axios.create({
  baseURL: URL_HOST,
  timeout: 2700000, // set timeout to 45 minutes
});

// Request interceptor
instance.interceptors.request.use(
  (payload) => {
    // eslint-disable-next-line import/no-named-as-default-member
    const source = axios.CancelToken.source();
    payload.cancelToken = source.token;

    // Store cancellation token for each request
    apiRequestTracker.set(payload.url, source);

    // Add cache-busting parameter to the URL
    payload.params = payload.params || {};
    payload.params._cb = cacheBuster();

    // // Add custom header for request type (async or sync)
    const isAsyncRequest = payload.asyncRequest || false;
    payload.headers['X-Request-Type'] = isAsyncRequest ? 'async' : 'sync';

    console.info('request', `${payload.method.toUpperCase()} ${payload.url}`);

    // // Check if the request data is of type FormData
    if (payload.data instanceof FormData) {
      return payload;
    }

    return payload;
  },
  (error) => Promise.reject(error),
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    // Log the request
    console.group('[axios]');
    console.log('requestResponse', `${response.config.method.toUpperCase()} ${response.config.url}`);
    if (response.config.data) console.log('data', response.config.data);
    if (response.config.params) console.log('params', response.config.params);
    console.log('headers', response.config.headers);

    // Check if responseType is 'blob'
    if (response.config.responseType === 'blob') {
      return response; // No need to camelize blob responses
    }

    // Convert response data to camelCase
    // response.data = Camelize(response.data, {deep: true});

    // Log the successful response
    if (response.config.responseType) console.log('responseType', response.config.responseType);
    console.log('responseStatus', response.status);
    console.log('responseData', response.data);
    console.groupEnd();

    apiRequestTracker.delete(response.config.url);

    return response;
  },
  (error) => {
    // Log the error response
    if (isCancel(error)) console.log('Request canceled', error.message);
    else console.error('error', error);
    console.groupEnd();

    apiRequestTracker.delete(error.response?.config?.url);

    return Promise.reject(error);
  },
);

// Utility functions for HTTP methods
const axiosMethods = {
  get: (url, params, asyncRequest = true) => instance.get(url, {params, asyncRequest}),
  post: (url, data, params, asyncRequest = true) => instance.post(url, data, {params, asyncRequest}),
  put: (url, data, params, asyncRequest = true) => instance.put(url, data, {params, asyncRequest}),
  delete: (url, data, params, asyncRequest = true) => instance.delete(url, {data, params, asyncRequest}),
  postFormData: (url, formData, asyncRequest = true) =>
    instance.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      asyncRequest,
    }),
  getBlob: (url, params, asyncRequest = true) => instance.get(url, {params, responseType: 'blob', asyncRequest}),
  postBlob: (url, data, params, asyncRequest = true) =>
    instance.post(url, data, {params, responseType: 'blob', asyncRequest}),
};

export default axiosMethods;
