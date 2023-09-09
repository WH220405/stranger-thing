import { registerUser } from "../../utils/data";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import classes from "./Signup.module.css";
import NavBar from "../navBar/NavBar";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handlerSubmit = async e => {
    e.preventDefault();
    const response = await registerUser(username, password);
    console.log(response);
    navigate("/");
  };

  useEffect(() => {
    registerUser();
  }, []);

  return (
    <>
      <NavBar />
      <h1 className={classes.h1}>Sign Up</h1>
      <form className={classes.form} onSubmit={handlerSubmit}>
        <label>
          Username:
          <input
            className={classes.username}
            type="text"
            id="usename"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Password:
          <input
            className={classes.password}
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button className={classes.btn}>Sign Up</button>
        <p className={"mt-3"}>
          Already a member?
          <Link to="/">Log In</Link>
        </p>
      </form>
    </>
  );
};

export default Signup;
