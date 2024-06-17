import {GraphDispatch, SET_GRAPH} from './types';

const authenticated: GraphDispatch = (payload) => ({
  type: SET_GRAPH,
  payload
});

export {authenticated};
