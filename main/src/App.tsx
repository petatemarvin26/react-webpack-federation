import SignIn from 'sign-in';
import SignUp from 'sign-up';

import styles from './App.scss';

const App: React.FC = () => {
  return (
    <div className={styles['app']}>
      <SignIn />
      <SignUp />
      MAIN
    </div>
  );
};

export default App;
