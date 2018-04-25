import React, { Component } from 'react';
import './App.css';
import Inicio from './components/Landing Page/Inicio';
import Nvar from './components/Nvar/Nvar';
import Registro from './components/Registro/Registro';
import Login from './components/login/Login';

class App extends Component {
  render() {
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
  }
}

export default App;
