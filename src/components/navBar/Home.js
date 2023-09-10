import classes from "../navBar/Home.module.css";
//import { useState } from "react";
import NavBar from "./NavBar";

const Home = () => {
  //const [viewProfile, setViewProfile] = useState();

  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <div>
      <NavBar />
      <h1 className={classes.h1}>Welcome to Stranger's Things!</h1>
      <h3 className={classes.p}>Logged in as</h3>
      <button onSubmit={submitHandler} className={classes.btn}>
        VIEW PROFILE
      </button>
    </div>
  );
};

export default Home;
