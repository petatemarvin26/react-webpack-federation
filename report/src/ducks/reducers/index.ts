import {Reducer} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';

import app from './app';
import stats from './statistics';

const reducers = combineReducers({
  stats
});

const rootReducers = (router: Reducer) =>
  combineReducers({
    app,
    router,
    report: reducers
  });

export {rootReducers};
export default reducers;
