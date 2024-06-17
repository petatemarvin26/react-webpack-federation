import {ActionType, Dispatch, Reducer, State} from 'ducks/types';

type Graph = {
  percent: number;
};

type GraphType = 'SET-PERCENT';
type GraphState = State<Graph>;
type GraphActionType = ActionType<GraphType>;
type GraphDispatch = Dispatch<GraphActionType>;
type GraphReducer = Reducer<GraphState, GraphActionType>;

const SET_GRAPH: GraphType = 'SET-PERCENT';

export {SET_GRAPH};
export type {GraphState, GraphActionType, GraphDispatch, GraphReducer};
