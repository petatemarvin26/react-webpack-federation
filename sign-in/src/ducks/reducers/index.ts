import {combineReducers, compose} from '@reduxjs/toolkit';

import app from './app';
import auth from './auth';

const reducers = (router: any) => {
  return combineReducers({
    auth
  });
};

const rootReducers = combineReducers({
  app,
  signIn: reducers(null)
});

export {rootReducers};
export default reducers;
