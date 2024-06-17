import {Reducer} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';

import signIn from './signIn';
import signUp from './signUp';

const reducers = combineReducers({
  signIn,
  signUp
});

const rootReducers = (router: Reducer) =>
  combineReducers({
    router,
    signIn: reducers
  });

type AuthState = ReturnType<typeof reducers>;

export {rootReducers, AuthState};
export default reducers;
