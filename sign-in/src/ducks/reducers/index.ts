import {combineReducers, compose} from '@reduxjs/toolkit';
import auth from './auth';

const reducers = (router: any) => {
  return combineReducers({
    auth
  });
};

export default reducers;
