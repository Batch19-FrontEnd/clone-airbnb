import React, { Component } from 'react';
import './App.css';
import Inicio from './components/Landing Page/Inicio';
import Nvar from './components/Nvar/Nvar';
import Registro from './components/Registro/Registro';
import Login from './components/login/Login';
import Propiedades from './components/Anfitrion/Propiedades/Propiedades'

class App extends Component {
  render() {
    return (
      <div className="App Seccion">
        {/*<Nvar />*/}
        <div className="container">
          <div className="p-5">
            <Inicio/>
          </div>
          <Propiedades/>
        </div>
      </div>
    );
  }
}

export default App;
