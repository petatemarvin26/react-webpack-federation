import {ActionType, Dispatch, Reducer, State} from 'ducks/types';

type Auth = {
  auth: boolean;
};

type AuthType = 'SET-READY';
type AuthState = State<Auth>;
type AuthActionType = ActionType<AuthType>;
type AuthDispatch = Dispatch<AuthActionType>;
type AuthReducer = Reducer<AuthState, AuthActionType>;

const SET_AUTH: AuthType = 'SET-READY';

export {SET_AUTH};
export type {AuthState, AuthActionType, AuthDispatch, AuthReducer};
