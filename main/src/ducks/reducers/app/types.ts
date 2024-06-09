import {ActionType, Dispatch, Reducer, State} from 'ducks/types';

type App = {
  ready: string;
};

type AppType = 'SET-READY';
type AppState = State<App>;
type AppActionType = ActionType<AppType>;
type AppDispatch = Dispatch<AppActionType>;
type AppReducer = Reducer<AppState, AppActionType>;

const SET_READY: AppType = 'SET-READY';

export {SET_READY};
export type {AppState, AppActionType, AppDispatch, AppReducer};
