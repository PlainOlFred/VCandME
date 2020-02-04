import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import NavBar from './components/NavBar';
import Garments from './components/Garments';
import Outfits from './components/Outfits';
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
      <Router>
        <div className="App">
        <NavBar />
        <Switch>
          <Route path='/closet'>
            <Container>
              <AddGarmentModal />
              <Garments />
            </Container>
          </Route>
          <Route path='/outfits'>
            <Container>
              <Outfits />
            </Container>
          </Route>
        </Switch>
         
      </div>

      </Router>
      
    </Provider>
    
    );
  }
  
}

export default App;
