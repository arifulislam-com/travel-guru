import React from 'react';
import "./Hotel.css";

const Hotel = (props) => {
    const{name, img, price, details} = props.hotel
    return (
        <div style={{display: "flex",margin: "50px"}}>
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4>{name}</h4>
                <p>{details}</p>
                <h5>$ {price}</h5>
            </div>
            
        </div>
    );
};

export default Hotel;