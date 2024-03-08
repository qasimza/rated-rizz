import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'


function App() {
  return (
    <div>
      <header className="App-header">
      <Home/>  
        <p className="underline text-primary-800 font-bold text-6xl">
          Welcome to Rated Rizz!
        </p>
        
      </header>
    </div>
  );
}

export default App;
