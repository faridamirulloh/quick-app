export const reducers = {
  QUICK: 'QUICK',
  USER: 'USER',
};

export const Quick = {
  SET_OPEN_BUTTON: [reducers.QUICK, 'SET_OPEN_BUTTON'].join('/'),
  SELECT_QUICK: [reducers.QUICK, 'SELECT_QUICK'].join('/'),
};

export const User = {
  SET_USER: [reducers.USER, 'SET_USER'].join('/'),
};
