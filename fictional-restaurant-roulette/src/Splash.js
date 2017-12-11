import React, { Component } from 'react';
import Restaurant from'./Restaurant';

class Splash extends Component {

    constructor(props) {
        super(props);
        this.state = { restaurant: {}, apiDataLoaded:false };
    }

    componentDidMount() {
        fetch('http://fictional-restaurants.herokuapp.com/api/restaurants/random')
            .then((result) => {
                return result.json()
            })
            .then(result => {
                console.log(result.data)
                this.setState({ restaurant: result.data.restaurant,
                apiDataLoaded:true })
            });
    }

    render() {
        let restaurant = this.state.restaurant
        return (
            <Restaurant restaurant={restaurant}/>
        )
    }
}
export default Splash;