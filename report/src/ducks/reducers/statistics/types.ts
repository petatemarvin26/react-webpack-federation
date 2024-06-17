import {ActionType, Dispatch, Reducer, State} from 'ducks/types';

type Stats = {
  stats: boolean;
};

type StatsType = 'SET-READY';
type StatsState = State<Stats>;
type StatsActionType = ActionType<StatsType>;
type StatsDispatch = Dispatch<StatsActionType>;
type StatsReducer = Reducer<StatsState, StatsActionType>;

const SET_STATS: StatsType = 'SET-READY';

export {SET_STATS};
export type {StatsState, StatsActionType, StatsDispatch, StatsReducer};
