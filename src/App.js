import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Offers from "./containers/Offers";
import OneOffer from "./containers/OneOffer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const itemsPerPage = 2;

const App = () => {
  console.log("Loading App");
  const [data, setData] = useState({ count: 0, offers: [] });
  const [pageNum, setpageNum] = useState(1);

  const fetchData = async () => {
    const pagination = `?skip=${pageNum - 1}&limit=${itemsPerPage}`;
    let response = await axios.get(
      "https://leboncoin-api.herokuapp.com/api/offer/with-count" + pagination
    );
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [pageNum]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/oneoffer/:offerNum">
          {data.count && <OneOffer data={data.offers} />}
        </Route>
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
