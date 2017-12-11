import React, { Component } from 'react';

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
            .then(myblob => {
                console.log(myblob.data)
                this.setState({ restaurant: myblob.data.restaurant,
                apiDataLoaded:true })
            });

    }

    render() {
        let restaurant = this.state.restaurant
        return (
            <div>{}</div>
        )
    }
}
export default Splash;