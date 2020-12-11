import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import TravelPlace from '../TravelPlace/TravelPlace';
import './Travel.css';

const Travel = () => {
    const data = fakeData;
    const sliceData = fakeData.slice(0,1);
    const cartDefult = sliceData[0];
    const [cart, setCart] = useState(cartDefult);
    const handleTravel = (item) => setCart(item);
    // const handleTravel =(input) => {
    //     const cartInfo = {...cart};
    //     cartInfo.cartt = input;
    //     setUser(cartInfo);
    // };
    return (
        <div className="travel">
            <div className="container">
                <h1>{cart.name}</h1>
                <br/>
                <p>{cart.details} lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis aliquam aperiam porro molestias sequi fugiat qui ...</p>
                <br/>
                <br/>
                <Link to={`/booking/${cart.id}`}><button>Booking</button></Link>
            </div>
            <div className="TravelPlaceC">
                {
                    data.map(item =><TravelPlace handleTravel={handleTravel} item = {item} key = {item.id}></TravelPlace>)
                }
            </div>
        </div>
    );
};

export default Travel;