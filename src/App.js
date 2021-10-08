import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

function App() {
  const [dispatch] = useStateValue();

  useEffect(() => {
    //this will only run once when the app component loads..

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER", //this fires off the event and shoot it into data layer and gets user information, as if the user is logged in or not at present.
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER", //if the user is/was logged in, when we reload the page it sets the user to whoever was logged in from firebase.
          user: null, //null shows that there
        });
      }
    });
  }, );

  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
