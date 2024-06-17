import {ReportDispatch, SET_REPORT} from './types';

const authenticated: ReportDispatch = (payload) => ({
  type: SET_REPORT,
  payload
});

export {authenticated};
