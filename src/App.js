//import packages
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

//import pages called with routes
import Offers from "./containers/Offers";
import OneOffer from "./containers/OneOffer";
import SignUp from "./containers/SignUp";
import Publish from "./containers/Publish";
import DemoCarousel from "./containers/DemoCarousel";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import LogBoxModal from "./components/LogBoxModal";

const App = () => {
  console.log("Loading App");
  //API Address
  const apiAddress = "https://backendleboncoin.herokuapp.com";
  // const apiAddress = "http://localhost:4000";
  // const apiAddress = "https://leboncoin-api.herokuapp.com";

  console.log("API Address is ", apiAddress);

  //Get the cookie value - set it into State user - 'undefined' if not existent
  const userCookie = Cookies.get("user");
  const userToken = Cookies.get("token");
  const [user, setUser] = useState(userCookie);
  const [token, setToken] = useState(userToken);
  const [showModal, setShowModal] = useState(false);

  //Login actions to be passed in Header and Sign uP
  const loginOK = (username, token) => {
    setUser(username);
    setToken(token);
    Cookies.set("user", username);
    Cookies.set("token", token);
  };
  //Login actions to be passed in Header to UnLog

  const unLog = () => {
    Cookies.remove("user");
    Cookies.remove("token");
    setUser(null);
    setToken(null);
    alert("vous etes déconnecté");
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
          apiAddress={apiAddress}
        />
      )}
      {/* # # # # # # # API CHOICE # # # # # # # # # # # # 
      {showAPIModal && (
        <LogAPIModal
          unshowmodal={() => {
            setShowAPIModal(false);
          }}
          changeAPI={address => {
            setapiAddress(address);
          }}
        />
      )} */}

      {/* # # # # # # # HEADER # # # # # # # # # # # #  */}
      <Header
        user={user}
        showmodal={() => {
          setShowModal(true);
        }}
        // Disconnect actions
        unLog={unLog}
      />
      <main>
        <Switch>
          {/* # # # # # # # ROUTE FOR 1 Offer DISPLAY # # # # # # # # # # # #  */}
          <Route path="/oneoffer/:id">
            <OneOffer apiAddress={apiAddress} />
          </Route>
          {/* # # # # # # # ROUTE PUBLISH # # # # # # # # # # # #  */}
          <Route path="/publish">
            <Publish token={token} apiAddress={apiAddress} />
          </Route>
          {/* # # # # # # # ROUTE FOR SIGN UP # # # # # # # # # # # #  */}
          <Route path="/signup">
            <SignUp loginOK={loginOK} apiAddress={apiAddress} />
          </Route>
          {/* # # # # # # # ROUTE FOR TEST CARROUSSEL # # # # # # # # # # # #  */}

          <Route path="/carousel">
            <DemoCarousel />
          </Route>

          {/* # # # # # # # DEFAULT ROUTE : ALL OFFERS  # # # # # # # # # # # #  */}
          <Route path="/">
            <Offers apiAddress={apiAddress} />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
