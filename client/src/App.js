import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './cpmponents/NavBar';
import Garments from './cpmponents/Garments';
import AddGarmentModal from './cpmponents/AddGarmentModal';
import './App.css';

import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <AddGarmentModal />
        <Garments />
      </div>
    </Provider>
    
  );
}

export default App;
