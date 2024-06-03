import styles from "./App.scss";
import SignIn from "sign-in";
import SignUp from "sign-up";

const App: React.FC = () => {
  return (
    <div className={styles["app"]}>
      <SignIn />
      <SignUp />
      MAIN
    </div>
  );
};

export default App;
