import {combineReducers} from '@reduxjs/toolkit';

import signIn from 'auth/reducers';

import app from './app';

// const asyncStore = async () => ({
//   signIn: (await import('sign-in/reducers')) as any
//   // signUp: await import('sign-up/reducers')
// });

// const reducers = async (router: any) => {
//   return combineReducers({
//     app,
//     ...(await asyncStore())
//   });
// };

const reducers = (router: any) => {
  return combineReducers({
    app,
    signIn: signIn()
  });
};

export default reducers;
