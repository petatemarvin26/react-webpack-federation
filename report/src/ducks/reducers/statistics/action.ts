import {StatsDispatch, SET_STATS} from './types';

const authenticated: StatsDispatch = (payload) => ({
  type: SET_STATS,
  payload
});

export {authenticated};
