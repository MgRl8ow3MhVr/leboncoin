import React from "react";
import logo from "./images/logo.svg";
import search from "./images/search.svg";
import user from "./images/user.svg";

const Offers = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />
        <div>
          <div>+</div>
          {/* <span>+</span> */}
          <span>Deposer une annonce</span>
        </div>
        <img src={search} alt="search" height="20px" />
        <div>rechercher</div>

        <div>
          <img src={user} alt="user" height="28px" />
          <div>se connecter</div>
        </div>
      </div>
    </>
  );
};
export default Offers;
