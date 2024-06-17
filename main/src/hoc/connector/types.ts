import {
  Dispatch as ReduxDispatch,
  Action as ReduxAction
} from '@reduxjs/toolkit';
import {AppState} from 'ducks/reducers/app/types';

type GlobalState = {
  app: AppState;
  signIn: any;
  report: any;
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
