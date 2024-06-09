import {
  Dispatch as ReduxDispatch,
  Action as ReduxAction
} from '@reduxjs/toolkit';
import {AuthState} from 'ducks/reducers/auth/types';

type GlobalState = {
  signIn: {
    auth: AuthState;
  };
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
