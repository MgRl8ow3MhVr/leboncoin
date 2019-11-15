import React from "react";
import { Link, useParams } from "react-router-dom";
import "./OneOffer.css";
import "../../App.css";

const OneOffer = props => {
  const obj = useParams();
  const theOffer = props.data[obj.offerNum];

  return (
    <div class="oneoffer">
      <Link to="/offers" className="back">
        Back to offers
      </Link>

      <div class="descriptionblock">
        <div>
          <img src={theOffer.pictures[0]} alt="pic" />
        </div>
        <ul>
          <span>{theOffer.title}</span>
          <br />
          <span>{theOffer.price} €</span>
          <br />
          <span>
            {theOffer.created.slice(0, 10)} à {theOffer.created.slice(11, 19)}
          </span>
        </ul>
        <h2>Description</h2>
        <p>{theOffer.description}</p>
      </div>
    </div>
  );
};
export default OneOffer;
