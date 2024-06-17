declare module '*.scss';
declare module '*.css';

// @module-name AUTH
declare module 'auth/reducers';
declare module 'auth/pages/SignIn' {
  class SignIn extends React.PureComponent {}
  export default SignIn;
}
declare module 'auth/pages/SignUp' {
  class SignUp extends React.PureComponent {}
  export default SignUp;
}

// @module-name REPORT
declare module 'report/reducers';
declare module 'report/pages/Statistics' {
  class Statistics extends React.PureComponent {}
  export default Statistics;
}
declare module 'report/pages/Graph' {
  class Graph extends React.PureComponent {}
  export default Graph;
}
