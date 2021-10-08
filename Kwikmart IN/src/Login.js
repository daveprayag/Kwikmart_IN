/* eslint-disable jsx-a11y/alt-text */
//We used Firebase and imported data into the data layer and not in the local storage

import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth, firebase } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //successful cases
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it successfully creates a new user with email and password
        if (auth) {
          history.push("/"); // "/"" denotes our homepage
        }
      })
      .catch((error) => alert(error.message));
  };

  const SignInwithFirebase = () => {
    var google_provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(google_provider)
      .then((re, auth) => {
        //successful cases
        console.log(re);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Logo%2FLogo1.png?alt=media&token=82c59dda-fb91-4b20-8a17-b758ae5b8465" // We will upload files into the database of firebase.
        />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the Kwikmart, IN Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <div className="signUp">
          <button onClick={register} className="login_registerButton">
            Sign Up
          </button>

          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
            </div>
            <p className="btn-text" onClick={SignInwithFirebase}>
              Sign In with Google
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
