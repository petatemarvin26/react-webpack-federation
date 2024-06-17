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
    index: true,
    path: '/sign-in',
    element: <SignIn />
  },
  {
    index: true,
    path: '/sign-up',
    element: <SignUp />
  },
  {
    index: true,
    path: '/statistics',
    element: <Statistics />
  },
  {
    index: true,
    path: '/graph',
    element: <Graph />
  }
];

export default routeConfig;
