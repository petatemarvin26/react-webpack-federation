import {SignInReducer, SignInState, SET_SIGNIN} from './types';

const authInitState: SignInState = {
  data: {ready: false}
};

const auth: SignInReducer = (state = authInitState, action) => {
  switch (action.type) {
    case SET_SIGNIN:
      const ready = action.payload;
      return {...state, data: {ready}};

    default:
      return state;
  }
};

export default auth;
