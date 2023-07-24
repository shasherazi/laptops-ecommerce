import styles from "../css/Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { setEmail, setName } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";

function Signup() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    dispatch(setName({ name: event.target.value }));
  };

  const handleEmailChange = (event) => {
    dispatch(setEmail({ email: event.target.value }));
  };

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      setErrorMessage("Passwords do not match");
      return;
    } else {
      setErrorMessage("");
    }

    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: { name: name, email: email, password: password },
      }),
    })
      .then(async (response) => {
        if (response.ok) {
          navigate("/login");
          toast.success("Signup successful!");

          return response.json();
        }
        const data = await response.json();
        return await Promise.reject(data.status.message);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div className={styles.signup}>
      <Link to="/" className={styles.backButton}>
        <IoChevronBack />
      </Link>
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          placeholder="Full name"
          required
          onChange={handleNameChange}
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          required
          onChange={handleEmailChange}
        />
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
