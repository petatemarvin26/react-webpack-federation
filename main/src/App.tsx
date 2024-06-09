import SignIn from 'auth';

import {connector, DucksProps} from 'hoc';

import styles from './App.scss';

type Props = {} & DucksProps;

const App: React.FC<Props> = ({app}) => {
  console.log(app, '<- MAIN REDUCER');
  return (
    <div className={styles['app']}>
      <SignIn />
      MAIN
    </div>
  );
};

export default connector(App);
