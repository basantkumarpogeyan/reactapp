import React from 'react';
import './App.css';
import Basat from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
     <Basat/>
     <Welcome></Welcome>
    </div>
  );
}

export default App;
