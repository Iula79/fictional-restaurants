import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Splash from './Splash.js';
import RestaurantForm from './RestaurantForm'
import RestaurantEditor from './RestaurantEditor'
import RestaurantSelector from './RestaurantSelector'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          
        </p>
        <RestaurantForm />
        
        
        <Splash />
      </div>
    );
  }
}

export default App;
