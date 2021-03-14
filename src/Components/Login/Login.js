
import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth"
import firebaseConfig from './firebase.Config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import {FaUser,FaLock,FaFacebook,FaGooglePlusG} from "react-icons/fa";
const Login = () => {
  const [loggedInUser , setLoggedInUser] = useContext(UserContext)
  const history = useHistory()
  const location = useLocation()
  const handleGoogleSignIn = () => {
    let { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0){
      firebase.initializeApp(firebaseConfig);
    }
     
      const provider = new firebase.auth.GoogleAuthProvider();
  
      firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      const {displayName, email} = result.user;
      const newUser = {name : displayName, email}
      setLoggedInUser(newUser);
      // storeAuthToken();
      history.replace(from)
      console.log(newUser);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  
  }


    return (
      <>
        <div className="login-box">
                <h1>login</h1>
            <div className="textbox">
                <FaUser className="icon"/>
                <input type="text" placeholder="User Name" name=""/>
            </div>
            <div className="textbox">
                <FaLock className="icon"/>
                <input type="text" placeholder="password" name=""/>
            </div>
            <input className="btn" type="button" name="" value="Submit"/>
            <div className="login-area">
            <span>All ready have an account?
                          <button>login</button>
                      </span>     
                    </div>
            <div className="g-f-area">
          <small>or</small>
          <div className="button-are">
              
              <button  onClick={handleGoogleSignIn}> <FaGooglePlusG className="login-icon"/>  continue with google</button>
          </div>
          <div className="button-are">	
        
              <button><FaFacebook className="login-icon"/>continue with facebook</button>
          </div>
      </div>
        </div>
         
      </>
    );
};

export default Login;