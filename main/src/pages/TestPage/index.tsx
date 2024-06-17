import {connector} from 'hoc';
import styles from './styles.scss';
import {Props} from './types';

const TestPage: React.FC<Props> = ({navigate}) => {
  return (
    <div className={styles['test-pane']}>
      <button onClick={() => navigate('/sign-in')}>SIGN IN</button>
      <button onClick={() => navigate('/sign-up')}>SIGN UP</button>
      <button onClick={() => navigate('/statistics')}>STATISTICS</button>
      <button onClick={() => navigate('/graph')}>GRAPH</button>
    </div>
  );
};
export default connector(TestPage);
