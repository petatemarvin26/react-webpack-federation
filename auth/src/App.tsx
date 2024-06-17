import {DucksProps, connector} from 'hoc';
import styles from './App.scss';

type Props = {} & DucksProps;

const App: React.FC<Props> = () => {
  return <div className={styles['app']}>AUTH</div>;
};

export default connector(App);
