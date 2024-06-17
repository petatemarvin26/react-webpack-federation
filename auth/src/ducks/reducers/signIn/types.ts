import {ActionType, Dispatch, Reducer, State} from 'ducks/types';

type SignIn = {
  ready: boolean;
};

type SignInType = 'SET-READY';
type SignInState = State<SignIn>;
type SignInActionType = ActionType<SignInType>;
type SignInDispatch = Dispatch<SignInActionType>;
type SignInReducer = Reducer<SignInState, SignInActionType>;

const SET_SIGNIN: SignInType = 'SET-READY';

export {SET_SIGNIN};
export type {SignInState, SignInActionType, SignInDispatch, SignInReducer};
