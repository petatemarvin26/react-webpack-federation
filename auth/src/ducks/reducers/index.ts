import {Reducer} from '@reduxjs/toolkit';
import {combineReducers, compose} from '@reduxjs/toolkit';

import app from './app';
import auth from './auth';

const reducers = combineReducers({
  auth
});

const rootReducers = (router: Reducer) =>
  combineReducers({
    app,
    router,
    signIn: reducers
  });

export {rootReducers};
export default reducers;
