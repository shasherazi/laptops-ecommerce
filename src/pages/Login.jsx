import styles from "../css/Login.module.css";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

function Login() {
  return (
    <div className={styles.login}>
      <Link to="/" className={styles.backButton}>
        <IoChevronBack />
      </Link>
      <form className={styles.loginForm}>
        <input type="email" id="email" placeholder="Email" required />
        <input
          type="password"
          id="password"
          placeholder="Password"
          required
          minLength={6}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
