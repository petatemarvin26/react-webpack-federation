import {GraphReducer, GraphState, SET_GRAPH} from './types';

const authInitState: GraphState = {
  data: {percent: 0}
};

const graph: GraphReducer = (state = authInitState, action) => {
  switch (action.type) {
    case SET_GRAPH:
      const percent = action.payload;
      return {...state, data: {percent}};

    default:
      return state;
  }
};

export default graph;
