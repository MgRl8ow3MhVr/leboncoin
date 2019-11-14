import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Offers from "./containers/Offers";
import OneOffer from "./containers/OneOffer";
import Header from "./components/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  console.log("Loading App");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    let response = await axios.get(
      "https://leboncoin-api.herokuapp.com/api/offer/with-count"
    );
    setData(response.data.offers);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("here is the data", data);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/oneoffer/:offer">
          <OneOffer />
        </Route>
        <Route path="/">
          <Offers data={data} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
