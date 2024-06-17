import {SignUpDispatch, SET_SIGNUP} from './types';

const authenticated: SignUpDispatch = (payload) => ({
  type: SET_SIGNUP,
  payload
});

export {authenticated};
