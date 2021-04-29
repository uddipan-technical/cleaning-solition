import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };


    const handleGoogleSignIn = () =>{
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            const user = result.user;
            setLoggedInUser(user);
            history.replace(from);

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
            console.log(errorCode, errorMessage, email, credential)
        });
            }
    return (
        <div className="container mt-5 ">
            <div className="text-center login-wrapper">
                <h3 className="p-5">Login With</h3>
                <button className="button-style mb-2" onClick={handleGoogleSignIn}>Google Login</button>
                <p>Don't have an account? <span className="font-color pointer">Create an account</span></p>
            </div>
        </div>
    );
};

export default Login;