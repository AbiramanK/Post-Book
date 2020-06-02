import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FilterShops,
  Shops,
  Products,
} from './screens';
import logo from './logo.svg';
import './App.css';
import AppBar from './components/Appbar/AppBar'
import { Login, Register } from './screens/Auth'
function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={Login}
          />
          <Route
            path="/register"
            component={Register}
          />
          <Route
            path="/home"
            component={Shops}
          />
          <Route path='/appbar' component={AppBar} />

        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
