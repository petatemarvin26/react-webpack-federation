import {connector} from 'hoc';

import styles from './styles.scss';
import {Props} from './types';

const SignIn: React.FC<Props> = ({navigate}) => {
  return (
    <div className={styles['signin-pane']}>
      SIGN-IN
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
export default connector(SignIn);
