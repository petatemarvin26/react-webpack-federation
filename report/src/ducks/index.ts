import {configureStore} from '@reduxjs/toolkit';
import {createReduxHistoryContext} from 'redux-first-history';
import {createBrowserHistory} from 'history';

import {rootReducers} from './reducers';

const {createReduxHistory, routerMiddleware, routerReducer} =
  createReduxHistoryContext({history: createBrowserHistory()});

const store = configureStore({
  reducer: rootReducers(routerReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware)
});

export const history = createReduxHistory(store);

export default store;
