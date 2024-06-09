import {DucksProps, connector} from 'hoc';
import styles from './App.scss';

type Props = {} & DucksProps;

const App: React.FC<Props> = ({signIn}) => {
  console.log(signIn, '<- SIGN-IN REDUCER');

  return <div className={styles['app']}>SIGN IN</div>;
};

export default connector(App);
