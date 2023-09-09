import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Cards from "./components/Cards/Cards";
import { useState } from "react";
function App() {
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <NavBar />

      <h2>Welcome {user}</h2>
      <Cards />
    </div>
  );
}

export default App;
