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
  //default proprs s'applique quqnd les proprietes sont undefined
  // OffersItem.defaultProps = {
  //   title: "Sans nom",
  //   picture:
  //     "https://www.baldivisvet.com.au/wp-content/uploads/2017/10/hd-cute-cat-wallpaper.jpg"
  // };
};
export default OffersItem;
