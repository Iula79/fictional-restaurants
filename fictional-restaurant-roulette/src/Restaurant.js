import React from 'react';

function Restaurant(props) {

    return (
        <div>
            <div className="restaurant">
                <div className="main">
                    <img className="image" src={`${props.restaurant.image}`} alt="" />
                    <div className="info">
                        <h3>{props.restaurant.name}</h3>
                        <div className="meta"><span className="media">{props.restaurant.media}</span></div>
                        <div className="description">
                            <p>{props.restaurant.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Restaurant;