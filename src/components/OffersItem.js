import React from "react";

const OffersItem = props => {
  return (
    <div className="offersitem">
      <picture>
        <img src={props.pictures[0]} alt="pic" />
      </picture>
      <nav>
        <span>{props.title}</span>
        <span>{props.price} €</span>
        <span>
          {props.created.slice(0, 10)} à {props.created.slice(11, 19)}
        </span>
      </nav>
    </div>
  );
};
export default OffersItem;
