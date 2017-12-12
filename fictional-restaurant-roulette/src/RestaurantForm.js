import React, {Component} from 'react';
import RestaurantSelector from './RestaurantSelector'
import RestaurantEditor from './RestaurantEditor'

class RestaurantForm extends Component{
    constructor(props) {
        super(props);
        this.selectRestaurantById = this.selectRestaurantById.bind(this)
    }

    state = {
        selectedRestaurant:{},
        
    }
    selectRestaurantById(id){
        //callback because we do not want to change the state directly
        this.setState((prevState, props)=>{
            return {
                selectedRestaurant:this.props.restaurants.find( restaurant=>{
                return restaurant.id ===id;
                }) || {}
            }
        })

    }
    render(){
    return (
        <div id="RestaurantForm">
        <RestaurantSelector selectRestaurantById={this.selectRestaurantById} restaurants={this.props.restaurants}/>
        <RestaurantEditor selectedRestaurant={this.state.selectedRestaurant}/>
        <button onClick={() => this.selectRestaurantById(1)} />
        <p>{this.state.selectedRestaurant.name}</p>
        </div>
    )}
}

export default RestaurantForm