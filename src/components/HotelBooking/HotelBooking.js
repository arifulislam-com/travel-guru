
import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import fakeHotel from '../../fakeData/fakeHotel';
import Hotel from '../Hotel/Hotel';
import './HotelBooking.css'

const HotelBooking = () => {
    const data = fakeHotel;
    console.log(data);
    const [cart, setCart] = useContext(CategoryContext);
    //const [cart, setCart] = contextData;
    return (
        <div className="hotelB">
            <div className="hotels">
            <p>252 stays Apr 13-17 3 guests</p>
            <h3>Stay In {cart.cartt}</h3>
            {
                data.map((hotel) => <Hotel hotel={hotel}></Hotel>)
            }
            </div>
            <div className="location">
                
            </div>
        </div>
    );
};

export default HotelBooking;