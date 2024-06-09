import {AppDispatch, SET_READY} from './types';

const appReady: AppDispatch = (payload) => ({
  type: SET_READY,
  payload
});

export {appReady};
