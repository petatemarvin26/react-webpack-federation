import {AuthDispatch, SET_AUTH} from './types';

const authenticated: AuthDispatch = (payload) => ({
  type: SET_AUTH,
  payload
});

export {authenticated};
