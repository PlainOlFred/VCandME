import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import NavBar from './components/NavBar';
import Garments from './components/Garments';
import AddGarmentModal from './components/AddGarmentModal';
import './App.css';

import store from './store';
import { Provider } from 'react-redux';

import { loadUser } from './actions/authActions'

class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Container>
          <AddGarmentModal />
          <Garments />
        </Container> 
      </div>
    </Provider>
    
    );
  }
  
}

export default App;
