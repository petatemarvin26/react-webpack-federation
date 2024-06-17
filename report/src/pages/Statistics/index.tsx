import {connector} from 'hoc';

import styles from './styles.scss';
import {Props} from './types';

const Statistics: React.FC<Props> = ({navigate}) => {
  return (
    <div className={styles['statistics-pane']}>
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
