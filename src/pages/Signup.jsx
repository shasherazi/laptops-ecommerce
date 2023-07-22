import { useState } from "react";
import styles from "../css/Signup.module.css";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

function Signup() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      setErrorMessage("Passwords do not match");
    } else {
      console.log("Signup successful!");
      setErrorMessage("");
    }
  };

  return (
    <div className={styles.signup}>
      <Link to="/" className={styles.backButton}>
        <IoChevronBack />
      </Link>
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        <input type="text" id="name" placeholder="Full name" required />
        <input type="email" id="email" placeholder="Email" required />
        <input
          type="password"
          id="password"
          placeholder="Password"
          required
          minLength={6}
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          type="password"
          id="passwordConfirm"
          placeholder="Confirm Password"
          required
          minLength={6}
          value={passwordConfirm}
          onChange={handlePasswordConfirmChange}
        />
        <button type="submit">Sign Up</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
}

export default Signup;
