import React from "react";
import logo from "./images/logo.svg";
import search from "./images/search.svg";
import userpic from "./images/userpic.svg";

const Header = props => {
  const { user, showmodal, unLog } = props;
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />
        <div>
          <div>+</div>
          <span>Deposer une annonce</span>
        </div>
        <img src={search} alt="search" height="20px" />
        <div>rechercher</div>

        <div
          onClick={() => {
            user ? unLog() : showmodal();
          }}
        >
          <img src={userpic} alt="user" height="28px" />
          {user && <div>{user}</div>}
          {user ? <div>se deconnecter</div> : <div>se connecter</div>}
        </div>
      </div>
    </>
  );
};
export default Header;
