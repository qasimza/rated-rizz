import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home'
function App() {
  return (
    <div className="">
      <header className="App-header">
        
        <p className="underline text-primary-800 font-bold text-6xl">
          Welcome to Rated Rizz!
        </p>
        <Home/>
      </header>
    </div>
  );
}

export default App;
