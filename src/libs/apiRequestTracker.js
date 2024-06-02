/**
 * A Map to track requests with their corresponding sources.
 * @type {Map<string, CancelTokenSource>}
 * @usage
 * ```
 * requestTracker.forEach((source, url) => {
 *   source.cancel('Component unmounted');
 *   requestTracker.delete(url); // Remove cancelled request from the tracker
 * });
 * ```
 */
const requestTracker = new Map();

// Function to  error observer
const setRequestTracker = (url, source) => requestTracker.set(url, source);

const deleteRequestTracker = (url) => requestTracker.delete(getPathName(url));

const clearRequestTracker = () => requestTracker.clear();

/**
 * Cancels requests associated with specified URLs in the requestTracker.
 * @param {string[]} [urls=[]] - An array of URLs representing requests to cancel.
 */
const cancelRequestTracker = (urls = [], cancelMessage = 'Component unmounted') => {
  if (urls.some((e) => requestTracker.has(e)))
    requestTracker.forEach((source, url) => {
      if (urls.some((_url) => _url === url)) {
        source.cancel(cancelMessage);
        requestTracker.delete(url); // Remove cancelled request from the tracker
      }
    });
};

const cancelAllRequestTracker = (cancelMessage = 'Component unmounted') => {
  requestTracker.forEach((source, url) => {
    source.cancel(cancelMessage);
    requestTracker.delete(url); // Remove cancelled request from the tracker
  });
};

const apiRequestTracker = {
  set: setRequestTracker,
  delete: deleteRequestTracker,
  clear: clearRequestTracker,
  cancelRequest: cancelRequestTracker,
  cancelAllRequest: cancelAllRequestTracker,
};

export default apiRequestTracker;

const getPathName = (url) => {
  const path = url.split('?');

  if (path.length) return path[0];

  return url;
};
