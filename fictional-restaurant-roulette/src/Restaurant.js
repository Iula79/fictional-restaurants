import React from 'react';

function Restaurant(props) {

    return (
        <div>
            <div class="restaurant">
                <div class="main">
                    <img class="image" src={`${props.restaurant.image}`} alt="" />
                    <div class="info">
                        <h3>{props.restaurant.name}</h3>
                        <div class="meta"><span class="media">{props.restaurant.media}</span></div>
                        <div class="description">
                            <p>{props.restaurant.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Restaurant;