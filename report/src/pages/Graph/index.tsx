import {connector} from 'hoc';

import styles from './styles.scss';
import {Props} from './types';

const Graph: React.FC<Props> = ({navigate}) => {
  return (
    <div className={styles['graph-pane']}>
      GRAPH
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
export default connector(Graph);
