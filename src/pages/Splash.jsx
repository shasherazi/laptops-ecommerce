import { Link } from "react-router-dom";
import styles from "../css/Splash.module.css";

function Splash() {
  return (
    <div className={styles.splash}>
      <div className={styles.blur}>
        <h1 className={styles.heading}>laptop channel</h1>

        <div className={styles.loginLinks}>
          <Link to="/login" className={styles.login}>
            login
          </Link>
          <Link to="/signup" className={styles.signup}>
            signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Splash;
