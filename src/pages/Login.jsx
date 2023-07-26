import styles from "../css/Login.module.css";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { setEmail, setToken } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";

function Login() {
  const [password, setPassword] = useState("");
  const { email } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    dispatch(setEmail({ email: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: { email: email, password: password } }),
    })
      .then(async (response) => {
        if (response.ok) {
          toast.success("Login successful!");
          dispatch(setToken(response.headers.get("Authorization")));
          console.log(response.headers.get("Authorization"));
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
    <div className={styles.login}>
      <Link to="/" className={styles.backButton}>
        <IoChevronBack />
      </Link>
      <form className={styles.loginForm}>
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
          onChange={handlePasswordChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
