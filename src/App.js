import React  from "react";
import logo from './logo.svg';
import './App.css';
import Chat from './Chat';
import Navi from './Navbar';
import User from './User';

function App() {
  return (
    <div className="App">
      <Navi />
      <User />
      <Chat />
    </div>
  );
}

export default App;
