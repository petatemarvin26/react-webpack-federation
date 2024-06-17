import {ActionType, Dispatch, Reducer, State} from 'ducks/types';

type SignUp = {
  ready: boolean;
};

type SignUpType = 'SET-READY';
type SignUpState = State<SignUp>;
type SignUpActionType = ActionType<SignUpType>;
type SignUpDispatch = Dispatch<SignUpActionType>;
type SignUpReducer = Reducer<SignUpState, SignUpActionType>;

const SET_SIGNUP: SignUpType = 'SET-READY';

export {SET_SIGNUP};
export type {SignUpState, SignUpActionType, SignUpDispatch, SignUpReducer};
