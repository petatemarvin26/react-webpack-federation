import {RouteProps} from 'react-router-dom';

import SignIn from 'auth/pages/SignIn';
import SignUp from 'auth/pages/SignUp';

import Statistics from 'report/pages/Statistics';
import Graph from 'report/pages/Graph';

import {TestPage} from 'pages';

const routeConfig: Array<RouteProps> = [
  {
    index: true,
    path: '/',
    element: <TestPage />
  },
  {
    path: '/sign-in',
    element: <SignIn />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/statistics',
    element: <Statistics />
  },
  {
    path: '/graph',
    element: <Graph />
  }
];

export default routeConfig;
