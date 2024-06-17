import {
  Dispatch as ReduxDispatch,
  Action as ReduxAction
} from '@reduxjs/toolkit';
import {AuthState} from 'ducks/reducers';

type GlobalState = {
  app: any;
  auth: AuthState;
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
