import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import Login from './components/login/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <Test saludo={"Que ondita chavos!!"}/>
        <Login/>
        </p>
      </div>
    );
  }
}

export default App;
