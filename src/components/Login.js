import NavBar from "./navBar/NavBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/data";
import { Link } from "react-router-dom";
import Signup from "./Profile/Signup";
import classes from "./Login.module.css";

const LoginForm = () => {
  //const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlerSubmit = async e => {
    e.preventDefault();
    const response = await login(username, password);
    localStorage.setItem("token", response.data.token);
    console.log(response);
    navigate("/posts");
  };

  useEffect(() => {
    login();
  }, []);

  return (
    <>
      <NavBar />
      <h1 className="text-center mt-5">Log In</h1>
      <form className={classes.container} onSubmit={handlerSubmit}>
        <div className={classes.control}>
          <label>Username: </label>
          <input
            className={classes.username}
            type="text"
            id="username"
            value={username}
            placeholder="username"
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            className={classes.password}
            type="password"
            id="password"
            value={password}
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button className={classes.btn} type="submit">
          LOGIN
        </button>
        <p className={"mt-3"}>
          Don't have an account?
          <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </>
  );
};

export default LoginForm;

// // // Login In
// // // Username
// // // Password
// // //LON IN  (button)
// // // Don't have an account?Sign Up
