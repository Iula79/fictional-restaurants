import React from 'react';
import RestaurantSelector from './RestaurantSelector'
import RestaurantEditor from './RestaurantEditor'

function RestaurantForm(props){
    return (
        <div id="RestaurantForm">
        <RestaurantSelector values={['option1','option2', 'option3']}/>
        <RestaurantEditor />
        </div>
    )
}

export default RestaurantForm