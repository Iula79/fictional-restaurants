import React from 'react';


function RestaurantSelector(props){

    return (
        <div>
            <select name="" id="">
            <option value="A">{props.values[0]}</option>
            <option value="B">{props.values[1]}</option>
            <option value="C">{props.values[2]}</option>
            </select>
        </div>

    )
}

export default RestaurantSelector