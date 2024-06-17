import {connector} from 'hoc';

import styles from './styles.scss';
import {Props} from './types';

const SignUp: React.FC<Props> = ({navigate}) => {
  return (
    <div className={styles['signup-pane']}>
      SIGN-UP
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
export default connector(SignUp);
