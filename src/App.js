import './App.css';
import Header from './components/Header/Header';
import Travel from './components/Travel/Travel';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './components/Booking/Booking';
import HotelBooking from './components/HotelBooking/HotelBooking';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const CategoryContext = createContext();

function App() {
  //const [signInUser, setSignInUser] = useState("Arif");
  const [cart, setCart] = useState({
    cartt:"",
    isLogin: false,
    name: "Arif",
    email: "ariful@",
  });
  return (
    <CategoryContext.Provider value={[cart, setCart]}>
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
            <Route path="/booking/:id">
              <Booking></Booking>
            </Route>
            <Route path="/hotelBooking">
              <HotelBooking></HotelBooking>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          <Route path="/">
            <Travel></Travel>
          </Route>
          </Switch>
      </Router>
    </div>
    </CategoryContext.Provider>
  );
}

export default App;
