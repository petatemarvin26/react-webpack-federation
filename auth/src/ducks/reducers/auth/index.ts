import {AuthReducer, AuthState, SET_AUTH} from './types';

const authInitState: AuthState = {
  data: {
    auth: false
  }
};

const auth: AuthReducer = (state = authInitState, action) => {
  switch (action.type) {
    case SET_AUTH:
      const auth = action.payload;
      return {...state, data: {auth}};

    default:
      return state;
  }
};

export default auth;
