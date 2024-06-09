import {configureStore} from '@reduxjs/toolkit';
import reducers from './reducers';

const store = configureStore({
  reducer: reducers(null)
});

// const store = async () => {
//   return configureStore({
//     reducer: await reducers(null)
//   });
// };

export default store;
