import {combineReducers, configureStore} from '@reduxjs/toolkit';
import reducers from './reducers';

const store = configureStore({
  reducer: combineReducers({
    signIn: reducers(null)
  })
});

export default store;
