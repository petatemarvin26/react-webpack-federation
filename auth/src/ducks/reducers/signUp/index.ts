import {SignUpReducer, SignUpState, SET_SIGNUP} from './types';

const authInitState: SignUpState = {
  data: {ready: false}
};

const auth: SignUpReducer = (state = authInitState, action) => {
  switch (action.type) {
    case SET_SIGNUP:
      const ready = action.payload;
      return {...state, data: {ready}};

    default:
      return state;
  }
};

export default auth;
