import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Splash from './Splash.js';
import RestaurantForm from './RestaurantForm'


class App extends Component {
  state = {
    restaurants: [],
    apiDataLoaded: false
  }
  componentDidMount() {
    fetch('http://fictional-restaurants.herokuapp.com/api/restaurants')
      .then((result) => {
        return result.json()
      })
      .then(result => {
        console.log(result.data)
        this.setState({
          restaurants: result.data.restaurants,
          apiDataLoaded: true
        })
      });
  }

  render() {
    return (
      <div className="App">
      {
        this.state.apiDataLoaded?
      
        (<div>
          <RestaurantForm  restaurants={this.state.restaurants}/>
          
          </div>):
        (<p>Loading ...</p>  )
      }
        <Splash />
      </div>
    );
  }
}

export default App;
