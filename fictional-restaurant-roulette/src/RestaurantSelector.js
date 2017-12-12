import React from 'react';


function RestaurantSelector(props) {
    function handleChange(e){
        console.log(e.target.value)
    }
    return (
        
        <div>
            <select onChange={handleChange} name="" id="">
            <option value="new">Add new</option>
                {
                    props.restaurants.map(rest => (
                        <option value={rest.id} key={rest.id}>{rest.name}</option>
                    ))

                } 
                
            </select>
        </div>

    )
}

export default RestaurantSelector