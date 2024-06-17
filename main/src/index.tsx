import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';

import store, {history} from 'ducks';

import Navigator from 'navigator';

const rootEl = document.getElementById('root') as HTMLDivElement;
const container = createRoot(rootEl);

container.render(
  <Provider store={store}>
    <Navigator history={history} />
  </Provider>
);
