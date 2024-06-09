import {
  Dispatch as ReduxDispatch,
  Action as ReduxAction
} from '@reduxjs/toolkit';
import {AppState} from 'ducks/reducers/app/types';

type GlobalState = {
  app: AppState;
  signIn: any;
};

type MapState = {
  (state: GlobalState): GlobalState;
};

type MapDisaptch = {
  (dispatch: ReduxDispatch): {
    dispatch: (action: ReduxAction) => ReduxAction;
  };
};

export type {MapState, MapDisaptch};
