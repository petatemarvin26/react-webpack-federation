import {configureStore} from '@reduxjs/toolkit';
import {createReduxHistoryContext} from 'redux-first-history';
import {createBrowserHistory} from 'history';

import reducers from './reducers';
const {createReduxHistory, routerMiddleware, routerReducer} =
  createReduxHistoryContext({history: createBrowserHistory()});

const store = configureStore({
  reducer: reducers(routerReducer),
  middleware: (getDefMiddleware) => getDefMiddleware().concat(routerMiddleware)
});

// const store = async () => {
//   return configureStore({
//     reducer: await reducers(null)
//   });
// };

export const history = createReduxHistory(store);
export default store;
