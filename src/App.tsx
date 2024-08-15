import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-link">Meu nome é Kauã e esse é meu hello horld</h1>
      </header>
    </div>
  );
}

export default App;
