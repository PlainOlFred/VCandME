import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from './cpmponents/NavBar'
import Garments from './cpmponents/Garments'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Garments />
    </div>
  );
}

export default App;
