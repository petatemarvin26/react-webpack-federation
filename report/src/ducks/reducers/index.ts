import {Reducer} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';

import stats from './statistics';
import graph from './graph';

const reducers = combineReducers({
  stats,
  graph
});

const rootReducers = (router: Reducer) =>
  combineReducers({
    router,
    report: reducers
  });

export type ReportState = ReturnType<typeof reducers>;

export {rootReducers};
export default reducers;
