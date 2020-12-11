import React from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { useState } from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [cart, setCart] = useContext(CategoryContext);
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        name: "",
        email: "",
        password:"",
        confirmPassword:"",
        error: "",
    })
    const history = useHistory();
    const location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };

    const handleInputValue = (event) => {
        if (event.target.name === "name") {
            const userInfo = {...user};
            userInfo.name = event.target.value;
            setUser(userInfo);
        };
        if (event.target.name === "email") {
            const userInfo = {...user};
            userInfo.email = event.target.value;
            setUser(userInfo);
        };
        if (event.target.name === "password") {
            const userInfo = {...user};
            userInfo.password = event.target.value;
            setUser(userInfo);
        };
        if (event.target.name === "confirmPassword") {
            const userInfo = {...user};
            userInfo.confirmPassword = event.target.value;
            setUser(userInfo);
        };
    }
    const handleSubmitBatton = (event) =>{
        if (!newUser && user.password === user.confirmPassword && user.name) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const userInfo = {...user};
                console.log(userInfo);
                userInfo.error = "successfull";
                setUser(userInfo);
                const loginUserInfo = {...cart};
                loginUserInfo.isSignIn = true;
                setCart(loginUserInfo);
                history.replace(from);
            })
            .catch((error) => {
                const errorMessage = error.message;
                const userInfo = {...user};
                userInfo.error = errorMessage;
                setUser(userInfo);
            });
        }
        if (newUser && user.password && user.email) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((user) => {
                const userInfo = {...user};
                userInfo.error = "successfully login";
                setUser(userInfo);
                history.replace(from);
            })
            .catch((error) => {
                const errorMessage = error.message;
                const userInfo = {...user};
                userInfo.error = errorMessage;
                setUser(userInfo);
            });
        }
        if (!newUser && user.password !== user.confirmPassword){
            const userInfo = {...user};
            userInfo.error = "Password did't match.";
            setUser(userInfo);
        };
        if (newUser && !user.password){
            const userInfo = {...user};
            userInfo.error = "Please input correct email & password";
            setUser(userInfo);
        };
        event.preventDefault()
    };
    const useGoogleAccountToLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    return (
        <div className="login">
                {
                    !newUser ? <h1>Create an account</h1>:
                    <h1>Login</h1>
                }
                <div className="createAccountArea">
                    <form onSubmit={handleSubmitBatton}>
                        {!newUser && <input onBlur={handleInputValue} type="text" name="name" id="" placeholder="Name" required/>}
                        <br/>
                        <input onBlur={handleInputValue} type="email" name="email" id="" placeholder="Email" required/>
                        <br/>
                        <input onBlur={handleInputValue} type="password" name="password" id="" placeholder="Password" required/>
                        <br/>
                        {!newUser && <input onBlur={handleInputValue} type="password" name="confirmPassword" id="" placeholder="Confirm Password" required/>}
                        <br/>
                        {
                        !newUser ? <input className="inputBatton" type="submit" value="Create an account"/> :
                        <input className="inputBatton" type="submit" value="Login"/>
                        }
                    </form>
                    {
                    user.error == "successfull" || user.error == "successfully login" ? (
                        <p style={{color:"green"}}>{user.error}</p>
                      ) : (
                        <p style={{color:"red"}}>{user.error}</p>
                      )
                    }
                    {
                        !newUser ? <p>Already have an account? <button onClick={()=>setNewUser(!newUser)}><u>Login</u></button></p>:
                        <p>Don't have an account? <button onClick={()=>setNewUser(!newUser)}><u>Create an account</u></button></p>
                    }
                </div>
                <p>Or</p>
                <button onClick={useGoogleAccountToLogin} style={{border:"1px solid gray", width:"200px"}}>Continue with google</button>
        </div>
    );
};

export default Login;