import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Splash from './Splash.js';
import RestaurantForm from './RestaurantForm'


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <RestaurantForm />
        <Splash />
      </div>
    );
  }
}

export default App;
