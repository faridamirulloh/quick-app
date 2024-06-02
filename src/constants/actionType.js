export const reducers = {
  APP: 'APP',
  USER: 'USER',
};

export const App = {
  SET_TEXT: [reducers.APP, 'SET_TEXT'].join('/'),
};

export const User = {
  SET_USER: [reducers.USER, 'SET_USER'].join('/'),
};
