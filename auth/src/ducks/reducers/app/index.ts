import {AppReducer, AppState, SET_READY} from './types';

const appInitState: AppState = {
  data: {
    ready: 'not-ready'
  }
};

const app: AppReducer = (state = appInitState, action) => {
  switch (action.type) {
    case SET_READY:
      const ready = action.payload;
      return {...state, data: {ready}};

    default:
      return state;
  }
};

export default app;
