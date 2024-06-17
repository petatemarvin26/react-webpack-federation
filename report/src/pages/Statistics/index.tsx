import {connector} from 'hoc';

import styles from './styles.scss';
import {Props} from './types';

// @ts-ignore
const Statistics: React.FC<Props> = ({navigate}) => {
  return (
    <div className={styles['stats-pane']}>
      STATISTICS
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        HOME
      </button>
    </div>
  );
};
export default connector(Statistics);
