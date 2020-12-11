import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CategoryContext } from '../../App';


const PrivateRoute = ({children, ...rest}) =>{
    const [cart, setCart] = useContext(CategoryContext);

    return (
            <Route
            {...rest}
            render={({ location }) =>
            cart.isLogin ? (
                children
            ) : (
                <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
                />
            )
            }
        />
        );
}

export default PrivateRoute;