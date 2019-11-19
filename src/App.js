//import packages
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

//import pages called with routes
import Offers from "./containers/Offers";
import OneOffer from "./containers/OneOffer";
import SignUp from "./containers/SignUp";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import LogBoxModal from "./components/LogBoxModal";

const App = () => {
  console.log("Loading App");
  //Get the cookie value - set it into State user - 'undefined' if not existent
  const userCookie = Cookies.get("user");
  const [user, setUser] = useState(userCookie);
  const [showModal, setShowModal] = useState(false);

  //Login actions to be passed in Header and Sign uP
  const loginOK = username => {
    setUser(username);
    Cookies.set("user", username);
  };

  return (
    <Router>
      {/* # # # # # # # LOGBOX # # # # # # # # # # # #  */}
      {showModal && (
        <LogBoxModal
          loginOK={loginOK}
          unshowmodal={() => {
            setShowModal(false);
          }}
        />
      )}

      {/* # # # # # # # HEADER # # # # # # # # # # # #  */}
      <Header
        user={user}
        showmodal={() => {
          setShowModal(true);
        }}
        // Disconnect actions
        unLog={() => {
          Cookies.remove("user");
          setUser(null);
          alert("vous etes déconnecté");
        }}
      />

      <Switch>
        {/* # # # # # # # ROUTE FOR 1 Offer DISPLAY # # # # # # # # # # # #  */}
        <Route path="/oneoffer/:id">
          <OneOffer />
        </Route>
        {/* # # # # # # # ROUTE FOR SIGN UP # # # # # # # # # # # #  */}
        <Route path="/signup">
          <SignUp loginOK={loginOK} />
        </Route>
        {/* # # # # # # # DEFAULT ROUTE : ALL OFFERS  # # # # # # # # # # # #  */}
        <Route path="/">
          <Offers />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
