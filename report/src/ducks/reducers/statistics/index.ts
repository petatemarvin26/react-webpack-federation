import {StatsReducer, StatsState, SET_STATS} from './types';

const authInitState: StatsState = {
  data: {stats: false}
};

const stats: StatsReducer = (state = authInitState, action) => {
  switch (action.type) {
    case SET_STATS:
      const stats = action.payload;
      return {...state, data: {stats}};

    default:
      return state;
  }
};

export default stats;
