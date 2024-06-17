import {SignInDispatch, SET_SIGNIN} from './types';

const authenticated: SignInDispatch = (payload) => ({
  type: SET_SIGNIN,
  payload
});

export {authenticated};
