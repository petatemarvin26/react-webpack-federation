import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';

import store from 'ducks';

import App from 'App';

const rootEl = document.getElementById('root') as HTMLDivElement;
const container = createRoot(rootEl);

container.render(
  <Provider store={store}>
    <App />
  </Provider>
);
// store().then((store) => {
//   container.render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// });
