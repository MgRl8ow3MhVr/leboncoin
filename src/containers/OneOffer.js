import React from "react";
import { Link, useParams } from "react-router-dom";

const OneOffer = () => {
  const obj = useParams();
  return (
    <div class="oneoffer">
      <div>Here is the offer named {obj.offer}</div>
      <Link to="/offers">Back to offers</Link>
    </div>
  );
};
export default OneOffer;
