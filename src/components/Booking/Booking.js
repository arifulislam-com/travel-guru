import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CategoryContext } from '../../App';
import fakeData from '../../fakeData/fakeData';
import './Booking.css';

const Booking = () => {
    //const [cart, setCart] = useContext(CategoryContext);
    //const [cart, setCart] = handleStartBooking;
    const {id} = useParams();
    const data = fakeData;
    const selectedItem = data.find(item => item.id == id);
    // const setCartFunction =(input) => {
    //     const cartInfo = {...cart};
    //     cartInfo.cartt = input;
    //     setUser(cartInfo);
    // };
    return (
        <div className="booking">
            <div className="dreamPlaceArea">
                <h1>{selectedItem.name}</h1>
                <p>{selectedItem.details} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque, ad fugiat aperiam recusandae quas sit dolores sequi, perspiciatis sint veniam dolorem reprehenderit tempora neque perferendis animi in eveniet rem numquam qui ab consequuntur ducimus. Commodi architecto beatae molestias debitis! Neque at aspernatur sint illo soluta, provident quam, ad hic, beatae commodi dolore. Commodi a voluptatum sunt impedit nobis deleniti quod? Sunt necessitatibus iusto odio sapiente ratione beatae. Dolores, aperiam?</p>
            </div>
            <div className="durationArea">
                <p>Origin</p>
                <h6><b>Dhaka</b></h6>
                <br/>
                <p>Destination</p>
                <h6><b>{selectedItem.name}</b></h6>
                <br/>
                <div className="calendar">
                    <div className="calendarP">
                        <p>form</p>
                        <p>to</p>
                    </div>
                    <div className="calendarInput">
                        <input type="text" name="number" id="" placeholder="dd/mm/yyy"/>
                        <input type="text" name="number" id="" placeholder="dd/mm/yyy"/>
                    </div>
                </div>
                <br/>
                <Link to="/hotelBooking">
                <button /*onClick={() => setCartFunction(selectedItem.name)}*/>Start Booking</button>
                </Link>
            </div>
        </div>
    );
};

export default Booking;