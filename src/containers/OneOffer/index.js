import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link, useParams } from "react-router-dom";
import "./OneOffer.css";
import "../../App.css";

const OneOffer = () => {
  const obj = useParams();
  const id = obj.id;

  const [dataoffer, setDataoffer] = useState({ _id: null });

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        "https://leboncoin-api.herokuapp.com/api/offer/" + id
      );
      setDataoffer(response.data);
    };
    fetchData();
  }, []);

  if (dataoffer._id === null) {
    return <div>loading</div>;
  } else {
    return (
      <div className="oneoffer">
        <Link to="/offers" className="back">
          Back to offers
        </Link>

        <div className="descriptionblock">
          <div>
            <img src={dataoffer.pictures[0]} alt="pic" />
          </div>
          <ul>
            <span>{dataoffer.title}</span>
            <br />
            <span>{dataoffer.price} €</span>
            <br />
            <span>
              {dataoffer.created.slice(0, 10)} à{" "}
              {dataoffer.created.slice(11, 19)}
            </span>
          </ul>
          <h2>Description</h2>
          <p>{dataoffer.description}</p>
        </div>
      </div>
    );
  }
};
export default OneOffer;
