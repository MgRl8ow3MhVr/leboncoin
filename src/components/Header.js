import React from "react";
import logo from "./images/logo.svg";
import userpic from "./images/userpic.svg";
import { Link } from "react-router-dom";
import { AddBox, SearchRounded } from "@material-ui/icons";

const Header = props => {
  const { user, showmodal, unLog } = props;
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div>
          {/* <div>+</div> */}
          <AddBox />
          <span>Deposer une annonce</span>
        </div>
        <SearchRounded />
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
