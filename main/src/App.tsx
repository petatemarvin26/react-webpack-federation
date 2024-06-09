import SignIn from 'sign-in';
import SignUp from 'sign-up';

import {connector, DucksProps} from 'hoc';

import styles from './App.scss';

type Props = {} & DucksProps;

const App: React.FC<Props> = ({app}) => {
  console.log(app, '<- MAIN REDUCER');
  return (
    <div className={styles['app']}>
      <SignIn />
      <SignUp />
      MAIN
    </div>
  );
};

export default connector(App);
