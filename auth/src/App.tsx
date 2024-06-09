import {DucksProps, connector} from 'hoc';
import styles from './App.scss';

type Props = {} & DucksProps;

const App: React.FC<Props> = ({app, signIn}) => {
  console.log(signIn, '<- AUTH REDUCER');

  return <div className={styles['app']}>SIGN IN</div>;
};

export default connector(App);
