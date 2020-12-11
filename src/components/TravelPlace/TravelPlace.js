import React from 'react';
import './TravelPlace.css';

const TravelPlace = (props) => {
    const handleTravel = props.handleTravel;
    const {img, name, id} = props.item;
    const style ={
        width: "250px",
        height: "400px",
    }
    const imgSet={
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        display: "flex",
    }
    return (
        <div style={style}>
                <div onClick={()=>handleTravel(props.item)} style={imgSet}>
                    <h1 className="placeName">{name}</h1>
                </div>
        </div>
    );
};

export default TravelPlace;