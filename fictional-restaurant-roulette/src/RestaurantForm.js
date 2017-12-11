import React, {Component} from 'react';
import RestaurantSelector from './RestaurantSelector'
import RestaurantEditor from './RestaurantEditor'

class RestaurantForm extends Component{
    state = {
        restaurants:{}
    }
    selectedRestaurantById(id){
        //callback because we do not want to change the state directly
        this.setState((prevState, props)=>{
            return {
                selectedRestaurant:this.props.restaurants.find( restaurant=>{
                return restaurant.id ==id;
                })
            }
        })

    }
    render(){
    return (
        <div id="RestaurantForm">
        <RestaurantSelector values={['option1','option2', 'option3']}/>
        <RestaurantEditor />
        </div>
    )}
}

export default RestaurantForm