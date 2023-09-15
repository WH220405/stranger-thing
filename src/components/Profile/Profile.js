import NavBar from "../navBar/NavBar";
import classes from "./Profile.module.css";
import { useState } from "react";
function Profile() {
  const [username, sertUsername] = useState("");
  return (
    <div className="Profile">
      <NavBar />
      <h1 className={classes.h1}>{`Welcome ${username}`}</h1>
      <h4>messages to Me:</h4>
      
    </div>
  );
}

export default Profile;

// inside profile have ,
// message to me:
// message from me:
