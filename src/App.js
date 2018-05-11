// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types'

// Styles
import './App.css';

// Components
import Inicio from './components/Landing Page/Inicio';
import Content from './components/Global/Content';
import Nvar from './components/Nvar/Nvar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authenticated: localStorage.getItem('token')
    }
  }

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    const { children } = this.props

    if (!this.state.authenticated) {
      return (
        <div className="App Seccion">
          <div className="container">
            <div className="p-5">
              <Inicio/>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App Seccion">
          <Nvar/>
          <div className="container">
            <div className="p-5"> </div>
              <Content body={children}/>
          </div>
        </div>
      )

    }
  }
}

export default App;
