//import packages
import React, { useState, useEffect } from "react";
import axios from "axios";
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
import SearchBar from "./components/SearchBar";
import LogBoxModal from "./components/LogBoxModal";

// Cookies.set("user3", "adress", { expires: 7 });

// set the number of items per page
const itemsPerPage = 5;

const App = () => {
  console.log("Loading App");
  const [data, setData] = useState({ count: 0, offers: [] });
  const [pageNum, setpageNum] = useState(1);
  //Get the cookie value - set it into State user - 'undefined' if not existent
  const userCookie = Cookies.get("user");
  const [user, setUser] = useState(userCookie);
  const [showModal, setShowModal] = useState(false);

  //Fecth Data only at first load
  useEffect(() => {
    const fetchData = async () => {
      const pagination = `?skip=${pageNum - 1}&limit=${itemsPerPage}`;
      let response = await axios.get(
        "https://leboncoin-api.herokuapp.com/api/offer/with-count" + pagination
      );
      setData(response.data);
    };
    fetchData();
  }, [pageNum]);

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
          {data.count && <OneOffer data={data.offers} />}
        </Route>
        {/* # # # # # # # ROUTE FOR SIGN UP # # # # # # # # # # # #  */}
        <Route path="/signup">
          <SignUp loginOK={loginOK} />
        </Route>
        {/* # # # # # # # DEFAULT ROUTE : ALL OFFERS  # # # # # # # # # # # #  */}
        <Route path="/">
          <SearchBar />
          <Offers
            data={data}
            itemsPerPage={itemsPerPage}
            setpageNum={setpageNum}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
