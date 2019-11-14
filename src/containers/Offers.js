import React from "react";
import { Link } from "react-router-dom";
import OffersItem from "../components/OffersItem";
import OneOffer from "./OneOffer";

const Offers = props => {
  const { data } = props;

  return (
    <div className="offers">
      {data.map((oneoffer, index) => {
        return (
          <Link key={index} to="/oneoffer/Offer1">
            <OffersItem {...oneoffer} />
          </Link>
        );
      })}
    </div>
  );
};
export default Offers;
