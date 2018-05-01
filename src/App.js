import React, { Component } from 'react';
import './App.css';
import Inicio from './components/Landing Page/Inicio';
import Nvar from './components/Nvar/Nvar';
import Registro from './components/Registro/Registro';
import Login from './components/login/Login';
import Profile from './components/Profile/Profile';

class App extends Component {
  static contextTypes = {
    authenticated: localStorage.getItem('token')
  }

  constructor(props){
    super(props);
    this.state = {
      authenticated: localStorage.getItem('token')
    }
  }
  render() {

    if (!this.state.authenticated) {
      return (

        <div className="App Seccion">
          <Nvar />
          <div className="container">
            <div className="p-5">
              <Inicio/>
            </div>
            
              <Registro/>
              <Login/>
              
          </div>
        </div>
      );
    } else {
      return (

        <div className="App Seccion">
          <Nvar />
          <div className="container">
            <div className="p-5">
            </div>
            
              <Profile/>
          </div>
          <Login/>
        </div>
      )
      
    }
  }
}

export default App;
