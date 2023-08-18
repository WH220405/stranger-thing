import './App.css';
import NavBar from './components/navBar';
import Cards from './components/Cards';
import { useState } from 'react';
function App() {
  const [user,setUser]=useState("David")
  return (
    <div className="App">
      <NavBar/>
      home
      <h2>Welcome {user}</h2>
      <Cards/>
    </div>
  );
}

export default App;
