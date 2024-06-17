import {
  Dispatch as ReduxDispatch,
  Action as ReduxAction
} from '@reduxjs/toolkit';
import {AppState} from 'ducks/reducers/app/types';
import {StatsState} from 'ducks/reducers/statistics/types';

type GlobalState = {
  app: AppState;
  report: {
    stats: StatsState;
  };
};

type MapState = {
  (state: GlobalState): GlobalState;
};

type MapDisaptch = {
  (dispatch: ReduxDispatch): {
    dispatch: (action: ReduxAction) => ReduxAction;
    navigate: (path: string, state?: any) => ReduxAction;
  };
};

export type {MapState, MapDisaptch};
