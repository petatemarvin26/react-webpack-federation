import {HistoryRouter as Router} from 'redux-first-history/rr6';
import {Routes, Route} from 'react-router-dom';

import routeConfig from './config';
import {Props} from './types';

const Navigator: React.FC<Props> = ({history}) => {
  const renderRoute = routeConfig.map((route, k) => (
    <Route key={k} {...route} />
  ));

  return (
    <Router history={history}>
      <Routes>{renderRoute}</Routes>
    </Router>
  );
};

export default Navigator;
