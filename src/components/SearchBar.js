import React from "react";

const SearchBar = props => {
  return (
    <div className="ellipse">
      <form>
        <input
          placeholder="Que recherchez vous"
          type="text"
          name="email"
          // value={}
          // onChange={handleEmailChange}
        ></input>
        <input type="submit" value="Valider" />
      </form>
    </div>
  );
};
export default SearchBar;
