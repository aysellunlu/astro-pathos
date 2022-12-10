import './App.css';
import React from 'react';
import Header from './Layout/Header';
import Welcome from './Pages/Welcome';

function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome/>
    </div>
  );
}

export default App;
